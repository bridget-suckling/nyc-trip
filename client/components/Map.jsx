import React, { useEffect, useState } from 'react'
import { apiGetMap } from '../apis/map'

function Map() {
  const [map, setMap] = useState('')

  useEffect(() => {
    apiGetMap()
      .then((map) => {
        setMap(map)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  return (
    <>
      <div>
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9781,40.7511,11.03,0/300x400?access_token=pk.eyJ1Ijoic3Vja2xpbmdiYyIsImEiOiJjbGIwM2N0c20xM2c3M3dwdXJ6dXV2amMzIn0.KPo8B-28OxpVjNUDEeQDIQ"
          alt="map of NYC"
        ></img>
      </div>
    </>
  )
}

export default Map
