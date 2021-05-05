// 顶部栏固定
function handle() {
    if ($(window).scrollTop() > 70) {
        $(".topbar_box").attr("id", "topbar");
        $(".container:eq(1)").css("margin-top", "200px");
    } else {
        $(".topbar_box").removeAttr("id");
        $(".container:eq(1)").css("margin-top", "100px");
    }
}

// 函数节流
function throttle(func, delay) {
    let prev = Date.now();
    return () => {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}

// 返回顶部
function backToTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
}

// 监听滚动事件
window.addEventListener('scroll', throttle(handle, 10));

window.onload = function () {
    setTimeout(() => {
        $("#_loading_container_hidden").css("opacity", "1");
        $("#_loading").css({
            "opacity": "0",
            "z-index": '-1'
        });
    }, 2000);
}