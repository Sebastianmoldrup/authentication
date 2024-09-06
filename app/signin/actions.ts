'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// import { createClient } from '@/_utils/supabase/server';
import { createClient } from '../../utils/supabase/server';

export async function signin(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  revalidatePath('/', 'layout');
  redirect('/signup');
}
