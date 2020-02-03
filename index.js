const arcList = [];
let centerPoint = { x: 300, y: 300 };
const deltaPhi = 0.09;
const interval = 100;

let globalPhi = deltaPhi;
let setArcStage = 0; // 0 - default; 1 - ready to set 1st point; 2 - ready to set 2nd point;
let setCenterStatus = false;
let tempPoint = [];

/// event listeners //////////
function setLine() {
    if (setArcStage === 0) {
        setArcStage = 1;
        setLineBut.style.background = "red";
    }
}

function setCenter() {
    setCenterStatus = !setCenterStatus;
    setCenterBut.style.background = "red";
}

function run() {
    runRotation(arcList, centerPoint, deltaPhi, interval, ctx);
}

function canvasClick(e) {
    if (setCenterStatus) {
        setCenterStatus = false;
        setCenterBut.style.background = "";
        centerPoint = {
            x: e.clientX,
            y: e.clientY
        };
        drawCircle(centerPoint, ctx);
    }

    switch (setArcStage) {
        case 1: {
            setArcStage++;
            plist.innerHTML += `(${e.clientX}, ${e.clientY})   => `;
            tempPoint[0] = { x: e.clientX, y: e.clientY };
            break;
        }

        case 2: {
            setArcStage = 0;
            setLineBut.style.background = "";
            plist.innerHTML += `(${e.clientX}, ${e.clientY}) <br/>`;
            tempPoint[1] = { x: e.clientX, y: e.clientY };
            arcList.push([...tempPoint]);
            console.log("arcList", arcList);
            drawArcList(arcList, ctx);
            break;
        }

        default:
            break;
    }
}
/////////////////////////////

function rotateArcs(arcList, centerPoint, deltaPhi) {
    return arcList.map(arc =>
        arc.map(point => rotatePoint(point, centerPoint, deltaPhi))
    );
}

function runRotation(arcList, centerPoint, deltaPhi, interval, ctx) {
    drawCircle(centerPoint, ctx);

    let rotation = setInterval(() => {
        drawArcList(rotateArcs(arcList, centerPoint, globalPhi), ctx);
        globalPhi += deltaPhi;
        drawCircle(centerPoint, ctx);
    }, interval);
}

///////////////////

function drawArcList(arcList, context) {
    context.clearRect(0, 0, 700, 700);
    arcList.forEach(arc => {
        drawLine(arc[0], arc[1], context);
    });
}

const c = document.querySelector("canvas");
const ctx = c.getContext("2d");

const plist = document.querySelector("#plist");
const setLineBut = document.querySelector("#set-line");
const setCenterBut = document.querySelector("#set-center");

drawArcList(arcList, ctx);
