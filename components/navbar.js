import { Container, Navbar as NavbarBs } from "react-bootstrap";
import gear from "../public/imgs/gear.png";
import close from "../public/imgs/close.png";
import question from "../public/imgs/question.png";
import Image from "next/image";
import { DetailPlace } from "./right-sidebar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlace } from "../redux/reducers/mapSlice";

export function Navbar() {
  const [openDetail, setOpenDetail] = useState(false);
  const dispatch = useDispatch();
  const { place } = useSelector((state) => state.mapSlice.place);

  const handleDetail = () => {
    // if question symbol on navbar clicked it will flash the first Merlion place Text, tell the user to click that text first
    dispatch(setPlace({ place: "info" }));
    setTimeout(() => {
      dispatch(setPlace({ place: [] }));
    }, 500);
  };

  return (
    <nav>
      <NavbarBs sticky="top" className="bg-white  ">
        <Container className="me-auto  ">
          <h4 className="headline">
            TOP-RATED TOURIST ATTRACTION IN SINGAPORE
          </h4>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              width: "15vw",
              justifyContent: "space-evenly",
            }}
          >
            <Image width={50} height={50} src={gear} alt="gbr" />
            <Image width={50} height={50} src={close} alt="gbr" />
            <Image
              className="guide"
              onClick={handleDetail}
              width={50}
              height={50}
              src={question}
              alt="gbr"
            />
          </div>
        </Container>
        <DetailPlace open={openDetail} setOpen={setOpenDetail} />
      </NavbarBs>
    </nav>
  );
}
