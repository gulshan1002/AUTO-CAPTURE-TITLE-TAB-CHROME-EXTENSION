$(function() {
    $("#button").click(function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var title = tabs[0].title;
            $('titleHeading').text("Title:");
            $("#title").text(`Title: ${title}`);
            });
        });
    });