/* eslint-disable @next/next/no-img-element */
import CardBackground from "../components/CardBackground";
import Display from "../components/Display";
import Exmple from "../components/Exmple";
import Header from "../components/Header";
import HeaderPreview from "../components/HeaderPreview/HeaderPreview";

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
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-2">
              <div className=" sticky top-14 overflow-scroll">

              <CardBackground>

                <div className="w-full h-screen ">

                </div>
                

              </CardBackground>
              </div>
            </div>
            <div className="col-span-10">
              <CardBackground>
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
