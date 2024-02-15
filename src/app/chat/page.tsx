import { Chat } from 'app/components/chat/chat';
import { getProducts } from 'app/services/shopify/products';
import { createAgent } from 'app/utils/ai/createAgent';

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map(
    (product: { title: string }) => product.title
  );
  const flatProductTitles = productTitles.join('\n');
  const agent = createAgent(flatProductTitles);

  return (
    <main>
      <Chat agent={agent} />
    </main>
  );
}
