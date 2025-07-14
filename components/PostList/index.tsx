'use client';

import { setPosts } from '@/lib/features/posts/postsSlice';
import { RootState } from '@/lib/store';
import { type Post as PostType } from '@/utils/types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post';
import styles from './PostList.module.scss';

export interface PostListProps {
  initialPosts: PostType[];
}

export default function PostList({ initialPosts }: PostListProps) {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(initialPosts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.list}>
      {(posts ?? initialPosts).map((i) => (
        <Post key={i.id} post={i} />
      ))}
    </div>
  );
}
