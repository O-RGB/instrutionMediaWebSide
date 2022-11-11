import { FaFilePdf, FaPrint } from "react-icons/fa";

interface IDetailHeader {
  children?: React.ReactNode;
  colorTheme?: string;
  print?: number;
  file?: number;
}

const DetailHeader: React.FC<IDetailHeader> = ({
  children,
  colorTheme,
  print,
  file,
}) => {
  colorTheme = colorTheme ?? "bg-gray-500";

  const iconName = (
    title: string,
    detail: string,
    icon: any,
    color?: string
  ) => {
    return (
      <>
        <div className="flex gap-2 px-2 p-2">
          <div className={`flex  ${color ?? colorTheme} w-12 h-12 rounded-md`}>
            <div className="m-auto">{icon}</div>
          </div>
          <div className="flex">
            <div className="m-auto ">
              <div className="font-bold text-base  text-gray-700">{title}</div>
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
      <div className=" py-1   ">
        {print
          ? iconName(
              "ปริ้นไม่เข้าเล่ม",
              "270 บาทรวมส่ง",
              <FaPrint color="#FFFFFF" size={27} />,
              "bg-orange-400"
            )
          : iconName(
              "ไม่รับปริ้น",
              "ไม่อนุญาตให้ปริ้นเป็นเอกสาร",
              <FaPrint color="#FFFFFF" size={27} />,
              "bg-gray-300"
            )}

        {file
          ? iconName(
              "ไฟล์ PDF",
              "99 บาท",
              <FaFilePdf color="#FFFFFF" size={27} />,
              "bg-red-400"
            )
          : iconName(
              "ไม่ขายไฟล์ PDF",
              "ไม่อนุญาตให้ขายไฟล์",
              <FaFilePdf color="#FFFFFF" size={27} />,
              "bg-gray-300"
            )}
      </div>
    </>
  );
};

export default DetailHeader;
