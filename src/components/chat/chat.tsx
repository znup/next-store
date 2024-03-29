'use client';

import { useChat } from 'ai/react';

import styles from './Chat.module.sass';

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
    <main className={styles.Chat}>
      <h1 className={styles.Chat__title}>
        Pregunta cualquier cosa, compra todo!!!
      </h1>
      <form className={styles.Chat__form} onSubmit={handleSubmit}>
        <input
          className={styles.Chat__input}
          value={input}
          placeholder="En que puedo ayudarte para comprar?"
          onChange={handleInputChange}
        />
        <button className={styles.Chat__button}>Enviar</button>
      </form>
      <section className={styles.Chat__messages}>
        {messages
          .filter((m) => m.role !== 'system')
          .map((m) => {
            return (
              <span className={styles.Chat__message} key={m.id}>
                <div className={styles.Chat__message__icon}>
                  {m.role === 'assistant' ? '🤖' : '🤔'}
                </div>
                <div>{m.content}</div>
              </span>
            );
          })}
      </section>
    </main>
  );
};
