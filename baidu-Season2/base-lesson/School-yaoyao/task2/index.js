function isASCII (c) {
    return c.codePointAt(0) <= 0xFF;
}
function getStrLen (str){
    var enLen = 0;
    var zhLen = 0;
    for (let ch of str) {
        if (isASCII(ch))
            enLen++;
        else 
            zhLen++;
    }
    return enLen + zhLen * 2;
}
function checkEnZh(nameValue){
    var re=/[^\u4e00-\u9fa5]/;
    var badchar ="abcdefghijklmnopqrstuvwxyz";
    badchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    badchar += "0123456789";
    badchar += "`~!@#$%^&()-_=+]\|:;" + "\'<,>?*/";
    badchar += "。？！，、；：“”‘'（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥";
    for (let item of nameValue){
        if(re.test(item) && badchar.indexOf(item) == -1){
            return false;
        }
    }
    return true;
}
function checkIsEnOrNum(value){
    var badchar ="abcdefghijklmnopqrstuvwxyz";
    badchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    badchar += "0123456789";
    for (let item of value){
        if(badchar.indexOf(item) == -1){
            return false;
        }
    }
    return true;
}
function checkHasLetter(value){
    var badchar ="abcdefghijklmnopqrstuvwxyz";
    badchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let item of value){
        if(badchar.indexOf(item) != -1){
            return true;
        }
    }
    return false;
}
function checkHasNum(value){
    var badchar = "0123456789";
    for (let item of value){
        if(badchar.indexOf(item) != -1){
            return true;
        }
    }
    return false;
}
function checkIsAllNum(value){
    var badchar = "0123456789";
    for (let item of value){
        if(badchar.indexOf(item) == -1){
            return false;
        }
    }
    return true;
}

function showRulesOfName(obj){
    var info = document.getElementById("name-validate-info");
    obj.style.border = "1px solid #CCCCCC";
    info.innerHTML = "必填，长度为4～16个字符。";
    info.style.color="#A8A8A8";
}
function validateName(obj){
    var info = document.getElementById("name-validate-info");
    var value = obj.value.trim();
    if(value.length == 0){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "名称不能为空。";
        info.style.color="#DE0012";
        return false;
    }else if(!checkEnZh(value)){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML="名称只能由英文字母、汉字和数字组成。";
        info.style.color="#DE0012";
        return false;
    }else if(getStrLen(value)<4 || getStrLen(value)>16){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "长度请为4-16个字符";
        info.style.color="#DE0012";
        return false;
    }else{
        obj.style.border = "1px solid #5FBD43";
        info.innerHTML = "名称格式正确";
        info.style.color= "#5FBD43";
        return true;
    }
    
}
function showRulesOfPwd(obj){
    var info = document.getElementById("password-validate-info");
    obj.style.border = "1px solid #CCCCCC";
    info.innerHTML = "密码必须且仅可以为数字和字母的组合，不能包含特殊符号。";
    info.style.color="#A8A8A8";
}
function validatePwd(obj){
    var info = document.getElementById("password-validate-info");
    var value = obj.value.trim();
    if(value.length == 0){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "密码不能为空。";
        info.style.color="#DE0012";
        return false;
    }else if(!checkIsEnOrNum(value)){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML="不能包含数字与字母之外的内容。";
        info.style.color="#DE0012";
        return false;
    }else if(!checkHasLetter(value)){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML="密码必须包含至少一个字母";
        info.style.color="#DE0012";
        return false;
    }else if(!checkHasNum(value)){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML="密码必须包含至少一个数字";
        info.style.color="#DE0012";
        return false;
    }else if(value.length<6 || value.length>16){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "密码长度请在6～16之间。";
        info.style.color="#DE0012";
        return false;
    }else{
        obj.style.border = "1px solid #5FBD43";
        info.innerHTML = "密码可用";
        info.style.color= "#5FBD43";
        return true;
    }
}

function showRulesOfRePwd(obj){
    var info = document.getElementById("rePassword-validate-info");
    obj.style.border = "1px solid #CCCCCC";
    info.innerHTML = "再次输入相同密码。";
    info.style.color="#A8A8A8";
}
function validateRePwd(obj){
    var info = document.getElementById("rePassword-validate-info");
    var value = obj.value.trim();
    var pwd = document.getElementById("password").value.trim();
    if(value.length == 0){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "不能为空。";
        info.style.color="#DE0012";
        return false;
    }else if(pwd != value){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "密码输入不一致";
        info.style.color="#DE0012";
        return false;
    }else{
        obj.style.border = "1px solid #5FBD43";
        info.innerHTML = "密码输入一致";
        info.style.color= "#5FBD43";
        return true;
    }
}

function showRulesOfEmail(obj){
    var info = document.getElementById("email-validate-info");
    obj.style.border = "1px solid #CCCCCC";
    info.innerHTML = "必填，用于找回账号。";
    info.style.color="#A8A8A8";
}
function validateEmail(obj){
    var info = document.getElementById("email-validate-info");
    var value = obj.value.trim();
    if(value.length == 0){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "不能为空。";
        info.style.color="#DE0012";
        return false;
    }else if(value.indexOf("@")==-1  || value.indexOf("@") == 0 || value.lastIndexOf("@") == value.length-1 ||　value.indexOf("@") != value.lastIndexOf("@")){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "邮箱格式错误";
        info.style.color="#DE0012";
        return false;
    }else{
        obj.style.border = "1px solid #5FBD43";
        info.innerHTML = "邮箱格式正确";
        info.style.color= "#5FBD43";
        return true;
    }
}

function showRulesOfMobile(obj){
    var info = document.getElementById("mobile-validate-info");
    obj.style.border = "1px solid #CCCCCC";
    info.innerHTML = "必填，用于找回账号。";
    info.style.color="#A8A8A8";
}
function validateMobile(obj){
    var info = document.getElementById("mobile-validate-info");
    var value = obj.value.trim();
    if(value.length == 0){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "不能为空。";
        info.style.color="#DE0012";
        return false;
    }else if(!checkIsAllNum(value)){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "手机格式错误";
        info.style.color="#DE0012";
        return false;
    }else if(value.length != 11){
        obj.style.border = "1px solid #DE0012";
        info.innerHTML = "手机号码请为11位。";
        info.style.color="#DE0012";
        return false;
    }else{
        obj.style.border = "1px solid #5FBD43";
        info.innerHTML = "手机格式正确";
        info.style.color= "#5FBD43";
        return true;
    }
}   

function showRules(obj){
    var id = obj.id;
    if(id == "userName"){
        showRulesOfName(obj);
    }else if(id == "password"){
        showRulesOfPwd(obj);
    }else if(id == "rePassword"){
        showRulesOfRePwd(obj);
    }else if(id == "email"){
        showRulesOfEmail(obj);
    }else if(id == "mobile"){
        showRulesOfMobile(obj);
    }else {
        console.log("error");
    }
}

function validate(obj){
    var id = obj.id;
    if(id == "userName"){
        validateName(obj);
    }else if(id == "password"){
        validatePwd(obj);
    }else if(id == "rePassword"){
        validateRePwd(obj);
    }else if(id == "email"){
        validateEmail(obj);
    }else if(id == "mobile"){
        validateMobile(obj);
    }else {
        console.log("error");
    }
}
function validateAll(){
    var nameValidate = validateName(document.getElementById("userName"));
    var passwordValidate = validatePwd(document.getElementById("password"));
    var rePwdValidate = validateRePwd(document.getElementById("rePassword"));
    var emailValidate = validateEmail(document.getElementById("email"));
    var mobileValidate = validateMobile(document.getElementById("mobile"));
    if(nameValidate && passwordValidate && rePwdValidate && emailValidate && mobileValidate){
        alert("提交成功!");
        return true;
    }else{
        alert("输入有误！");
        return false;
    }   
}
