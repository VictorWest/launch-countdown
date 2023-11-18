let deadLine = new Date().getTime() + 1209600000; //Adding 14 days (in milliseconds) to the current date

let x = setInterval(function(){
    let currentDate = new Date().getTime();
    let d = deadLine - currentDate;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    console.log(days);
    document.querySelector(".firstRow").innerHTML = `${days}`;
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    document.querySelector(".secondRow").innerHTML = `${hours}`;
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    document.querySelector(".thirdRow").innerHTML = `${minutes}`;
    let seconds = Math.floor((d % (1000 * 60)) / (1000));
    console.log(seconds);
    document.querySelector(".fourthRow").innerHTML = `${seconds}`;

    if(d < 0){
        clearInterval(x);
        document.getElementById("heading").innerHTML = `LAUNCH!`;
        document.querySelector(".firstRow").innerHTML = `...`;
        document.querySelector(".secondRow").innerHTML = `...`;
        document.querySelector(".thirdRow").innerHTML = `...`;
        document.querySelector(".fourthRow").innerHTML = `...`;
        for(let i = 0; i < (document.querySelectorAll("p")).length; i++){
            document.querySelectorAll("p")[i].innerHTML = "";
            console.log((document.querySelectorAll("p")).length);
        }   
    }
}, 1000);


