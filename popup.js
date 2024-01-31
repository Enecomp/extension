document.getElementById('createContainer').addEventListener('click', () => {
    const containerId = generateUUID();
    chrome.runtime.sendMessage({action: 'CREATE_CONTAINER', containerId}, response => {
        console.log(response.status);
    });
});

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
