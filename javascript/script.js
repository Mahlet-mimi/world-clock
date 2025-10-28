function updateTime() {
  
  let ethiopiaElement = document.querySelector("#ethiopia");
  let ethiopiaDate = ethiopiaElement.querySelector(".date");
  let ethiopiaTime = ethiopiaElement.querySelector(".time");
  let time = moment().tz("Africa/Addis_Ababa");

  ethiopiaDate.innerHTML = time.format("MMMM Do YYYY");
  ethiopiaTime.innerHTML = time.format("hh:mm:ss [<small>]A[</small>]");


  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sednTime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = time.format("MMMM Do YYYY");
  sydneyTime.innerHTML = time.format("hh:mm:ss [<small>]A[</small>]");
  
}

updateTime();

setInterval(updateTime);
