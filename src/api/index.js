import osmtogeojson from 'osmtogeojson';

export function convertToGeoJSON(mapData) {
    const mapDataXML = new DOMParser().parseFromString(mapData, "application/xml")

    return osmtogeojson(mapDataXML)
}