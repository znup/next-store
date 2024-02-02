import Image from 'next/image';
import styles from './MainProducts.module.sass';
import { getProducts } from 'app/services/shopify';

export const MainProducts = async () => {
  const products = await getProducts();
  // console.log(products);
  return (
    <section className={styles.MainProducts}>
      <h3>Nuevos productos! 🌟</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: any) => {
          const imgSrc = product?.images[0]?.src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imgSrc} alt={product.title} loading="eager" fill />
            </article>
          );
        })}
      </div>
    </section>
  );
};
