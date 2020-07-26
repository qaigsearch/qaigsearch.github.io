<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/1595574251128.png");
         document.title = 'ヽ(●-`Д´-)ノ不再玩玩嗎？';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/1595574251128.png");
         document.title = 'ヾ(Ő∀Ő3)ノ歡迎光臨！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
