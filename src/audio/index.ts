export default class WebAudioManager {
  //   constructor(option) {
  webaudio;
  oscillator;
  constructor() {
    this.webaudio = new AudioContext();
    this.oscillator = this.webaudio.createOscillator();
    const gainNode = this.webaudio.createGain();
    gainNode.gain.value = 1; // 音量 0~1
    this.oscillator.type = "sine"; // 振荡器输出正弦波
    this.oscillator.frequency.value = 200; // 振荡频率200Hz
    this.oscillator.connect(gainNode); // 发生源振荡器连接音量
    gainNode.connect(this.webaudio.destination); //音量连接扬声器
    console.log(
      "🚀 ~ file: index.js:6 ~ constructor ~ this.webaudio:",
      this.webaudio
    );
    console.log(
      "🚀 ~ file: index.js:6 ~ constructor ~ this.webaudio:",
      this.oscillator
    );
  }
}
