'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function handleSearch(formData: FormData) {
  let pathname = '/';
  const query = formData
    .get('query')
    ?.toString()
    .split(' ')
    .join('-')
    .toLowerCase();

  formData.set('query', '');

  pathname = `/search?keyword=${query}`;

  revalidatePath(pathname);
  redirect(pathname);
}
