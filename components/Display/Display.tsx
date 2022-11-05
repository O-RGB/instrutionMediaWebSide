interface IDisplay {
  children?: React.ReactNode;
}

const Display: React.FC<IDisplay> = ({ children }) => {
  return (
    <>
      <div className="grid  max-w-7xl m-auto p-7    ">{children}</div>
    </>
  );
};

export default Display;
