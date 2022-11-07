interface ICardBackground {
  children?: React.ReactNode;
}

const CardBackground: React.FC<ICardBackground> = ({ children }) => {
  return (
    <>
      <div className="bg-white p-3 sm:p-8 rounded-lg">{children}</div>
    </>
  );
};

export default CardBackground;
