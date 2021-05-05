let projectData = [
    {
        "href": "https://www.mashangu.com/",
        "imgSrc": "./assets/img/project1.png",
        "h4": "码上官网",
        "span": "团队开发，Java服务端渲染，主要负责公司模块和一些公用模块的开发，使用Jquery+Bootstrap+Java的freemarker语法"
    },
    {
        "href": "http://web.codeedu.com.cn/",
        "imgSrc": "./assets/img/project2.png",
        "h4": "北上快马官网",
        "span": "团队开发，服务端渲染页面且多端适配，Jquery+Bootstrap+Nodejs，在本项目我负责主要代码"
    },
    {
        "href": "http://bg.mashangu.com/#/",
        "imgSrc": "./assets/img/project3.png",
        "h4": "码上大数据",
        "span": `独立开发，前端框架使用Vue，主要图表使用Echart`
    },
    {
        "href": "https://b23.tv/AHZdS7",
        "imgSrc": "./assets/img/project4.jpg",
        "h4": "SeeKer打卡小程序",
        "span": "个人微信小程序云开发，UI 设计、前后端开发及测试，云开发实现高效后端开发，目前实现登录及团队打卡功能"
    },
    {
        "href": "",
        "imgSrc": "./assets/img/project5.jpg",
        "h4": "树课智慧门牌",
        "span": "独立开发，使用Vue前端框架，主要图表使用Echart，使用到Qrcode、Sweetalert和tree.js插件"
    },
]

// 开始渲染图片和数据
let str = '';
projectData.forEach(item => {
    str += `
        <a href="${item.href}" target="_blank">
            <div class="previous_project_img">
                <img src="${item.imgSrc}" alt="">
            </div>
            <div class="previous_project_title">
                <h4 class="content_font co_from">${item.h4}</h4>
                <span>${item.span}</span>
            </div>
        </a>
    `
});
$('.previous_project').append(str)