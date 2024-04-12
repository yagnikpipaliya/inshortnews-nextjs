import Link from "next/link";
import React from "react";

const Card = ({ title, image, content, author, date, time, readmore }) => {
  return (
    <>
      {/* <div class="flex font-sans p-2 border my-4 border-slate-200">
        <div class="flex-none w-52 relative">
          <img src={image} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="flex-auto ps-4">
          <div class="flex flex-wrap items-baseline">
            <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">{title}</h1>
            <div class="flex-auto text-sm font-normal text-slate-500">
              by {author}, {time} on {date}{" "}
            </div>
          </div>
          <div class="flex items-baseline my-4 ">
            <div class="space-x-1 flex text-md font-medium">
              <div class="flex items-center justify-center text-slate-700 text-justify">{content}</div>
            </div>
          </div>
          <Link href={`${readmore}`}>
            <p class="text-sm text-slate-500">Read more</p>
          </Link>
        </div>
      </div> */}

      <div class="flex flex-col md:flex-row font-sans mb-4 border p-2 border-slate-400 hover:border hover:border-slate-900">
        {/* border-slate-200 p-2 border*/}
        <div class="md:relative md:flex-none w-full md:w-52  mb-4 md:mb-0">
          {/* relative  md:relative md:flex-none*/}
          <img src={image} alt={title} class="md:absolute inset-0 w-full md:h-full h-1/2 object-cover" loading="lazy" />
          {/* md:absolute */}
        </div>
        <div class="flex-auto md:ps-4">
          <div class="flex flex-wrap items-baseline">
            <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900 font-serif">{title}</h1>
            {/* w-full md:w-auto flex-none mb-3 md:mb-0 text-2xl md:text-xl leading-none text-slate-900 */}
            <div class="flex-auto text-sm font-normal text-slate-500">
              {/* md:text-base */}
              by {author}, {time} on {date}
            </div>
          </div>
          <div class="flex items-baseline my-4">
            <div class="space-x-1 flex text-md">
              {/* md:text-lg  font-medium*/}
              <div class="flex items-center justify-center text-black text-justify">{content}</div>
            </div>
          </div>
          <Link href={`${readmore}`}>
            <span class="text-sm text-slate-500 hover:text-black  hover:border-b hover:border-slate-900">Read more</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
