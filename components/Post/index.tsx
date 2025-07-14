import { type Post } from '@/utils/types';
import Link from 'next/link';
import styles from './Post.module.scss';
import dayjs from 'dayjs';

export interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <Link href={`/${post.id}`} className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.postedAt}>{dayjs(post.postedAt).format('DD.MM.YY HH:mm')}</p>
      </div>
      <p className={styles.content}>{post.content}</p>
    </Link>
  );
}
