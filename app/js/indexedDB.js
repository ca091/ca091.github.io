import {logic, Dom} from 'bitutilsofweb'

if (!window.indexedDB) {
  alert('Your browser doesn\'t support a stable version of IndexedDB. Such and such feature will not be available.')
} else {
  init().catch(e => console.warn(e))
}

function resetTable(table) {
  table.innerHTML = ''
  appendItem(table, {isbn: 'isbn', title: 'title', author: 'author'})
}

function appendItem(table, item) {
  let tr = document.createElement('tr')
  let td_isbn = document.createElement('td')
  let td_title = document.createElement('td')
  let td_author = document.createElement('td')
  td_isbn.textContent = item.isbn
  td_title.textContent = item.title
  td_author.textContent = item.author
  tr.dataset.id = item.isbn
  tr.appendChild(td_isbn)
  tr.appendChild(td_title)
  tr.appendChild(td_author)
  table.appendChild(tr)
}

async function init() {
  let {$} = Dom
  let {DBManager} = logic
  let dbManager = new DBManager()
  const storeName = 'books'
  //绑定钩子, 在onupgradeneeded事件触发时新建数据库表
  dbManager.hooks.createStore.tapPromise('A', db => {
    let store = db.createObjectStore(storeName, {keyPath: 'isbn', autoIncrement: true})
    store.createIndex('by_title', 'title', {unique: true})
    store.createIndex('by_author', 'author')
    return Promise.resolve(store)
  })

  let table = $('table')
  let dom_clear = $('#btn-clear')
  let dom_add = $('#btn-add')
  let dom_delete = $('#btn-del')

  let input_title = $('#input-title')
  let input_author = $('#input-author')
  let input_delete = $('#input-delete')

  await dbManager.open('library').catch(e => console.warn(e))
  let data = await dbManager.all('by_author', storeName)
  for (let i of data) {
    appendItem(table, i)
  }

  dom_delete.addEventListener('click', async e => {
    let id = Number(input_delete.value)
    await dbManager.del(id, storeName)
    $(`table tr[data-id=\"${id}\"]`).remove()
  })

  dom_clear.addEventListener('click', () => {
    dbManager.clear(storeName).catch(e => console.warn(e))
    resetTable(table)
  })

  dom_add.addEventListener('click', async () => {
    if (input_title.value.trim() === '' || input_author.value.trim() === '') return
    let item = {
      title: input_title.value,
      author: input_author.value,
    }
    await dbManager.put(item, storeName).catch(e => console.warn(e))
    let i = await dbManager.get({key: 'by_title', val: item.title}, storeName)
    appendItem(table, i)
  })
}
