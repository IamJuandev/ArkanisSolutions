// Lives under server/ because the production image only ships dist/ and server/,
// and the server renders this same content for crawlers.
import landings from '../../server/content/landings.json';

export type ProofStatus = 'live' | 'upcoming';

export interface RouteStage {
  id: string;
  number: string;
  name: string;
  title: string;
  description: string;
  deliverables: string[];
  proof?: {
    name: string;
    text: string;
    status: ProofStatus;
    href?: string;
    linkLabel?: string;
  };
}

export interface RouteLandingContent {
  path: string;
  title: string;
  description: string;
  heading: string;
  lead: string;
  areaLine: string;
  stagesTitle: string;
  stages: RouteStage[];
  servicesTitle: string;
  services: { name: string; description: string }[];
  faq: { question: string; answer: string }[];
  cta: { heading: string; text: string; button: string };
}

// The JSON is shared with server/index.js, which renders the same content for
// crawlers; the cast narrows its widened string literals to the typed shape.
export const routeLandings = landings as RouteLandingContent[];

export const routeLandingByPath = Object.fromEntries(
  routeLandings.map((landing) => [landing.path, landing]),
) as Record<string, RouteLandingContent>;
