// (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth<640){
//                 docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
//                // console.log(12 * (clientWidth / 320) + "px");
//             }else{
//                 //docEl.style.fontSize = "12px";
//                 docEl.style.fontSize = 20 *  ( 640 / 320) + "px";
//             }
//         };

//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);})(document, window);
//         //屏幕大小发送改变时重设
        window.onresize = function() {
            RootSize();
        }

        //设置字体大小为20px，baseWidth为设计图原稿的宽度
        function RootSize() {
            //设计图屏宽度，单位px
            var baseWidth = 375;
            //获取当前屏幕宽
            var docWidth = document.documentElement.clientWidth;
            console.log(docWidth)
            // 获取html元素
            var objHtml = document.getElementsByTagName('html')[0];
            // 设置基本文字大小
            objHtml.style.fontSize = ((docWidth / baseWidth) * 20) + 'px';
        }

        //重设大小
        RootSize();