function initEvents() {
  let areas = document.querySelector('#select-area')
  areas.addEventListener('change', () => {
    console.log(areas.value)
  })
}

export {
  initEvents
}
