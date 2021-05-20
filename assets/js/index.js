let pageData = [
    {
        "imgSrc": "./assets/img/user1.jpg",
        "from": "JiangSu",
        "userName": "Yan Haipeng"
    },
    {
        "imgSrc": "./assets/img/user2.jpg",
        "from": "GuangDong",
        "userName": "Qiao Zhifu"
    },
    {
        "imgSrc": "./assets/img/user3.jpg",
        "from": "FuJian",
        "userName": "He Difei"
    },
    {
        "imgSrc": "./assets/img/user4.jpg",
        "from": "HeNan",
        "userName": "Wei Hangyu"
    },
    {
        "imgSrc": "./assets/img/user5.jpg",
        "from": "ShangHai",
        "userName": "Feng"
    },
]

// 开始渲染图片和数据
let str = '';
pageData.forEach(item => {
    str += `    
        <a>
            <div class="user_item">
                <img src="${item.imgSrc}" alt="">
            </div>
            <h3 class="content_font co_from">${item.from}</h3>
            <h2 class="content_font">${item.userName}</h2>
        </a>
    `
});
$('.user_box').append(str);