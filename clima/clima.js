const axios = require('axios');

const getClima = async(lat, lng) => {
    // axios const axios = require('axios');

    //  let l = encodeURI(direccion)
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=bc6aab651c1cd10f9520693ef03cdfe9&units=metric`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay Resultados para la estas coordenadas: latitud: ${ lat}, longitud: ${lng}`)
    }
    // let location = resp.data.results[0]
    // let coord = location.geometry.location;
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


    return resp.data.main.temp
        // direccion: location.formatted_address,
        // lat: coord.lat,
        // lng: coord.lng

    //return resp 
}

module.exports = {
    getClima
}