// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Forgetz Studio",

      customCss: ["./src/styles/custom.css"],
      favicon: "/src/assets/23.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "/",
        },
      ],

      sidebar: [
		    
		 
		 {
			label: "GetStarted",
			items:[
				{
					label:"start",
					slug:"start/welcome"
				},
			]
		 },


        {
          label: "Library",
          items: [
            {
              autogenerate: {
                directory: "library",
              },
            },
          ],
        },
      ],
    }),
  ],
});
