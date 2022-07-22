'use strict';
import { connectionMap } from "./main.js";
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
    let cur;

    memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
function checkConnectionsFlipFlop(x, i) {
  return (connectionMap.has("input0$latch" + x[i][0]) && connectionMap.has("clock0$latch" + x[i][0])
    && connectionMap.has("latch" + x[i][0] + "$latch" + x[i][1]) && connectionMap.has("latch" + x[i][1] + "$output0")
    && connectionMap.has("clockbar0$latch" + x[i][1]) && (connectionMap.size === 5))
}
export function flipflopValidate() {
  const x = permutator([0, 1]);
  // console.log(x)
  let circuitValid = 0;
  for (let i = 0; i < x.length; i++) {
    if (checkConnectionsFlipFlop(x, i)) {
      circuitValid = 1;
      break;
    }
  }
  if (circuitValid) {
    document.getElementById("graph-image").src = "./images/screenshot_169.png";
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