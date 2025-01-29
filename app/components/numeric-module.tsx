interface NumericModuleType {
  textArray: string[];
}

const NumericModule = ({ textArray }: NumericModuleType) => {
  return (
    <div className="p-4">
      <h1 className="text-[60px] leading-[60px] md:text-[100px] md:leading-[100px] font-extrabold">
        {textArray[0]}
      </h1>
      <p className="text-zinc-500">{textArray[1]}</p>
      <p className="text-zinc-500">{textArray[2]}</p>
    </div>
  );
};

export default NumericModule;
