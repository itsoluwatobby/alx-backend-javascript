export default function groceriesList() {
  const fruitMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const list = Array.from(Object.keys(obj));
  list.map((item) => fruitMap.set(item, obj[item]));
  return fruitMap;
}
