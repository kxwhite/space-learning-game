import React from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/planetpage');
    }
  }, [router, session, redirect]);
  return (
    <div className="home-page--body">
      <h1 className="home-page--title">SPACE QUIZ</h1>

      <div className="home-page--ship"></div>

      <div className="home-page--buttons">
        <div className="home-page--button">
          <Link href="/login-page">Login</Link>
        </div>
        <div className="home-page--button">
          <Link href="/signup-page">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
