import React, { useState } from "react";
import { DetailPlace } from "./right-sidebar";
import { useDispatch } from "react-redux";
import { setPlace } from "../redux/reducers/mapSlice";
import { setZoom } from "../redux/reducers/zoomSlice";
import { setLoc } from "../redux/reducers/locSlice";

export default function PlaceList(props) {
  const [openDetail, setOpenDetail] = useState(false);
  const dispatch = useDispatch();

  const handleDetail = () => {
    // when the user clicked one of the markers or clicked place list in the left sidebar, it set the states of some reducer change zoom index to 17 and center view location position to the clicked marker
    setOpenDetail(!openDetail);
    dispatch(setPlace({ place: props.item.place_name }));
    dispatch(setZoom(17));
    dispatch(setLoc(props.item.location));
  };

  return (
    <div className="wrapper-place">
      <li>
        <a href="#" className="disabled" onClick={handleDetail}>
          {props.item.place_name}
        </a>
      </li>
      <DetailPlace data={props} open={openDetail} setOpen={setOpenDetail} />
    </div>
  );
}
