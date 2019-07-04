$(function () {
    // 封装dom
    let dom = {
        li_btn: $('#li_btn'),
        nav_two: $('#nav_two'),
        thor: $('.thor'),
        hulk: $('.hulk'),
        widow: $('.widow'),
        section: $('#section'),
        back_top: $('#back_top'),
        global: $(window)
    };
    // 封装方法
    let feature = {
        showNavTwo() {
            dom.nav_two.toggle();
        },
        jumpTarget(id) {
            switch (id) {
                case 'thor':
                    $('html,body').animate({ scrollTop: dom.section.innerHeight() }, 500);
                    break;
                case 'hulk':
                    $('html,body').animate({ scrollTop: dom.section.innerHeight() * 1.9 }, 500);
                    break;
                case 'widow':
                    $('html,body').animate({ scrollTop: dom.section.innerHeight() * 3 }, 500);
                    break;
                default:
                    break;
            };
        },
        back_top() {
            $('html,body').animate({ scrollTop: dom.section.innerHeight() * 0 }, 500);
        },
        showCon(name) {
            name.show();
        },
        hideCon(name) {
           name.hide();
        },
    };
    // 展开二级菜单
    dom.li_btn.hover(function () {
        feature.showNavTwo();
    });
    // 跳转到页面指定区域
    /**jquery添加事件监听 */
    dom.nav_two.on('click', function (e) {
        let id = e.target.id;
        feature.jumpTarget(id);
    });
    // 回到页面顶部
    dom.back_top.click(function () {
        feature.back_top();
    });
    dom.global.scroll(function (e) {
        console.log($(window).scrollTop());
        // 显示返回顶部按钮
        dom.global.scrollTop() > 0 ? feature.showCon(dom.back_top) : feature.hideCon(dom.back_top);
        // 显示雷神区域
        dom.global.scrollTop() > 30 ? feature.showCon(dom.thor) : feature.hideCon(dom.thor);
        // 显示浩克区域
        dom.global.scrollTop() > dom.section.innerHeight() ? feature.showCon(dom.hulk) : feature.hideCon(dom.hulk);
        // 显示黑寡妇区域
        dom.global.scrollTop() > dom.section.innerHeight() * 1.5 ? feature.showCon(dom.widow) : feature.hideCon(dom.widow);
    })
});