function countSchoolDays(startDate, endDate) {
    let schoolDays = 0;
    let currentDate = startDate.clone();
  
    // Loop through each day in the date range
    while (currentDate.isBefore(endDate)) {
      // Check if the current day is a weekday (Monday to Friday)
      if (currentDate.day() >= 1 && currentDate.day() <= 5) {
        schoolDays++;
      }

      currentDate.add(1, 'day');
    }
  
    return schoolDays;
  }

function countdown() {
    const todayElement = document.querySelector("#today");
    const daysElement = document.querySelector("#days")
    const weeksElement = document.querySelector("#weeks")
    const hoursElement = document.querySelector("#hours")
    const secondsElement = document.querySelector("#seconds")
    const minutesElement = document.querySelector("#minutes")
    const schoolDaysElement = document.querySelector("#schoolDays")
    
    // create a moment object
    var today = moment();
    //date of school ends
    var schoolEnds = moment('May 23, 2024 015:00:00');
    var difference = today - schoolEnds;

    const schoolDaysCount = countSchoolDays(today, schoolEnds);
    
    
    // format the date using Moment.js
    var formattedDate = today.format('LLL');
    var schoolEndsFormat = schoolEnds.format("LLLL");
    
    weeksElement.innerHTML = `${Math.abs(Math.round(difference / 604800000))} Weeks`;
    daysElement.innerHTML = `${Math.abs(Math.round(difference / 86400000))} Days`;
    hoursElement.innerHTML = `${Math.abs(Math.round(difference / 3600000))} Hours`;
    minutesElement.innerHTML = `${Math.abs(Math.round(difference / 60000)).toLocaleString()} Minutes`;
    secondsElement.innerHTML = `${Math.abs(Math.round(difference / 1000)).toLocaleString()} Seconds`;
    schoolDaysElement.innerHTML = `${schoolDaysCount} School Days`;
    // display the formatted date on the HTML page
    document.getElementById('today').innerHTML = schoolEndsFormat;
}

setInterval(countdown, 1000);