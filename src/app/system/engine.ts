import {
  buildResultsPerPage,
  buildSearchEngine,
  loadFieldActions,
} from "@coveo/headless";

//Setup basic config for the search engine
const headlessEngine = buildSearchEngine({
  configuration: {
    name: "disc-golf-map",
    organizationId: "drhortonnonproduction1atyqt9ym",
    accessToken: "xxd29876c8-2cfb-4ec8-a45d-5f13dc767e7f",
    search: {
      pipeline: "Gabe Test Pipeline",
    },
  },
});

//Setup which fields we need
const fieldActions = loadFieldActions(headlessEngine);
headlessEngine.dispatch(
  fieldActions.registerFieldsToInclude([
    "coordinatesz32xlatitude",
    "coordinatesz32xlongitude",
    "date",
    "clickableuri",
    "permanentid",
  ])
);

buildResultsPerPage(headlessEngine, {
  initialState: { numberOfResults: 100 },
});

export { headlessEngine };
