/**
 * Created by Administrator on 2016/9/7.
 */
    $(document).ready(function(){
        $('.left_news_hidden').eq(0).show();
        $('.left_news_ul li').click(function(){
            var index = $(this).index();
            $(this).css('border-color','white').siblings('li').css('border-color','grey');
            $(this).attr('class','li2').siblings('li').attr('class','li1');

            //var a = $('.left_news_hidden').eq(index).show().siblings('left_news_hidden').hide();
            $('.left_news_hidden').eq(index).show().siblings('div').hide();
            //console.log(a);
        })


    });
    $(document).ready(function(){
        $('.left_vedio_main_ul').eq(0).show();
        $('.ul1 li').click(function(){
        var index = $(this).index();
        $(this).css('border-color','white').siblings('li').css('border-color','grey');
        $(this).attr('class','li2').siblings('li').attr('class','li1');

        //var a = $('.left_news_hidden').eq(index).show().siblings('left_news_hidden').hide();
        $('.left_vedio_main_ul').eq(index).show().siblings('div').hide();
        //console.log(a);
    })


});



<!-- 轮播代码 -->
window.onload = function() {
    var wrap = document.getElementById("lunbo_show");
    var inner = document.getElementById("lunbo_inner");
    var spanList = document.getElementById("lunbo_span").getElementsByTagName("span");
    var left = document.getElementById("lunbo_left");
    var right = document.getElementById("lunbo_right");
    var clickFlag = true;//设置左右切换标记位防止连续按,效果有点不同
    var time//主要用来设置自动滑动的计时器
    var index = 0;//记录每次滑动图片的下标
    var Distance = wrap.offsetWidth;//获取展示区的宽度，即每张图片的宽度
    /*
     * offsetwidth:是元素相对父元素的偏移宽度。等于border+padding+width
     * */

    //定义图片滑动的函数
    function AutoGo() {
        var start = inner.offsetLeft;//获取移动块当前的left的开始坐标
        /*
         *   刷新页面默认是第一张图，第二张图就是要移动的
         *   此时第二张没出来。获取到的start为0
         * */

        var end = index * Distance * (-1);//获取移动块移动结束的坐标。即图片左移的距离
        console.log(end)

        //计算公式即当移动到第三张图片时，图片下标为2乘以图片的宽度就是块的left值。
        var change = end - start;//偏移量   -510 - 0
        var timer;//用计时器为图片添加动画效果
        var t = 0;
        var maxT = 20;//用于计算图片的偏移量： 值越大移动的越慢(计算时做分母)


        /*
         * 先把按钮状态清除,再让对应按钮改变状态
         * */
        clear();
        if (index == spanList.length) {
            spanList[0].className = "select";
        } else {
            spanList[index].className = "select";
        }


        /*clearInterval(timer);*///开启计时器前先把之前的清
        timer = setInterval(function () {
            /* debugger*/
            t++;
            if (t >= maxT) {//当图片到达终点停止计时器
                clearInterval(timer);
                clickFlag = true;//当图片到达终点才能切换
            }
            inner.style.left = change / maxT * t + start + "px";//每个17毫秒让块移动
            if (index == spanList.length && t >= maxT) {
                inner.style.left = 0;
                index = 0; //当图片到最后一张时把它瞬间切换回第一张，由于都同一张图片不会影响效果
            }
        }, 17);
    }

    //开启图片自动向右滑动的计时器
    time = setInterval(forward, 3000);


    /*
     *   自动轮动图片方法
     * */
    function forward() {
        /*  debugger*/
        index++;
        //当图片下标到最后一张把小标换0
        if (index > spanList.length) {
            index = 0;
        }
        AutoGo();
    }

    //图片向左滑动函数
    function backward() {
        index--;
        //当图片下标到第一张让它返回到倒数第二张，
        //left值要变到最后一张才不影响过渡效果
        if (index < 0) {
            index = spanList.length - 1;
            inner.style.left = (index + 1) * Distance * (-1) + "px";
        }
        AutoGo();
    }


    //设置鼠标悬停动画停止
    wrap.onmouseover = function () {
        clearInterval(time);
    }
    wrap.onmouseout = function () {
        time = setInterval(forward, 3000);
    }
    //遍历每个按钮让其切换到对应图片
    for (var i = 0; i < spanList.length; i++) {
        spanList[i].onclick = function () {
            index = this.innerText - 1;
            AutoGo();
        }
    }
    //左切换事件
    left.onclick = function () {

        if (clickFlag) {
            backward();
        }
        clickFlag = false;
    }
    //右切换事件
    right.onclick = function () {
        if (clickFlag) {
            forward();
        }
        clickFlag = false;
    }
    //清除页面所有按钮状态颜色
    function clear() {
        for (var i = 0; i < spanList.length; i++) {
            spanList[i].className = "";
        }
    }
}



<!-- 登录按钮 -->
$(document).ready(function(){
    $('.title_login a').click(function(){
        $('.login_body').css('display','block');

    })

    $('.login_body a').click(function(){
        $('.login_body').css('display','none');
    })

    $('.switch').click(function(){
        if($('.right_body').width() > 0){
            $('.right_body').css({
                'width':'0px',
                'transition':'all 0.7s'
            });

            $('.switch span').html('展开');
            $('.switch i').css('background-position','-87px -53px');
            $('.switch ').css({
                'right':'0',
                'transition':'all 0.7s'
            });
        } else
            {
                $('.right_body').css({
                    'width':'135px',
                    'transition':'all 0.7s'
                });
                $('.switch span').html('收起');
                $('.switch i').css('background-position','-87px -11px');
                $('.switch ').css({
                    'right':'135px',
                    'transition':'all 0.7s'
                });
            }



            })


});








