'use client';

import { setViewingPost } from '@/lib/features/posts/postsSlice';
import { RootState } from '@/lib/store';
import { Post } from '@/utils/types';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DetailedPost.module.scss';

export interface DetailedPostProps {
  initialPost: Post;
}

export default function DetailedPost({ initialPost }: DetailedPostProps) {
  const viewingPost = useSelector((state: RootState) => state.posts.viewingPost);
  const dispatch = useDispatch();
  const post = viewingPost ?? initialPost;

  useEffect(() => {
    dispatch(setViewingPost(initialPost));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.postedAt}>Posted at {dayjs(post.postedAt).format('DD.MM.YYYY HH:MM:ss')}</p>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
