(function (doc, win) {
    var docEl = doc.documentElement, //  doc是形参，传递的参数是document,等同于docel = document.documentElement
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 这是一个三目运算，orientationchange是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。这里是判断窗口有没有orientationchange这个方法，有就返回orientationchange，没有就返回resize。
        recalc = function () {
            var clientWidth = docEl.clientWidth; // 获取整个窗口的宽度
            if (!clientWidth) return;
            if (clientWidth >= 640) { // 整个窗口的宽度大于等于640px的时候，fontSize为100px，
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false); // 绑定浏览器缩放与加载时间
    doc.addEventListener('DOMContentLoaded', recalc, false); // 当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
   recalc();
})(document, window);



var innerGroup = $(".innerwraper");
var spanGroup = $(".pagination span");
var imgWidth=$(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;


// 点击切换
spanGroup.on("click",function(){
    _index=spanGroup.index($(this));
    selectPic(_index)
})


function autoGo(){
    // 自动行走 
    timer=setInterval(go,3000);
}
autoGo();

function go(){
     //计时器的函数
    _index++;
    selectPic(_index);
}

function selectPic(num) {
    clearInterval(timer);
    spanGroup.eq(num).addClass("active").siblings().removeClass("active");
    if(num%4==0){
        spanGroup.eq(0).addClass("active").siblings().removeClass("active");
    }
    $(".inner").stop().animate({
        left:-num*imgWidth,
    },1000,function(){
        // 点击完就要开始自动播放
        timer=setInterval(go,3000);
        // 检查是否最后一张
        if(_index==innerGroup.length-1){
            _index%=4;
            $(".inner").css("left","0px");
        } console.log(_index);
    })
}