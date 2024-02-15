import { getCustomerOrders } from 'app/services/shopify/graphql/customer';

import styles from './OrderInfo.module.sass';

type OrderType = {
  name: string;
  orderNumber: number;
  statusUrl: string;
  lineItems: {
    edges: Array<{
      node: {
        currentQuantity: number;
        title: 2;
      };
    }>;
  };
};

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  return (
    <div>
      <section>
        <h2>Ordenes</h2>
        {ordersInfo.orders?.map((order: OrderType) => (
          <a
            className={styles.OrderInfo}
            href={order.statusUrl}
            key={order.orderNumber}
          >
            <h3>Pedido {order.name}</h3>
            {order.lineItems.edges.map(({ node }) => (
              <div key={node.title}>
                <span>{node.title}</span>
                <span className={styles.OrderInfo__quantity}>
                  x{node.currentQuantity}
                </span>
              </div>
            ))}
          </a>
        ))}
      </section>
    </div>
  );
}
