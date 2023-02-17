import { combineReducers } from "redux";
import locSlice from "./locSlice";
import mapSlice from "./mapSlice";
import zoomSlice from "./zoomSlice";


const reducer = combineReducers({
  zoomSlice: zoomSlice,
  mapSlice: mapSlice,
  locSlice: locSlice
});


export default reducer