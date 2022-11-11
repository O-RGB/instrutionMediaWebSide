import { FaFilePdf, FaPrint, FaLock, FaBook, FaCheck } from "react-icons/fa";

interface IFormatHeader {
  children?: React.ReactNode;
  colorTheme?: string;
}

const FormatHeader: React.FC<IFormatHeader> = ({ children, colorTheme }) => {
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
      <div className="font-bold text-gray-700 text-xl ">
        <ul className="list-disc pl-2 ">
          <li>รูปแบบ</li>
        </ul>
      </div>
      <div className=" py-1  ">
        {iconName(
          "120 หน้า",
          "รวมปกหน้าหลัง",
          <FaBook color="#FFFFFF" size={27} />,
          "bg-green-400"
        )}

        {iconName(
          "มีเฉลย",
          "เฉลยส่งพร้อมกับไฟล์ใบงาน",
          <FaCheck color="#FFFFFF" size={27} />,
          "  bg-indigo-400"
        )}

        {iconName(
          "ไฟล์ PDF แก้ไขไม่ได้",
          "File Locked จากผู้พัฒนา",
          <FaLock color="#FFFFFF" size={27} />,
          "bg-pink-400"
        )}

        {iconName(
          "มีเครดิต",
          "เครดิตเพจติดทุกหน้า",
          <>
            <img src="../iconLogo.svg" alt="" className="w-6 h-6" />
          </>,
          "bg-purple-400"
        )}
      </div>
    </>
  );
};

export default FormatHeader;
