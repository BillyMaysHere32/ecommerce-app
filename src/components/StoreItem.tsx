import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency'
import "../imgs/basic.jpg";
import "../imgs/hat.jpg";
import "../imgs/premium.jpg";
import "../imgs/shirt.jpg";
import "../imgs/standard.jpg";

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
  
  

  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}} />
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
