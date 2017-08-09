const api = {
    getLinks(rover = 'curiosity'){
        const start = `https://api.nasa.gov/mars-photos/api/v1`;
        const key = 'y6ZUglHCMowWyfCZnZjTnUbFozGToNjOWX28dhVY';
        const url = `${start}/manifests/${rover}?api_key=${key}`;

        let result;

        return fetch(url)
        .then(r => r.json())
        .then(r => {
            return fetch(`${start}/rovers/${rover}/photos?earth_date=${r.photo_manifest.max_date}&api_key=${key}`)
            .then(r => r.json())
            .then(r => r.photos);
        });
    }
};

module.exports = api;
