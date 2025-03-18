import {
  loadQueryActions,
  loadSearchActions,
  loadSearchAnalyticsActions,
} from "@coveo/headless";
import { headlessEngine } from "./engine";

const { executeSearch } = loadSearchActions(headlessEngine);
const { logTriggerQuery } = loadSearchAnalyticsActions(headlessEngine);
const { updateQuery } = loadQueryActions(headlessEngine);

export function executeLocationQuery(lat: string, lng: string, radius: string) {
  const locationQuery =
    "($qf(function:'dist(@coordinatesz32xlatitude, @coordinatesz32xlongitude, " +
    lat +
    ", " +
    lng +
    ")', fieldName: 'distance')) (@distance<" +
    radius +
    ")";

  headlessEngine.dispatch(
    updateQuery({
      q: locationQuery,
      enableQuerySyntax: true,
    })
  );

  headlessEngine.dispatch(executeSearch(logTriggerQuery()));
}
