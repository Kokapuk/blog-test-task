'use client';

import Button from '@/ui/Button';
import Form from '@/ui/Form';
import TextArea from '@/ui/TextArea';
import TextField from '@/ui/TextField';
import { createPost } from '@/utils/firebase';
import { PostSchema } from '@/utils/types';
import { useState } from 'react';

export default function CreatePostForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPosting, setPosting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const objectFormData = Object.fromEntries(new FormData(form).entries());
    const formData = PostSchema.safeParse({ ...objectFormData, postedAt: new Date().toISOString() });

    if (formData.success) {
      setErrors({});
      setPosting(true);

      try {
        await createPost(formData.data);
        form.reset();

        alert('Posted successfully!');
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(`Failed to post: ${err.message}`);
        }
      } finally {
        setPosting(false);
      }
    } else {
      const newErrors: typeof errors = {};

      formData.error.issues.forEach((i) => {
        const fieldName = i.path[0];

        if (typeof fieldName !== 'string' || Object.keys(formData).includes(fieldName)) {
          return;
        }

        newErrors[fieldName] = i.message;
      });

      setErrors(newErrors);
    }
  };

  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      <Form.FormItem invalid={errors.title}>
        <TextField name="title" type="text" label="Title" />
      </Form.FormItem>
      <Form.FormItem invalid={errors.content}>
        <TextArea name="content" label="Content" />
      </Form.FormItem>
      <Button type="submit" disabled={isPosting}>
        Post
      </Button>
    </Form.Wrapper>
  );
}
