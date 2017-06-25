chrome.browserAction.onClicked.addListener(function() { //Fired when User Clicks ICON
    var archiveIcons = $(".ThreadPreview__controlIcon");

    for (icon in archiveIcons) {
        archiveIcons.click();
    }
    console.log('running');
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    insertIcon();
    console.log('runsning');
});
