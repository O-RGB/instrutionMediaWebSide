/* eslint-disable @next/next/no-img-element */
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Exmple";
import Header from "../components/Header";
import HeaderPreview from "../components/HeaderPreview/HeaderPreview";
import { FaPrint, FaFile, FaFilePdf } from "react-icons/fa";

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

  const iconName = (title:string, detail:string,icon:any) => {
    return (
      <>
        <div className="flex gap-4">
          <div className="flex bg-gray-500 w-14 h-14 rounded-full">
            <div className="m-auto">
              {icon}
              
            </div>
          </div>
          <div className="flex">
            <div className="m-auto">
              <div className="font-bold">{title}</div>
              <div className="text-sm">{detail}</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Header></Header>
      <div className="bg-gray-100">
        {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
        <HeaderPreview
          imagePath={"imageExTest.png"}
          imagePathBlack={"imageExTest.png"}
          title={"คณิตศาสตร์ ป.1"}
          titleDetail={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit commodi nisi cumque veritatis eligendi eveniet architecto illo laudantium. Culpa ullam, et delenit"
          }
          color={"bg-purple-600"}
        ></HeaderPreview>
        <Display>
          <div className="grid grid-cols-12 gap-3 ">
            <div className="hidden lg:col-span-2 lg:block">
              <div className=" sticky top-14 overflow-scroll">
                <CardBackground padding="p-0 py-0" rounded="rounded-b-md">
                  <div className="w-full h-screen ">
                    <div className="font-bold bg-gray-200 p-3 text-gray-700  rounded-t-md shadow-sm">
                      ใบงานแนะนำ
                    </div>
                    {/* <img src="imageExTest.png" alt="" className="w-full h-auto"/> */}
                  </div>
                </CardBackground>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <div className="font-bold bg-gray-200 p-3  text-gray-700 rounded-t-md shadow-sm">
                รายละเอียด
              </div>
              <CardBackground rounded="rounded-b-md">
                <div className="pb-5">
                  <div className="pb-4  ">
                    <div className="grid grid-cols-12 py-5">
                      <div className="col-span-6">{iconName("ปริ้นไม่เข้าเล่ม",'270 บาทรวมส่ง',<FaPrint color="#FFFFFF" />)}</div>
                      <div className="col-span-6">{iconName("ไฟล์","99 บาท",<FaFilePdf color="#FFFFFF" />)}</div>
                    </div>
                    <div className="py-3">

                    </div>

                    <div className="text-lg font-bold text-gray-700">
                      จำนวนเฉพาะ
                    </div>
                    <div className="text-sm text-gray-700">
                      ตั้งแต่หน้าที่ 10 - 50
                    </div>
                  </div>
                  <div></div>
                  <hr />
                </div>
                <Exmple imagePathList={arr}></Exmple>
                <div className="py-5">
                  <div className="py-4  ">
                    <div className="text-lg font-bold text-gray-700">
                      จำนวนเฉพาะ
                    </div>
                    <div className="text-sm text-gray-700">
                      ตั้งแต่หน้าที่ 10 - 50
                    </div>
                  </div>
                  <div></div>
                  <hr />
                </div>
                <Exmple imagePathList={arr}></Exmple>
              </CardBackground>
            </div>
          </div>
        </Display>
        <div className="w-full h-20 bg-black"></div>
      </div>
    </>
  );
}
