import { FaFilePdf, FaPrint, FaLock, FaBook, FaSave } from "react-icons/fa";

interface IFreeHeader {
  children?: React.ReactNode;
  colorTheme?: string;
  downLoadFile: boolean;
}

const FreeHeader: React.FC<IFreeHeader> = ({
  children,
  colorTheme,
  downLoadFile,
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
          <li>การแจกฟรี</li>
        </ul>
      </div>
      <div className=" py-1   ">
        {downLoadFile == false
          ? iconName(
              "Save As รูปภาพ",
              "ต้องบันทึกทีละภาพ",
              <FaSave color="#FFFFFF" size={27} />,
              " bg-blue-400"
            )
          : iconName(
              "Download PDF File",
              "กดดาวน์โหลดที่ด้านล่างตัวอย่าง",
              <FaSave color="#FFFFFF" size={27} />,
              " bg-blue-400"
            )}
      </div>
    </>
  );
};

export default FreeHeader;
