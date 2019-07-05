
$(function () {
    let dom = {
        global: $(window),
        con: $('#con'),
        ironman: $('#ironman')
    };
    // 控制每个系列弹窗的显示或者隐藏状态
    let status = {
        ironman: false,
        spiderman: false,
        Thor: false,
        avengers: false,
        captain: false,
        galaxy: false,
        deadpool: false,
        antman: false,
        marvel: false
    };
    let feature = {
        // 改变状态
        changeStatus(name) {
            status[name] = !status[name];
        },
        // 通过检查状态来决定点击弹窗隐藏还是显示
        checkStatus(domName) {
            if (status[domName] == true) {
                $('#' + domName).show();
            } else {
                $('#' + domName).hide();
            }
        }
    };
    dom.global.on('click', function (e) {
        let msg = e.target.alt;
        console.log(msg);
        if (msg != undefined) {
            feature.changeStatus(msg);
            feature.checkStatus(msg);
        } else {
            for (let i in status) {
                if (status[i] == true) {
                    feature.changeStatus(i);
                    feature.checkStatus(i);
                }
            }
        }

    });
});
