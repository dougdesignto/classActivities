$ (".themeChange").on("click", function(){
    if ($(this).hasClass("regular")) {
        $("#theme").attr("href", "css/blank.css")
    }
    else if ($(this).hassClass("blue")) {
        $("#theme").attr("href", "css/blue.css")
    }
    else ($(this).hassClass("dark")) {
        $("#theme").attr("href", "css/dark.css")
    }
});