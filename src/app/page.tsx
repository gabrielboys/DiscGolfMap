'use client';

import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function Home() {
 
  const centerDefault = { lat: 44.305719,lng:-68.616381}

  return (
    <APIProvider apiKey={'AIzaSyCGr1A2dZsdTgsOJuRaQbTYM0_cV94OU6E'}>
      <div style={{ height: '100vh', width: '100%' }}>
      <Map defaultCenter={centerDefault} defaultZoom={8} mapId="784793411afbb0ce">

      </Map>
      </div>
    </APIProvider>
  );
}
