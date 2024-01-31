let containers = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'CREATE_CONTAINER') {
    const containerId = request.containerId;
    containers[containerId] = [];
    console.log(`Contenedor creado: ${containerId}`);

    chrome.tabs.create({url: 'https://www.ejemplo.com'}); // Cambia la URL según necesites

    sendResponse({status: `Contenedor creado: ${containerId}`});
  }
});
