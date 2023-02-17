import { Offcanvas, Stack } from "react-bootstrap";
import Image from "next/image";

export function DetailPlace(props) {
  const detail = props.data;

  return (
    <>
      {props.open ? (
        <Offcanvas
          style={{ marginTop: "80px", padding: 0 }}
          show={props.open ? true : false}
          onHide={() => props.setOpen(!props)}
          placement="end"
        >
          <Offcanvas.Body
            className="place-body"
          >
            <Stack className="place-wrapper">
              {!props.data ? (
                "tes"
              ) : (
                <Image
                  width={200}
                  height={225}
                  className="img-place"
                  src={props.data.image || detail.item.image}
                  alt="gbr"
                />
              )}

              <h1 className="title">
                {props.data.place_name || detail.item.place_name}
              </h1>
              <p className="desc">
                {props.data.description || detail.item.description}
              </p>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      ) : null}
    </>
  );
}
