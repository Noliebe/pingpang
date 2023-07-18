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

export default function (): void {
  console.log(fooText);
}
