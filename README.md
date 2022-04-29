# 说明
本系统使用JavaScript+html+css实现，整体采用自适应布局，页面中的内容实现了过渡动画 svg动画 音频播放 模拟页面切换功能
# 项目目录及说明
css 存放层叠样式表相关内容
font 存放字体
js 存放JavaScript文件
static 存放图片音乐等静态资源
# 资源来源
#### /static/back.jpg 来源 https://699pic.com/tupian-500144148.html
#### /static/img-1.png 来源 https://modao.cc/app/zv3lj2er6bevgnqSTlRIi#screen=skyvh15g5wcqtxi
#### /static/img-2.png 来源 https://modao.cc/app/zv3lj2er6bevgnqSTlRIi#screen=skyvh15g5wcqtxi
#### /static/img-3.png 来源 https://modao.cc/app/zv3lj2er6bevgnqSTlRIi#screen=skyvh15g5wcqtxi
#### /static/img-4.png 来源 https://modao.cc/app/zv3lj2er6bevgnqSTlRIi#screen=skyvh15g5wcqtxi
#### /static/music.mp3 来源 https://www.xiaobaipan.com/file-28444564.html
#### /font/SourceHanSansSC-Regular.otf 来源 https://www.xiazaila.com/soft/23913.html
# 制作流程说明
1.首先应实现主页面布局，经过分析可知本页面是一个类似文章阅览的的页面，布局为头部标题，中间内容，内容分为左右两个部分，左边为文章，右边为图片，底部以及按钮，因此我们设计页面为上中下三个部分，中间采用flex布局，使其自适应，其余两部分无需考虑自适应。
2.完成页面的美化，使用css为页面美化，并采用动画，过渡等效果使页面更加美观，特别说明下页面的music选择框，采用了svg+动画，使选择框在选择时更加流畅丝滑。
3.完成页面路由切换功能，这里我们通过操作dom节点刷新数据来模拟路由切换，当点击前进或后退按钮时，通过js更新dom节点数据，同时重置动画效果从而实现类似页面切换的效果
