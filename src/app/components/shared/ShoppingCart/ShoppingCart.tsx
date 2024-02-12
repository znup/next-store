'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from 'app/hooks/useShoppingCart';

import styles from './ShoppingCart.module.sass';
import { useState } from 'react';

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {cart.map((item) => (
            <>
              <p key={item?.id}>{item?.title}</p>
              <p>Cantidad: {item.quantity}</p>
            </>
          ))}
          <button className={styles.ShoppingCart__buyButton}>Comprar</button>
        </div>
      )}
    </button>
  );
};
