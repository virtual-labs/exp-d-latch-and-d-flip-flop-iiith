function compInverter() {
    maxCount.Inverter -= 1
    if(maxCount.Inverter < 0){
        document.getElementById('error-container').style.display='flex'
        return
    }
    const id = "inverter" + count.Inverter;
    const d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 53"><g><path d="M 1 26 L 21 26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 21 1 L 61 26 L 21 51 Z" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="66" cy="26" rx="5" ry="5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/><path d="M 71 26 L 81 26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
    count.Inverter += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceInverter(id);
}

function compMux() {
    maxCount.Mux -= 1
    if(maxCount.Mux < 0){
        document.getElementById('error-container').style.display='flex'
        return
    }
    const id = "mux" + count.Mux;
    const d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 10 124 143"><g><rect x="21" y="21" width="80" height="120" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 81px; margin-left: 22px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><b style="font-size: 14px">2 * 1<br />I/O<br />MUX</b></div></div></div></foreignObject><text x="61" y="85" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">2 * 1...</text></switch></g><path d="M 1 101 L 21 101" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 121 81 L 101 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 61 1 L 61 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 51 L 21 51" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>'
    d.id = id;
    d.className = 'component2';
    count.Mux += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceMux(id);
}

function compLatch() {
    maxCount.Latch -= 1
    if(maxCount.Latch < 0){
        document.getElementById('error-container').style.display='flex'
        return
    }    
    const id = "latch" + count.Latch;
    const d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 10 124 143"><g><rect x="21" y="21" width="80" height="120" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 78px; height: 1px; padding-top: 81px; margin-left: 22px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><b style="font-size: 14px">1 * 1<br />I/O<br />Latch</b></div></div></div></foreignObject><text x="61" y="85" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">1 * 1...</text></switch></g><path d="M 21 81 L 1 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 121 81 L 101 81" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 61 1 L 61 21" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>'
    d.id = id;
    d.className = 'component2';
    count.Latch += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceLatch(id);
}

function compClock() {
    maxCount.Clock -= 1
    if(maxCount.Clock < 0){
        document.getElementById('error-container').style.display='flex'
        return
    }
    const id = "clock" + count.Clock;
    const d = document.createElement('div');
    //d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 81 L 1 1 L 41 21 L 1 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 64 34" ><g><path d="M 1 31 L 41 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 1 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 31 L 1 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><rect x="3.02" y="11" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;"><b>Clk</b></div></div></div></foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>'
    d.id = id;
    d.className = 'component';
    count.Clock += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClock(id);
}
function compClockbar() {
    maxCount.Clockbar -= 1
    if(maxCount.Clockbar < 0){
        document.getElementById('error-container').style.display='flex'
        return
    }
    const id = "clockbar" + count.Clockbar;
    const d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 64 34" ><g><path d="M 1 31 L 41 31" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 1 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 1 31 L 1 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 41 31 L 61 1" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><rect x="3.02" y="11" width="40" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 21px; margin-left: 23px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: nowrap;"><div style="text-decoration:overline"><b>Clk</b></div></div></div></div></foreignObject><text x="23" y="25" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="14px" text-anchor="middle">Clk</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>'
    d.id = id;
    d.className = 'component';
    count.Clockbar += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceClockbar(id);
}

function comp2Input0() {
    const id = "input0";
    const d = document.createElement('div');
    d.innerHTML = 'Input 1<br><br>'
    d.id = id;
    d.className = 'io-component';
    d.style.top = "1.25rem";
    d.style.left = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalInput(id);
}

function comp2Output() {
    const id = "output0";
    const d = document.createElement('div');
    d.innerHTML = 'Output<br><br>'
    d.id = id;
    d.className = 'io-component';
    d.style.top = "1.25rem";
    d.style.right = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", d);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalOutput(id);
}
