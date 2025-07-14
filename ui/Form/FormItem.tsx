import { cloneElement, ReactElement } from 'react';
import { TextFieldProps } from '../TextField';
import styles from './FormItem.module.scss';

export interface FormItemProps {
  children: ReactElement<{ invalid?: FormItemProps['invalid'] }>;
  invalid?: TextFieldProps['invalid'];
}

export default function FormItem({ children, invalid }: FormItemProps) {
  return (
    <div>
      {cloneElement(children, { invalid })}
      {typeof invalid === 'string' && <p className={styles.invalidMessage}>{invalid}</p>}
    </div>
  );
}
