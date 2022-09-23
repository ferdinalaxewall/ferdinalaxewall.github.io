if ($(".project-tab").length > 0) {
    if ($(projectTab).hasClass("active")) {
        if (indexProjectTab == 0) {
            fileDirectory = $(nextElement).attr("title");
            splitFileDirectory = fileDirectory.split("/");
            folderName = splitFileDirectory.shift();
            
            $(nextElement).addClass("active")
            $(prevElement).addClass("active");

            $(".project-container").each(function(i){
                if ($(this).attr("project_id") == project_id) { 
                    if($(this).hasClass("active")){
                        $(this).next().addClass("active");
                    }
                    $(this).remove();
                }
            });

            setTimeout(() => {
                $(".sidebar-content-header .folder-name").text(folderName);
            }, 100);
        }else{
            
            var fileDirectory = $(prevElement).attr("title");
            var splitFileDirectory = fileDirectory.split("/");
            var folderName = splitFileDirectory.shift();

            $(prevElement).addClass("active");

            
            setTimeout(() => {
                $(".sidebar-content-header .folder-name").text(folderName);
            }, 100);
        }
    }
}else{
    setTimeout(() => {
        $(".sidebar-content-header .folder-name").text("Uncal BPM Workspace");
        $("#flow-section, #flow-section .content-box").addClass("empty-project");
        $(".project-menu-tab .utility-group").removeClass("d-flex").fadeOut();
        $("#palette-section").addClass("d-none")
    }, 100);
}