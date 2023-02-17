import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import { DetailPlace } from "../components/right-sidebar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPlace } from "../redux/reducers/mapSlice";
import { setZoom } from "../redux/reducers/zoomSlice";
import { setLoc } from "../redux/reducers/locSlice";

export default function Map() {
  const dispatch = useDispatch();
  const zoomIdx = useSelector((state) => state.zoomSlice);
  const { location } = useSelector((state) => state.locSlice);
  const center = { lat: location.lat, lng: location.lng };
  const [selected, setSelected] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [data, setData] = useState(null);


  const options = {
    // mapId is provided, better use from env file
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    streetViewControl: false,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const mapContainerStyle = {
    width: "100%",
    height: "93%",
  };

  const handleDetail = () => {
    setOpenDetail(!openDetail);
    dispatch(setPlace({ place: selected.place_name }));
  };

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GoogleMap
        zoom={zoomIdx.zoom}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        {/* below here is logic for displaying map and markers to fulfill the requirement by mapping our data.json file*/}
        {data && data.map((marker) => {
          return (
            <Marker
              key={marker.id}
              position={marker.location}
              label={{
                text:
                  selected === marker.id
                    ? marker.place_name
                    : marker.place_name,
                color: "#ffff",
                html: true,
                fontSize: selected === marker.id ? "2vw" : ".5vw",
                className:
                  selected === marker.id
                    ? "big-marker-position"
                    : "marker-position",
              }}
              icon={{
                url:
                  selected === marker.id
                    ? marker["marker-image"]
                    : "/imgs/marker-icon.png",
                scaledSize:
                  selected === marker.id || openDetail === true
                    ? new window.google.maps.Size(90, 145)
                    : new window.google.maps.Size(30, 55),
              }}
              onMouseOver={() => {
                setSelected(marker.id);
              }}
              onMouseOut={() => {
                setSelected(null);
              }}
              // when user click the markers its show up the place detail in the right sidebar
              onClick={() => {
                setIsSelected(marker);
                handleDetail(marker);
                dispatch(setZoom(17));
                dispatch(setLoc(marker.location));
              }}
            />
          );
        })}
      </GoogleMap>
      {/* send props to get the required data for right-sidebar components */}
      <DetailPlace
        data={isSelected}
        open={openDetail}
        setOpen={setOpenDetail}
      />
    </>
  );
}
