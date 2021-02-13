let htmlCss, nativJs, reactJs, otherTopicsIt, totalProgress, progressTime, elapsedTime, updateDate;


htmlCss = document.querySelector('#htmlCss');
nativJs = document.querySelector('#nativJs');
reactJs = document.querySelector('#reactJs');
otherTopicsIt = document.querySelector('#otherTopicsIt');
totalProgress = document.querySelector('#totalProgress');
progressTime = document.querySelectorAll('.progressTime');
elapsedTime = document.querySelector('#elapsedTime');
updateDate = document.querySelector('#updateDate');

//Изучение HTML & CSS
htmlCss.textContent = 151;
//Изучение JavaScript
nativJs.textContent = 124;
//Изучение React.js
reactJs.textContent = 2;
//Изучение общих тем IT
otherTopicsIt.textContent = 68;
//Обучаюсь
elapsedTime.textContent = 101;
//Последнее обновление
updateDate.textContent = '13.02.2021'

//Итого на обучение потрачено
let counter = 0;
for(let i of progressTime){
	counter += Number(i.textContent);
}
totalProgress.textContent = counter;