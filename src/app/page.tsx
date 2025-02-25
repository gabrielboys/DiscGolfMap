"use client";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";
import { useCallback, useEffect, useState } from "react";
// import { resultList } from "./controllers/controllers";
import React from "react";
import { headlessEngine } from "./system/engine";
// import AdvancedMarkerInfoWindow from "./map/marker-info-window";
import DiscGolfMap from "./map/google-map";

export default function App() {
  // const theMap = useMap("test-map");

  // //Maps
  // const [markerRef, marker] = useAdvancedMarkerRef();
  // const [infoWindowShown, setInfoWindowShown] = useState(false);

  // //Coveo
  // const [results, setResults] = useState(resultList.state);
  // // const [currentResult, setCurrentResult] = useState(null);

  useEffect(() => {
    headlessEngine.executeFirstSearch();
  }, []);

  // useEffect(
  //   () => resultList.subscribe(() => setResults(resultList.state)),
  //   [resultList]
  // );

  // const handleMarkerClick = useCallback(() => {
  //   setInfoWindowShown((isShown) => !isShown);

  //   setCurrentResult;
  // }, []);
  //  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  // //const centerDefault = { lat: 44.305719, lng: -68.616381 };

  // function handleMarkerClick(result): void {
  //   console.log(JSON.stringify(markerRef));
  //   setInfoWindowShown((isShown) => !isShown);
  //   setCurrentResult(result);
  // }

  // function handleClose(): void {
  //   setInfoWindowShown(false);
  //   setCurrentResult(null);
  // }

  // function doSearch(): void {
  //   console.log("SEARCH TERM:");
  //   //   console.log(searchTerm);
  // }

  // const handleMapChanged = () => {
  //   // const theMap = useMap();
  //   //let bounds = theMap?.getBounds();
  //   // let center = theMap?.getCenter();
  //   // let zoom = theMap?.getZoom();
  //   // let lat = center.lat();
  //   // let lng = center.lng();
  //   // //This logic will update the location query using the map itself,
  //   // // this would change if the size of the window changed which is not what we want.
  //   // // Leaving here for now for future reference.
  //   // // let newMapSettings: MapSettings = {
  //   // // 	lat: lat,
  //   // // 	lng: lng,
  //   // // 	zoom: zoom,
  //   // // 	radius: mapLocationController.mapManager.getMapRadius(theMap),
  //   // // };
  //   // let radius = 0;
  //   // if (areaInfo !== null) {
  //   // 	radius = areaInfo.areaInformation.Radius;
  //   // } else {
  //   // 	radius = mapLocationController.mapManager.getMapRadius(theMap);
  //   // }
  //   // let newMapSettings: MapSettings = {
  //   // 	lat: lat,
  //   // 	lng: lng,
  //   // 	zoom: zoom,
  //   // 	radius: radius,
  //   // };
  //   // mapLocationController.updateMapSettings(newMapSettings, true);
  // };

  return (
    <APIProvider apiKey={"AIzaSyCGr1A2dZsdTgsOJuRaQbTYM0_cV94OU6E"}>
      <DiscGolfMap />
    </APIProvider>

    // <>
    //   Result Count: {results.results.length}
    //   <APIProvider apiKey={"AIzaSyCGr1A2dZsdTgsOJuRaQbTYM0_cV94OU6E"}>
    //     <div>
    //       {/* <Button onClick={() => doSearch()}>Do Search</Button>
    //       Start Date: <DatePickerDemo />
    //       End Date: <DatePickerDemo /> */}
    //       {/* <Input
    //         placeholder="Enter Zip Code…"
    //         onChange={(event) => setSearchTerm(event.target.value)}
    //       /> */}
    //       <Map
    //         id="test-map"
    //         style={{ height: "100vh", width: "100%" }}
    //         defaultCenter={{ lat: 44.305719, lng: -68.616381 }}
    //         defaultZoom={15}
    //         mapId="784793411afbb0ce"
    //         //   onDragend={() => handleMapChanged()}
    //       >
    //         {results.results.map((result) => (
    //           <AdvancedMarkerInfoWindow
    //             key={result.raw["permanentid"] as any}
    //             result={result}
    //           />
    //         ))}
    //       </Map>
    //     </div>
    //   </APIProvider>
    // </>
  );
}
