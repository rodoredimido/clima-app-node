const axios = require('axios');



const getLugarYLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyBZGMiN-vzlsvj9Bxt48pPuYvD9Cflyc1Q`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay Resultados para la Cudad: ${direccion}`)
    }
    let location = resp.data.results[0]
    let coord = location.geometry.location;
    //    .then(resp => {
    //             // console.log(JSON.stringify(resp.data, undefined, 2));
    //             // console.log(resp.data);
    //             // console.log(resp.status); //formatted_address
    //           
    //             console.log('Direccion ', location.formatted_address);
    //             console.log('Latitud ', coord.lat);
    //             console.log('Longitud ', coord.lng);

    //         })
    //         .catch(e => console.log('ERROR!!!', e))


    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLugarYLatLng
}