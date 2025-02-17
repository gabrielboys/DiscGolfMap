import { buildSearchEngine } from "@coveo/headless";


export const headlessEngine = buildSearchEngine({
    configuration: {
        name: "disc-golf-map",
        organizationId: 'drhortonnonproduction1atyqt9ym', 
        accessToken: 'xxd29876c8-2cfb-4ec8-a45d-5f13dc767e7f', 
        search: {
			pipeline: process.env.REACT_APP_DRH_COVEO_PIPELINE_NAME,
		},
		analytics: {
			analyticsMode: "legacy",
			originLevel3: (document.referrer === "")
				? "self"
				: document.referrer,
		},
      }
  });
