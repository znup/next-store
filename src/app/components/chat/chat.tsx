'use client';

import { useChat } from 'ai/react';

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent,
      },
    ],
  });

  return (
    <main>
      <section>
        {messages
          .filter((m) => m.role !== 'system')
          .map((m) => (
            <div key={m.id}>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Di algo..."
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};
