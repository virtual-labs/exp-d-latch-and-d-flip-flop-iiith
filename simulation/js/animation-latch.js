import { setCoordinates, fillInputDots, objectDisappear, objectAppear, fillColor, setColor, unsetColor } from "./animation-utility.js";
'use strict';

window.simulationStatus = simulationStatus;
window.restartCircuit = restartCircuit;
window.setSpeed = setSpeed;
window.setInput = setInput;
// Dimensions of working area
const circuitBoard = document.getElementById("circuit-board");
const sidePanels = document.getElementsByClassName("v-datalist-container");

// Distance of working area from top
const circuitBoardTop = circuitBoard.offsetTop;

// Full height of window
const windowHeight = window.innerHeight;
const width = window.innerWidth;
const svg = document.querySelector(".svg");
const svgns = "http://www.w3.org/2000/svg";

const EMPTY = "";
const status = document.getElementById("play-or-pause");
const observ = document.getElementById("observations");
const speed = document.getElementById("speed");


const objects = [
    document.getElementById("clock"),
    document.getElementById("input"),
    document.getElementById("output")
];
const textInput = [
    document.createElementNS(svgns, "text"),
    document.createElementNS(svgns, "text")
];
const textOutput = [document.createElementNS(svgns, "text")];
const inputDots = [
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle")
];

let decide = false;
let circuitStarted = false;

function demoWidth() {
    if (width < 1024) {
        circuitBoard.style.height = "600px";
    } else {
        circuitBoard.style.height = `${windowHeight - circuitBoardTop - 20}px`;
    }
    sidePanels[0].style.height = circuitBoard.style.height;
}

//initialise input text
function textIOInit() {
    for (const text of textInput) {
        text.textContent = 2;
    }
}
function outputCoordinates() {
    setCoordinates(895, 338, textOutput[0]);
    svg.append(textOutput[0]);
}

function inputDotsDisappear() {
    for (const inputDot of inputDots) {
        objectDisappear(inputDot);
    }
}


// function to disappear the output text
function outputDisappear() {
    for (const text of textOutput) {
        objectDisappear(text);
    }
}

function inputTextDisappear() {
    for (const text of textInput) {
        objectDisappear(text);
    }
}

// function to appear the input text
function clearObservation() {
    observ.innerHTML = EMPTY;
}
function allDisappear() {
    inputDotsDisappear();
    outputDisappear();
    inputTextDisappear();
    for (const object of objects) {
        fillColor(object, "#008000");
    }
    // hex value of grey colour
    fillColor(objects[0], "#808080");
}

function clockToZero() {
    changeTo0(-5, 108, 0, 0);
    setter(textInput[0].textContent, inputDots[0]);
}
function clockToOne() {
    changeTo1(-5, 108, 0, 0);
    setter(textInput[0].textContent, inputDots[0]);
}

function setInput() {
    if (timeline.progress() === 0) {
        if (textInput[1].textContent !== "0") {
            changeTo0(-5, 208, 1, 1);
        }
        else {
            changeTo1(-5, 208, 1, 1);
        }
        setter(textInput[1].textContent, inputDots[1]);
    }
    else if (timeline.progress() === 1) {
        observ.innerHTML = "Simulation has finished. Press Reset to start again";
    }
    else {
        observ.innerHTML = "Simulation has started wait for it to end";
    }
}

function changeTo1(coordinateX, coordinateY, object, textObject) {
    textInput[textObject].textContent = 1;
    svg.appendChild(textInput[textObject]);
    setCoordinates(coordinateX, coordinateY, textInput[textObject]);

    fillColor(objects[object], "#03b1fc");
    objectAppear(textInput[textObject]);
    clearObservation();
}

function changeTo0(coordinateX, coordinateY, object, textObject) {
    textInput[textObject].textContent = 0;
    svg.appendChild(textInput[textObject]);
    setCoordinates(coordinateX, coordinateY, textInput[textObject]);

    fillColor(objects[object], "#eeeb22");
    objectAppear(textInput[textObject]);
    clearObservation();
}

function reboot() {
    for (const text of textInput) {
        text.textContent = 2;
    }
}
function display() {
    observ.innerHTML = "Simulation has finished. Press Reset to start again";
}
function setter(value, component) {
    //toggles the text content a of input/output component b
    if (value === "1") {
        unsetColor(component);
    }
    else{
        setColor(component);
    }
}

function setSpeed(speed) {
    if (circuitStarted) {
        timeline.timeScale(parseInt(speed));
        observ.innerHTML = `${speed}x speed`;
    }
}

function restartCircuit() {
    circuitStarted = false;
    timeline.seek(0);
    timeline.pause();
    allDisappear();
    reboot();
    clearObservation();
    decide = false;
    status.innerHTML = "Start";
    observ.innerHTML = "Successfully restored";
    speed.selectedIndex = 0;

}

function simulationStatus() {
    if (!decide) {
        startCircuit();
    }
    else {
        stopCircuit();
    }
}
function stopCircuit() {
    if (timeline.progress() !== 1) {
        timeline.pause();
        observ.innerHTML = "Simulation has been paused.";
        decide = false;
        status.innerHTML = "Start";
    }
    else{
        observ.innerHTML = "Please Restart the simulation";
    }
}
function startCircuit() {
    if (circuitStarted) {
        timeline.play();
        timeline.timeScale(parseInt(speed.value));
        observ.innerHTML = "Simulation has started";
        decide = true;
        status.innerHTML = "Pause";
    }
    else {
        if (textInput[1].textContent !== "2") {
            circuitStarted = true;
            timeline.play();
            timeline.timeScale(parseInt(speed.value));
            observ.innerHTML = "Simulation has started.";
            decide = true;
            status.innerHTML = "Pause";
        }
        else if (textInput[1].textContent === "2") {
            observ.innerHTML = "Please set the value of input to either 0 or 1";
        }
    }
}

function initInputDots() {
    //sets the coordinates of the input dots
    for (const inputDot of inputDots) {
        fillInputDots(inputDot, 0, 200, 15, "#FF0000");
        svg.append(inputDot);
    }
}

function disappearSimulator1() {
    objectDisappear(inputDots[0]);
    objectDisappear(inputDots[1]);
}

function simulator1() {
    objectAppear(inputDots[0]);
    objectAppear(inputDots[1]);
    timeline.to(inputDots[0], {
        motionPath: {
            path: "#path0",
            align: "#path0",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 0,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
    timeline.to(inputDots[1], {
        motionPath: {
            path: "#path1",
            align: "#path1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 0,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
}

function disappearSimulator2() {
    objectDisappear(inputDots[2]);
}

function simulator2() {
    setter(textInput[1].textContent, inputDots[2]);
    objectAppear(inputDots[2]);
    timeline.to(inputDots[2], {
        motionPath: {
            path: "#path2",
            align: "#path2",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 2,
        delay: 5,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
}

function disappearSimulator3() {
    objectDisappear(inputDots[3]);
    objectDisappear(inputDots[4]);
}

function simulator3() {
    if (textInput[1].textContent === "0") {
        setter("1", inputDots[3]);
        setter("1", inputDots[4]);
    }
    else {
        setter("0", inputDots[3]);
        setter("0", inputDots[4]);
    }
    objectAppear(inputDots[3]);
    objectAppear(inputDots[4]);
    timeline.to(inputDots[4], {
        motionPath: {
            path: "#path3",
            align: "#path3",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 8,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
    timeline.to(inputDots[3], {
        motionPath: {
            path: "#path4",
            align: "#path4",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 8,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);

}

function disappearSimulator4() {
    objectDisappear(inputDots[0]);
    objectDisappear(inputDots[5]);
    objectDisappear(inputDots[6]);
}

function simulator4() {
    observ.innerHTML = "Clock changed to 1";
    setter(textInput[1].textContent, inputDots[6]);
    setter(textInput[1].textContent, inputDots[5]);
    objectAppear(inputDots[0]);
    objectAppear(inputDots[6]);
    objectAppear(inputDots[5]);
    timeline.to(inputDots[6], {
        motionPath: {
            path: "#path5",
            align: "#path5",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 13,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
    timeline.to(inputDots[5], {
        motionPath: {
            path: "#path1",
            align: "#path1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 13,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
    timeline.to(inputDots[0], {
        motionPath: {
            path: "#path0",
            align: "#path0",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 13,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);

}

function disappearSimulator5() {
    objectDisappear(inputDots[7]);
}

function simulator5() {
    setter(textInput[1].textContent, inputDots[7]);
    objectAppear(inputDots[7]);
    timeline.to(inputDots[7], {
        motionPath: {
            path: "#path2",
            align: "#path2",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 2,
        delay: 18,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
}

function simulator6() {
    if (textInput[1].textContent === "0") {
        setter("1", inputDots[8]);
    }
    else {
        setter("0", inputDots[8]);
    }
    objectAppear(inputDots[8]);
    timeline.to(inputDots[8], {
        motionPath: {
            path: "#path3",
            align: "#path3",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 4,
        delay: 21,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
}

function outputHandler() {
    if (textInput[1].textContent === "1") {
        textOutput[0].textContent = "0";
    }
    else {
        textOutput[0].textContent = "1";
    }
    objectAppear(textOutput[0]);
    setter(textOutput[0].textContent, objects[2]);
}


//execution starts here
let timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
gsap.registerPlugin(MotionPathPlugin);
demoWidth();
textIOInit();
outputCoordinates();
inputDotsDisappear();
initInputDots();
outputDisappear();

timeline.add(clockToZero, 0);
timeline.add(simulator1, 0);
timeline.add(simulator2, 5);
timeline.add(disappearSimulator1, 6);
timeline.add(simulator3, 8);
timeline.add(disappearSimulator2, 9);
timeline.add(outputHandler, 12);
timeline.add(clockToOne, 12);
timeline.add(simulator4, 13);
timeline.add(disappearSimulator3, 14);
timeline.add(simulator5, 18);
timeline.add(disappearSimulator4, 19);
timeline.add(simulator6, 21);
timeline.add(disappearSimulator5, 22);
timeline.add(inputDotsDisappear, 25);
timeline.add(outputHandler, 25);
timeline.add(display, 26);
timeline.eventCallback("onComplete", display);
timeline.pause();
inputDotsDisappear();