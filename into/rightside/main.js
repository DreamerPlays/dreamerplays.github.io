loaded = () => {
    $('.drag').draggable()
    $('.drop').droppable({
        hoverClass: "ui-state-active",
        drop: function( event, ui ) {
            $(ui.draggable['0']).css('left', '0')
            $(ui.draggable['0']).css('top', '0')
            $(ui.draggable['0']).css('height','95%')
            $(ui.draggable['0']).css('margin', '5%')
            $(event.target).append(ui.draggable['0'])
            ui.draggable.draggable({disabled: true});
            counter++
            if(counter == 3){
                if($('#drop1').children()[0] == document.getElementById('syrien')){
                    $('#drop1').css('background-color', '2e3')
                    right++
                }else{
                    $('#drop1').css('background-color', 'e23')
                }
                if($('#drop2').children()[0] == document.getElementById('albanien')){
                    $('#drop2').css('background-color', '2e3')
                    right++
                }else{
                    $('#drop2').css('background-color', 'e23')
                }
                if($('#drop3').children()[0] == document.getElementById('kosovo')){
                    $('#drop3').css('background-color', '2e3')
                    right++
                }else{
                    $('#drop3').css('background-color', 'e23')
                }
                if(right == 3){
                    setTimeout(()=>{window.location.href = "./erklärung"},1200)
                }else{
                    setTimeout(()=>{window.location.href = "./"}, 2500)
                }
            }
        }
    })
}
counter = 0
right = 0