import Counter from "./index";
const CouterLayout = () => {
  return (
    <div className="w-full px-10 py-5">
      <div className=" w-1/3 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Counter 0</h1>
      </div>
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
};

export default CouterLayout;
