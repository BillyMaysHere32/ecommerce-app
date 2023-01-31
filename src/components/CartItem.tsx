import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import basicImg from "../../public/imgs/basic.jpg";
import hatImg from "../../public/imgs/hat.jpg";
import shirtImg from "../../public/imgs/shirt.jpg";
import standardImg from "../../public/imgs/standard.jpg";
import premiumImg from "../../public/imgs/premium.jpg";

type CartItemProps = {
    id: number;
    quantity: number;
}

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    function getImage(id: number) {
      if (id === 1) {
          return basicImg;
      }
      if (id === 2) {
          return standardImg;
      }
      if (id === 3) {
        return premiumImg;
      }
      if (id === 4) {
          return hatImg;
      }
          return shirtImg;
      }

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
          <img
            src={getImage(id)}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
          <div className="me-auto">
            {/* Push price total to the right */}
            <div>
              {item.name}{" "}
              {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".65rem" }}>
                  x{quantity}
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
              {formatCurrency(item.price)}
            </div>
          </div>
          <div> {formatCurrency(item.price * quantity)}</div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            &times;
          </Button>
        </Stack>
      )
}
