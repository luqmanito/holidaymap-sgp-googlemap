import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlaceList from "./placeList";
import placeItem from "../data/items.json";
import { DetailPlace } from "./right-sidebar";
import axios from "axios";
import { setZoom } from "../redux/reducers/zoomSlice";
import { setLoc } from "../redux/reducers/locSlice";

export default function Sidebar2() {
  const { place } = useSelector((state) => state.mapSlice.place);

  const [openDetail, setOpenDetail] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const handleDetail = () => {
    setOpenDetail(!openDetail);
    dispatch(setZoom(17));
    dispatch(setLoc(placeItem[0].location));
  };

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sidebar2">
      <label className="dropdown">
        <div className="dd-button">Filter by Favorite</div>

        <input type="checkbox" className="dd-input" id="test" />
      </label>
      <ul className="ul2">
        <li
          onClick={handleDetail}
          className={
            place !== undefined
              ? place === "info"
                ? "blink-bg"
                : "disabled"
              : "disabled"
          }
        >
          {placeItem[0].place_name}
        </li>
        <DetailPlace
          data={placeItem[0]}
          open={openDetail}
          setOpen={setOpenDetail}
        />

        {data &&
          data.slice(1).map((item) => <PlaceList key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
