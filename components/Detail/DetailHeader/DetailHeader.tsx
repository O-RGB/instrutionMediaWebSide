import { FaFilePdf, FaPrint } from "react-icons/fa";

interface IDetailHeader {
  children?: React.ReactNode;
  colorTheme?:string
}

const DetailHeader: React.FC<IDetailHeader> = ({ children,colorTheme }) => {

    colorTheme = colorTheme ?? "bg-gray-500";

  const iconName = (title: string, detail: string, icon: any) => {
    return (
      <>
        <div className="flex gap-2 px-2 p-2">
          <div className={`flex  ${colorTheme} w-12 h-12 sm:w-14 sm:h-14 rounded-md`}>
            <div className="m-auto">{icon}</div>
          </div>
          <div className="flex">
            <div className="m-auto ">
              <div className="font-bold text-base  text-gray-700">
                {title}
              </div>
              <div className="text-sm text-gray-700">{detail}</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="font-bold text-gray-700 text-xl">
        <ul className="list-disc pl-2 ">
          <li>ราคาสินค้า</li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-12 py-3  ">
        <div className="col-span-6 ">
          {iconName(
            "ปริ้นไม่เข้าเล่ม",
            "270 บาทรวมส่ง",
            <FaPrint color="#FFFFFF" size={18} />
          )}
        </div>
        <div className="col-span-6 ">
          {iconName("ไฟล์ PDF", "99 บาท", <FaFilePdf color="#FFFFFF" size={18}/>)}
        </div>
      </div>
    </>
  );
};

export default DetailHeader;
