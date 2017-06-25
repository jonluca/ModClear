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
    }
    var currentUrl = window.location.href;
    var notifBar;
    if (currentUrl.indexOf("notifications") != 0) {
        notifBar = $(".m-notifications");
    } else if (currentUrl.indexOf("inprogress") != 0) {
        notifBar = $(".m-inprogress");
    } else if (currentUrl.indexOf("new") != 0) {
        notifBar = $(".m-new");
    }
    var count = notifBar.getElementsByClassName("SidebarNav__count");
    if (count.length == 1) {
        notifBar.click();
        setTimeout(function() {
            clearNotifs();
        }, 2000);
    }
}

function insertIcon() {
    if (document.getElementById("clearAllInjected") == undefined) {
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
        if (document.getElementById("clearAllInjected") != null) {
            document.getElementById("clearAllInjected").style.cursor = "pointer";
        }
    }
}



$(document).on('click', function(e) {
    insertIcon();
});

function timeout() {
    setTimeout(function() {
        insertIcon();
        timeout();
    }, 500);
}

insertIcon();
timeout();