function load() {
    $('.timestamp').hover((ev, ui) => {
                                    $(ev.target).css('background', 'grey');
                                    $('#upper').css('height', '75%');
                                    $('#images').css('display', 'block');
                                },
                          (ev, ui) => {
                                    $(ev.target).css('background', 'black');
                                    $('#upper').css('height', '95%');
                                    $('#images').css('display', 'none');
                                }
                         );
}