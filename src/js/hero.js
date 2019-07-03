$(function () {
    let dom = {
        li_btn: $('#li_btn'),
        nav_two: $('#nav_two'),
        ironman: $('#ironman'),
        thor: $('#thor'),
        hulk: $('#hulk'),
        widow: $('#widow'),
        section:$('#section')
    };
    // 展开二级菜单
    dom.li_btn.hover(function () {
        dom.nav_two.toggle();
    });
    // 跳转到页面指定区域
    dom.nav_two.on('click', function (e) {
        let id = e.target.id;
        switch (id) {
            case 'thor':
                $('html,body').animate({ scrollTop: dom.section.innerHeight() }, 500);
                break;
            case 'hulk':
                $('html,body').animate({ scrollTop: dom.section.innerHeight() * 1.9 }, 500);
                break;
            case 'ironman':
                $('html,body').animate({ scrollTop: dom.section.innerHeight() * 0 }, 500);
                break;
            case 'widow':
                $('html,body').animate({ scrollTop: dom.section.innerHeight() * 3 }, 500);
                break;
            default:
                break;
        };
    });
});