import fooText from "./foo.js";

const getNoodSeed = () => {
  return new Date().getTime();
};

const noodeList: object[] = [];
const pushNood = () => {
  noodeList.push({
    id: getNoodSeed(),
  });
};

pushNood();
console.log(noodeList);
console.log(fooText, "fooText");
