const dimensions = {width: 100, height: 40};

function horizontalSegment(x, y, state) {
    let h = dimensions.height, w = dimensions.width;
    let fillNum;
    state ? fillNum = 179 : fillNum = 51;
    fill(fillNum, 0, 0);
    stroke(fillNum, 0, 0);
    triangle(x, (h / 2) + y, x + (h / 2), y, x + (h / 2), y + h);
    rect(x + (h / 2), y, w, h);
    triangle(w + x + (h / 2), y, w + x + (h / 2), y + h, w + x + ((h / 2) * 2), (h / 2) + y);
}

function verticalSegment(x, y, state) {
    let heightVertical = dimensions.width, widthVertical = dimensions.height;
    let fillNum;
    state ? fillNum = 179 : fillNum = 51;
    fill(fillNum, 0, 0);
    stroke(fillNum, 0, 0);
    triangle((widthVertical / 2) + x, y, x, y + (widthVertical / 2), x + widthVertical, y + (widthVertical / 2));
    rect(x, y + (widthVertical / 2), widthVertical, heightVertical);
    triangle(x, y + (widthVertical / 2) + heightVertical, x + widthVertical, y + (widthVertical / 2) + heightVertical,(widthVertical / 2) + x, heightVertical + y + ((widthVertical / 2) * 2));
}

function display(x, y, stateArray) {
    let dist = 8, diff = 20;
    let cornerDist = dist + diff;
    let totalSpace = dimensions.width + ((dimensions.height / 2) * 2) + (y + cornerDist) - (dimensions.height / 2) + dist;
    horizontalSegment(x + cornerDist, y, stateArray[0]);
    verticalSegment(x + totalSpace, y + cornerDist, stateArray[1]);
    verticalSegment(x + totalSpace, y + cornerDist + totalSpace, stateArray[2]);
    horizontalSegment(x + cornerDist, y + (totalSpace * 2), stateArray[3]);
    verticalSegment(x, y + cornerDist + totalSpace, stateArray[4]);
    verticalSegment(x, y + cornerDist, stateArray[5]);
    horizontalSegment(x + cornerDist, y + totalSpace, stateArray[6]);
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(60);
    display(0, 0, symbols.degree);
}