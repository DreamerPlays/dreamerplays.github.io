center = () => {
    $('#flüch').css("line-height", $(document.getElementById('flüch')).innerHeight() + "px");
}
setTimeout(()=>center(), 1);

$(document).ready(()=>{
    $('#flüch').click(()=>{
        document.getElementById('flüch').textContent = "Sind Menschen die in ihrer Heimat nicht mehr leben können";
        $('#flüch').css('font-size','100x');
        $('#flüch').css('line-height','130px');
        $('#flüch').unbind('click');
        $('#flüch').css('top','25%');
        $('#flüch').click(()=>{$('#flüch').remove();
        $('#bgright').css("background-image","");
        $(document.body).css('pointer-events','all');});
    });
});