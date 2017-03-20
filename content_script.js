function clearNotifs() {
    var archiveIcons = $(".ThreadPreview__controlIcon");

    for (icon in archiveIcons) {
        archiveIcons.click();
    }
    while ($(".ThreadPreview__controlIcon").length != 0) {
        var archiveIcons = $(".ThreadPreview__controlIcon");

        for (icon in archiveIcons) {
            archiveIcons.click();
        }
        console.log('running');
    }
}

var topBar = $(".ThreadPreviewViewerHeader");
topBar.append("<img id=\"clearAllInjected\" class=\"ThreadPreviewViewerHeader__icon\" src=" + chrome.extension.getURL('images/icon.png') + ">");

$("#clearAllInjected").on('click', clearNotifs);
$("#clearAllInjected").css('margin-right', '10px');
$("#clearAllInjected").css('margin-top', '10px');
$("#clearAllInjected").css('float', 'right');
$("#clearAllInjected").hover(function() {
    $("#clearAllInjected").attr("src", chrome.extension.getURL('images/hover.png'));
}, function() {
    $("#clearAllInjected").attr("src", chrome.extension.getURL('images/icon.png'));
});

document.getElementById("clearAllInjected").style.cursor = "pointer";
