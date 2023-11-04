import EqualLayout from "../Layouts/EqualLayout";

function Pokedex() {
  return (
    <EqualLayout>
      <section
        className="min-h-[300px] max-w-[1280px] mx-auto bg-white flex flex-col items-center"
        style={{
          backgroundImage: 'url("/assets/whitebgImage.png")',
        }}
      ></section>
    </EqualLayout>
  );
}

export default Pokedex;
