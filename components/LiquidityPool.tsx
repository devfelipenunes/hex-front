const data = [
  {
    name: "Ether",
    percentage: "16% a.a",
  },
  {
    name: "BTC",
    percentage: "16% a.a",
  },
];

const LiquidityPool = () => {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-0 lg:px-10 px-6">
      <div className="flex flex-col justify-center items-center mt-8 gap-8 bg-black py-5 px-10 rounded-2xl">
        <p className="text-left">Meus Investimentos</p>

        <div className="flex flex-col w-full justify-between gap-4">
          {data.map((investment) => (
            <div className="flex flex-row w-full justify-between border-2 border-gray-500 p-2 rounded-4xl px-5 items-center">
              <div className="w-8 h-8 bg-[#C6FDB8] rounded-full" />
              <div className="flex flex-col items-end">
                <p>{investment.name}</p>
                <p>{investment.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiquidityPool;
