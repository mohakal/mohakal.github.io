window.onload = function () {
    $( "#stop" ).prop('disabled', true);
    
    $( "#start" ).click (() => { display(1); });
    $( "#stop" ).click(() => { display(0); });
}


let animationSlides = [];
let animationType = "";
let animationSlideIndex = 0;

function display(state) {
    if (state === 1) {
        $("#start").prop("disabled",true);
        $("#animation_type").prop("disabled",true);
        $("#stop").prop("disabled",false)
       
        animationType =  $('#animation_type').val();
       
        animationSlides = getAnimationSlides(animationType);
        
        animationSlideIndex = 0;
        drawInterval = setInterval(draw, 250);

        $("#speed").change(function() {
            if( $("#start").is(":disabled")) {
                if ($(this).is(":checked")) {
                    clearInterval(drawInterval);
                    drawInterval = setInterval(draw, 50);
                } else {
                    clearInterval(drawInterval);
                    drawInterval = setInterval(draw, 250);
                }
            }
        });

        $("#size").change(function() {
            console.log($(this).val());
            $("#animation_view").css("font-size", $(this).val());
        });
    } else {
        $("#start").prop("disabled",false);
        $("#stop").prop("disabled",true) ;
        $("#animation_type").prop("disabled",false);
        
        clearInterval(drawInterval);
        
        animationSlideIndex = 0;
    }
}


function draw(){
    $("#animation_view").val(animationSlides[animationSlideIndex]);
    animationSlideIndex++;
    if (animationSlideIndex === animationSlides.length) animationSlideIndex = 0;
}

function getAnimationSlides(animationType) {
    let animationSlides = [];
    if (animationType === "Exercise") {
        animationSlides = ANIMATIONS["Exercise"].split("=====\n");
    }
    if (animationType === "Juggler") {
        animationSlides = ANIMATIONS["Juggler"].split("=====\n");
    }
    if (animationType === "Bike") {
        animationSlides = ANIMATIONS["Bike"].split("=====\n");
    }
    if (animationType === "Dive") {
        animationSlides = ANIMATIONS["Dive"].split("=====\n");
    }
    if (animationType === "Custom") {
        animationSlides = ANIMATIONS["Custom"].split("=====\n");
    }
    if (animationType === "Blank") {
        animationSlides = ANIMATIONS["Blank"].split("=====\n");
    }

    return animationSlides;
}
