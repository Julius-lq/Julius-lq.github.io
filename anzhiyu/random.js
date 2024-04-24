var posts=["2024/04/20/Git统计项目代码量/","2024/04/20/Talk is cheap,show me the code/","2024/04/20/hello-world/","2024/04/20/text1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };