import { defineConfig } from 'astro/config';

// Fully static output, no integrations, no server.
export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
});
