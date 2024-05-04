import Image from "next/image";
import { Inter } from "next/font/google";
import { Skeleton } from "@/components/ui/skeleton";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ newsData }) {
  // const [newsData, setNewsData] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    // const fetchNews = async () => {
    //   let res = await (await fetch("https://inshortsapi.vercel.app/news?category=all")).json();
    //   setNewsData(res.data);
    // };
    // fetchNews();
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  }, []);

  if (loadingState) {
    return (
      <>
        <div className="h-20 flex justify-center">
          <Image src="/logo_inshorts.png" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }} alt="InShorts" />
          {/* <img src="" alt="InShorts" /> */}
        </div>
        <div className="container mx-auto md:px-52 py-8 pb-14">
          {newsData.data.map((news) => {
            return (
              <Card
                key={news.id}
                title={news.title}
                image={news.imageUrl}
                content={news.content}
                author={news.author}
                date={news.date}
                time={news.time}
                readmore={news.readMoreUrl}
              />
            );
          })}
        </div>
      </>
    );
  } else {
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
  }
}

export async function getServerSideProps() {
  let newsData = await (await fetch("https://inshortsapi.vercel.app/news?category=all")).json();

  return { props: { newsData } };
}
