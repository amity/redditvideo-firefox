'use strict';

function getLink(info, tab) {
  console.log('its running');
  fetch(info.linkUrl + '.json').then(resp =>
    resp.json().then(pageJson => {
      browser.tabs.executeScript(tab.id, {
        frameId: info.frameId,
        code: `window.prompt('Copy to clipboard: Cmd+C, Enter', "${pageJson[0].data.children[0].data.secure_media.reddit_video.fallback_url + '.gif'}");`,
      })
    }
    )
  )
}

browser.contextMenus.create({
  id: "reddit-video-extractor",
  title: "Get direct video link",
  contexts:["link"],  // ContextType
  onclick: getLink // A callback function
});