async function consultarSP500() {
    const apiKey = 'LSPA30mFAWwr1TiNf0ZLnGixNXoNjPMY'; // Coloca aquí tu clave de API
    const ticker = 'VOOG'; // Ticker para el índice S&P 500
    const fecha = document.getElementById("fecha").value; // Obtiene la fecha del input

    if (!fecha) {
        alert("Por favor, ingresa una fecha.");
        return;
    }

    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=${fecha}&to=${fecha}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Verifica si hay datos para esa fecha
        if (data.historical && data.historical.length > 0) {
            const precio = data.historical[0].close;
            document.getElementById("resultado").innerText = `El valor del S&P 500 el ${fecha} fue $${precio}`;
        } else {
            document.getElementById("resultado").innerText = "No hay datos disponibles para la fecha especificada.";
        }
    } catch (error) {
        console.error("Error al obtener los datos", error);
        document.getElementById("resultado").innerText = "Error al obtener los datos. Inténtalo de nuevo.";
    }
}
