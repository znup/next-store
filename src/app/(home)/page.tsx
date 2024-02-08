import { Metadata } from 'next';
import { MainProducts } from '..';

export const metadata: Metadata = {
  title: '⚡Future Store',
  description:
    'Bienvenido a la tienda del futuro.🚀 un e-commerce de otro mundo🌎',
  keywords: [
    'ecommerce',
    'tienda',
    'tienda en linea',
    'tienda virtual',
    'tecnologia',
  ],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
