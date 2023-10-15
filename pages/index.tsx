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
const Home: NextPage = () => {
  const getItemPreviewlist = async () => {
    let getItem = await getItemPreview(`?mode=preview`);
    return getItem;
  };

  const [itemPreview, setItemPreview] = useState<ItemPreview[] | undefined>(
    undefined
  );

  useEffect(() => {
    getItemPreviewlist().then((data) => {
      if (data.item) {
        setItemPreview(data.item);
      }
    });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="bg-gray-100">
        {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}

        <SwiperCustom autoplay>
          {itemPreview?.map((data, index) => {
            if (data.frontUrl && data.color && data.detail && data.name) {
              return (
                <SwiperSlide key={`header-in-${index}`}>
                  <HeaderPreview
                    imagePath={data.frontUrl ?? ""}
                    title={data.name}
                    titleDetail={data.detail}
                    color={data.color ?? ""}
                  ></HeaderPreview>
                </SwiperSlide>
              );
            }
          })}
          {!itemPreview && (
            <>
              <HeaderPreview
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
            <div className="grid gap-5 grid-cols-2 sm:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
              {itemPreview?.map((data, index) => {
                if (data.frontUrl && data.color && data.detail && data.name)
                  return (
                    <BookTitle
                      onClick={() => Router.push(`/detail/${data.id}`)}
                      key={`${data.id}-key-url-${index}`}
                      imagePath={data.frontUrl ?? ""}
                      title={data.name}
                      detail={data.detail}
                    ></BookTitle>
                  );
              })}
            </div>
          </CardBackground>
          <div className="min-h-[500px]"></div>
        </Display>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
