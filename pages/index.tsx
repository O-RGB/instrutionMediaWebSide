/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Exmple";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
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
  return (
    <>
      <Header></Header>
      <div className="bg-gray-100">
        <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" />
        <Display>
          <CardBackground>
            <Exmple imagePathList={arr}></Exmple>
            <Exmple imagePathList={arr}></Exmple>
          </CardBackground>
        </Display>
        <div className="w-full h-20 bg-black"></div>
      </div>
    </>
  );
}
