import { Result } from "@coveo/headless";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { FunctionComponent, useEffect, useState } from "react";
import React from "react";

interface AdvanceMarkerInfoWindowProps {
  result: Result;
}

export const AdvancedMarkerInfoWindow: FunctionComponent<
  AdvanceMarkerInfoWindowProps
> = (props) => {
  const { result } = props;

  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    console.log(JSON.stringify(result));
  }, []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{
          lat: result.raw["coordinatesz32xlatitude"] as any,
          lng: result.raw["coordinatesz32xlongitude"] as any,
        }}
        key={result.raw["permanentid"]}
        title={result.title}
        onMouseEnter={() => setInfowindowOpen(true)}
        onMouseLeave={() => setInfowindowOpen(false)}
      ></AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          disableAutoPan={true}
          //onCloseClick={() => setInfowindowOpen(false)}
        >
          <h2>
            <a href={result.raw["clickableuri"]}>{result.title}</a>{" "}
          </h2>
          {/* <p>{new Date(result.raw["date"] as any).toLocaleDateString()}</p> */}
        </InfoWindow>
      )}
    </>
  );
};

//export default AdvancedMarkerInfoWindow;
