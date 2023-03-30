import { MouseEvent, ReactElement } from 'react';

import styles from './Button.module.scss';

interface Props {
  children: ReactElement;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
