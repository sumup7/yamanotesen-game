'use strict';
// 正解が入ってる配列
const language = [
  　'JavaScript','Node.js','Scala','Python','Golang','Swift','Java'
];
const answers2Button = document.getElementById('answer2');//フォームのボタン
const gameDivided = document.getElementById('game-area');//表示エリア
const answersInput = document.getElementById('answer1');//フォームで受け取る答え
let answer;//答えを入れる変数


answers2Button.onclick = () => {
  answer = answersInput.value;
  if (answer.length === 0) { // 名前が空の時は処理を終了する
    return;
  }
if(language.includes(answer)){
  const paragraph1 = document.createElement('h3');
  paragraph1.innerText = '正解です。' + answer + 'は、答えの中にあります。';
  gameDivided.appendChild(paragraph1);
  language.some(function(v, i){
    if (v===answer) language.splice(i,1);});
  console.log(language);
  //ここで条件分岐したい
  if(language.length === 0){
    const paragraph3 = document.createElement('h3');
    paragraph3.innerText = 'もう、答えはありません。あなたの勝ちです。';
    gameDivided.appendChild(paragraph3);
    return;}
  const n = Math.floor(Math.random() * 100);
    const index = n % language.length;
    let npcAnswer = language[index];
    const paragraph2 = document.createElement('h3');
    clearBox();
    paragraph2.innerText = 'NPCの答え: ' + npcAnswer + 'です。あなたの番です。また、フォームの答えを入力してください。';
    gameDivided.appendChild(paragraph2);
    language.some(function(v, i){
      if (v===npcAnswer) language.splice(i,1);
    });
    console.log(language);
}else {
  const paragraph4 = document.createElement('h3');
  paragraph4.innerText = '不正解です。あなたの負けです。';
  gameDivided.appendChild(paragraph4);
}
console.log(answer);
}

function clearBox() {
  answersInput.value = '';
}