/* eslint-disable @typescript-eslint/no-empty-object-type */
import z from 'zod';

export type ListResponse<T> = { data: T[]; meta: { total: number } };

export const PostSchema = z.object({
  title: z.string().min(3).max(64),
  content: z.string().min(3).max(512),
  postedAt: z.coerce.date(),
});

export type CreatePostDTO = z.infer<typeof PostSchema>;
export type Post = { id: string; postedAt: string } & Omit<z.infer<typeof PostSchema>, 'postedAt'>;

export interface PageProps<
  Params extends Record<string, string> = {},
  SearchParams extends Record<string, string> = {}
> {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}
