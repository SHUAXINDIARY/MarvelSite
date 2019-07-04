
$(function () {
    let dom = {
        global: $(window),
        con: $('#con'),
        toggle: $('#toggle'),
        ironman:$('#ironman')
    };
    dom.con.on('click', function (e) {
        console.log(e.target.alt);
        let msg=e.target.alt;
        $('#'+msg).css({
            'display':'block'
        });
    });
    dom.toggle.click(function(){
        dom.ironman.hide();
    })
});
