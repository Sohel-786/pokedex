function StatsLi({ data_value, name }) {

    const top = `${(100 - (6.666666666666667 * data_value))}%`;
  return (
    <>
      <ul className="relative overflow-hidden bg-white list-none">
        <li
          className={`bg-[#30a7d7] h-[120%] absolute z-[1] w-full animate-height`}
          style={{
            top : top
          }}
        ></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
        <li className="relative w-full z-[2] bg-transparent border-b-[3.704px] border-[#a4a4a4] h-[0.7em] "></li>
      </ul>
      <span className="text-[10px] leading-[10px] text-[#212121] w-full text-center block">{name}</span>
    </>
  );
}

export default StatsLi;
