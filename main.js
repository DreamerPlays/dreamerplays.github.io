function load() {
    $('svg').click(cb);
}

cb = (ev) => {
    if(ev.target == document.getElementById('germany')){
        $('svg').unbind('click');
        $(document.body).css('transition','0.2s');
        $(document.body).css('background','#2e3');
        setTimeout(()=>{$(document.body).css('background','#fff')},1000);
        setTimeout(()=>{window.location.href = "alt2.html"},1200);
        //nächste seite
    }else{
        $('svg').unbind('click');
        $(document.body).css('transition','0.2s');
        $(document.body).css('background','#e23');
        setTimeout(()=>{$('svg').click(cb);$(document.body).css('background','#fff')},1000);
    }
};