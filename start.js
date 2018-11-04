center = () => {
    $('#flüch').css("line-height", $(document.getElementById('flüch')).innerHeight() + "px");
}
setTimeout(()=>center(), 1);

$(document).ready(()=>{
    $('#flüch').click(()=>{
        document.getElementById('flüch').textContent = "Ein Flüchtling ist ein Mensch der seine Heimat und sein zuhause verlässt, aufgrund verschiedener Ursachen wie Natur-, Umwelt Katastrophen, Kriege, politische, wirtschaftlichen Zwängen oder einer Lebensbedrohlichen Notlage. Dies sind sie aber nur so lange bis sie einen Antrag auf Anerkennung des Flüchtlings Status in einem Vertrag Staates der UNHCR, dass ist eine Organisation der UN, die sich mit dem Schutz der Flüchtlinge und der Staatenlosen kümmert. Ab diesem Zeitpunkt werden sie als Asylbewerber bezeichnet. Der deutsche Staat unterscheidet allerdings zwischen Menschen die zur flucht gezwungen wurden und Menschen die ihre Heimat verlasen in der Hoffnung auf eine bessere Zukunft (Migranten).";
        $('#flüch').css('font-size','44px');
        $('#flüch').css('line-height','44px');
        $('#flüch').unbind('click');
        $('#flüch').click(()=>{$('#flüch').remove();
        $('#bgright').css("background-image","");
        $(document.body).css('pointer-events','all');});
    });
});