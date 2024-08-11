import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Signup() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/planetpage');
    }
  }, [router, session, redirect]);

  const { register, handleSubmit } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    console.log(`${name} ${email} ${password}`);
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="signup-page--body">
      <form
        className="signup-page--form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h3 className="signup-page--form-title">Register Here</h3>

        <label className="signup-page--form-label" for="name">
          Name
        </label>
        <input
          className="signup-page--form-input"
          type="name"
          required
          placeholder="Name"
          id="name"
          autoFocus
          {...register('name')}
        />

        <label className="signup-page--form-label" for="email">
          Email address
        </label>
        <input
          className="signup-page--form-input"
          type="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="F.e. name@email.com"
          required
          placeholder="Email"
          id="email"
          autoComplete="email"
          {...register('email')}
        />

        <label className="signup-page--form-label" for="password">
          Password
        </label>
        <input
          className="signup-page--form-input"
          type="password"
          required
          placeholder="Password"
          id="password"
          {...register('password')}
        />

        <label className="signup-page--form-label" for="password">
          Confirm Password
        </label>
        <input
          className="signup-page--form-input"
          type="password"
          required
          placeholder="Confirm Password"
          id="confirmPassword"
          {...register('confirmPassword')}
        />

        <button type="submit" className="signup-page--form-button">
          Sign Up
        </button>

        <div className="signup-page--form-helpers">
          <span> Already have an account?</span>
          <Link href="/login-page" className="signup-page--form-signup">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
