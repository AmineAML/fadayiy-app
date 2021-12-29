import dotenv from 'dotenv';

dotenv.config()

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  devOptions: {
    port: 4000
  },
  dist: './dist',       // When running `astro build`, path to final static output
  public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: process.env.PUBLIC_FADAYIY_URL,           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  renderers: ['@astrojs/renderer-svelte'],
});
