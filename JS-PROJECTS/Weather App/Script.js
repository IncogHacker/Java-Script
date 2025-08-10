


let Searching = document.querySelector("#Searching");
let City_Name = document.querySelector("#City_Name");
let Date_Time = document.querySelector("#Date_Time");
let Weather_Condition = document.querySelector(".Weather_Condition")
let Weather_Image = document.querySelector(".Weather_Image")
let temp = document.querySelector("#Temp")
let Range_1 = document.querySelector("#Range_1")
let Range_2 = document.querySelector("#Range_2")

let feels_like = document.querySelector("#feels")
let Humidity = document.querySelector("#Humidity")
let Winds = document.querySelector("#Winds")
let Pressure = document.querySelector("#pressure")



// Important Function that called by Callw3ather and callweatherfunc2

// ?_____________________________________________________________________________________________________
//! function to create Format of Date and Time 


// Firts Way format of date this fucntion do not give the out of india right time------------


let callformatfunc = () => {

    let Format = new Date();//This gives the current time of the user's own device, not the city's time (like Sydney or Perth).

    // for take time of every city we should The OpenWeatherMap API provides a timezone value (in seconds offset from UTC). You should use this to show the correct local time of the searched city.

    let store = Format.toLocaleString(`en-us`, {
        weekday: `long`,
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        hour: `2-digit`,
        minute: `2-digit`,
        timezone:'UTC',
        hour12: `true`,

    })

    return store;

}


//Second way to fomrat dat and time----------

let callformatfunc2 = ((time, timezone) => {

    let storecorrect = (time + timezone) * 1000; //when we use time+timezone we get correct time outside india.
    let currdate = new Date(storecorrect);
    let Formats = {

        weekday: 'long',
        month: `long`,
        day: `numeric`,
        year: 'numeric',
        hour: `2-digit`,
        minute: `2-digit`,
        timeZone: 'UTC',//<-- important to avoid browser timezone influence
        hour12: true

    }
    let store_format = new Intl.DateTimeFormat(`en-us`, Formats).format(currdate);
    return store_format;


})


//!To get the actual Name of country
let getfullname = (short_name) => {

    let Full_Name = new Intl.DisplayNames([short_name], { type: `region` });

    return Full_Name.of(short_name);

}

// ?_____________________________________________________________________________________________________







// ***************************************************************************************************

//!! Working on call weatherfunc2

let callWeatherfunc2 = async (storecity) => { //creating Asynchronous function so no line wait for another to execute it enables the await

    const StoreApi = `https://api.openweathermap.org/data/2.5/weather?q=${storecity}&appid=bf9adf1ce764b30ab88b054036efab85&units=metric`; //?This Api only Work to show weather condition not units=metric show celsius longitude  ,latitude basically your location

    let fetchApi = await fetch(StoreApi, {

        headers: {
            Accept: "application.json",
        }

    });

    let Storeinfo = await fetchApi.json();
    console.log(Storeinfo);

    let { main, sys, weather, name, dt, wind, timezone } = Storeinfo;
    // ? console.log(main.feels_like);
    //?  console.log(dt);

    //! Filling the Boxess

    //Working On country Name--------
    City_Name.innerText = `${name},${getfullname(sys.country)}`;//callfunction to print full name+++++++++++++++++++++

    //storing Date and Time---------
    // Date_Time,innerText=callformatfunc();
    Date_Time.innerText = callformatfunc2(dt, timezone); //second Way

    // (dt) This value comes from the OpenWeatherMap API, and it is a:
    // UNIX timestamp – the number of seconds since January 1, 1970 (UTC).

    // Example:
    // 1749040500 means "1749040500 seconds after 1970-01-01 00:00:00 UTC"

    // ❓ Why multiply by 1000?
    // JavaScript’s Date object uses milliseconds, not seconds.

    // So to convert seconds to milliseconds:


    //? Working On weather Conditions...

    let Weather_text = weather[0].main;
    Weather_Condition.innerText = Weather_text;


    let Weather_Fig = weather[0].icon;
    Weather_Image.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png">`

    ///Working On Temperatures

    let temp_store = main.temp.toPrecision(3);// use to show only 3 digit
    temp.innerHTML = `${temp_store} &deg`; //use for degree


    let Range_1_store = main.temp_max.toPrecision(3);
    Range_1.innerHTML = `Max: ${Range_1_store}&deg`;

    let Range_2_store = main.temp_min.toPrecision(3);
    Range_2.innerHTML = `Min: ${Range_2_store}&deg`;



    //Humidty boxess....
    let feels_like__store = main.feels_like;
    feels_like.innerHTML = `${feels_like__store}&deg`;

    let Humidity_store = main.humidity;
    Humidity.innerHTML = `${Humidity_store}&deg`;

    let Winds_store = wind.speed;
    Winds.innerHTML = `${Winds_store}&deg`;

    let Pressure_store = main.pressure;
    Pressure.innerHTML = `${Pressure_store}&deg`;


}

// ***************************************************************************************************






//!Working on search Box

let callsearchbox = (() => {

    let storecity = Searching.value

    try {

        if (Searching.value == "") {
            Searching.classList.add("red-placeholder");
            Searching.placeholder = "Type your City First"

        }

        else {

            callWeatherfunc2(storecity);


        }

    }
    catch (error) {

        console.log(`Your Eror is ${error}`)

    }




})





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


///!Working on callweatherfunc

let callWeatherfunc = async () => { //creating Asynchronous function so no line wait for another to execute it enables the await


    try {

        //!Here We Work on whenever We open weather app it detect our location and give weather Info...
        let LocationCall = () => {

            //here we use promise coz processing location takes time and first we should resolved that we are getting the location so use promise

            return new Promise((resolved, reject) => {

                navigator.geolocation.getCurrentPosition(resolved, reject)//this getcurrentfucntion is predefined function in browser so we only call it and fetch it or resolve  and awaits so give output
            })

        };


        let position = await LocationCall();
        console.log(position)//don not need to use json
        //Waits for a Promise to resolve before moving to the next line. It makes asynchronous code look like normal step-by-step code.
        // Now, this line:
        // 📍 Runs the geolocation API
        // ⏳ Waits for it to complete (using await)
        // ✅ Once done, it gives you the result (your coordinates)

        let lat = position.coords.latitude; //the north-south position on Earth
        let lon = position.coords.longitude;//the east-west position on Earth

        console.log(lat, lon);


        // const StoreApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf9adf1ce764b30ab88b054036efab85`; //?This Api only Work to show weather condition not longitude  ,latitude basically your location

        const StoreApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bf9adf1ce764b30ab88b054036efab85&units=metric`;//this Api shows everthing with longitude and lattitude


        let fetchApi = await fetch(StoreApi, {

            headers: {
                Accept: "application.json",//help to convert in json format
            }

        });

        //await waits till promise is resolved then return to storeinfo
        let Storeinfo = await fetchApi.json();

        //Here We get Total info About The fetch API
        console.log(Storeinfo);

        //Now Here We use destructuring the data to get All data together not one by one
        let { main, sys, weather, name, dt, wind, timezone } = Storeinfo;
        // ? console.log(main.feels_like);
        //?  console.log(dt);

        //! Filling the Boxess

        //Working On country Name--------
        City_Name.innerText = `${name},${getfullname(sys.country)}`;//callfunction to print full name+++++++++++++++++++++

        //storing Date and Time----------
        Date_Time.innerText= callformatfunc();
        // Date_Time.innerText = callformatfunc2(dt, timezone); //second Way


        //Working On weather Conditions...

        let Weather_text = weather[0].main;
        Weather_Condition.innerText = Weather_text;


        let Weather_Fig = weather[0].icon;
        Weather_Image.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`

        ///Working On Temperatures

        let temp_store = main.temp.toPrecision(3);// use to show only 3 digit
        temp.innerHTML = `${temp_store} &deg`; //use for degree


        let Range_1_store = main.temp_max.toPrecision(3);
        Range_1.innerHTML = `Max: ${Range_1_store}&deg`;

        let Range_2_store = main.temp_min.toPrecision(3);
        Range_2.innerHTML = `Min: ${Range_2_store}&deg`;



        //Humidty boxess....
        let feels_like__store = main.feels_like;
        feels_like.innerHTML = `${feels_like__store}&deg`;

        let Humidity_store = main.humidity;
        Humidity.innerHTML = `${Humidity_store}&deg`;

        let Winds_store = wind.speed;
        Winds.innerHTML = `${Winds_store}&deg`;

        let Pressure_store = main.pressure;
        Pressure.innerHTML = `${Pressure_store}&deg`;

    }
    catch (error) {
        console.log("Your error is " + error);

    }

}



window.addEventListener("load", callWeatherfunc());//or This work on current location


Searching.addEventListener('keydown', (event) => {

    if (event.key == 'Enter') {
        callsearchbox();
    }
});

