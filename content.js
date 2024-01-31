// content.js

// Función para manipular cookies en la página actual
function manipulateCookies(containerId) {
    // Esta función podría modificar, eliminar o ajustar las cookies
    // basándose en el contenedor seleccionado.
    // Por ejemplo, podría etiquetar las cookies con un identificador de contenedor
    // o realizar cambios en las cookies según la lógica del contenedor.
}

// Función para enviar las cookies actuales al background script
function sendCurrentCookiesToBackground() {
    const cookies = document.cookie; // Obtiene todas las cookies de la página actual
    chrome.runtime.sendMessage({
        action: 'STORE_COOKIE',
        cookie: cookies,
        containerId: /* ID del contenedor actual */
    });
}

// Escuchar mensajes del background script o popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'MANIPULATE_COOKIES') {
        manipulateCookies(request.containerId);
    }
});

// También puedes realizar acciones directamente al cargar el script
// Por ejemplo, enviar las cookies actuales al background al cargar una nueva página
sendCurrentCookiesToBackground();
