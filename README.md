# MarvelSite
静态网页练习


## 技术栈+框架(库):
    1.HTML(5)
    2.CSS(3)
    3.jQuery
    4.animate.css动画库
    5.iconfont
    6.EJS(用在film界面)

## 环境搭建:gulp 
    1.编译less
## 项目目录
    1. src---存放代码和资源
        1.assets/---存放css库
        2.css/------less编译输出目录
        3.font/-----存放图标字体
        4.img/------存放图片
        5.js/-------js文件
        6.less/-----编写less代码
        7.*.html----页面文件
    2. .gitignore---git配置
    3. gulpfile.js--gulp配置文件
    4. *.json-------初始化文件
    5. README.md----帮助文档(本文档)
    

## git clone 项目后
    1.npm i 安装依赖
    2.在项目根目录中执行gulp start启动gulp将less转换成css
    3.因为是练习项目，所以没有配置压缩代码等优化工作


## 页面素材
    [站酷](https://www.zcool.com.cn/work/ZMzQ4MjMwODA=.html)

## 总结
    1.jQuery的animate方法对display无效，可以使用opacity
    2.for循环遍历对象时取值不是 obj.键名 ， 是 obj[键名]
        例子
        ```javascript
         let num={
             one:1,
             two:2
         };
         for(let i in num){
             console.log('打印键'+i);
             console.log('打印值'+num[i]);
         }
        ```