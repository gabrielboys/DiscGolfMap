"use client";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
  useApiIsLoaded,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
import { resultList } from "../controllers/controllers";
import React from "react";
import { headlessEngine } from "../system/engine";
import { AdvancedMarkerInfoWindow } from "./marker-info-window";
import { getMapRadius } from "../system/get-map-radius";
import { executeLocationQuery } from "../system/query";
import { Circle } from "../system/debug-circle";
//import AdvancedMarkerInfoWindow from "./marker-info-window";

export default function DiscGolfMap() {
  const apiIsLoaded = useApiIsLoaded();
  const theMap = useMap("test-map");
  const places = useMapsLibrary("places");
  const geometry = useMapsLibrary("geometry");

  // Coveo
  const [results, setResults] = useState(resultList.state);
  const [searchArea, setSearchArea] = useState({
    lat: 0,
    lng: 0,
    radius: 0,
  });

  useEffect(
    () => resultList.subscribe(() => setResults(resultList.state)),
    [resultList]
  );

  const handleMapChanged = () => {
    if (theMap === null) {
      return;
    }

    //let bounds = theMap?.getBounds();
    const center = theMap?.getCenter();
    //  const zoom = theMap?.getZoom();

    const lat = center?.lat();
    const lng = center?.lng();

    const radius = getMapRadius(theMap);

    setSearchArea({
      lat: lat,
      lng: lng,
      radius: radius,
    });

    executeLocationQuery(lat.toString(), lng.toString(), radius.toString());

    //This logic will update the location query using the map itself,
    // this would change if the size of the window changed which is not what we want.
    // Leaving here for now for future reference.
    // let newMapSettings: MapSettings = {
    // 	lat: lat,
    // 	lng: lng,
    // 	zoom: zoom,
    // 	radius: mapLocationController.mapManager.getMapRadius(theMap),
    // };

    // let radius = 0;

    // if (areaInfo !== null) {
    //   radius = areaInfo.areaInformation.Radius;
    // } else {
    //   radius = mapLocationController.mapManager.getMapRadius(theMap);
    // }

    // const newMapSettings: MapSettings = {
    //   lat: lat,
    //   lng: lng,
    //   zoom: zoom,
    //   radius: radius,
    // };

    // mapLocationController.updateMapSettings(newMapSettings, true);
  };

  const showRadiusOverlay = localStorage.getItem("showMapOverlay") != null;

  return (
    <>
      {!apiIsLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          Result Count: {results.results.length}
          <div>
            <Map
              id="test-map"
              style={{ height: "100vh", width: "100%" }}
              defaultCenter={{ lat: 44.305719, lng: -68.616381 }}
              defaultZoom={15}
              mapId="784793411afbb0ce"
              onDragend={() => handleMapChanged()}
              onZoomChanged={() => handleMapChanged()}
            >
              {results.results.map((result) => (
                <AdvancedMarkerInfoWindow
                  key={result.raw["permanentid"] as any}
                  result={result}
                />
              ))}

              {showRadiusOverlay && (
                <Circle
                  center={{
                    lat: searchArea.lat,
                    lng: searchArea.lng,
                  }}
                  radius={searchArea.radius}
                  fillColor="blue"
                />
              )}
            </Map>
          </div>
          {/* </APIProvider> */}
        </div>
      )}
    </>
  );
}
