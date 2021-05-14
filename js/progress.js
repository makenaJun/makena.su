let htmlCss, nativJs, reactJs, otherTopicsIt, totalProgress, progressTime,
elapsedTime, updateDate, dayOfStudy, requestProgress, responseProgress, typeScript, backEnd;


htmlCss = document.querySelector('#htmlCss');
nativJs = document.querySelector('#nativJs');
reactJs = document.querySelector('#reactJs');
typeScript = document.querySelector('#typeScript')
backEnd = document.querySelector('#backEnd')
otherTopicsIt = document.querySelector('#otherTopicsIt');
totalProgress = document.querySelector('#totalProgress');
progressTime = document.querySelectorAll('.progressTime');
elapsedTime = document.querySelector('#elapsedTime');
dayOfStudy = document.querySelector('#dayOfStudy');
updateDate = document.querySelector('#updateDate');

//Получение данных JSON
const jsonLink = "https://makena.su/js/data-progress.json";

requestProgress = new XMLHttpRequest();
requestProgress.open('GET', jsonLink);
requestProgress.responseType = 'json';
requestProgress.send();

requestProgress.onload = function (){
	responseProgress = requestProgress.response

	//Изучение HTML & CSS
htmlCss.textContent = responseProgress.htmlCss;
//Изучение JavaScript
nativJs.textContent = responseProgress.nativJs;
//Изучение React.js
reactJs.textContent = responseProgress.reactJs;
//Изучение TypeScript
typeScript.textContent = responseProgress.typeScript;
//Изучение BackEnd
backEnd.textContent = responseProgress.backEnd;
//Изучение общих тем IT
otherTopicsIt.textContent = responseProgress.otherTopicsIt;
//Обучаюсь
elapsedTime.textContent = responseProgress.elapsedTime;
//Последнее обновление
updateDate.textContent = responseProgress.updateDate

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
}

