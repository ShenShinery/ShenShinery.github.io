var input = $("#search-key");

function RequestAjax(text){
    console.log("测试：" + text);
}

input.on("keyup", function(event){
    if(this.value!=""){
        throttle(RequestAjax, null, 200, this.value.trim(),1000);
        $("#hot-search").hide();
        $("#history-search").hide();
        $("#clear-history-btn").hide();
        $("#search-result").show();
        $("body").css("background-color","#F1F2F6");
    }else{
        $("#hot-search").show();
        $("#history-search").show();
        $("#clear-history-btn").show();
        $("#search-result").hide();
        $("body").css("background-color","#FFFFFF");
    }
});

function throttle(fn,context,delay,text,mustApplyTime){
    clearTimeout(fn.timer);//清楚当前定时器

    /*当需求要求两次文本输入时间超过规定时间 执行一次取消注释 否则*/
    /*fn._cur=Date.now(); //记录当前时间

     if(!fn._start){ //若该函数是第一次调用，则直接设置_start,即开始时间否则为_cur，即此刻的时间
     fn._start=fn._cur;
     }
     if(fn._cur-fn._start>mustApplyTime){
     //当前时间与上一次函数被执行的时间作差，与mustApplyTime比较，若大于，则必须执行一次函数，若小于，则重新设置计时器
     fn.call(context,text);
     fn._start=undefined;
     }else{*/
    fn.timer=setTimeout(function(){
        fn.call(context,text+"调用服务器");
    },delay);
    /*fn._start=fn._cur;
     }*/
}
$("#search-form").on("submit",showResult);
function showResult(){
    alert(1);
}
