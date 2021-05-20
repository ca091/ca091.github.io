function getPosition() {
  let options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  }

  return new Promise(((resolve, reject) => {
    let success = pos => {
      resolve(pos.coords)
    }

    let error = err => {
      console.warn(err)
      reject(err)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }))
}

function getCity() {
  return new Promise(resolve => {
    AMap.plugin('AMap.CitySearch', function () {
      let citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          resolve(result)
        }
      })
    })
  })
}

export {
  getPosition,
  getCity
}
