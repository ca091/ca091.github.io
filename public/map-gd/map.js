import {getPosition, getCity} from './geolocation.js'
import device from 'current-device'

const isDesktop = device.desktop()

window.mapLoaded = async function () {
  if (isDesktop) {
    let result = await getCity()
    console.log('result:', result)
  } else {
    let position = await getPosition()
    console.log('position:', position)
  }

  let map = new AMap.Map('container')
}
