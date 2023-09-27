import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'http://localhost:3000',
  //    site: "http://wharf.anchorage.org.au:3000",
  //    site: "http://139.59.238.138:3000",
})
