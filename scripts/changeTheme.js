const themeDefault = document.getElementById("themeDefault");
const themeOrange = document.getElementById("themeOrange");
const themeGreen = document.getElementById("themeGreen");


const background = document.getElementById("bodyWrapper");

const link = document.createElement("link");
link.rel="stylesheet";
link.href = "";
document.getElementsByTagName("HEAD")[0].appendChild(link);




if(localStorage.getItem("theme") === null){
    localStorage.setItem("theme", "Default");
}

checkStatus();

function checkStatus(){
    
    if(localStorage.getItem("theme") === "Default"){
        link.href = "stylesheets/themeDefault.css";
    }
    if(localStorage.getItem("theme") === "Orange"){
        link.href = "stylesheets/themeOrange.css";
    }
    if(localStorage.getItem("theme") === "Green"){
        link.href = "stylesheets/themeGreen.css";
    }
        
}

themeDefault.onclick = function(){
    //alert("Default Clicked");
    if(localStorage.getItem("theme") !== "Default"){
        localStorage.setItem("theme", "Default");
        link.href = "stylesheets/themeDefault.css";
    }
}

themeOrange.onclick = function(){
    //alert("Orange clicked");
    if(localStorage.getItem("theme") !== "Orange"){
       localStorage.setItem("theme", "Orange");
       link.href = "stylesheets/themeOrange.css";
    }
}

themeGreen.onclick = function(){
    //alert("Green Clicked");
    if(localStorage.getItem("theme") !== "Green"){
       localStorage.setItem("theme", "Green");
       link.href = "stylesheets/themeGreen.css";
    }
 }
