import Image from 'next/image';
import { getMainProducts } from 'app/services/shopify/products';

import styles from './MainProducts.module.sass';

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>Nuevos productos! 🌟</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map(
          (product: {
            id: string;
            title: string;
            images: { src: string }[];
          }) => {
            const imgSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image src={imgSrc} alt={product.title} loading="eager" fill />
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
