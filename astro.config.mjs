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
                  label: "forgetzlint",
                  items: [
   {
              label: "Introduction",
              slug:"library/forgetzlint/introduction"
            },
            {
              label: "Installation",
              slug:"library/forgetzlint/installation"
            },
            {
              label: "Configuration",
              slug:"library/forgetzlint/configuration"
            },
            {
              label: "Usage",
              slug:"library/forgetzlint/usage"
            },
                  ]
                }
          ],
        },


        
      ],
    }),
  ],
});
