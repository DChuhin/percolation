import { ChangeEvent } from 'react';

import styles from './Input.module.scss';

interface Props<T> {
  value: T;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = <T extends string | number>({ value, label, onChange, placeholder }: Props<T>) => {
  return (
    <div className={styles.InputBox}>
      <input type="text" required value={value} onChange={onChange} placeholder={placeholder} />
      <span>{label}</span>
    </div>
  );
};

export default Input;
