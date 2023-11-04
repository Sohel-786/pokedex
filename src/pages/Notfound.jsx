import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <div
    style={{
        backgroundImage : 'url("/assets/blackbgImage.png")'
    }}
    className="h-screen w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-[200px] text-white font-semibold">404</h1>
      <p className="relative text-xl -top-36 font-bold bg-gray-300 text-orange-600 font-mono -rotate-12">
        Page not found...
      </p>
      <button
        aria-label="Go Back to Previous Page"
        onClick={() => {
          navigate(-1);
        }}
        className="px-6 py-3 rounded-xl text-white bg-transparent font-bold transition-all duration-300 ease-in-out relative -top-10 border-2 border-white hover:bg-purple-900 hover:scale-125 hover:text-white hover:border-sky-300"
      >
        Go Back
      </button>
    </div>
  );
}

export default Notfound;
