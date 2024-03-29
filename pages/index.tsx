/* eslint-disable @next/next/no-img-element */
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Detail/Exmple";
import Header from "../components/Header";
import HeaderPreview from "../components/HeaderPreview/HeaderPreview";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/Detail/DetailHeader";
import ContentHeader from "../components/Detail/ContentHeader";
import { GetServerSideProps, NextPage } from "next";
import CategoryHeader from "../components/Detail/CategoryHeader";
import Footer from "../components/Footer/Footer";
import BookTitle from "../components/book/bookTitle";
import { getMockModel } from "../mock/initData";
import Router from "next/router";
import SwiperCustom from "../components/swiper";
import { SwiperSlide } from "swiper/react";
import { getItemPreview } from "../api/fetch/fetcher/itemPreview";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NextHead from "../components/NextHead";

const Home: NextPage = () => {
  const getItemPreviewlist = async () => {
    let getItem = await getItemPreview(`?mode=preview`);
    return getItem;
  };

  const [itemPreview, setItemPreview] = useState<ItemPreview[] | undefined>(
    undefined
  );

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getItemPreviewlist().then((data) => {
      if (data.item) {
        setItemPreview(data.item);
      }
    });
  }, []);

  return (
    <>
      {loading && (
        <>
          <div className="fixed w-full h-full bg-black bg-opacity-25 flex justify-center items-center z-[99]">
            <div className=" w-20 h-20 bg-white rounded-md flex justify-center items-center flex-col gap-2">
              <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-400"></AiOutlineLoading3Quarters>
              <div className="text-xs">กำลังโหลด</div>
            </div>
          </div>
        </>
      )}
      <NextHead
        title={"Instrution Media Detail ดูตัวอย่างงาน"}
        description={
          "เว็บสำหรับดูตัวอย่างงาน รวบรวมทั้งงานขายและงานแจกฟรีไว้ที่นี่ทั้งหมด บอกรายละเอียดอย่างดี ทำสีสรรค์สวยงาม"
        }
        image={"/image.png"}
        url={`https://instrutionmediadetail.vercel.app`}
      ></NextHead>
      <Header></Header>
      <div className="bg-gray-100">
        <SwiperCustom
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          autoplay
          autoHeight
          observer
          observeParents
        >
          {itemPreview?.map((data, index) => {
            if (data.frontUrl && data.color && data.detail && data.name) {
              return (
                <SwiperSlide key={`header-in-${index}`}>
                  <HeaderPreview
                    height="h-full sm:h-72"
                    imagePath={data.frontUrl ?? ""}
                    title={data.name}
                    titleDetail={data.detail}
                    color={data.color ?? ""}
                    file={data.file}
                    book={data.book}
                    print={data.print}
                  ></HeaderPreview>
                </SwiperSlide>
              );
            }
          })}
          {!itemPreview && (
            <>
              <HeaderPreview
                height="h-full sm:h-72"
                loadingMode
                imagePath={""}
                title={""}
                titleDetail={""}
                color={""}
              ></HeaderPreview>
            </>
          )}
        </SwiperCustom>
        <Display>
          <CardBackground rounded="rounded-b-md" titleHerder="ใบงานแนะนำ">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center ">
              {itemPreview?.map((data, index) => {
                if (
                  data.frontUrl &&
                  data.color &&
                  data.detail &&
                  data.name &&
                  data.id
                )
                  return (
                    <Link
                      key={`item-book-k-${index}`}
                      onClick={() => {
                        setLoading(true);
                      }}
                      href={`/detail/${data.id.toLocaleLowerCase()}`}
                    >
                      <BookTitle
                        key={`${data.id}-key-url-${index}`}
                        imagePath={data.frontUrl ?? ""}
                        title={data.name}
                        detail={data.detail}
                        file={data.file}
                        book={data.book}
                        print={data.print}
                      ></BookTitle>
                    </Link>
                  );
              })}

              {!itemPreview && (
                <>
                  <BookTitle
                    load
                    title={"data.name"}
                    detail={"data.detail"}
                  ></BookTitle>
                  <BookTitle
                    load
                    title={"data.name"}
                    detail={"data.detail"}
                  ></BookTitle>
                  <BookTitle
                    load
                    title={"data.name"}
                    detail={"data.detail"}
                  ></BookTitle>
                  <BookTitle
                    load
                    title={"data.name"}
                    detail={"data.detail"}
                  ></BookTitle>
                  <BookTitle
                    load
                    title={"data.name"}
                    detail={"data.detail"}
                  ></BookTitle>
                </>
              )}
            </div>
          </CardBackground>
          {/* <div className="min-h-[500px]"></div> */}
        </Display>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
