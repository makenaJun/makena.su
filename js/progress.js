let htmlCss, nativJs, reactJs, otherTopicsIt, totalProgress, progressTime, elapsedTime, updateDate, dayOfStudy;


htmlCss = document.querySelector('#htmlCss');
nativJs = document.querySelector('#nativJs');
reactJs = document.querySelector('#reactJs');
otherTopicsIt = document.querySelector('#otherTopicsIt');
totalProgress = document.querySelector('#totalProgress');
progressTime = document.querySelectorAll('.progressTime');
elapsedTime = document.querySelector('#elapsedTime');
dayOfStudy = document.querySelector('#dayOfStudy');
updateDate = document.querySelector('#updateDate');

//Изучение HTML & CSS
htmlCss.textContent = 151;
//Изучение JavaScript
nativJs.textContent = 141;
//Изучение React.js
reactJs.textContent = 2;
//Изучение общих тем IT
otherTopicsIt.textContent = 68;
//Обучаюсь
elapsedTime.textContent = 104;
//Последнее обновление
updateDate.textContent = '16.02.2021'

//Итого на обучение потрачено
let counter = 0;
for(let i of progressTime){
	counter += Number(i.textContent);
}
totalProgress.textContent = counter;

// Обновление слова "дней"
( function () {
	const penultNum = elapsedTime.innerHTML.slice(-2, -1);
	const lastNum = elapsedTime.innerHTML.slice(-1);

	if(penultNum === '1'){
			dayOfStudy.textContent = 'дней';
		}
	else if(lastNum === '1'){
			dayOfStudy.textContent = 'день';
	}
	else if(lastNum === '2' || lastNum === '3' || lastNum === '4'){
		dayOfStudy.textContent = 'дня';
	}else{
		dayOfStudy.textContent = 'дней';
	}
})();