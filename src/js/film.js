
$(function () {
    let dom = {
        global: $(window),
        con: $('#con'),
        ironman: $('#ironman')
    };
    // 控制每个系列的显示与否状态
    let status = {
        ironman: false,
        spiderman: false,
        // thor: $('#thor').css('display'),
        // anebgers: $('#anebgers').css('display'),
        // captain: $('#captain').css('display'),
        // galaxy: $('#galaxy').css('display'),
        // deadpool: $('#deadpool').css('display'),
        // antman: $('#antman').css('display'),
        // marvel: $('#marvel').css('display')
    };
    let feature = {
        changeStatus(name) {
            status[name] = !status[name];
        },
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
