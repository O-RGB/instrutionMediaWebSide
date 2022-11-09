interface ICardBackground {
  children?: React.ReactNode;
  padding?: string;
  rounded?: string;
  titleHerder?: string;
}

const CardBackground: React.FC<ICardBackground> = ({
  children,
  padding,
  rounded,
  titleHerder,
}) => {
  padding = padding ?? "py-5 px-8 sm:px-8";
  rounded = rounded ?? "rounded-lg";
  return (
    <>
      <div className="">
        {titleHerder && (
          <>
            <div className="font-bold bg-gray-200 p-3  text-gray-500 rounded-t-md shadow-sm">
              {titleHerder}
            </div>
          </>
        )}
        <div className={`bg-white ${padding} ${rounded}`}>{children}</div>
      </div>
    </>
  );
};

export default CardBackground;
