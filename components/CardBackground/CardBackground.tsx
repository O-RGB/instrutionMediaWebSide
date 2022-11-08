interface ICardBackground {
  children?: React.ReactNode;
  padding?:string
  rounded?:string
}

const CardBackground: React.FC<ICardBackground> = ({ children,padding,rounded }) => {
  padding = padding ?? 'p-3 sm:p-8';
  rounded = rounded ?? 'rounded-lg';
  return (
    <>
      <div className={`bg-white ${padding} ${rounded}`}>{children}</div>
    </>
  );
};

export default CardBackground;
