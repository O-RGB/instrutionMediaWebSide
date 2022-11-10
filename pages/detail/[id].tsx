import { NextPage } from "next";
import { useRouter }  from 'next/router'
import { useEffect, useState } from "react";
import CardBackground from "../../components/CardBackground";
import CategoryHeader from "../../components/Detail/CategoryHeader";
import ContentHeader from "../../components/Detail/ContentHeader";
import DetailHeader from "../../components/Detail/DetailHeader";
import Exmple from "../../components/Detail/Exmple";
import Display from "../../components/Display";
import Header from "../../components/Header";
import HeaderPreview from "../../components/HeaderPreview";
import { DetailModel } from "../../model/Detail";

const Detail: NextPage = () => {
  const [DetailCollection, setDetailCollection] = useState<
    DetailCollection | undefined
  >(undefined);
  const router = useRouter();
  const { id } = router.query;
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

  useEffect(() => {
    if (id) {
      let idTemp = id;
      idTemp = (idTemp as string).split("?")[0];
      console.log(idTemp);
      var detail = new DetailModel();
      detail.getDetailById(idTemp).then((voids) => {
        Promise.all([detail.resolveCategory(), detail.resolveExamGroup()]).then(
          (data) => {
            setDetailCollection(detail.toDetailCollection());
          }
        );
      });
    }
  }, [id]);

  return (
    <>
      <Header></Header>
      <div className="bg-gray-100">
        {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
        <HeaderPreview
          imagePath={"../imageExTest.png"}
          imagePathBlack={"../imageExTest.png"}
          title={
            DetailCollection != undefined
              ? (DetailCollection as DetailCollection).title
              : ""
          }
          titleDetail={
            DetailCollection != undefined
              ? (DetailCollection as DetailCollection).titleDetail
              : ""
          }
          color={"bg-purple-600"}
        ></HeaderPreview>
        <Display>
          <div className="grid grid-cols-12 gap-3 ">
            <div className="hidden lg:col-span-2 lg:block">
              <div className=" sticky top-16 overflow-scroll">
                <CardBackground
                  padding="p-0 py-0"
                  rounded="rounded-b-md"
                  titleHerder="ใบงานแนะนำ"
                >
                  <div className="w-full h-screen   ">
                    {/* <img src="imageExTest.png" alt="" className="w-full h-auto"/> */}
                  </div>
                </CardBackground>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <CardBackground rounded="rounded-b-md" titleHerder="รายละเอียด">
                <CategoryHeader
                  tag={
                    DetailCollection != undefined
                      ? (DetailCollection as DetailCollection).category
                      : []
                  }
                ></CategoryHeader>
                <DetailHeader colorTheme={color}></DetailHeader>
                <ContentHeader
                  colorTheme={color}
                  contect={
                    DetailCollection != undefined
                      ? (DetailCollection as DetailCollection).content
                      : []
                  }
                ></ContentHeader>
                <div className="pb-2">
                  <div className="font-bold bg-gray-100 p-3 -mx-6  text-gray-500  shadow-sm">
                    ตัวอย่าง
                  </div>
                </div>
                <Exmple
                  colorTheme={color}
                  number="1"
                  content="จำนวนเฉพาะ"
                  contentDetail="ตั้งแต่หน้า 1 - 50"
                  imagePathList={arr}
                ></Exmple>
                <Exmple
                  colorTheme={color}
                  number="2"
                  content="การบวก"
                  contentDetail="ตั้งแต่หน้า 50 - 100"
                  imagePathList={arr}
                ></Exmple>
                <Exmple
                  colorTheme={color}
                  number="3"
                  content="การการหาร"
                  contentDetail="ตั้งแต่หน้า 100 - 110"
                  imagePathList={arr}
                ></Exmple>
                <Exmple
                  colorTheme={color}
                  number="4"
                  content="กำ"
                  contentDetail="ตั้งแต่หน้า 110 - 150"
                  imagePathList={arr}
                ></Exmple>
                <div className="font-bold bg-gray-200 p-3 -mx-6 rounded-xl text-gray-500  shadow-sm">
                  ใบงานที่เกี่ยวข้อง
                </div>
                <div className="h-auto">
                  <div className=""></div>
                </div>
              </CardBackground>
            </div>
          </div>
        </Display>
        <div className="w-full h-20 bg-gray-600"></div>
      </div>
    </>
  );
};

export default Detail;