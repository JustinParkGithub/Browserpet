var currentImg = "pixelFurret";
var sliderValue = 120;

const pixelFurret = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/deb92i3-cdbced98-2769-4322-b8db-e3a504a295e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGViOTJpMy1jZGJjZWQ5OC0yNzY5LTQzMjItYjhkYi1lM2E1MDRhMjk1ZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZprqWr3pA4_HR5JuNFU1eLz_lBl1GyzZvoPIOGjO1Ig";
const nyanCat = "https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif";
const normalFurret = "https://i.imgur.com/QdibZXs.gif";

let imgSize = sliderValue;

function addCode() {
    console.log(currentImg);
    console.log(imgSize);

    if (currentImg.localeCompare("pixelFurret") == 0) {
        document.getElementsByTagName("div")[0].insertAdjacentHTML("afterend", `<div id="overlay" >
            <img id="iconA" style="border:0";
                 src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/deb92i3-cdbced98-2769-4322-b8db-e3a504a295e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGViOTJpMy1jZGJjZWQ5OC0yNzY5LTQzMjItYjhkYi1lM2E1MDRhMjk1ZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZprqWr3pA4_HR5JuNFU1eLz_lBl1GyzZvoPIOGjO1Ig"
                  alt="Furret">
                
        </div>`);
    } else if (currentImg.localeCompare("nyanCat") == 0) {
        document.getElementsByTagName("div")[0].insertAdjacentHTML("afterend", `<div id="overlay" >
            <img id="iconA" style="border:0";
                 src="https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif"
                  alt="Furret">
                
        </div>`);
    } else if (currentImg.localeCompare("noramlFurret")) {
        document.getElementsByTagName("div")[0].insertAdjacentHTML("afterend", `<div id="overlay" >
            <img id="iconA" style="border:0";
                 src="https://i.imgur.com/QdibZXs.gif"
                  alt="Furret">
                
        </div>`);
    } else {
        document.getElementsByTagName("div")[0].insertAdjacentHTML("afterend", `<div id="overlay" >
            <img id="iconA" style="border:0";
                 src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55e9f737-071f-43e4-95a1-e364df4055f1/deb92i3-cdbced98-2769-4322-b8db-e3a504a295e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1ZTlmNzM3LTA3MWYtNDNlNC05NWExLWUzNjRkZjQwNTVmMVwvZGViOTJpMy1jZGJjZWQ5OC0yNzY5LTQzMjItYjhkYi1lM2E1MDRhMjk1ZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZprqWr3pA4_HR5JuNFU1eLz_lBl1GyzZvoPIOGjO1Ig"
                  alt="Furret">
                
        </div>`);
    }
}

document.getElementsByTagName("body")[0].onload = addCode();

let count = 0;
let isMoving = false;
let movingRight = true;
let mouseOutOfBounds = false;
var theImage = document.getElementById("iconA");
var currentInterval;
var overlayDiv = document.getElementById("overlay");

function setStyle() {
    overlayDiv.style.position = "static";
    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.right = "0";
    overlayDiv.style.height = "0";
    overlayDiv.style.width = "0";

    theImage.style.position = "fixed";
    theImage.style.bottom = "0";
    theImage.style.left = "0";
    theImage.style.zIndex = "9999";
    theImage.style.width = imgSize + "px";
}

document.getElementsByTagName("body")[0].onload = setStyle();

function touch() {
    console.log("touch");
    if (isMoving) {
        stop();
    } else {
        start();
    }
}

function moveRight() {
    // checkPopup();
    console.log("moveRight");
    movingRight = true;
    theImage.style.transform = "scaleX(-1)";
    var countUpID = setInterval(function () {
        count += 0.1;
        theImage.style.left = count + "%";
        if (count >= (1 - (imgSize / window.innerWidth)) * 100) {
            moveLeft();
            clearInterval(countUpID);
        }
    }, 25);
    currentInterval = countUpID;
}

function moveLeft() {
    // checkPopup();
    console.log("moveLeft");
    movingRight = false;
    theImage.style.transform = "scaleX(1)";
    var countDownID = setInterval(function () {
        count -= 0.1;
        theImage.style.left = count + "%";
        if (count < 0) {
            moveRight();
            clearInterval(countDownID);
        }
    }, 25);
    currentInterval = countDownID;
}

function start() {
    console.log("start");
    isMoving = true;
    if (movingRight) {
        moveRight();
    } else {
        moveLeft();
    }
}

function stop() {
    console.log("stop");
    isMoving = false;
    clearInterval(currentInterval);
}

start();

theImage.onmousedown = function (event) {
    console.log("onMouseDown");
    stop();
    let shiftX = event.clientX - theImage.getBoundingClientRect().left;
    let shiftY = event.clientY - theImage.getBoundingClientRect().top;

    document.body.append(theImage);

    moveAt(event.pageX, event.pageY);

    // moves the theImage at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        if (pageX - shiftX <= 20 || pageX >= window.innerWidth - 20|| pageY - shiftY <= 20 || pageY >= window.innerHeight - 20) {
            console.log("if exception");
			mouseOutOfBounds = true;
			document.removeEventListener('mousemove', onMouseMove);
            touch();
			theImage.onmouseup = null;
            return;
        }
		mouseOutOfBounds = false;
        theImage.style.left = pageX - shiftX + 'px';
        count = ((pageX - shiftX) / window.innerWidth) * 100;
        theImage.style.top = pageY - shiftY + 'px';
		return;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // move the theImage on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // drop the theImage, remove unneeded handlers
    theImage.onmouseup = function () {
		if(!mouseOutOfBounds) {
            start();
		}
        document.removeEventListener('mousemove', onMouseMove);
        theImage.onmouseup = null;
    };

};

theImage.ondragstart = function () {
    stop();
    return false;
};