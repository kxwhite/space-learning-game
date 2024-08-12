import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/gameover.css'
import '../styles/gameoverold.css'
import '../styles/congrats.css'
import '../styles/planetpage.css';
import '../styles/globals.css';
import '../styles/home-page.css';
import '../styles/login-page.css';
import '../styles/signup-page.css';
import '../styles/navbar.css';
import "../styles/modal.css";
import '../styles/planet.css'
import { ToastContainer } from 'react-toastify';
import { SessionProvider, useSession } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import { useEffect } from "react";
import NavContext from '../context/nav_context';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  useEffect(() => {
    (async () => {
      const bootstrap = await import(
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      );
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Space Quiz</title>
        <meta
          name="description"
          content="Embark on a retro space-themed adventure where your knowledge unlocks the mysteries of the universe. Challenge yourself through levels of cosmic trivia and explore pixelated planets in this intergalactic quiz journey!"
        />
      </Head>
      <SessionProvider session={session}>
        <NavContext>
          <Navbar />
          <Component {...pageProps} />
        </NavContext>
        <ToastContainer position="bottom-center" limit={1} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
