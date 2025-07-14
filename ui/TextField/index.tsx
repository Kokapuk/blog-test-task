import { useId } from 'react';
import styles from './TextField.module.scss';
import cn from 'classnames';

export interface TextFieldProps {
  type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
  id?: string;
  name?: string;
  label?: string;
  invalid?: boolean | string;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): string;
}

export default function TextField({ id, label, invalid, ...props }: TextFieldProps) {
  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <div className={cn(styles.wrapper, invalid && styles.invalid)}>
      <input
        {...props}
        id={finalId}
        className={styles.input}
        placeholder=""
        aria-invalid={invalid ? 'true' : undefined}
      />
      {!!label && (
        <label htmlFor={finalId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}
