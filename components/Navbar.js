import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  // ${router.pathname == "/" ? "active" : ""}
  console.log(router);
  return (
    <>
      {/* <div class="relative bg-white flex justify-center align-bottom"> */}
      {/* <div class="fixed bottom-0 "> */}
      <div class="fixed bottom-0 left-0 right-0 z-10 bg-white flex justify-center">
        {/* <div className="overflow-auto whitespace-nowrap divide-x "> */}
        <div className="overflow-x-auto no-scrollbar whitespace-nowrap  justify-center align-bottom font-serif text-lg">
          {/* flex  md:flex divide-x*/}
          <Link
            href="/"
            className={` ${
              router.asPath == "/" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Home
          </Link>
          <Link
            href="/read/india"
            className={` ${
              router.asPath == "/read/india" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            India
          </Link>
          <Link
            href="/read/business"
            className={` ${
              router.asPath == "/read/business" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Business
          </Link>
          <Link
            href="/read/politics"
            className={` ${
              router.asPath == "/read/politics" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Politics
          </Link>
          <Link
            href="/read/sports"
            className={` ${
              router.asPath == "/read/sports" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Sports
          </Link>
          <Link
            href="/read/technology"
            className={` ${
              router.asPath == "/read/technology" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Technology
          </Link>
          <Link
            href="/read/startups"
            className={` ${
              router.asPath == "/read/startups" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Startups
          </Link>
          <Link
            href="/read/entertainment"
            className={` ${
              router.asPath == "/read/entertainment" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Entertainment
          </Link>
          <Link
            href="/read/hatke"
            className={` ${
              router.asPath == "/read/hatke" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Hatke
          </Link>
          <Link
            href="/read/international"
            className={` ${
              router.asPath == "/read/international" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            International
          </Link>
          <Link
            href="/read/automobile"
            className={` ${
              router.asPath == "/read/automobile" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Automobile
          </Link>
          <Link
            href="/read/science"
            className={` ${
              router.asPath == "/read/science" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Science
          </Link>
          <Link
            href="/read/travel"
            className={` ${
              router.asPath == "/read/travel" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Travel
          </Link>
          <Link
            href="/read/miscellaneous"
            className={` ${
              router.asPath == "/read/miscellaneous" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Miscellaneous
          </Link>
          <Link
            href="/read/fashion"
            className={` ${
              router.asPath == "/read/fashion" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Fashion
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
