'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

type state = {
  success?: boolean;
  message?: string;
};

export async function handleSearch(prevState: state, formData: FormData) {
  // const { replace } = useRouter();
  let pathname = '/';
  const query = formData
    .get('query')
    ?.toString()
    .split(' ')
    .join('-')
    .toLowerCase();

  formData.set('query', '');

  if (query !== '') {
    pathname = `/search?keyword=${query}`;
    
    revalidatePath(pathname);
    redirect(pathname);
  } else {
    return {
      success: false,
      message: 'Empty query. Please enter something',
    };
  }
}
