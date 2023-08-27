/* eslint-disable @next/next/no-img-element */
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Detail/Exmple";
import Header from "../components/Header";
import HeaderPreview from "../components/HeaderPreview/HeaderPreview";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/Detail/DetailHeader";
import ContentHeader from "../components/Detail/ContentHeader";
import { NextPage } from "next";
import CategoryHeader from "../components/Detail/CategoryHeader";
import Footer from "../components/Footer/Footer";
import BookTitle from "../components/book/bookTitle";
import { getMockModel } from "../mock/initData";
import Router from "next/router";
const Home: NextPage = () => {
  const arr = [
    "1.png",
    "1.png",
    "1.png",
    "1.png",
    "1.png",
    "1.png",
    "1.png",
    "1.png",
  ];

  const elementTest = [
    "ipsum",
    "consectetur",
    "adipisicing",
    "commodi",
    "cumque",
    "veritatis",
    "architecto",
    "eveniet",
  ];

  const color = "bg-gray-400";

  const [IDetailMock, setIDetailMock] = useState<IDetailMock[]>([]);

  useEffect(() => {
    let get = getMockModel();
    setIDetailMock(get);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="bg-gray-100">
        {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
        <HeaderPreview
          imagePath={"imageExTest.png"}
          imagePathBlack={"imageExTest.png"}
          title={"Detail.title"}
          titleDetail={"Detail.titleDetail"}
          color={"bg-purple-600"}
        ></HeaderPreview>
        <Display>
          <CardBackground rounded="rounded-b-md" titleHerder="ใบงานแนะนำ">
            <div className="grid gap-5 grid-cols-2 sm:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
              {IDetailMock.map((data, index) => {
                return (
                  <BookTitle
                    onClick={() => Router.push(`/detail/${data.url}`)}
                    key={`${data.url}-key-url-${index}`}
                    imagePath={data.imageHaderFront}
                    title={data.title}
                    detail={data.titleDetail}
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
