let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),

    mousedown = {x: 0, y: 0},
    lastdrag = {x: 0, y: 0},
    shapeBeingDragged = undefined;

//Init……

//初始化多边形对象Polygon(shapes.js)
let polygon = new Polygon(),
    //添加点位
    points = [new Point(250, 150), new Point(250, 250),
        new Point(350, 250)];

polygon.strokeStyle = 'blue';
polygon.fillStyle = 'yellow';

//将点位赋予对象中
points.forEach(function (point) {
    polygon.addPoint(point.x, point.y);
});

drawShapes();

//坐标纠正
function windowToCanvas(e) {
    let x = e.x || e.clientX,
        y = e.y || e.clientY,
        bbox = canvas.getBoundingClientRect();

    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
};

//自定义API填充和描边,进行绘制
function drawShapes() {
    polygon.stroke(context);
    polygon.fill(context);
}

canvas.onmousedown = function (e) {
    let location = windowToCanvas(e);

    //判断是否在路径内
    if (polygon.isPointInPath(context, location.x, location.y)) {

        //将多边形对象设置为当前操作状态
        shapeBeingDragged = polygon;
        mousedown.x = location.x;
        mousedown.y = location.y;
        lastdrag.x = location.x;
        lastdrag.y = location.y;
    }
};


canvas.onmousemove = function (e) {
    let location,
        dragVector;

    if (shapeBeingDragged !== undefined) {
        location = windowToCanvas(e);

        //读取移动过程中，每一时刻的偏移量对象【当前鼠标位置-上一时刻的位置】
        dragVector = {
            x: location.x - lastdrag.x,
            y: location.y - lastdrag.y
        };

        //根据偏移量对象进行移动
        shapeBeingDragged.move(dragVector.x, dragVector.y);

        //将当前鼠标位置设成lastdrag，为下一时刻读取上一时刻的位置作准备
        lastdrag.x = location.x;
        lastdrag.y = location.y;

        //清除整个画布
        context.clearRect(0, 0, canvas.width, canvas.height);

        //重新绘制
        drawShapes();
    }
};

canvas.onmouseup = function (e) {
    shapeBeingDragged = undefined;
};

