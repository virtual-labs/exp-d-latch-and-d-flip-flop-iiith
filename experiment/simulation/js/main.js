'use strict';
import { comp2Input0, comp2Output, resetCounts } from "./integrate.js";
import { jsplumbInstance, editConnectionMap } from "./components.js";

export const connectionMap = new Map();

const container = document.getElementById("diagram");
container.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

const EMPTY = "";
export let componentsList = [];
export const currentTab = { LATCH: 0, FLIPFLOP: 1 };
export let selectedTab = currentTab.LATCH;
const tabs = document.querySelectorAll('.v-tabs li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        let parent = tab.parentNode;
        selectedTab = Array.prototype.indexOf.call(parent.children, tab);
        refreshWorkingArea();
    });
});

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
    comp2Output();
}
refreshWorkingArea();

