import { useEffect, useState } from "react";
import PokemonType from "./PokemonType";
import { nanoid } from "nanoid";

function Weakness({ typesData }) {
  const [weakness, setWeakness] = useState([]);

  useEffect(() => {
    let weaknessData = {};

    Object.keys(typesData).forEach((el) => {
      let defense = typesData[el].defense;

      Object.entries(defense).forEach(([key, value]) => {
        switch (key) {
          case "double":
            value.forEach((i) => {
              weaknessData[i] ? (weaknessData[i] *= 2) : (weaknessData[i] = 2);
            });
            break;
          case "half":
            value.forEach((i) => {
              weaknessData[i]
                ? (weaknessData[i] *= 0.5)
                : (weaknessData[i] = 0.5);
            });
            break;
          case "zero":
            value.forEach((i) => {
              weaknessData[i] = 0;
            });
            break;
        }
      });
    });

    let weaknessFinal = [];
    Object.entries(weaknessData).forEach(([key, value]) => {
      if (value >= 2) {
        weaknessFinal.push(key);
      }
    });

    setWeakness(weaknessFinal);
  }, []);

  return (
    <>
      {weakness.map((el) => (
        <PokemonType key={nanoid(4)} width={"32%"} type={el} rounded={"5px"} />
      ))}
    </>
  );
}

export default Weakness;
