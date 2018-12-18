// const axios = require('axios');
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dDireccion de la Ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarYLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }°C`;
    } catch (e) {
        return `No se pudo detectar el climna en ${ direccion }`
    }

}

getInfo(argv.direccion)
    .then(mensage => console.log(mensage))
    .catch(e => console.log(e));

// lugar.getLugarYLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(10.4805937, -66.90360629999999)
//     .then(resp => {

//         console.log(resp);
//     })
//     .catch(e => console.log(e));
//console.log(argv.direccion);

// let encodeURL = encodeURI(argv.direccion)

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyBZGMiN-vzlsvj9Bxt48pPuYvD9Cflyc1Q`)
//     .then(resp => {
//         // console.log(JSON.stringify(resp.data, undefined, 2));
//         // console.log(resp.data);
//         // console.log(resp.status); //formatted_address
//         let location = resp.data.results[0]
//         let coord = location.geometry.location;
//         console.log('Direccion ', location.formatted_address);
//         console.log('Latitud ', coord.lat);
//         console.log('Longitud ', coord.lng);

//     })
//     .catch(e => console.log('ERROR!!!', e))