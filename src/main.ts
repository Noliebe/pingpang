import WebAudioManager from "./audio";
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

new WebAudioManager();

pushNood();
console.log(noodeList);
console.log(fooText, "fooText");
