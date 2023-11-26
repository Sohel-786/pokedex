import axios from "axios";

export async function handleDamage(data) {
    const { data: typeInfo } = await axios.get(data.type.url);
    var double = [],
      zero = [],
      half = [];
  
    typeInfo["damage_relations"].double_damage_from.forEach((el) => {
      double.push(el.name);
    });
    typeInfo["damage_relations"].half_damage_from.forEach((el) => {
      half.push(el.name);
    });
    typeInfo["damage_relations"].no_damage_from.forEach((el) => {
      zero.push(el.name);
    });
  
    return [
      data.type.name,
      {
        defense: {
          double,
          zero,
          half,
        },
      },
    ];
  }
  
export async function handleTypeData(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let temp = await handleDamage(data[i]);
      arr.push(temp);
    }
    let obj = {};
    arr.forEach((el) => {
      let key = el[0];
      let value = el[1];
  
      obj[key] = value;
    });
  
    return obj;
  }
  
export function handleWeakness(data) {
    let weaknessData = {};
  
    Object.keys(data).forEach((el) => {
      let defense = data[el].defense;
  
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
  
    return weaknessFinal;
  }
  