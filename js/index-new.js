import data from "./data.js";
//创建dom
const doms = {
    imgHeader: null,
    image: null,
    beforeBtn: null,
    nextBtn: null,
}
// 初始化page值
let page = 1

//当页面加载完毕
window.onload = function () {
    getDoms()
    watchBtn()
    setPageData(page)
}
//获取dom节点
function getDoms() {
    doms.imgHeader = document.getElementById('imgHeader')
    doms.image = document.getElementById('image')
    doms.imageBox = document.getElementById('img-box')
    doms.beforeBtn = document.getElementById('before-btn')
    doms.nextBtn = document.getElementById('next-btn')
}
//重置动画
function setAnimista() {
    //先去除元素中动画的class
    //doms.header.classList.remove('slide-bottom')
    //doms.paragraph.classList.remove('slide-right')
    //doms.imageBox.classList.remove('slide-left')
    //doms.footer.classList.remove('slide-top')
    
    //重置元素宽度，只有这样才能重新激活动画
    //void doms.header.offsetWidth;
    //void doms.paragraph.offsetWidth;
    void doms.imageBox.offsetWidth;
    //void doms.footer.offsetWidth;
    
    //将动画的类重新附上
    //doms.header.classList.add("slide-bottom");
    //doms.paragraph.classList.add("slide-right");
    //doms.imageBox.classList.add("slide-left");
    //doms.footer.classList.add("slide-top");
}
//监听按钮事件
function watchBtn() {
    doms.beforeBtn.onclick = function () {
        page -= 1
        setPageData(page)
        setAnimista()
    }
    doms.nextBtn.onclick = function () {
        page += 1
        setPageData(page)
        setAnimista()
    }
}
//渲染页面数据
function setPageData(page) {
    //根据页面渲染不同数据
    switch (page) {
        case 1:
            //设置按钮显示隐藏
            doms.beforeBtn.setAttribute('style', 'display:none')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            //设置图片标题文本
            doms.imgHeader.innerHTML = data.pageOne.contentBlack
            //先移除图片src防止缓存
            doms.image.removeAttribute('src')
            //设置图片路径
            doms.image.setAttribute('src', data.pageOne.ImageUrl)
            //设置图片说明属性
            doms.image.setAttribute('alt', 'page1')
            //设置页脚文本
            //doms.footer.innerHTML = data.pageOne.footer
            break;
        case 2:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            doms.imgHeader.innerHTML = data.pageTwo.contentBlack
            doms.image.removeAttribute('src')
            doms.image.setAttribute('src', data.pageTwo.ImageUrl)
            doms.image.setAttribute('alt', 'page2')
            break;
        case 3:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:inline-block')
            doms.imgHeader.innerHTML = data.pageThree.contentBlack
            doms.image.removeAttribute('src')
            doms.image.setAttribute('src', data.pageThree.ImageUrl)
            doms.image.setAttribute('alt', 'page3')
            break;
        case 4:
            doms.beforeBtn.setAttribute('style', 'display:inline-block')
            doms.nextBtn.setAttribute('style', 'display:none')
            doms.imgHeader.innerHTML = data.pageFour.contentBlack
            doms.image.removeAttribute('src')
            doms.image.setAttribute('src', data.pageFour.ImageUrl)
            doms.image.setAttribute('alt', 'page4')
            break;
        default:
            break;
    }
}
