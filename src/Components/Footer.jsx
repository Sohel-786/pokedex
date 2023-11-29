function Footer() {
  return (
    <footer>
      <div className="max-w-[1024px] h-[36px] mx-auto">
        <div className="w-[85.49%] bg-white h-[6px] relative ml-[7.2525%] footerDivider"></div>
      </div>

      <div
        className="bg-[#1f1f1f] text-white w-full flex justify-center pb-4"
        style={{
          userSelect: "none",
        }}
      >
        <div className="flex max-w-[1024px] gap-5 justify-center">
          <div className="w-[27.46%] mt-7 float-left border-r-[2px] border-[#000]">
            <h1 className="mx-[8.800px] mb-[17.600px]">
              <img src="/assets/pokecompany.png" alt="pokecompany" />
            </h1>

            <ul className="flex flex-col">
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Parents Guide
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  About Our Company
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Select a Country/Region
                </a>
              </li>
              <li>
                <a
                  className="ml-[8px] mb-[8px] pl-[8px] font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Press Site
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center w-[27.46%] mt-7 float-left border-r-[2px] border-[#000]">
            <ul className="flex gap-1">
              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX: "-175px",
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX: "-70px",
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX: "-210px",
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX: "-245px",
                  }}
                ></div>
              </li>
            </ul>
          </div>

          <div className="w-[27.46%] mt-7 float-left px-[20.388px]">
            <div>
              <div>
                <img src="/assets/caru.png" alt="caru" />
              </div>
              <ul className="font-roboto text-[11.008px] leading-[11.008px]">
                <li className="py-[5.504px] pt-[8px]">
                  <a className="hover:underline" href="#">
                    Terms of Use
                  </a>
                </li>
                <li className="py-[5.504px]">
                  <a className="hover:underline" href="#">
                    Privacy Notice
                  </a>
                </li>
                <li className="py-[5.504px]">
                  <a className="hover:underline" href="#">
                    Cookie Page
                  </a>
                </li>
                <li className="py-[5.504px]">
                  <a className="hover:underline" href="#">
                    Legal Info
                  </a>
                </li>
                <li className="py-[5.504px] pb-[8px]">
                  <a className="hover:underline" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <p className="p-[5] font-roboto text-[11.008px] leading-[11.5px]">
              ©2023 Pokemon. ©1995 - 2023 Nintendo/Creatures Inc./GAME FREAK
              inc. TM, ®Nintendo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
