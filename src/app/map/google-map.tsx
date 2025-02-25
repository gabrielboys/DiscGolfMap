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
//import AdvancedMarkerInfoWindow from "./marker-info-window";

export default function DiscGolfMap() {
  const apiIsLoaded = useApiIsLoaded();
  const theMap = useMap("test-map");
  const places = useMapsLibrary("places");
  const geometry = useMapsLibrary("geometry");

  //Maps
  // const [markerRef, marker] = useAdvancedMarkerRef();
  //const [infoWindowShown, setInfoWindowShown] = useState(false);

  //Coveo
  const [results, setResults] = useState(resultList.state);
  //const [currentResult, setCurrentResult] = useState(null);

  useEffect(
    () => resultList.subscribe(() => setResults(resultList.state)),
    [resultList]
  );

  //   useEffect(() => {
  //     console.log(map);
  //   }, [map]);

  //   const fitMapToToMarkers = useCallback(() => {
  //     if (!map) return;

  //     console.log(map);

  //     // const bounds = new google.maps.LatLngBounds();
  //     // for (const latLng of markerLocations) {
  //     //   bounds.extend(latLng);
  //     // }
  //     // map.fitBounds(bounds);
  //   }, [map]);

  // const handleMarkerClick = useCallback(() => {
  //   setInfoWindowShown((isShown) => !isShown);

  //   setCurrentResult;
  // }, []);
  //  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  //const centerDefault = { lat: 44.305719, lng: -68.616381 };

  //   function handleMarkerClick(result): void {
  //     //console.log(JSON.stringify(markerRef));
  //     setInfoWindowShown((isShown) => !isShown);
  //     setCurrentResult(result);
  //   }

  //   function handleClose(): void {
  //     setInfoWindowShown(false);
  //     setCurrentResult(null);
  //   }

  function doSearch(): void {
    console.log("SEARCH TERM:");
    //   console.log(searchTerm);
  }

  const handleMapChanged = () => {
    //let bounds = theMap?.getBounds();
    const center = theMap?.getCenter();
    const zoom = theMap?.getZoom();

    const lat = center.lat();
    const lng = center.lng();

    console.log(lat);

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

  return (
    <>
      {" "}
      {!apiIsLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          Result Count: {results.results.length}
          {/* <APIProvider apiKey={"AIzaSyCGr1A2dZsdTgsOJuRaQbTYM0_cV94OU6E"}> */}
          <div>
            {/* <Button onClick={() => doSearch()}>Do Search</Button>
        Start Date: <DatePickerDemo />
        End Date: <DatePickerDemo /> */}
            {/* <Input
          placeholder="Enter Zip Code…"
          onChange={(event) => setSearchTerm(event.target.value)}
        /> */}
            <Map
              id="test-map"
              style={{ height: "100vh", width: "100%" }}
              defaultCenter={{ lat: 44.305719, lng: -68.616381 }}
              defaultZoom={15}
              mapId="784793411afbb0ce"
              onDragend={() => handleMapChanged()}
            >
              {results.results.map((result) => (
                <AdvancedMarkerInfoWindow
                  key={result.raw["permanentid"] as any}
                  result={result}
                />
              ))}
            </Map>
          </div>
          {/* </APIProvider> */}
        </div>
      )}
    </>
  );
}
