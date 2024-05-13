'use strict';
import { componentsList, selectedTab, currentTab } from './main.js';
import { addInstanceClock, addInstanceClockbar, addInstanceFinalInput, addInstanceInverter, addInstanceLatch, addInstanceMux, addInstanceFinalOutput } from './components.js';
import { jsplumbInstance } from "./components.js";
import { latchValidate, flipflopValidate, JKFFValidate } from "./latchflipflop.js";

window.compInverter = compInverter;
window.compMux = compMux;
window.compLatch = compLatch;
window.compClock = compClock;
window.compClockbar = compClockbar;
window.circuitValidate = circuitValidate;

let count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
let maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 2, Mux: 2, Latch: 2, Transistor: 0, Clock: 1, Clockbar: 1 };

export function resetCounts() {
    count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
    if (selectedTab === currentTab.LATCH) {
        maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 2, Mux: 1, Latch: 0, Transistor: 0, Clock: 1, Clockbar: 0 };
    }
    else if (selectedTab === currentTab.JK) {
        maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 1, Mux: 1, Latch: 2, Transistor: 0, Clock: 1, Clockbar: 1 };
    }
    else {
        maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 2, Transistor: 0, Clock: 1, Clockbar: 1 };
    }

}

export function circuitValidate() {
    if (selectedTab === currentTab.LATCH) {
        latchValidate();
    }
    else if(selectedTab === currentTab.JK) {
        JKFFValidate();
    }
    else {
        flipflopValidate();
    }
    document.getElementById('error-container').style = 'display:none;';
}

export function compInverter() {
    maxCount.Inverter -= 1;
    if (maxCount.Inverter < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "inverter" + count.Inverter;
    const divPushed = document.createElement('div');
    divPushed.innerHTML = `
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 53">
            <g class="demo-transistor">
                <path d="M 1 26 L 21 26"/>
                <path d="M 21 1 L 61 26 L 21 51 Z" />
                <ellipse cx="66" cy="26" rx="5" ry="5"/>
                <path d="M 71 26 L 81 26"/>
            </g>
        </svg>`;
    divPushed.id = id;
    divPushed.className = 'component';
    count.Inverter += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceInverter(id);
    componentsList.push(divPushed);
}

export function compMux() {
    maxCount.Mux -= 1;
    if (maxCount.Mux < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "mux" + count.Mux;
    const divPushed = document.createElement('div');
    divPushed.innerHTML = `
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 10 124 143">
            <g class="demo-transistor">
                <rect x="21" y="21" width="80" height="120"/>
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                            <div xmlns="https://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 81px; margin-left: 22px;">
                                <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">\
                                        <b style="font-size: 14px">2 * 1<br />I/O<br />MUX</b>
                                    </div>
                                </div>
                            </div>
                        </foreignObject>
                        <text x="61" y="85" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">2 * 1...</text>
                    </switch>
                </g>
                <path d="M 1 101 L 21 101"/>
                <path d="M 121 81 L 101 81"/>
                <path d="M 61 1 L 61 21"/>
                <path d="M 1 51 L 21 51"/>
            </g>
            <switch>
                <g requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility"/>
                <a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
                    <text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text>
                </a>
            </switch>
        </svg>`;
    divPushed.id = id;
    divPushed.className = 'component2';
    count.Mux += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceMux(id);
    componentsList.push(divPushed);
}

export function compLatch() {
    maxCount.Latch -= 1;
    if (maxCount.Latch < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "latch" + count.Latch;
    const divPushed = document.createElement('div');
    divPushed.innerHTML = `
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 10 124 143">
            <g class="demo-transistor">
                <rect x="21" y="21" width="80" height="120" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/>
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;">
                            <div xmlns="https://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 81px; margin-left: 22px;">
                                <div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">
                                        <b style="font-size: 14px">1 * 1<br />I/O<br />Latch</b>
                                    </div>
                                </div>
                            </div>
                        </foreignObject>
                        <text x="61" y="85" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">1 * 1...</text>
                    </switch>
                </g>
                <path d="M 21 81 L 1 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/>
                <path d="M 121 81 L 101 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/>
                <path d="M 61 1 L 61 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/>
            </g>
            <switch>
                <g requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility"/>
                <a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank">
                    <text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text>
                </a>
            </switch>
        </svg>`;
    divPushed.id = id;
    divPushed.className = 'component2';
    count.Latch += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceLatch(id);
    componentsList.push(divPushed);
}

export function compClock() {
    maxCount.Clock -= 1;
    if (maxCount.Clock < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "clock" + count.Clock;
    const divPushed = document.createElement('div');
    divPushed.innerHTML = `
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"
            version="1.1" viewBox="-0.5 -0.5 64 34">
            <g class="demo-transistor">
                <path d="M 1 31 L 41 31" />
                <path d="M 1 1 L 61 1" />
                <path d="M 1 31 L 1 1" />
                <path d="M 41 31 L 61 1" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject pointer-events="none" width="100%" height="100%"
                            requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility"
                            style="overflow: visible; text-align: left;">
                            <div xmlns="https://www.w3.org/1999/xhtml"
                                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;">
                                <div data-drawio-colors="color: rgb(0, 0, 0); "
                                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <div
                                        style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                                        <b>Clk</b>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)"
                            font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text>
                    </switch>
                </g>
            </g>
            <switch>
                <g requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility" /><a
                    transform="translate(0,-5)"
                    xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
                    target="_blank"><text text-anchor="middle" font-size="10px" x="50%"
                        y="100%">Text is not SVG - cannot display</text></a>
            </switch>
        </svg>`;
    divPushed.id = id;
    divPushed.className = 'component';
    count.Clock += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClock(id);
    componentsList.push(divPushed);
}

export function compClockbar() {
    maxCount.Clockbar -= 1;
    if (maxCount.Clockbar < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "clockbar" + count.Clockbar;
    const divPushed = document.createElement('div');
    divPushed.innerHTML = `
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 64 34">
            <g class="demo-transistor">
                <path d="M 1 31 L 41 31" />
                <path d="M 1 1 L 61 1" />
                <path d="M 1 31 L 1 1" />
                <path d="M 41 31 L 61 1" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject pointer-events="none" width="100%" height="100%"
                            requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility"
                            style="overflow: visible; text-align: left;">
                            <div xmlns="https://www.w3.org/1999/xhtml"
                                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;">
                                <div data-drawio-colors="color: rgb(0, 0, 0); "
                                    style="box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <div
                                        style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;">
                                        <div style="text-decoration:overline"><b>Clk</b></div>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)"
                            font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text>
                    </switch>
                </g>
            </g>
            <switch>
                <g requiredFeatures="https://www.w3.org/TR/SVG11/feature#Extensibility" /><a
                    transform="translate(0,-5)"
                    xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
                    target="_blank"><text text-anchor="middle" font-size="10px" x="50%"
                        y="100%">Text is not SVG - cannot display</text></a>
            </switch>
        </svg>`;
    divPushed.id = id;
    divPushed.className = 'component';
    count.Clockbar += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClockbar(id);
    componentsList.push(divPushed);
}

export function comp2Input0() {
    const id = "input0";
    const divPushed = document.createElement('div');
    if (selectedTab === currentTab.JK)
    divPushed.innerHTML = 'J<br><br>';
    else if(selectedTab === currentTab.LATCH)
    divPushed.innerHTML = 'Input<br><br>';
    else
    divPushed.innerHTML = 'D<br><br>';
    divPushed.id = id;
    divPushed.className = 'io-component';
    divPushed.style.top = "1.25rem";
    divPushed.style.left = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalInput(id);
    componentsList.push(divPushed);
}

export function comp2Input1() {
    if(selectedTab===currentTab.JK)
    {
        const id = "input1";
        const svgElement = document.createElement('div');
        svgElement.innerHTML = 'K<br><br>';
        svgElement.id = id;
        svgElement.className = 'io-component';
        svgElement.style.top = "5.25rem";
        svgElement.style.left = "0.625rem";
        const container = document.getElementById("diagram");
        container.insertAdjacentElement("afterbegin", svgElement);
        jsplumbInstance.draggable(id, { "containment": true });
        addInstanceFinalInput(id);
        componentsList.push(svgElement);
    }
}

export function comp2Output() {
    const id = "output0";
    const divPushed = document.createElement('div');
    divPushed.innerHTML = 'Output<br><br>';
    divPushed.id = id;
    divPushed.className = 'io-component';
    divPushed.style.top = "1.25rem";
    divPushed.style.right = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", divPushed);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalOutput(id);
    componentsList.push(divPushed);
}