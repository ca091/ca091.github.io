import {getPosition, getCity} from './geolocation.js'
import device from 'current-device'

const isDesktop = device.desktop()

window.mapLoaded = async function () {
  let center

  if (isDesktop) {
    let result = await getCity()
    console.log('result:', result)
    center = [result.bounds.southWest.lng, result.bounds.southWest.lat]
  } else {
    let position = await getPosition()
    console.log('position:', position)
  }

  console.log('center:', center)

  let map = new AMap.Map('container', {
    viewMode: '3D',
    zoom: 10,
    ...(center ? {center} : {})
  })
}
