function latchvalidate() {
  x = permutator([0, 1])
  // console.log(x)
  circuit_valid = 0
  for (let i = 0; i < x.length; i++) {
    if (jsmap.has("input0$mux0") && jsmap.has("clock0$mux0") && jsmap.has("inverter" + x[i][1] + "$mux0") && jsmap.has("mux0$inverter" + x[i][0]) && jsmap.has("inverter0$inverter" + x[i][1]) && jsmap.has("inverter" + x[i][0] + "$output0") && (jsmap.size == 6)) {
      circuit_valid = 1
      break
    }
  }
  if (circuit_valid) {
    document.getElementById("graph-image").src = "./images/Screenshot (168).png"
    document.getElementById("graph-image").style.display = "block";
  }
  else {
    // document.getElementById("graph-image").alt = "The graph is not shown since the circuit connection is incorrect"
    document.getElementById("graph-image").style.display = "none";
    alert("The circuit is wrong");
  }
}
function selectedvald() {
  if (selected_tab == 0) {
    latchvalidate()
  }
  else {
    flipflopvalidate()
  }
}
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
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
function flipflopvalidate() {
  x = permutator([0, 1])
  // console.log(x)
  circuit_valid = 0
  for (let i = 0; i < x.length; i++) {
    if (jsmap.has("input0$latch" + x[i][0]) && jsmap.has("clock0$latch0" + x[i][0]) && jsmap.has("latch" + x[i][0] + "$latch" + x[i][1]) && jsmap.has("latch" + x[i][1] + "$output0") && jsmap.has("clockbar0$latch" + x[i][1]) && (jsmap.size == 5)) {
      circuit_valid = 1
      break
    }
  }
  if (circuit_valid) {
    document.getElementById("graph-image").src = "./images/Screenshot (169).png"
    document.getElementById("graph-image").style.display = "block";
  }
  else {
    // document.getElementById("graph-image").alt = "The graph is not shown since the circuit connection is incorrect"
    document.getElementById("graph-image").style.display = "none";
    // alert("The circuit is wrong");
  }
}