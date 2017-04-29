/**
 * Created with JetBrains WebStorm.
 * User: SHENWEI346
 * Date: 17-4-24
 * Time: 下午1:38
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){
    var arr=["综合","销量","价格","筛选"];
    $.each(arr,function(index,value){
        $("#filter-list").append("<li onclick='doAction("+ index +")'>" + value + "</li>");
    });
});
function doAction(i){
    switch (i){
        case 0:
            showSumList();
            break;
        case 1:
            listBySaleNum();
            break;
        case 2:
            listByPrace();
            break;
        case 3:
            showFilterDetailPage();
            break;
        default:
            console.log("error");
            break;
    }
}
function showSumList(){
   $("#covering").toggle();
   $("#sum-list").slideToggle();
}
