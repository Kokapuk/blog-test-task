import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { CreatePostDTO, Post } from './types';

initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIFREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const firestore = getFirestore();

export const createPost = async (payload: CreatePostDTO) => {
  await addDoc(collection(firestore, 'posts'), payload);
};

export const docToPost = (doc: DocumentSnapshot): Post => {
  const postObject = doc.data() as Omit<Post, 'id' | 'postedAt'> & { postedAt: Timestamp };
  const validPost = { id: doc.id, ...postObject, postedAt: postObject.postedAt.toDate().toISOString() };
  return validPost;
};

export const getPosts = async (): Promise<Post[]> => {
  const q = query(collection(firestore, 'posts'), orderBy('postedAt', 'desc'));
  const postsSnapshot = await getDocs(q);
  const posts: Post[] = postsSnapshot.docs.map(docToPost);

  return posts;
};

export const getPost = async (id: Post['id']): Promise<Post | null> => {
  const postRef = doc(firestore, `posts/${id}`);
  const postSnapshot = await getDoc(postRef);

  if (!postSnapshot.exists()) {
    return null;
  }

  return docToPost(postSnapshot);
};
