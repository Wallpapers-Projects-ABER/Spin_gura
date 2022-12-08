////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////change this value to "1" or "0" if you want to change skin/////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



var skin_type = 0;




////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
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
var spin_speed = 1000;

var do_not_show_guide = 0;
var view_width = window.innerWidth;
var view_height = window.innerHeight;
var c_w = view_width/1920;
var real_skin_type = -4;
var setting_now = 0;
var loading_now = 1;
var loading_time = 8000;

var check_imgs_loaded = 1


//instance
var ins_air_res_bar = document.querySelector(".air_res_bar");
var ins_air_res = document.querySelector(".air_res");
var ins_type_change = document.querySelector(".type_change");
var ins_github_link = document.querySelector(".github_link");
var ins_obj_guide = document.querySelector(".obj_guide");
var ins_obj_gura = document.querySelector(".obj_gura");
var ins_obj_guide_cursor = document.querySelector(".obj_guide_cursor");
var ins_guide_text = document.querySelector(".guide_text");
var ins_guide_line = document.querySelector(".guide_line");
var ins_loading_bg = document.querySelector(".loading_bg");
var ins_loading_gif = document.querySelector(".loading_gif");
var ins_resistence_value_text = document.querySelector(".resistence_value_text");









//setting for first
window.onload = function()
{
ins_obj_gura.style.left = (view_width/2-140)+"px";
ins_obj_gura.style.opacity = 1;

// When we begin, assume no images are loaded.
var images_loaded = 0;
// Count the total number of images on the page when the page has loaded.
var total_images = document.querySelector("img").length;

// After an image is loaded, add to the count, and if that count equals the
// total number of images, fire the allImagesLoaded() function.
document.querySelector("img").addEventListener("load", function() 
{
images_loaded++;
    if (images_loaded == total_images) 
    {
    check_imgs_loaded = 1;
    }
});


//loading
loading_time -= 7000*check_imgs_loaded;
console.log("loading_time");
setTimeout(loading_anime,loading_time);
skin_change_apply()

ins_air_res.style.opacity = 1;
ins_air_res_bar.style.opacity = 1;
ins_type_change.style.opacity = 1;
ins_github_link.style.opacity = 1;
// real_n_mb_pos_x = irandom_range(0,1980);
// b_mb_pos_x = irandom_range(0,1980);
ins_obj_guide.style.left = (view_width/2+40)+"px";

setTimeout(guide_mes,loading_time+1000);
}

window.addEventListener("resize", function()
{
view_width = window.innerWidth;
view_height = window.innerHeight;
ins_obj_gura.style.left = (view_width/2-140)+"px";
ins_obj_gura.style.opacity = 1;

ins_air_res.style.opacity = 1;
ins_air_res_bar.style.opacity = 1;

ins_obj_guide.style.left = (view_width/2+40)+"px";
})






//apply changed skin
function skin_change_apply()
{
    if (skin_type == 0)
    {
    real_skin_type = "";
    }
    else
    {
    real_skin_type = "B_";
    }
ins_obj_gura.style.src = "source/imgs/"+real_skin_type+n_img_3d_angle+".png";
}





//air resistence button
ins_air_res_bar.addEventListener("input",function()
{
    if (loading_now == 0)
    {
    air_resistence = (500-document.getElementById("air_res_bar").value)/500;
    //console.log("air_resistence"+air_resistence);
    
    if (air_resistence == 0.2)
    {
    air_resistence = 0;
    }
    
    ins_resistence_value_text.value = air_resistence;
    ins_resistence_value_text.style.transition = "opacity 0s"
    ins_resistence_value_text.style.opacity = 1;
    }
})

ins_air_res_bar.addEventListener("click",function()
{
ins_resistence_value_text.style.transition = "opacity 0.5s"
ins_resistence_value_text.style.opacity = 0;
})

ins_air_res_bar.addEventListener("mouseover",function()
{
ins_air_res_bar.style.backgroundColor = "#bdb7bb";
setting_now = 1;
})

ins_air_res_bar.addEventListener("mouseleave",function()
{
ins_air_res_bar.style.backgroundColor = "#dad4d8";
setting_now = 0;
})





//guide animations 1
function guide_cursor_anime1()
{
ins_obj_guide_cursor.style.opacity = 0.8;
setTimeout(guide_cursor_anime2,1000);
}

function guide_cursor_anime2()
{
ins_obj_guide_cursor.src = "source/imgs/icon4.png";
ins_obj_guide_cursor.style.width = 70+"px";
ins_obj_guide_cursor.style.left = (view_width/2+200)+"px";

ins_guide_text.style.opacity = 0.8;
ins_guide_text.style.left = (view_width/2+150)+"px";

ins_guide_line.style.opacity = 0.8;
ins_guide_line.style.width = 215+"px";
setTimeout(guide_cursor_anime3,1500);
}

function guide_cursor_anime3()
{
ins_obj_guide_cursor.src = "source/imgs/icon3.png";
ins_obj_guide_cursor.style.width = 80+"px";
ins_obj_guide_cursor.style.opacity = 0;

ins_guide_text.style.opacity = 0;

ins_guide_line.style.opacity = 0;
setTimeout(guide_cursor_anime4,1000);
}

function guide_cursor_anime4()
{
ins_obj_guide_cursor.style.left = (view_width/2-40)+"px";
ins_guide_text.style.left = 54+"%";
    if (do_not_show_guide == 0)
    {
    ins_obj_guide_cursor.style.opacity = 0;
    ins_guide_text.style.opacity = 0;
    ins_guide_line.style.width = 0+"px";
    setTimeout(guide_cursor_anime1,1000);
    }
}


//default setting
function guide_mes()
{
ins_obj_guide.style.opacity = 1;
ins_obj_guide.style.width = 70+"px";
setTimeout(guide_mes_anime1,500);
}


//guide animations 2
function guide_mes_anime1()
{
    if (do_not_show_guide == 0)
    {
    ins_obj_guide.style.width = 60+"px";
    ins_obj_guide.style.transition = "width 0.4s";
    setTimeout(guide_mes_anime2,270);
    }
}

function guide_mes_anime2()
{
    if (do_not_show_guide == 0)
    {
    ins_obj_guide.style.width = 66+"px";
    setTimeout(guide_mes_anime3,270);
    }
}

function guide_mes_anime3()
{
    if (do_not_show_guide == 0)
    {
    ins_obj_guide.style.width = 62+"px";
    setTimeout(guide_mes_anime4,270);
    }
}

function guide_mes_anime4()
{
    if (do_not_show_guide == 0)
    {
    ins_obj_guide.style.width = 64+"px";
    }
}

function guide_mes_des_anime()
{
ins_obj_guide.style.width = 0;
ins_obj_guide.style.opacity = 0;
ins_obj_guide_cursor.style.top = 0;
ins_obj_guide_cursor.style.opacity = 0;
ins_guide_text.style.width = 0;
ins_guide_text.style.opacity = 0;
ins_guide_line.style.width = 0;
ins_guide_line.style.opacity = 0;
}









//guide button
ins_obj_guide.addEventListener("mouseover",function()
{
setting_now = 1;
})

ins_obj_guide.addEventListener("mouseleave",function()
{
setting_now = 0;
})

ins_obj_guide.addEventListener("click",function()
{
    if (loading_now == 0)
    {
    ins_obj_guide.style.width = 0+"px";
    ins_obj_guide.style.opacity = 0;

    ins_guide_text.style.left = 54+"%";
    ins_obj_guide_cursor.style.left = (view_width/2-40)+"px";

    ins_guide_line.style.left = (view_width/2+10)+"px";
    guide_cursor_anime1();
    }
})








//skin change button
ins_type_change.addEventListener("mouseover",function()
{
ins_type_change.style.backgroundColor = "white";
setting_now = 1;
})

ins_type_change.addEventListener("mouseleave",function()
{
ins_type_change.style.backgroundColor = "#ffffff00";
setting_now = 0;
})

ins_type_change.addEventListener("click",function()
{
    if (loading_now == 0)
    {
    skin_type ++;
        if (skin_type > 1)
        {
        skin_type = 0;
        }
    skin_change_apply();
    }
})


//skin change button
ins_github_link.addEventListener("mouseover",function()
{
ins_github_link.style.backgroundColor = "white";
setting_now = 1;
})

ins_github_link.addEventListener("mouseleave",function()
{
ins_github_link.style.backgroundColor = "#ffffff00";
setting_now = 0;
})




//pressing now (global mouse button)
document.addEventListener("mousedown",function()
{
    if (setting_now == 0 && loading_now == 0)
    {
    mousepressed = 1;
    b_mb_pos_x = event.clientX;
    b_mb_pos_y = event.clientY;
    real_n_mb_pos_x = event.clientX;
    real_n_mb_pos_y = event.clientY;

    console.log("B("+b_mb_pos_x+","+b_mb_pos_y+")");
    }
})

//released (global mouse button)
document.addEventListener("mouseup",function()
{
    if (setting_now == 0 && loading_now == 0)
    {
    mousepressed = 0;
    pertential_angle = event.clientX;
    pertential_angle_sec = event.clientX;
    //n_mb_pos_x = event.clientX;
    //n_mb_pos_y = event.clientY;
    console.log("N("+real_n_mb_pos_x+","+real_n_mb_pos_y+")");
    }
})

//dragging (global mouse button)
document.addEventListener("mousemove",function()
{
    if (setting_now == 0 && loading_now == 0 && mousepressed == 1)
    {
    real_n_mb_pos_x = event.clientX;
    real_n_mb_pos_y = event.clientY;
    var distance_from_b = (b_mb_pos_x - real_n_mb_pos_x)/spin_speed;
    
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

    ins_obj_gura.src = "source/imgs/"+real_skin_type+round(n_img_3d_angle)+".png";
    }
})





//step event
setTimeout(step_event,fps);
function step_event() //10 fps
{
    if (loading_now == 0)
    {
        //calculate resistance (friction)
        if ((b_mb_pos_x - real_n_mb_pos_x) != 0)
        {
        pertential_angle_sec += (real_n_mb_pos_x - pertential_angle_sec)*(air_resistence/75);
        pertential_angle += (pertential_angle_sec - pertential_angle)*(air_resistence/75);
        b_mb_pos_x += (pertential_angle - b_mb_pos_x)*(air_resistence/75);
        
            if (do_not_show_guide == 0)
            {
            console.log("do_not_show_guide")
            do_not_show_guide = 1;
            guide_mes_des_anime();
            }
        }


    //apply resistance (friction)
    var distance_from_b = (b_mb_pos_x - real_n_mb_pos_x)/spin_speed;
    n_img_3d_angle += distance_from_b;
    //console.log("distance_from_b (potential) : "+distance_from_b);


    //apply image
        if (abs(distance_from_b) > 7)
        {
        distance_from_b = 7*sign(distance_from_b)
        }

        if (n_img_3d_angle <= 0.5)
        {
        n_img_3d_angle = 22-n_img_3d_angle;
        }
        
        if (n_img_3d_angle >= 22.5)
        {
        n_img_3d_angle = 1+(n_img_3d_angle-22);
        }
        
    ins_obj_gura.src = "source/imgs/"+real_skin_type+round(n_img_3d_angle)+".png";
    }

setTimeout(step_event,fps);
}



//loading system
function loading_anime()
{
ins_loading_bg.style.opacity = 0;
ins_loading_gif.style.opacity = 0;
ins_obj_guide.style.zIndex = 1000;
setTimeout(loading_anime2,1000);
loading_now = 0;
}

function loading_anime2()
{
ins_loading_bg.style.width = 0;
ins_loading_bg.style.top = 0;
ins_loading_gif.style.width = 0;
ins_loading_gif.style.top = 0;
}








//set values for css
var resizing0 = 14*c_w;
document.documentElement.style.setProperty("--text_size",resizing0+"px");
document.documentElement.style.setProperty("--skin_change_pos",view_width-resizing0*5+"px");

var loading_img_w_scale = c_w;
document.documentElement.style.setProperty("--loading_gif_pos_x",view_width*0.5-loading_img_w_scale*250+"px");
document.documentElement.style.setProperty("--loading_gif_pos_y",view_height*0.5-loading_img_w_scale*179+"px");
document.documentElement.style.setProperty("--loading_gif_scale",loading_img_w_scale*500+"px");

