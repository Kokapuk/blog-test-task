import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './Form.module.scss';

export interface FormProps {
  children?: ReactNode;
  onSubmit?(event: React.FocusEvent<HTMLFormElement>): void;
  className?: string;
}

export default function Form({ children, onSubmit, className }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={cn(styles.form, className)}>
      {children}
    </form>
  );
}
