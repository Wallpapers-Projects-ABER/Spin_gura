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

var do_not_show_guide = 0;



//air resistence button
document.querySelector(".air_res_bar").addEventListener("input",function()
{
air_resistence = (500-document.getElementById("air_res_bar").value)/500;
console.log("air_resistence"+air_resistence);
})



window.onload = function()
{
var view_width = window.innerWidth;
document.querySelector(".obj_gura").style.left = (view_width/2-140)+"px";
document.querySelector(".obj_gura").style.opacity = 1;

document.querySelector(".air_res").style.opacity = 1;
document.querySelector(".air_res_bar").style.opacity = 1;
// real_n_mb_pos_x = irandom_range(0,1980);
// b_mb_pos_x = irandom_range(0,1980);
document.querySelector(".obj_guide").style.left = (view_width/2+40)+"px";


guide_mes();
}

window.addEventListener("resize", function()
{
var view_width = window.innerWidth;
document.querySelector(".obj_gura").style.left = (view_width/2-140)+"px";
document.querySelector(".obj_gura").style.opacity = 1;

document.querySelector(".air_res").style.opacity = 1;
document.querySelector(".air_res_bar").style.opacity = 1;

document.querySelector(".obj_guide").style.left = (view_width/2+40)+"px";
})



function guide_cursor_anime1()
{
document.querySelector(".obj_guide_cursor").style.opacity = 0.8;
setTimeout(guide_cursor_anime2,1000);
}

function guide_cursor_anime2()
{
var view_width = window.innerWidth;
document.querySelector(".obj_guide_cursor").src = "imgs/icon4.png";
document.querySelector(".obj_guide_cursor").style.width = 70+"px";
document.querySelector(".obj_guide_cursor").style.left = (view_width/2+200)+"px";

document.querySelector(".guide_text").style.opacity = 0.8;
document.querySelector(".guide_text").style.left = (view_width/2+150)+"px";
setTimeout(guide_cursor_anime3,1500);
}

function guide_cursor_anime3()
{
document.querySelector(".obj_guide_cursor").src = "imgs/icon3.png";
document.querySelector(".obj_guide_cursor").style.width = 80+"px";
document.querySelector(".obj_guide_cursor").style.opacity = 0;

document.querySelector(".guide_text").style.opacity = 0;
setTimeout(guide_cursor_anime4,1000);
}

function guide_cursor_anime4()
{
var view_width = window.innerWidth;
document.querySelector(".obj_guide_cursor").style.left = (view_width/2-40)+"px";
document.querySelector(".guide_text").style.left = 54+"%";
    if (do_not_show_guide == 0)
    {
    document.querySelector(".obj_guide_cursor").style.opacity = 0;
    document.querySelector(".guide_text").style.opacity = 0;
    setTimeout(guide_cursor_anime1,1000);
    }
}



function guide_mes()
{
document.querySelector(".obj_guide").style.opacity = 1;
document.querySelector(".obj_guide").style.width = 70+"px";
setTimeout(guide_mes_anime1,500);
}


function guide_mes_anime1()
{
    if (do_not_show_guide == 0)
    {
    document.querySelector(".obj_guide").style.width = 60+"px";
    document.querySelector(".obj_guide").style.transition = "width 0.4s";
    setTimeout(guide_mes_anime2,270);
    }
}

function guide_mes_anime2()
{
    if (do_not_show_guide == 0)
    {
    document.querySelector(".obj_guide").style.width = 66+"px";
    setTimeout(guide_mes_anime3,270);
    }
}

function guide_mes_anime3()
{
    if (do_not_show_guide == 0)
    {
    document.querySelector(".obj_guide").style.width = 62+"px";
    setTimeout(guide_mes_anime4,270);
    }
}

function guide_mes_anime4()
{
    if (do_not_show_guide == 0)
    {
    document.querySelector(".obj_guide").style.width = 64+"px";
    }
}


//guide opened
document.querySelector(".obj_guide").addEventListener("click",function()
{
var view_width = window.innerWidth;
document.querySelector(".obj_guide").style.width = 0+"px";
document.querySelector(".obj_guide").style.opacity = 0;

document.querySelector(".guide_text").style.left = 54+"%";
document.querySelector(".obj_guide_cursor").style.left = (view_width/2-40)+"px";
guide_cursor_anime1();
})





// pressing now
document.addEventListener("mousedown",function()
{
mousepressed = 1;
b_mb_pos_x = event.clientX;
b_mb_pos_y = event.clientY;
real_n_mb_pos_x = event.clientX;
real_n_mb_pos_y = event.clientY;



do_not_show_guide = 1;

document.querySelector(".obj_guide").style.width = 0+"px";
document.querySelector(".obj_guide").style.opacity = 0;

document.querySelector(".obj_guide_cursor").style.transition = "opacity 0s";
document.querySelector(".obj_guide_cursor").style.opacity = 0;

document.querySelector(".guide_text").style.transition = "opacity 0s";
document.querySelector(".guide_text").style.opacity = 0;


console.log("B("+b_mb_pos_x+","+b_mb_pos_y+")");
})

// released
document.addEventListener("mouseup",function()
{
mousepressed = 0;
pertential_angle = event.clientX;
pertential_angle_sec = event.clientX;
//n_mb_pos_x = event.clientX;
//n_mb_pos_y = event.clientY;
console.log("N("+real_n_mb_pos_x+","+real_n_mb_pos_y+")");
})


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
    //console.log("distance_from_b : "+distance_from_b);

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
//console.log("distance_from_b (potential) : "+distance_from_b);

    if (abs(distance_from_b) > 7)
    {
    distance_from_b = 7*sign(distance_from_b)
    }

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

