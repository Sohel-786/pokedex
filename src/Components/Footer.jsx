import { FaSquarePinterest } from "react-icons/fa6";
import { AiFillTwitterSquare } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-5">
      <div></div>

      <div className="bg-[#1f1f1f] text-white" style={{
        userSelect : 'none'
      }}>
        <div className="flex">
          <div>
            <h1>
              <img src="/assets/pokecompany.png" alt="pokecompany" />
            </h1>

            <ul>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Parents Guide
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  About Our Company
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Select a Country/Region
                </a>
              </li>
              <li>
                <a
                  className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline"
                  href="#"
                >
                  Press Site
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <ul className="flex">
              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                  }}
                ></div>
              </li>
              
              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX : '-175px'
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX : '-70px'
                  }}
                ></div>
              </li>

              <li className="">
                <div
                  className="h-[33.9988px] w-[35px] mr-[6.4px] mb-[8px] cursor-pointer"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX : '-210px'
                  }}
                ></div>
              </li>

              <li className="mr-[6.4px] mb-[8px] z-20">
                <div
                  className="h-[33.9988px] w-[35px] cursor-pointer"
                  style={{
                    backgroundImage: 'url("/footerIcon/social-icons.png")',
                    backgroundAttachment: "scroll",
                    backgroundPositionX : '-245px',
                  }}
                ></div>
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
