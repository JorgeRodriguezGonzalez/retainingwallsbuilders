import * as ReactHelmetAsync from "react-helmet-async";

// react-helmet-async v2 is published as CommonJS for Node. When it is loaded
// from Node ESM (the SSR prerender), its named exports live under `default`.
// Vite exposes the named exports directly in the browser, so support both.
const helmetModule = ReactHelmetAsync as typeof ReactHelmetAsync & {
  default?: typeof ReactHelmetAsync;
};

const resolvedHelmetModule = helmetModule.default ?? helmetModule;

export const Helmet = resolvedHelmetModule.Helmet;
export const HelmetProvider = resolvedHelmetModule.HelmetProvider;

export type { HelmetServerState } from "react-helmet-async";
