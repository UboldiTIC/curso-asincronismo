const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256', // con mi key da error, solo funciona con la del profe.
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options)
    const data = await response.json();
    return data;
}

// Función anónima que se llama a sí misma:
(async () => {
    try {
        const videos = await fetchData(API);
        // Aquí generamos un template(plantilla) para mostrar los videos en html:
        let  view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}   
        `;
        content.innerHTML = view; //insertamos el html en el html. 
    } catch (error) {
        console.log(error); // Además se debe mostrar un mensaje al usuario. 
    }
})();