// Unsplash API
const count = 10;
const apiKey = 'm8NNmiYgqa9E5KD_oxsw4oXY-zvibkK5gIzzE4IVIC8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    } catch (error){
        // Catch error here
    }
}


//  On Load
getPhotos();