// APIKey from the website "&APPID=316bc83cac87a74a32203251a722bf72&units=imperial";
/* Global Variables */
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// APIKey from the website "&APPID=316bc83cac87a74a32203251a722bf72&units=imperial";
const APIKey = "&APPID=6613ee8430ed01573cc6aea7f860f3e5&units=imperial";
const url = "http://api.openweathermap.org/data/2.5/weather?zip=";

// adding functionality to generate button
let clickyButton = document.getElementById("generate");
clickyButton.addEventListener("click", resultGenerator);
// resultGenerator is the function that conctain all other functions (contactAPI & postData &updateUI )
function resultGenerator() {
  const ZipCode = document.getElementById("zip").value;
  const feeling = document.getElementById("feelings").value;
  contactAPI(url, ZipCode, APIKey).then(function (data) {
    console.log(data);
    postData("/add", {
      name: data.name,
      date: newDate,
      temp: data.main.temp,
      content: feeling,
    });
    updateUI();
  });
}
// contactAPI is the function that getting data from API
const contactAPI = async (url, ZipCode, APIKey) => {
  const res = await fetch(url + ZipCode + APIKey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// post data is the function that take the data from API and posting it to dataobject
const postData = async (url = " ", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// update UI is the unction that access data object and add the values to UI
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("date").innerHTML = `Date: ${allData["date"]}`;
    document.getElementById(
      "temp"
    ).innerHTML = `tempreture : ${allData["temp"]}`;
    document.getElementById(
      "content"
    ).innerHTML = `I feel : ${allData["content"]}`;
    document.getElementById("name").innerHTML = `City: ${allData["name"]}`;
  } catch (error) {
    console.log("error", error);
    document.getElementById(
      "date"
    ).innerHTML = `There Is an Error in requesting Date`;
    document.getElementById(
      "temp"
    ).innerHTML = `There Is an Error in requesting Temp`;
    document.getElementById(
      "content"
    ).innerHTML = `There Is an Error in requesting Feeling`;
    document.getElementById(
      "name"
    ).innerHTML = `There Is an Error in requesting name`;
  }
};
