function polling() {
  // console.log("polling");
  setTimeout(polling, 1000 * 30);
}

polling();

chrome.commands.onCommand.addListener((command) => {
  if (command === 'openkbar') {
    getCurrentTab().then((tab: chrome.tabs.Tab) => {
      if (!tab || !tab.url || !tab.id) {
        return;
      }

      if (!tab.url.includes('chrome://') && !tab.url.includes('chrome.google.com')) {
        chrome.tabs.sendMessage(tab.id, { request: 'openkbar' });
      }
    });
  }
});

// Get the current tab
const getCurrentTab = async () => {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
