import DetailedPost from '@/components/DetailedPost';
import { getPost } from '@/utils/firebase';
import { PageProps } from '@/utils/types';
import styles from './Post.module.scss';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type PostPageProps = PageProps<{ postId: string }>;

export const generateMetadata = async (props: PostPageProps): Promise<Metadata> => {
  const params = await props.params;
  const post = await getPost(params.postId);

  if (!post) {
    return {};
  }

  const trimStringLength = 64;

  return {
    title: `${post.title} - Post`,
    description: `${post.content.substring(0, trimStringLength)}${post.content.length > trimStringLength ? '...' : ''}`,
  };
};

export default async function Post(props: PostPageProps) {
  const params = await props.params;
  const initialPost = await getPost(params.postId);

  if (!initialPost) {
    return notFound();
  }

  return (
    <div className={styles.detailedPostWrapper}>
      <DetailedPost initialPost={initialPost} />
    </div>
  );
}
