// on page date
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById('get-day-in-week').innerText = day;



const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        const dateMonth = new Date();
        let month = months[dateMonth.getMonth()];
        document.getElementById('get-month').innerText = month;



        const dt = new Date();
        const ndate = dt.getDate();
        document.getElementById('get-date').innerText = ndate;


        const year = new Date();
        const fullYear = year.getFullYear();
        document.getElementById('get-year').innerText = fullYear;
