var posts=["2024/04/20/Git统计项目代码量/","2024/04/20/Talk is cheap,show me the code/","2024/04/20/hello-world/","2024/04/20/text1/","2024/02/26/曲折的2023/","2024/04/26/diy主机/","2024/04/27/秋招&春招汇总/","2024/04/26/动态规划/","2024/04/27/第一次实习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };