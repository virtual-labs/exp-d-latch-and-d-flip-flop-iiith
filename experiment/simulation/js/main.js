'use strict';
import { comp2Input0, comp2Input1, comp2Output, resetCounts } from "./integrate.js";
import { jsplumbInstance, editConnectionMap } from "./components.js";

export const connectionMap = new Map();

const container = document.getElementById("diagram");
container.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

const EMPTY = "";
export let componentsList = [];
export const currentTab = { LATCH: 0, NEG_FLIPFLOP: 1, POS_FLIPFLOP: 2, JK: 3 };
export let selectedTab = currentTab.LATCH;
const tabs = document.querySelectorAll('.v-tabs li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        let parent = tab.parentNode;
        selectedTab = Array.prototype.indexOf.call(parent.children, tab);
        refreshWorkingArea();
        updateInputStream();
    });
});

window.refreshWorkingArea = refreshWorkingArea;

const updateInputStream = () => {
    const task = selectedTab;
    let options = ""; 
    let instruction =""
    if (task === 0 || task === 3) {
      options = `<div class="columns is-centered" >
      <div class="column" style="margin:auto;text-align:center">
      <button class="v-button" onclick="circuitValidate()">Validate</button>
      <button class="v-button" onclick="refreshWorkingArea()">Reset</button>
  </div>
  </div>`;
    } else {
      options = `<div class="columns is-variable is-1 is-centered is-flex is-flex-wrap-wrap my-0">
      <div class="column is-2-desktop is-2-tablet is-3-mobile center-content">
          <div class="v-select">
            <select id="input-selector">
                  <option value="1">Input wave 1</option>
                  <option value="2">Input wave 2</option>
                  <option value="3">Input wave 3</option>
                  <option value="4">Input wave 4</option>
            </select>
          </div>
      </div>
      <div id="start" class="column is-2-desktop is-2-tablet is-3-mobile center-content" >
		<button class="v-button" onclick="circuitValidate()">Validate</button>
    </div>
    <div id="restart" class="column is-2-desktop is-2-tablet is-3-mobile center-content" >
        <button class="v-button" onclick="refreshWorkingArea()">Reset</button>
    </div>
  </div>`;
  instruction = `<li>Select any input waveform from the 4 waveforms given in the dropdown input list. By default, Input Wave 1 is selected. </li>`;
}
      document.getElementById("validate-submit").innerHTML = options;
      document.getElementById("input-instruction").innerHTML = instruction;
}

function emptyList() {
    for(const component of componentsList) {
        let elem = document.getElementById(component.id);
        elem.parentNode.removeChild(elem);
    }
    componentsList = [];
}

export function refreshObservations() {
    // refresh the errors
    document.getElementById("error-container").style.display="none";
    // refresh result
    document.getElementById("output-text").innerHTML = EMPTY;
    document.getElementById("graph-image").style.display = "none";
}

export function refreshWorkingArea() {
    // to reset the working area
    jsplumbInstance.deleteEveryEndpoint();
    editConnectionMap();

    // to remove all the svgs called in the working area
    emptyList();

    resetCounts();
    refreshObservations();
    comp2Input0();
    comp2Input1();
    comp2Output();
}
refreshWorkingArea();

