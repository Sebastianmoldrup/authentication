import { signin, signup } from './actions';

export default function LoginPage() {
  return (
    <form className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-full max-w-md'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              name='password'
              type='password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              formAction={signin}
            >
              Log in
            </button>
            <button
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              formAction={signup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
