function clearNotifs() {
    var archiveIcons = $(".ThreadPreview__controlIcon");

    for (icon in archiveIcons) {
        archiveIcons.click();
    }
    console.log('running');
}

var topBar = $(".ThreadPreviewViewerHeader");
topBar.append("<img id=\"clearAllInjected\" class=\"ThreadPreviewViewerHeader__icon\" src=" + chrome.extension.getURL('images/icon.png') + ">");

$("#clearAllInjected").on('click', clearNotifs);
document.getElementById("clearAllInjected").style.cursor = "pointer";
