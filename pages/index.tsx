/* eslint-disable @next/next/no-img-element */
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Detail/Exmple";
import Header from "../components/Header";
import HeaderPreview from "../components/HeaderPreview/HeaderPreview";
import React from "react";
import DetailHeader from "../components/Detail/DetailHeader";
import ContentHeader from "../components/Detail/ContentHeader";
import { NextPage } from "next";
import CategoryHeader from "../components/Detail/CategoryHeader";
import Footer from "../components/Footer/Footer";
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
          <CardBackground
            rounded="rounded-b-md"
            titleHerder="ใบงานแนะนำ"
          ></CardBackground>
          <div className="min-h-[500px]"></div>
        </Display>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
