var posts=["2024/04/26/diy主机/","2024/04/20/Git统计项目代码量/","2024/04/20/Talk is cheap,show me the code/","2024/04/20/text1/","2024/04/20/hello-world/","2024/04/26/动态规划/","2024/04/28/技术/刷题日记/","2024/04/30/技术/小红书面经/","2024/04/30/技术/三次握手和四次挥手/","2024/02/26/技术/曲折的2023/","2024/04/27/技术/秋招&春招汇总/","2024/04/26/技术/大众点评/","2024/04/27/技术/第一次实习/","2024/04/30/技术/技术博客阅读/","2024/04/30/技术/美团vs小红书/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };