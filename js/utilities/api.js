const api = {
    getLinks(){
        const start = `https://api.nasa.gov/mars-photos/api/v1`;
        const key = 'y6ZUglHCMowWyfCZnZjTnUbFozGToNjOWX28dhVY';
        const url = `${start}/manifests/curiosity?api_key=${key}`;

        let result;

        return fetch(url)
        .then(r => r.json())
        .then(r => {
            return fetch(`${start}/rovers/curiosity/photos?earth_date=${r.photo_manifest.max_date}&api_key=${key}`)
            .then(r => r.json())
            .then(r => r.photos);
        });
    }
};

module.exports = api;
