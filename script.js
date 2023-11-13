let years = 0
let months = 0
let days = 0
let currentDate = new Date();

function getBirthday() {
    let bDay = document.querySelector('#dayInput').value;
    let bMonth = document.querySelector('#monthInput').value;
    let bYear = document.querySelector('#yearInput').value;
    
    let bDate = new Date(`'${bMonth}/${bDay}/${bYear}'`);

    let daysBetween = (currentDate.getTime() - bDate.getTime()) / 86400000 ;

    years = Math.floor(daysBetween / 365);
    let remainder = daysBetween % 365

    months = Math.floor(remainder / 30);
    days = Math.floor(remainder % 30);
    
    console.log(years, months, days)

    for (let i=0; i < years+1; i++) {
        setTimeout(function() {
            document.querySelector('#years').innerHTML = `${i}`;
        }, 20 * i)   
    }

    for (let i=0; i < months+1; i++) {
        setTimeout(function() {
            document.querySelector('#months').innerHTML = `${i}`;
        }, 100 * i)   
    }

    for (let i=0; i < days+1; i++) {
        setTimeout(function() {
            document.querySelector('#days').innerHTML = `${i}`;
        }, 150 * i)   
    }

    years = 0
    months = 0
    days = 0


}

let calculate = document.querySelector('.imgcontain');
calculate.addEventListener('click', () => {
    getBirthday();
})


