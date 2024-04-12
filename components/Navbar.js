import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  // ${router.pathname == "/" ? "active" : ""}
  console.log(router);
  return (
    <>
      {/* <div className="relative bg-white flex justify-center align-bottom"> */}
      {/* <div className="fixed bottom-0 "> */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-white flex justify-center">
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
            href="/Read/india"
            className={` ${
              router.asPath == "/Read/india" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            India
          </Link>
          <Link
            href="/Read/business"
            className={` ${
              router.asPath == "/Read/business" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Business
          </Link>
          <Link
            href="/Read/politics"
            className={` ${
              router.asPath == "/Read/politics" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Politics
          </Link>
          <Link
            href="/Read/sports"
            className={` ${
              router.asPath == "/Read/sports" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Sports
          </Link>
          <Link
            href="/Read/technology"
            className={` ${
              router.asPath == "/Read/technology" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Technology
          </Link>
          <Link
            href="/Read/startups"
            className={` ${
              router.asPath == "/Read/startups" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Startups
          </Link>
          <Link
            href="/Read/entertainment"
            className={` ${
              router.asPath == "/Read/entertainment" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Entertainment
          </Link>
          <Link
            href="/Read/hatke"
            className={` ${
              router.asPath == "/Read/hatke" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Hatke
          </Link>
          <Link
            href="/Read/international"
            className={` ${
              router.asPath == "/Read/international" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            International
          </Link>
          <Link
            href="/Read/automobile"
            className={` ${
              router.asPath == "/Read/automobile" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Automobile
          </Link>
          <Link
            href="/Read/science"
            className={` ${
              router.asPath == "/Read/science" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Science
          </Link>
          <Link
            href="/Read/travel"
            className={` ${
              router.asPath == "/Read/travel" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Travel
          </Link>
          <Link
            href="/Read/miscellaneous"
            className={` ${
              router.asPath == "/Read/miscellaneous" ? "text-black border-t-2 border-slate-900" : ""
            } inline-block text-center text-slate-500 items-center justify-center p-3 hover:text-black`}
          >
            Miscellaneous
          </Link>
          <Link
            href="/Read/fashion"
            className={` ${
              router.asPath == "/Read/fashion" ? "text-black border-t-2 border-slate-900" : ""
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
