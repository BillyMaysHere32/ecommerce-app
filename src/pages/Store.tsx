import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import "../imgs/basic.jpg";
import "../imgs/hat.jpg";
import "../imgs/premium.jpg";
import "../imgs/shirt.jpg";
import "../imgs/standard.jpg";
//import logo from "../imgs/basic.jpg";

export function Store() {
  return (
    <div>
      <h1>Store</h1>
      {/* <img height="200px" style={{ objectFit: "cover"}}
        alt='...'
        src={logo}>
        </img> */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
            {/* ...item spread notation to pass all item's props */}
          </Col>
        ))}
      </Row>
    </div>
  )
}

