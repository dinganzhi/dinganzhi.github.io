---
---
$.fn.descendantOf = function(element) {
    element = $(element)[0];
    var current = this;
    var body    = document.body;
    while (current && current != element && current != document.body) {
        current = $(current).parent()[0];
    }
    if (typeof(current) == "undefined" || typeof(current) == "null") {
        return false;
    } else if (current == element) {
        return true;
    } else if (current == document.body) {
        return false;
    }
}

// Hide menu for nojs-browser
$('.menu-nojs').hide();

// Asyn load images
document.write('<img style="display: none" src="{{ site.url }}{{ site.baseurl }}/assets/images/patterns/dark-fabric.png">');
document.write('<img style="display: none" src="{{ site.url }}{{ site.baseurl }}/assets/images/patterns/dark-fabric.png">');

// Load theme dark-light
if (typeof(Storage) !== "undefined") {
    if (sessionStorage.theme == "dark") {
        $('body').css("background", "url({{ site.url }}{{ site.baseurl }}/assets/images/patterns/dark-fabric.png)");
        $('input#theme-select').prop("checked", true);
    } else if (sessionStorage.theme == "dark") {
        $('body').css("background", "url({{ site.url }}{{ site.baseurl }}/assets/images/patterns/dark-fabric.png)");
        $('input#theme-select').prop("checked", false);
        sessionStorage.theme = "light";
    }
} else {
    // Sorry! No Web Storage support..
}

$(document).ready(function(){
    // Theme selector
    $('input#theme-select').change(function(){
        if ($('input#theme-select').is(':checked')) {
            $('body').css("background", "url({{ site.url }}{{ site.baseurl }}/assets/images/patterns/dark-fabric.png)");
            sessionStorage.theme = "dark";
        } else {
            $('body').css("background", "#fafafa");
            sessionStorage.theme = "light";
        }
    });

    // For main menu
    $("#dropdown-btn").click(function(e){
        e.preventDefault();
        $("#dropdown-menu").slideToggle(100);
    });
    $(document).click(function(e) {
        if (!$(e.target).descendantOf("#dropdown-wrapper")) {
            $("#dropdown-menu").fadeOut(100);
        }
    });

});
