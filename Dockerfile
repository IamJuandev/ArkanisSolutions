# ── Stage 1: Build React frontend ─────────────────────────────────────────────
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Production runtime ───────────────────────────────────────────────
FROM node:24-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend and server source. The server comes from the builder
# stage because npm run build generates server/emails.mjs from emails/, and
# that file is not in the repository.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

# The database lives outside the source tree so the volume never shadows the
# server code, which the previous /app/server mount did.
RUN mkdir -p /app/data
VOLUME ["/app/data"]

EXPOSE 3001

ENV NODE_ENV=production
ENV CONTACTS_DB_PATH=/app/data/contacts.db

CMD ["node", "server/index.js"]
