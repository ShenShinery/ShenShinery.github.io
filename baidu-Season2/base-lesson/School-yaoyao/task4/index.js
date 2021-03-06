function triggerAction(){
    var action = document.getElementById("do-action").value.trim();
    var redObj = document.getElementById("red-obj");
    var blueObj = document.getElementById("blue-obj");
    if(action.toLowerCase() == "go"){   
        if(pos.ahead == 0  && pos.y > 1){
            pos.y = pos.y - 1;
            setPosition(pos);
        }else if(pos.ahead == 1  && pos.x < 10){
            pos.x = pos.x + 1;
            setPosition(pos);
        }else if(pos.ahead == 2  && pos.y < 10){
            pos.y = pos.y + 1;
            setPosition(pos);
        }else if(pos.ahead == 3  && pos.x > 1){
            pos.x = pos.x - 1;
            setPosition(pos);
        }else{
            alert("到边界了，无法继续移动。")
        }
    }else if(action.toLowerCase() == "tun lef"){
        //TUN LEF：向左转（逆时针旋转90度）
        if(pos.ahead == 0 ){
            pos.ahead = 3;
            setPosition(pos);
        }else if(pos.ahead == 1){
            pos.ahead = 0;
            setPosition(pos);
        }else if(pos.ahead == 2){
            pos.ahead = 1;
            setPosition(pos);
        }else if(pos.ahead == 3){
            pos.ahead = 2;
            setPosition(pos);
        }
    }else if(action.toLowerCase() == "tun rig"){
        //TUN RIG：向右转（顺时针旋转90度）
        if(pos.ahead == 0 ){
            pos.ahead = 1;
            setPosition(pos);
        }else if(pos.ahead == 1){
            pos.ahead = 2;
            setPosition(pos);
        }else if(pos.ahead == 2){
            pos.ahead = 3;
            setPosition(pos);
        }else if(pos.ahead == 3){
            pos.ahead = 0;
            setPosition(pos);
        }

    }else if(action.toLowerCase() == "tun bac"){
        //TUN BAC：向右转（旋转180度）
        if(pos.ahead == 0 ){
            pos.ahead = 2;
            setPosition(pos);
        }else if(pos.ahead == 1){
            pos.ahead = 3;
            setPosition(pos);
        }else if(pos.ahead == 2){
            pos.ahead = 0;
            setPosition(pos);
        }else if(pos.ahead == 3){
            pos.ahead = 1;
            setPosition(pos);
        }
    }else{
        alert("无效的操作！");
    }
}

function ItemPosition(x, y, ahead) {
    this.x = x; //left
    this.y = y; //top
    this.ahead = ahead; //direction：0-top,1-right,2-bottom,3-left
}

function setPosition(pos){
    var redObj = document.getElementById("red-obj");
    var blueObj = document.getElementById("blue-obj");
    if(pos.ahead == 0){
        
        // 向上
        blueObj.style.top = pos.y*40 + "px";
        redObj.style.top = (pos.y*40 + 15) + "px";
        blueObj.style.height = "15px";
        redObj.style.height = "25px";
        
        //red和blue的left相同.width相同.
        blueObj.style.left = pos.x*40 + "px";
        redObj.style.left = pos.x*40 + "px";
        blueObj.style.width = "40px";
        redObj.style.width = "40px";
    }else if(pos.ahead == 1){
        // 向右
        blueObj.style.left = (pos.x*40+25) + "px";
        redObj.style.left = pos.x*40 + "px";
        blueObj.style.width = "15px";
        redObj.style.width = "25px";

        //red和blue的top相同.height相同.
        blueObj.style.top = pos.y*40 + "px";
        redObj.style.top = pos.y*40 + "px";
        blueObj.style.height = "40px";
        redObj.style.height = "40px";
    }else if(pos.ahead == 2){
        // 向下
        redObj.style.top = pos.y*40 + "px";
        blueObj.style.top = (pos.y*40 + 25) + "px";
        blueObj.style.height = "15px";
        redObj.style.height = "25px";

        //red和blue的left相同.width相同.
        blueObj.style.left = pos.x*40 + "px";
        redObj.style.left = pos.x*40 + "px";
        blueObj.style.width = "40px";
        redObj.style.width = "40px";
    }else if(pos.ahead == 3){
        // 向左
        blueObj.style.left = pos.x*40 + "px";
        redObj.style.left = (pos.x*40+15) + "px";
        blueObj.style.width = "15px";
        redObj.style.width = "25px";

        //red和blue的top相同.height相同.
        blueObj.style.top = pos.y*40 + "px";
        redObj.style.top = pos.y*40 + "px";
        blueObj.style.height = "40px";
        redObj.style.height = "40px";
    }
}
var pos = new ItemPosition(2,4,0);
setPosition(pos);
document.getElementById("start-action").onclick = triggerAction;
