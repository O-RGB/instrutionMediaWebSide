import { GetServerSideProps, NextPage } from "next";
import { createRef, useEffect, useState } from "react";
import CardBackground from "../../components/CardBackground";
import CategoryHeader from "../../components/Detail/CategoryHeader";
import ContentHeader from "../../components/Detail/ContentHeader";
import DetailHeader from "../../components/Detail/DetailHeader";
import Exmple from "../../components/Detail/Exmple";
import Display from "../../components/Display";
import Header from "../../components/Header";
import HeaderPreview from "../../components/HeaderPreview";
import { DetailMock } from "../../mock/Detail";
import React from "react";
import NextHead from "../../components/NextHead";
import FormatHeader from "../../components/Detail/FormatHeader";
import FreeHeader from "../../components/Detail/FreeHeader";
import Footer from "../../components/Footer/Footer";
import { getMockModel } from "../../mock/initData";
import { getFile } from "../../api/fetch/fetcher/getFile";

const Detail: NextPage = ({ get }: any) => {
  // const DetailMockState: IDetailMock | undefined = props;
  // const previewMode = preview;
  const ItemWork: ItemWork = get;
  const color = "bg-gray-400";
  var arrRef: any[] = [];

  useEffect(() => {
    console.log(get);
  }, [get]);

  if (!ItemWork) {
    return <></>;
  }

  return (
    <>
      {/* <NextHead
        title={ItemWork.name}
        description={ItemWork.detail}
        image={ItemWork.frontUrl}
        url={`https://instrutionmediadetail.vercel.app/detail/${ItemWork.id}`}
      ></NextHead>
      <div>
        <br />
        {JSON.stringify(ItemWork)}
      </div> */}

      <>
        <NextHead
          title={ItemWork.name}
          description={ItemWork.detail}
          image={ItemWork.frontUrl}
          url={`https://instrutionmediadetail.vercel.app/detail/${ItemWork.id}`}
        ></NextHead>

        <Header></Header>
        <div className="bg-gray-100">
          {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
          <HeaderPreview
            imagePath={ItemWork.frontUrl}
            imagePathBlack={ItemWork.blackUrl}
            title={ItemWork.name}
            titleDetail={ItemWork.detail}
            color={ItemWork.color}
          ></HeaderPreview>
          <Display>
            <CardBackground rounded="rounded-b-md" titleHerder="รายละเอียด">
              <CategoryHeader tag={[]}></CategoryHeader>
              <DetailHeader
                file={ItemWork.price.file}
                print={ItemWork.price.print}
                colorTheme={color}
              ></DetailHeader>
              <FormatHeader
                colorTheme={color}
                paperNumber={ItemWork.price.paper}
                paperCheck={ItemWork.isAnswer}
                fileEdit={false}
                craditOnPaper={true}
              ></FormatHeader>
              {/* {DetailMockState != undefined ? (
                (DetailMockState as IDetailMock).freeMode == true ? (
                  <>
                    <FreeHeader
                      downLoadFile={
                        (DetailMockState as IDetailMock).downLoadFile ?? false
                      }
                      colorTheme={color}
                    ></FreeHeader>
                  </>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )} */}

              <ContentHeader
                scrollToDisable={true}
                arrRef={arrRef}
                colorTheme={color}
                contect={ItemWork.content.map((x) => x.image)}
              ></ContentHeader>
              <div className="pb-2">
                <div className="font-bold bg-gray-100 p-3 -mx-6  text-gray-500  shadow-sm">
                  ตัวอย่าง
                </div>
              </div>

              {/* <>
                {(DetailMockState as IDetailMock).examGroup.map((e, i) => {
                  arrRef.push(createRef());
                  return (
                    <>
                      <React.Fragment key={`exam_g_${i}`}>
                        <div ref={arrRef[i]}>
                          <Exmple
                            colorTheme={color}
                            number={`${i + 1}`}
                            content={e.name}
                            contentDetail={e.pageNumber}
                            imagePathList={e.imagePath}
                          ></Exmple>
                        </div>
                      </React.Fragment>
                    </>
                  );
                })}
              </> */}

              <div className="h-auto">
                <div className=""></div>
              </div>
            </CardBackground>
          </Display>
          <Footer></Footer>
        </div>
      </>
    </>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // let idTemp = context.params.id;

  // idTemp = (idTemp as string).split("?")[0];

  console.log(context.params.id);

  let test = await getFile(`?mode=string&id=${context.params.id}`);

  return { props: { get: test } };
};
