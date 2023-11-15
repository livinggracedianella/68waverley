import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'http://localhost:3000',
  //    site: "http://wharf.anchorage.org.au:3000",
  //    site: "http://139.59.238.138:3000",
  // We use 'server' rendering when deploying, but our `npm run test` command sets `STATIC_BUILD` so that we ensure all pages build without errors.
  output: process.env.STATIC_BUILD ? 'static' : 'server',
  adapter: cloudflare(),
})

function outputOptions() {
  // We use 'server' rendering when deploying, but our `npm run test` command sets `STATIC_BUILD` so that we ensure all pages build without errors.
  return process.env.STATIC_BUILD
    ? { output: 'static' }
    : { output: 'server', adapter: cloudflare() }
}
