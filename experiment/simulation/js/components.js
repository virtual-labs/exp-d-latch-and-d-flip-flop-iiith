import {connectionMap} from './main.js';
'use strict';
export const jsplumbInstance = jsPlumb.getInstance({

    container: diagram,
    maxConnections: -1,
    endpoint: {
        type: "Dot",
        options: { radius: 7 },
    },
    dragOptions: {
        containment: "parentEnclosed",
        containmentPadding: 5,
    },
    connector: "Flowchart",
    paintStyle: { strokeWidth: 3, stroke: "#456" },
    connectionsDetachable: true,
});
jsplumbInstance.bind("ready", function () {
    jsplumbInstance.registerConnectionTypes({
        "red-connection": {
            paintStyle: { stroke: "red", strokeWidth: 3 },
            hoverPaintStyle: { stroke: "red", strokeWidth: 8 },
            connector: "Flowchart"
        }
    });
});

export const wireColours = {"input":"#00ff00","clock":"#0000ff","mux":"#bf6be3","inverter":"#ff00ff","clockbar":"#00ffff", "latch":"#ff8000"};

function getWireColor(sourceId)  {
    let tempId = sourceId.slice(0, -1);
    return wireColours[tempId];
}


export function editConnectionMap() {
    connectionMap.clear();
    jsplumbInstance.getAllConnections().forEach(connection => {
        console.log(connection.sourceId);
        connection.setPaintStyle({
            stroke: getWireColor(connection.sourceId),
            strokeWidth: 3,
        });
        connection.setHoverPaintStyle({
            stroke: getWireColor(connection.sourceId),
            strokeWidth: 8,
        });
        const connectionId = `${connection.sourceId}$${connection.targetId}`;
        connectionMap.set(connectionId, connection.targetId);
    });
}

jsplumbInstance.bind("connection", () => {
    editConnectionMap();
});

jsplumbInstance.bind("dblclick", function (ci) {

    jsplumbInstance.deleteConnection(ci);
    editConnectionMap();

});


export function addInstanceInverter(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0, 0.5, -1, 0], -1, false);
}

export function addInstanceMux(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0.5, 0, 0, -1], -1, false);
    addInstance(id, [0, 0.315, -1, 0], -1, false);
    addInstance(id, [0, 0.615, -1, 0], -1, false);
}

export function addInstanceLatch(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
    addInstance(id, [0.5, 0, 0, -1], -1, false);
    addInstance(id, [0, 0.5, -1, 0], -1, false);
}

export function addInstanceClock(id) {
    addInstance(id, [1, 0.25, 1, 0], -1, true);
}
export function addInstanceClockbar(id) {
    addInstance(id, [1, 0.25, 1, 0], -1, true);
}

export function addInstanceFinalInput(id) {
    addInstance(id, [1, 0.5, 1, 0], -1, true);
}

export function addInstanceFinalOutput(id) {
    addInstance(id, [0, 0.5, -1, 0], -1, false);
}

export function addInstance(id, position, num, src) {
    jsplumbInstance.addEndpoint(id, {
        endpoint: ["Dot", { radius: 5 }],
        anchor: position,
        isTarget: !src,
        isSource: src,
        maxConnections: num,
        connectionType: "red-connection"
    });
}

// top -> [0.5, 0, 0, -1]
// bottom -> [ 0.5, 1, 0, 1 ]
// right -> [1, 0.5, 1, 0]
// left -> [0, 0.5, -1, 0]
