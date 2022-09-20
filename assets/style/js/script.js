$(document).ready(function(){
    $(".skill-button").click(function(){
        let skillAttr = $(this).attr("skill-attribute");

        $(".skill-img-wrapper img").each(function(){
            if ($(this).attr("skill-attribute") == skillAttr) {
                $(this).fadeIn();
            }else{
                $(this).fadeOut();
            }
        })

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".skill-img-wrapper img").fadeIn();
        }else{
            $(".skill-button").removeClass("active")
            $(this).addClass("active")
        }
    })

    $(".contact-box-button").click(function(){
        $(".contact-modal").attr("data-show-modal", "show");
        $("body").attr("data-show-modal", "show");

        setTimeout(() => {
            if ($(".contact-modal").attr("data-show-modal") == "show") {
                doCloseModalByOverlay();
            }
        }, 50);
    });
    
    $(".close-modal-button").click(function(e){
        e.preventDefault();
        
        let modal = $(".contact-modal");
        doCloseModal(modal);
    });
    
    $(".close-lightbox-button").click(function(e){
        e.preventDefault();
        
        let modal = $(".lightbox-modal");
        doCloseModal(modal);
    });
    
    $(".project-box").click(function(event){
        let projectTitle = $(this).attr("data-project-title");
        let imgName = $(this).attr("data-img-name");
        let imgPath = "./assets/img/"+imgName+".PNG";
        let imgElement = '<img src="'+imgPath+'" alt="'+projectTitle+'" loading="lazy">';

        if (!$(event.target).hasClass("project-link")) {
            $(".lightbox-modal").attr("data-show-modal", "show");
            $("body").attr("data-show-modal", "show");
            $(".lightbox-modal .modal-body").append(imgElement);
            $(".lightbox-title").text(projectTitle)
            
            setTimeout(() => {
                if ($(".lightbox-modal").attr("data-show-modal") == "show") {
                    doCloseModalByOverlay();
                    
                    setTimeout(() => {
                        $(".lightbox-modal .modal-body img").attr("data-image-show", "show");
                    }, 150);
                }

            }, 50);
        }        
    });
});

function doCloseModal(modal){
    $(modal).removeAttr("data-show-modal");
    $("body").removeAttr("data-show-modal");

    if ($(modal).hasClass("lightbox-modal")) {
        $(modal).find(".modal-body img").removeAttr("data-image-show");
        setTimeout(() => {
            $(modal).find(".modal-body").empty();
        }, 150);
    }
}

function doCloseModalByOverlay(){
    $(".overlay-modal").click(function(){
        let modal = $(this).parent();
        doCloseModal(modal);
    });
}