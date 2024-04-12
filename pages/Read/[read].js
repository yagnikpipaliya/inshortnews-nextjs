import { useRouter } from "next/router";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export const getStaticPaths = async () => {
  // Specifying all the routes to be
  // pre-rendered by next js
  return {
    paths: [
      { params: { read: "india" } },
      { params: { read: "business" } },
      { params: { read: "politics" } },
      { params: { read: "sports" } },
      { params: { read: "technology" } },
      { params: { read: "startups" } },
      { params: { read: "entertainment" } },
      { params: { read: "hatke" } },
      { params: { read: "international" } },
      { params: { read: "automobile" } },
      { params: { read: "science" } },
      { params: { read: "travel" } },
      { params: { read: "miscellaneous" } },
      { params: { read: "fashion" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // We will destructure read from the parameters
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const { read } = params;

  // Fetching user data
  const res = await fetch(`${URL}${read}`);
  const newsData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      newsData: newsData.data,
    },
  };
};

const Read = ({ newsData }) => {
  // const router = useRouter();
  // const [newsData, setNewsData] = useState([]);
  // const API = process.env.NEXT_PUBLIC_BASE_URL;
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const read=await router.query.read;
  //     let res = await (await fetch(`${API+read}`)).json();
  //     setNewsData(res.data);
  //   };
  //   fetchNews();
  // }, [router.query.read]);

  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  });

  if (loadingState) {
    return (
      <>
        <div className="h-20 flex justify-center">
          <Image src="/logo_inshorts.png" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="InShorts" />
        </div>
        <div className="container mx-auto md:px-52 pt-4 pb-14">
          {/* md:px-52 */}
          {/* <div className="md:container"> */}
          {/* <div className="md:container"> */}
          {newsData.map((news) => {
            return (
              <Card key={news.id} title={news.title} image={news.imageUrl} content={news.content} author={news.author} date={news.date} time={news.time} readmore={news.readMoreUrl} />
            );
          })}
          {/* </div> */}
          {/* </div> */}
        </div>
      </>
    );
  } else {
    // return [...Array(3)].map((item, index) => {
    return (
      <>
        <div className="h-20 flex justify-center">
          <Image src="/logo_inshorts.png" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="InShorts" />
        </div>
        {[...Array(3)].map((item, index) => {
          return (
            <div key={index} className="container mx-auto py-8">
              {/* md:px-52 */}
              <div className="md:container">
                <div className="md:container">
                  <div className="flex flex-col md:flex-row p-2 mb-4 w-full">
                    <Skeleton className="h-[160px] w-full md:w-1/3 " />
                    {/* w-[250px] */}
                    <div className="space-y-2 md:ps-4 w-full">
                      <Skeleton className="h-6" />
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-20 " />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
    // });
  }
};

export default Read;
