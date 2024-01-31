const Counter = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-black text-white text-lg hover:bg-black/15">
        Increment
      </button>
      <button className="px-4 py-2 bg-black text-white text-lg hover:bg-black/15">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
