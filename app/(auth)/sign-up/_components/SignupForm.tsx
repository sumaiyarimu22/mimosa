'use client';

import Button from '@/components/ui/Button';
import { login } from '@/features/auth/authSlice';
import { photoUrlChecker } from '@/helpers/photoUrlChecker';
import { axiosPost } from '@/libs/axiosPost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface SignupFormData {
  name: string;
  photoUrl: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const hasPermitted = photoUrlChecker(formData.photoUrl);

      if (hasPermitted) {
        const data = await axiosPost('/api/auth/register', formData);

        if (data) {
          setIsLoading(false);
          setFormData({
            name: '',
            photoUrl: '',
            email: '',
            password: '',
          });
          dispatch(login(data));
          toast.success('register successfull.');
          router.push('/');
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        toast.error('Please past a photo url from pexels/unsplash/cloudinary');
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Create an account!</h2>
        <p className='text-black/50'>Please Provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='name' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
            placeholder='name'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='photoUrl' className='cursor-pointer'>
            photo Url
          </label>
          <input
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            type='text'
            id='photoUrl'
            placeholder='Past your pexels/unsplash/cloudinary'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id='password'
            placeholder='Write your password'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant='secondary' type='submit' isLoading={isLoading}>
          register
        </Button>

        <p>
          <span className='text-black/50'>Already have an account?</span>{' '}
          <Link href='/sign-in' className='link-item'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
