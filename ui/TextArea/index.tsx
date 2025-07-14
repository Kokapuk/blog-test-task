import cn from 'classnames';
import { useId } from 'react';
import { TextFieldProps } from '../TextField';
import styles from '../TextField/TextField.module.scss';

export type TextAreaProps = Omit<TextFieldProps, 'type' | 'onChange'> & {
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
};

export default function TextArea({ id, label, invalid, ...props }: TextAreaProps) {
  const generatedId = useId();
  const finalId = id ?? generatedId;

  return (
    <div className={cn(styles.wrapper, invalid && styles.invalid)}>
      <textarea
        {...props}
        style={{ resize: 'vertical' }}
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
