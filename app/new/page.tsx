import CreatePostForm from '@/components/CreatePostForm';
import styles from './CreatePost.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Post',
  description: 'Create new post',
};

export default function NewPost() {
  return (
    <div className={styles.formWrapper}>
      <CreatePostForm />
    </div>
  );
}
