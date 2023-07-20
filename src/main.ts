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

const audioManager = new WebAudioManager();
audioManager.oscillator.start();

pushNood();
console.log(noodeList);
console.log(fooText, "fooText");
