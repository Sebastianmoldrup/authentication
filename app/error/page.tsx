import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='mb-8'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href='/signin'>
        <a className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
          Go to Sign In
        </a>
      </Link>
    </main>
  );
}
