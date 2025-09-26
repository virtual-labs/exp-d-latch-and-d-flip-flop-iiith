'use strict';
import { connectionMap } from "./main.js";
import { selectedTab, currentTab } from './main.js';
function checkConnectionsLatch(x, i) {
  return (connectionMap.has("input0$mux0") && connectionMap.has("clock0$mux0")
    && connectionMap.has("inverter" + x[i][1] + "$mux0") && connectionMap.has("mux0$inverter" + x[i][0])
    && connectionMap.has("inverter" + x[i][0] + "$inverter" + x[i][1]) && connectionMap.has("inverter" + x[i][0] + "$output0")
    && (connectionMap.size === 6))
}
export function latchValidate() {
  const x = permutator([0, 1]);
  // console.log(x)
  let circuitValid = 0;
  for (let i = 0; i < x.length; i++) {
    if (checkConnectionsLatch(x, i)) {
      circuitValid = 1;
      break;
    }
  }
  if (circuitValid) {
    document.getElementById("graph-image").src = "./images/screenshot_168.png";
    document.getElementById("graph-image").style.display = "block";
    changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success');
  }
  else {
    document.getElementById("graph-image").style.display = "none";
    changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
  }
}

export function permutator(inputArr) {
  const results = [];

  function permute(arr, memo) {
    let currentCase;
    memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      currentCase = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(currentCase));
      }
      permute(arr.slice(), memo.concat(currentCase));
      arr.splice(i, 0, currentCase[0]);
    }

    return results;
  }

  return permute(inputArr);
}
export function flipflopValidate() {
  const permutatorMap = permutator([0, 1]);
  document.getElementById('error-container').style = 'display:none;';
  let circuitValid = 0;
  for (let i = 0; i < permutatorMap.length; i++) {
    if (connectionMap.has("input0$latch" + permutatorMap[i][0]) && connectionMap.has("clock0$latch" + permutatorMap[i][0]) && connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) && connectionMap.has("latch" + permutatorMap[i][1] + "$output0") && connectionMap.has("clockbar0$latch" + permutatorMap[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.NEG_FLIPFLOP) {
      circuitValid = 1;
      break;
    }
    if (connectionMap.has("input0$latch" + permutatorMap[i][0]) && connectionMap.has("clockbar0$latch" + permutatorMap[i][0]) && connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) && connectionMap.has("latch" + permutatorMap[i][1] + "$output0") && connectionMap.has("clock0$latch" + permutatorMap[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.POS_FLIPFLOP) {
      circuitValid = 1;
      break;
    }
  }
  if (circuitValid) {

    const imagePaths = {
      1: {
        1: "./images/inputWave1Neg.png",
        2: "./images/inputWave2Neg.png",
        3: "./images/inputWave3Neg.png",
        4: "./images/inputWave4Neg.png"
      },
      2: {
        1: "./images/inputWave1Pos.png",
        2: "./images/inputWave2Pos.png",
        3: "./images/inputWave3Pos.png",
        4: "./images/inputWave4Pos.png"
      }
    }

    let m = document.getElementById("input-selector").value;
    const divGraphImage = document.getElementById("graph-image")
    divGraphImage.src = imagePaths[selectedTab][m];
    divGraphImage.style.display = 'block';
    document.getElementById("output-box").style.display = "block";

    changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
  }
  else {
    const divGraphImage = document.getElementById("graph-image")
    divGraphImage.src = "";
    divGraphImage.style.display = 'none';
    document.getElementById("output-box").style.display = "none";
    changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
  }
}
export function JKFFValidate() {
  const permutatorMap = permutator([0, 1]);
  document.getElementById('error-container').style = 'display:none;';
  let circuitValid = 0;
  for (let i = 0; i < permutatorMap.length; i++) {
    if (connectionMap.has("input0$mux0") &&
      connectionMap.has("input1$inverter0") &&
      connectionMap.has("inverter0$mux0") &&
      connectionMap.has("mux0$latch" + permutatorMap[i][0]) &&
      connectionMap.has("clock0$latch" + permutatorMap[i][0]) &&
      connectionMap.has("latch" + permutatorMap[i][0] + "$latch" + permutatorMap[i][1]) &&
      connectionMap.has("latch" + permutatorMap[i][1] + "$output0") &&
      connectionMap.has("clockbar0$latch" + permutatorMap[i][1]) &&
      connectionMap.has("latch" + permutatorMap[i][1] + "$mux0") &&
      (connectionMap.size === 9)) {
      circuitValid = 1;
      break;
    }
  }
  if (circuitValid) {
    document.getElementById("graph-image").src = "./images/JK.png";
    document.getElementById("graph-image").style.display = "block";
    changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success');
  }
  else {
    document.getElementById("graph-image").style.display = "none";
    changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
  }
}

export function changeObservation(htmlText, removedClass, addedClass) {
  document.getElementById("output-text").innerHTML = htmlText;
  document.getElementById("output-text").classList.remove(removedClass);
  document.getElementById("output-text").classList.add(addedClass);
}