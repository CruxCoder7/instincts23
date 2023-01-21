import { Footer, PageHead } from "components";
import Image from "next/image";
import { useTranslation } from "utils/hooks/use-translation";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <img
          src="/images/SNUC-blue.png"
          alt="SNUC"
          className="w-[100px] lg:w-[180px] absolute top-5 left-5"
        />
        <img
          src="/images/SSN-blue.png"
          alt="SSN"
          className="w-[80px] lg:w-[150px] absolute top-1 right-1"
        />
        <Image
          src="/images/Instincts.png"
          alt="Instincts 2023 - Lost Continent"
          height={0}
          width={700}
          className="mb-[4rem] lg:p-8"
        />
        <h1 className="text-[3rem] lg:text-[6rem] leading-[4rem] lg:leading-[8rem] font-title font-bold text-center mb-8 shimmer">
          COMING SOON
        </h1>
        <div className="p-4 shadow-lg rounded-br-3xl">
          <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
            March 9, 10 <span className="text-2xl">&</span> 11
          </p>
          <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
            Save the dates
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
