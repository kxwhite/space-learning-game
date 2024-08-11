import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NavData } from "../context/nav_context";
import { useContext } from "react";

export default function navbar() {
  let profile = "/game_assets/profile.png";

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  const {header, setHeader} = useContext(NavData)

  const logoutHandler = async () => {
    const data = await signOut({redirect: false, callbackUrl: "/"})
    router.push(data.url)
  }

  return (
    <>
    {session?.user?
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top nav-bg">
      <div className="container-fluid">
        <Link className="navbar-brand nav-title nav-font" href="\planetpage">SPACE QUIZ</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* space for extra options */}
          </ul>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-heading">
            <p>{header}</p>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-font nav-username"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="rounded-circle" src={profile} width="40" /> {session?.user.name}
              </a>
              <ul className="dropdown-menu dropdown-menu-end nav-font">
                <li>
                  <Link className="dropdown-item" href="\planetpage">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={() => logoutHandler()}>
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> : null}
    </>
  );
}
