// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	// Only enable the Cloudflare adapter in production to avoid Wrangler config
	// errors during `astro dev` where the build output doesn't exist yet.
	...(isProd
		? {
			adapter: cloudflare({
				platformProxy: {
					enabled: true,
				},
			}),
		}
		: {}),
});
