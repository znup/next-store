import { getProducts } from 'app/services/shopify/products';
import { createAgent } from 'app/utils/ai/createAgent';
import { Chat } from '../components/chat/chat';

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join('\n');
  const agent = createAgent(flatProductTitles);

  return (
    <main>
      <h1>Chatbot</h1>
      <Chat agent={agent} />
    </main>
  );
}
