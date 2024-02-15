import Link from 'next/link';
import styles from './ChatLink.module.sass';

export const ChatLink = () => {
  return (
    <Link className={styles.ChatLink} href="/chat">
      <span>✨ Chat 🤖</span>
    </Link>
  );
};
