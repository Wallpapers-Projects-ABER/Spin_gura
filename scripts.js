var mousepressed = 0;
var b_mb_pos_x = -4;
var b_mb_pos_y = -4;
//var n_mb_pos_x = -4;
//var n_mb_pos_y = -4;

var real_n_mb_pos_x = -4;
var real_n_mb_pos_y = -4;

var n_img_3d_angle = 7;
var pertential_angle = 0;
var pertential_angle_sec = 0;
var fps = 10;
var air_resistence = 0.67;


//air resistence button
document.querySelector(".air_res_bar").addEventListener("input",function()
{
air_resistence = (500-document.getElementById("air_res_bar").value)/500;
console.log("air_resistence"+air_resistence);
})



//step event
setTimeout(step_event,fps);
function step_event() //10 fps
{
    if ((b_mb_pos_x - real_n_mb_pos_x) != 0)
    {
    pertential_angle_sec += (real_n_mb_pos_x - pertential_angle_sec)*(air_resistence/25);
    pertential_angle += (pertential_angle_sec - pertential_angle)*(air_resistence/25);
    b_mb_pos_x += (pertential_angle - b_mb_pos_x)*(air_resistence/25);
    }



var distance_from_b = (b_mb_pos_x - real_n_mb_pos_x)/640;
n_img_3d_angle += distance_from_b;
console.log("distance_from_b (potential) : "+distance_from_b);

    if (n_img_3d_angle < 1)
    {
    n_img_3d_angle = 22-n_img_3d_angle;
    }
    
    if (n_img_3d_angle > 22)
    {
    n_img_3d_angle = 1+(n_img_3d_angle-22);
    }
    
document.querySelector(".obj_gura").src = "imgs/"+round(n_img_3d_angle)+".png";

setTimeout(step_event,fps);
}

document.addEventListener("mousemove",function()
{
    if (mousepressed == 1)
    {
    real_n_mb_pos_x = event.clientX;
    real_n_mb_pos_y = event.clientY;

    var distance_from_b = (b_mb_pos_x - real_n_mb_pos_x)/640;
    
    if (abs(distance_from_b) > 7)
    {
    distance_from_b = 7*sign(distance_from_b)
    }
    
    n_img_3d_angle += distance_from_b;
    console.log("distance_from_b : "+distance_from_b);

        if (n_img_3d_angle < 1)
        {
        n_img_3d_angle = 22-n_img_3d_angle;
        }
        
        if (n_img_3d_angle > 22)
        {
        n_img_3d_angle = 1+(n_img_3d_angle-22);
        }

    document.querySelector(".obj_gura").src = "imgs/"+round(n_img_3d_angle)+".png";
    }
})


window.onload = function()
{
var view_width = window.innerWidth;
document.querySelector(".obj_gura").style.left = (view_width/2-140)+"px";
document.querySelector(".obj_gura").style.opacity = 1;

// real_n_mb_pos_x = irandom_range(0,1980);
// b_mb_pos_x = irandom_range(0,1980);
}

window.addEventListener("resize", function()
{
var view_width = window.innerWidth;
document.querySelector(".obj_gura").style.left = (view_width/2-140)+"px";
document.querySelector(".obj_gura").style.opacity = 1;
})


// pressing now
document.addEventListener("mousedown",function()
{
mousepressed = 1;
b_mb_pos_x = event.clientX;
b_mb_pos_y = event.clientY;
console.log("B("+b_mb_pos_y+","+b_mb_pos_y+")");
})

// released
document.addEventListener("mouseup",function()
{
mousepressed = 0;
//n_mb_pos_x = event.clientX;
//n_mb_pos_y = event.clientY;
pertential_angle = event.clientX;
pertential_angle_sec = event.clientX;
//console.log("N("+n_mb_pos_x+","+n_mb_pos_y+")");
})