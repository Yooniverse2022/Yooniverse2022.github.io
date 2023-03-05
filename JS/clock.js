const clockTime = document.querySelector("#clock h1");
const clockDate = document.querySelector("#clock h2");
whatDay = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

function getClock(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const date = String(time.getDate()).padStart(2,"0");
    const day = whatDay[time.getDay()];
    const hour = String(time.getHours()).padStart(2,"0");
    const minute = String(time.getMinutes()).padStart(2,"0");
    const second = String(time.getSeconds()).padStart(2,"0");
    clockTime.innerText = `${hour}:${minute}:${second}`;
    clockDate.innerText = `${year}년 ${month}월 ${date}일 ${day}`
}

getClock();
setInterval(getClock,1000);
