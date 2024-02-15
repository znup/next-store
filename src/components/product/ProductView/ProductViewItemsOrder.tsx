'use client';
import { SyntheticEvent, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useShoppingCart } from 'app/hooks/useShoppingCart';

import styles from './ProductViewItemsOrder.module.sass';

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: ProductType;
}
export const ProductViewItemsOrder = ({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: counter,
      image: product.image,
      merchandiseId: product.gql_id,
    });
  };

  const handleSubstract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };
  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubstract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleAddToCart}
        className={styles.ProductViewItemsOrder__form}
      >
        <button className={styles.ProductViewItemsOrder__submit} type="submit">
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
