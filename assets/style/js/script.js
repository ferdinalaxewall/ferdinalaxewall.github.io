$(document).ready(function(){

    // let projectArray = [
    //     {
    //     "name" : "Loopstudios",
    //     "title" : "Loopstudios Landing Page",
    //     "link" : "https://ferdinalaxewall.github.io/loopstudios.github.io",
    //     "img" : "loopstudios",
    //     },
    //     {
    //     "name" : "BUMDES App",
    //     "title" : "Badan Usaha Milik Desa",
    //     "link" : "https://ferdinalaxewall.github.io/e-commerce.github.io",
    //     "img" : "bumdes",
    //     },
    //     {
    //     "name" : "Sunnyside",
    //     "title" : "Sunnyside Agency Landing Page",
    //     "link" : "https://ferdinalaxewall.github.io/sunnyside-landing-page.github.io",
    //     "img" : "sunnyside",
    //     },
    //     {
    //     "name" : "SMAIT Abu Bakar",
    //     "title" : "SMAIT Abu Bakar Library Management Systems",
    //     "link" : "https://perpussmaitabubakar.sch.id",
    //     "img" : "smait-abu-bakar",
    //     },
    //     {
    //     "name" : "REST Countries",
    //     "title" : "REST Countries Web Information",
    //     "link" : "https://ferdinalaxewall.github.io/rest-countries-api.github.io",
    //     "img" : "rest-countries",
    //     },
    //     {
    //     "name" : "COVID 19",
    //     "title" : "COVID 19 Web Information",
    //     "link" : "https://github.com/ferdinalaxewall/web.covid19.springboot",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Business Process Manager",
    //     "title" : "Business Process Manager Web Application",
    //     "link" : "https://ferdinalaxewall.github.io/uncal-bpm.github.io",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Intro Page Template",
    //     "title" : "COVID 19 Web Information",
    //     "link" : "https://ferdinalaxewall.github.io/intro-section-with-dropdown.github.io",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Advice Generator",
    //     "title" : "Advice Web Generator",
    //     "link" : "https://ferdinalaxewall.github.io/advice-generator.github.io",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Expanses Chart",
    //     "title" : "Expanses Chart Component",
    //     "link" : "https://ferdinalaxewall.github.io/expanses-chart.github.io",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Order Summary",
    //     "title" : "Order Summary Component",
    //     "link" : "https://ferdinalaxewall.github.io/order-summary-component.github.io",
    //     "img" : "covid-19-web",
    //     },
    //     {
    //     "name" : "Product Preview Card",
    //     "title" : "Product Preview Card Component",
    //     "link" : "https://ferdinalaxewall.github.io/product-preview-card.github.io",
    //     "img" : "covid-19-web",
    //     },
    // ];

    // function shuffle(array) {
    //     let currentIndex = array.length,  randomIndex;
      
    //     // While there remain elements to shuffle.
    //     while (currentIndex != 0) {
      
    //       // Pick a remaining element.
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex--;
      
    //       // And swap it with the current element.
    //       [array[currentIndex], array[randomIndex]] = [
    //         array[randomIndex], array[currentIndex]];
    //     }
      
    //     return array;
    //   }
      
    // //   // Used like so
    //   shuffle(projectArray);
    // //   console.log(projectArray);

    // // console.log(projectArray.sort())

    // for (let i = 0; i < projectArray.length; i++) {
    //     let project = projectArray[i];

    //     let name = project.name;
    //     let title = project.title;
    //     let link = project.link;
    //     let img = project.img;
        
    //     let projectBoxHtml = '<div class="project-box" id="project-box-'+ (i+1) +'" data-img-name="'+img+'" data-project-title="'+title+'">'+
    //     '                       <a href="'+link+'" class="project-link" title="'+title+'" target="_blank">'+
    //     '                       <span class="project-name">'+ name +' </span> '+
    //     '                       <img src="./assets/icon/project-link-chevron-icon.svg" alt="Chevron Icon" loading="lazy"></a>'+
    //     '                     </div>';

        
    //     $(".project-content-wrapper").append(projectBoxHtml);
    //     // console.log($(".project-box").eq(i))
        
    //     const randomNumber = Math.floor(Math.random() * 11 + 1);
    
    //     // console.log(randomNumber)
    // }

    // setTimeout(() => {
    //     $(".project-box").each(function(){
    //         let imgName = $(this).attr("data-img-name");
    //         let imgPath = "./assets/img/"+imgName+".PNG";

    //         $(this).css("background-image", "url('"+imgPath+"')");
    //     });
    // }, 150);


    $(".navbar-list li").each(function(i){
        setTimeout(() => {
            $(this).attr("data-scroll", "show")
        }, i * 150);
    });
    
    $(".home-title-group").children().each(function(i){
        setTimeout(() => {
           $(this).attr("data-scroll", "show")
       }, (i+6) * 150);
    });

    $(".home-box").each(function(i){
        setTimeout(() => {
           $(this).attr("data-scroll", "show")
       }, (i+8) * 150);
    });

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
        let imgPath = "./assets/img/"+imgName+".png";
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

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    // About Section Parallax
    if (wScroll < 240) {
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#home-section']").addClass("active");
    }

    if (wScroll > $("#about-section").offset().top - 300) {
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#about-section']").addClass("active");
        $(".scroll-top").attr("data-scroll", "show");
        $(".about-content-wrapper img").attr("data-scroll", "show");
        $("#about-section .section-title").attr("data-scroll", "show")
        
        setTimeout(() => {
            $("#about-section .section-title").attr("data-scroll-title", "show")
        }, 150);
        
        $(".about-text").each(function(i){
            setTimeout(() => {
                $(this).attr("data-scroll", "show")
            }, (i+1) * 150);
        });
    }else{
        $(".scroll-top").removeAttr("data-scroll", "show");
    }

    // Services Section Parallax
    
    if (wScroll > $("#services-section").offset().top - 300) {
        $("#services-section .section-title").attr("data-scroll", "show");
        
        setTimeout(() => {
            $("#services-section .section-title").attr("data-scroll-title", "show");
        }, 150);
        
        $(".service-box").each(function(i){
            setTimeout(() => {
                $(this).attr("data-scroll", "show")
            }, (i+1) * 150);
        });
    }

    // Skills Section Parallax
    
    if (wScroll > $("#skills-section").offset().top - 300) {
        $("#skills-section .section-title").attr("data-scroll", "show");
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#skills-section']").addClass("active");
        
        setTimeout(() => {
            $("#skills-section .section-title").attr("data-scroll-title", "show");
        }, 150);
        
        $(".skill-button").each(function(i){
            setTimeout(() => {
                $(this).attr("data-scroll", "show")                
            }, (i+1) * 100);
        })
        
        setTimeout(() => {
            $(".skill-img-wrapper img").each(function(i){
                setTimeout(() => {
                    $(this).attr("data-scroll", "show")
                }, (i+1) * 75);
            });
        }, 300);
    }
    
    // Education Section Parallax
    
    if (wScroll > $("#education-section").offset().top - 300) {
        $("#education-section .section-title").attr("data-scroll", "show");
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#education-section']").addClass("active");
        
        setTimeout(() => {
            $("#education-section .section-title").attr("data-scroll-title", "show");
        }, 150);
        
        $(".education-box-wrapper").each(function(index){
            setTimeout(() => {
                $(this).children().each(function(i){
                    setTimeout(() => {
                        $(this).attr("data-scroll", "show")
                    }, (i+1) * 100);
                });
            }, (index+1) * 300);
        });
    }

    // Projects Section Parallax
    
    if (wScroll > $("#projects-section").offset().top - 300) {
        $("#projects-section .section-title").attr("data-scroll", "show");
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#projects-section']").addClass("active");
        
        setTimeout(() => {
            $("#projects-section .section-title").attr("data-scroll-title", "show");
        }, 150);
        
        $(".project-box").each(function(i){
            setTimeout(() => {
                $(this).attr("data-scroll", "show")
            }, (i+1) * 150);
        });
    }
    
    //  Contact Section Parallax

    if (wScroll > $("#projects-section").height() + $("#projects-section").offset().top - 400) {
        $("#contact-section .section-title").attr("data-scroll", "show");
        $(".navbar-link").removeClass("active");
        $(".navbar-link[href='#contact-section']").addClass("active");
        $(".contact-box-wrapper").attr("data-scroll", "show");
        $(".contact-img").attr("data-scroll", "show");
        setTimeout(() => {
            $("#contact-section .section-title").attr("data-scroll-title", "show");
        }, 150);
    }
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