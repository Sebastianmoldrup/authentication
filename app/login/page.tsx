'use client';

// Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

// React
import { useState } from 'react';

// Authentication / Authorization
import supabase from '@/utils/supabaseClient';
import { z } from 'zod';
import { navigate } from '@/utils/redirect';

export default function SignIn() {
  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation
  const UserObj = z.object({
    email: z
      .string()
      .min(3, { message: 'brukernavn må være lengre en 3 bokstaver' })
      .email({ message: 'ugyldig epost' })
      .includes('@', { message: 'ugyldig epost' })
      .toLowerCase(),
    password: z
      .string()
      .min(6, { message: 'passord må være lengre en 6 bokstaver' }),
  });

  // Sign in
  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    // Parse user object - validate
    const user = UserObj.parse({ email, password });

    // Guard clause for user object parse
    if (!user) {
      console.log('error: Check your login credentials');
    }

    // Sign in with Supabase
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.log('error', error);
        return;
      } else {
        console.log('data', data);
        navigate('dashboard');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-y-4 p-24'>
      <Card className='flex justify-between items-center w-fit'>
        <Image src='/icon.png ' alt='' width={250} height={250} />
        <div>
          <CardHeader>
            <CardTitle>Locker Panel</CardTitle>
            <CardDescription>Welcome to the Locker Admin Panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-4'>
                  <Input
                    id='name'
                    placeholder='Username'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button onClick={() => handleSubmit({ email, password })}>
              Sign in
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
}
