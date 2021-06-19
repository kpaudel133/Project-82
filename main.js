var mouseEvent= "";
var last_position_of_x, last_position_of_y;

var mesleepy= "black";
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

line_width= 1;
radius=1;
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
    radius= document.getElementById("hello").value;
    mesleepy= document.getElementById("I_am_tired").value;
    line_width= document.getElementById("Sleepy_tired").value;
    mouseEvent="mousedown";
    
}

canvas.addEventListener("mouseleave", I_cannot_do_much);

function I_cannot_do_much(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseleave", I_cannot_do_anything);

function I_cannot_do_anything(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", I_cannot_move);

function I_cannot_move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mousedown") {
    console.log("Current position of x and y coordinates =  ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = mesleepy;
    ctx.lineWidth = line_width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*MathPI);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}