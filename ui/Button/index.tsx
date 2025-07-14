import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'children'
> & {
  children?: string;
};

export default function Button({ className, type, ...props }: ButtonProps) {
  return <button {...props} className={cn(styles.button, className)} type={type ?? 'button'} />;
}
