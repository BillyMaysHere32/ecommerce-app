import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency'
import basicImg from "../../public/imgs/basic.jpg";
import hatImg from "../../public/imgs/hat.jpg";
import shirtImg from "../../public/imgs/shirt.jpg";
import standardImg from "../../public/imgs/standard.jpg";
import premiumImg from "../../public/imgs/premium.jpg";


type StoreItemProps = {
    id: number; 
    name: string;
    price: number;
    imgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, 
    removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

//   const localImages = {
//     basicImg: require("../../public/imgs/basic.jpg"),
//     hatImg: require("../../public/imgs/hat.jpg"),
//     shirtImg: require("../../public/imgs/shirt.jpg"),
//     standardImg: require("../../public/imgs/standard.jpg"),
//     premiumImg: require("../../public/imgs/premium.jpg"),
//   };

  // Dynamically access image by Id
// const getImageById = (id: number) => {
//   switch (id) {
//     case 1:
//       return localImages.basicImg;
//     case 2:
//       return localImages.standardImg;
//     case 3:
//       return localImages.premiumImg;
//     case 4:
//       return localImages.hatImg;
//     case 5:
//       return localImages.shirtImg;
//   }
// };
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
    <Card className='h-100'>
      <Card.Img variant="top" src={getImage(id)} height="200px" style={{ objectFit: "cover"}} />
      {/* <Card.Img variant="top" src={(id === 1) ? basicImg : hatImg} height="200px" style={{ objectFit: "cover"}} /> */}
      {/* 'cover' so image aspet ratio looks right */}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            {/* ms-2 margin so price is still visible with long name */}
        </Card.Title>
        <div className='mt-auto'>
        {/* mt-auto ->fill all space available in the flex container, works with h-100 */}
            {quantity === 0 ? ( 
              <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
            ) : (
              <div className='d-flex align-items-center flex-column' style={{gap: '.5rem'}}>
                <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                  <span className='fs-4'>{quantity}</span> In Cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
              </div>
            )}
          </div>  
      </Card.Body>
    </Card>
  )
}
