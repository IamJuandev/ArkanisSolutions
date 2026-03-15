# ── Stage 1: Build React frontend ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Production runtime ───────────────────────────────────────────────
FROM node:20-alpine

# Native deps needed by better-sqlite3
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Install only production dependencies (rebuilds native modules for this OS)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend and server source
COPY --from=builder /app/dist ./dist
COPY server/ ./server/

# Persistent volume for SQLite database
VOLUME ["/app/server"]

EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "server/index.js"]
