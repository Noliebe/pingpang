export default class WebAudioManager {
  //   constructor(option) {
  webaudio;
  constructor() {
    this.webaudio = new AudioContext();
    const oscillator = this.webaudio.createOscillator();
    const gainNode = this.webaudio.createGain();
    gainNode.gain.value = 0.5; // 音量 0~1
    oscillator.type = "sine"; // 振荡器输出正弦波
    oscillator.frequency.value = 200; // 振荡频率200Hz
    oscillator.connect(gainNode); // 发生源振荡器连接音量
    gainNode.connect(this.webaudio.destination); //音量连接扬声器
    console.log(
      "🚀 ~ file: index.js:6 ~ constructor ~ this.webaudio:",
      this.webaudio
    );
  }
}
