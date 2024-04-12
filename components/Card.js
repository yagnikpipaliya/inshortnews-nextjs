import Link from "next/link";
import React from "react";

const Card = ({ title, image, content, author, date, time, readmore }) => {
  return (
    <>
      {/* <div className="flex font-sans p-2 border my-4 border-slate-200">
        <div className="flex-none w-52 relative">
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-auto ps-4">
          <div className="flex flex-wrap items-baseline">
            <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">{title}</h1>
            <div className="flex-auto text-sm font-normal text-slate-500">
              by {author}, {time} on {date}{" "}
            </div>
          </div>
          <div className="flex items-baseline my-4 ">
            <div className="space-x-1 flex text-md font-medium">
              <div className="flex items-center justify-center text-slate-700 text-justify">{content}</div>
            </div>
          </div>
          <Link href={`${readmore}`}>
            <p className="text-sm text-slate-500">Read more</p>
          </Link>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row font-sans mb-4 border p-2 border-slate-400 hover:border hover:border-slate-900">
        {/* border-slate-200 p-2 border*/}
        <div className="md:relative md:flex-none w-full md:w-52  mb-4 md:mb-0">
          {/* relative  md:relative md:flex-none*/}
          <img src={image} alt={title} className="md:absolute inset-0 w-full md:h-full h-1/2 object-cover" loading="lazy" />
          {/* md:absolute */}
        </div>
        <div className="flex-auto md:ps-4">
          <div className="flex flex-wrap items-baseline">
            <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900 font-serif">{title}</h1>
            {/* w-full md:w-auto flex-none mb-3 md:mb-0 text-2xl md:text-xl leading-none text-slate-900 */}
            <div className="flex-auto text-sm font-normal text-slate-500">
              {/* md:text-base */}
              by {author}, {time} on {date}
            </div>
          </div>
          <div className="flex items-baseline my-4">
            <div className="space-x-1 flex text-md">
              {/* md:text-lg  font-medium*/}
              <div className="flex items-center justify-center text-black text-justify">{content}</div>
            </div>
          </div>
          <Link href={`${readmore}`}>
            <span className="text-sm text-slate-500 hover:text-black  hover:border-b hover:border-slate-900">Read more</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
