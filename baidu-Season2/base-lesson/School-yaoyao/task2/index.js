// function isASCII (c) {
//     return c.codePointAt(0) <= 0xFF;
// }
// function getStrLen (str){
//     var enLen = 0;
//     var zhLen = 0;
//     for (let ch of str) {
//         if (isASCII(ch))
//             enLen++;
//         else 
//             zhLen++;
//     }
//     return enLen + zhLen * 2;
// }
// function checkEnZh(nameValue){
//     var re=/[^\u4e00-\u9fa5]/;
//     var badchar ="abcdefghijklmnopqrstuvwxyz";
//     badchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     badchar += "0123456789";
//     badchar += "`~!@#$%^&()-_=+]\|:;" + "\'<,>?*/";
//     badchar += "。？！，、；：“”‘'（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥";
//     for (let item of nameValue){
//         if(re.test(item) && badchar.indexOf(item) == -1){
//             return false;
//         }
//     }
//     return true;
// }
// function validateName(){   
//     var name = document.getElementById("userName");
//     var info = document.getElementById("name-validate-info");
//     name.style.border = "1px solid #CCCCCC";
//     info.innerHTML = "";
//     var nameValue = name.value.trim();  
//     if(name.value.trim().length == 0){
//         name.style.border = "1px solid #DE0012";
//         info.innerHTML = "必填";
//         info.style.color="#DE0012";
//     }else if(!checkEnZh(nameValue)){
//         name.style.border = "1px solid #DE0012";
//         info.innerHTML="名称只能由英文字母、汉字和数字组成。";
//         info.style.color="#DE0012";
//     }else{      
//         if(getStrLen(nameValue)<4 || getStrLen(nameValue)>16){
//             name.style.border = "1px solid #DE0012";
//             info.innerHTML = "长度请为4-16个字符";
//             info.style.color="#DE0012";
//         }else{
//             name.style.border = "1px solid #5FBD43";
//             info.innerHTML = "姓名格式正确";
//             info.style.color= "#5FBD43";
//         }
//     }      
// }
// document.getElementById("name-validate").onclick = validateName;
