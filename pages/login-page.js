import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/planetpage');
    }
  }, [router, session, redirect]);

  const { register, handleSubmit } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        if (result.error === 'Authorization failed') {
          toast.error('Incorrect email or password. Please try again.');
        } else {
          toast.error(result.error);
        }
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="login-page--body">
      <form className="login-page--form" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="login-page--form-title">Login Here</h3>

        <label className="login-page--form-label" for="email">
          Your email
        </label>
        <input
          className="login-page--form-input"
          type="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="F.e. name@email.com"
          required
          placeholder="Email"
          id="email"
          autoFocus
          {...register('email')}
        />

        <label className="login-page--form-label" for="password">
          Password
        </label>
        <input
          className="login-page--form-input"
          type="password"
          required
          placeholder="Password"
          id="password"
          autoFocus
          {...register('password')}
        />

        <button className="login-page--form-button">Log In</button>

        <input
          className="login-page--form-remember-me"
          type="checkbox"
          value="lsRememberMe"
          id="rememberMe"
        />
        <label className="login-page--form-remember-me-label" for="rememberMe">
          Remember me
        </label>

        <div className="login-page--form-helpers">
          <Link href="#">Forgot your password?</Link>
          <Link href="/signup-page" className="login-page--form-signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
