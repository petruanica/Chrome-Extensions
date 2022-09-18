let country = "Netherlands";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ country });
  console.log(`Default country set to ${country}`);
});
