import PostList from '@/components/PostList';
import { Metadata } from 'next';
import styles from './Posts.module.scss';
import { getPosts } from '@/utils/firebase';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Anonymous blog posts for everyone',
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className={styles.listWrapper}>
      <PostList initialPosts={posts} />
    </div>
  );
}
