import { env } from '../../../src/config/env';

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/431481848035/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    products: (id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
  },
};
