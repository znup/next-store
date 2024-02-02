'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Description.module.sass';

const PLACEHOLDER_IMG =
  'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  console.log(hasBorder);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__containerImage}>
          <Image
            src="/images/description.jpeg"
            alt="product marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMG}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};
