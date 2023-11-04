import EqualLayout from "../Layouts/EqualLayout";

function Pokedex() {
  return (
    <EqualLayout>
      <section
        className="min-h-[300px] max-w-[1280px] mx-auto bg-white flex flex-col items-center overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/whitebgImage.png")',
        }}
      >
        <div className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
          <h1 className="font-openSans text-[30px] text-[#919191] leading-[37.5px] mt-[25px] mb-[16px]">
            Pokédex
          </h1>
          <div className="w-[1280px] mx-auto relative left-[-161.6px]">
            <div className="w-full bg-[#313131] flex flex-col items-center">
              <div className="w-[77%] flex">

                <div className="w-[41.96%] pl-[14.5px] border-[2px] border-white pt-[32px]">
                  <label
                    htmlFor="search"
                    className="font-openSans text-[26.8px] leading-[26.8px] text-white"
                  >
                    Name or Number
                  </label>

                  <div className="pt-[13px] mb-[10px] w-full">
                    <span className="border-[2.96296px] bg-white border-[#616161] inline-block rounded-[5px] w-[80.5425%]">
                        <input type="text" id="search" name="" className="py-[8px] px-[10px] font-roboto text-[16px] leading-[24px] rounded-[5px] w-full" />
                    </span>
                    <div className="bg-[#ee6b2f] hover:bg-[#da471b] py-[12.600px] px-[21px] inline-block rounded-[5px]">
                        <img src="/assets/searchbtn.png" alt="Search Btn" />
                    </div>
                  </div>
                </div>

                <div className="w-[41.96%] bg-[#4dad5b] rounded-[5px] mt-[32px]">
                    <h1 className="my-[15px] ml-[20px] mr-[10px] font-openSans text-[19px] text-white leading-[25px]">Search for a Pokémon by name or using its National Pokédex number.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EqualLayout>
  );
}

export default Pokedex;
