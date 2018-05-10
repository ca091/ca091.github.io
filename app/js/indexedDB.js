if(!window.indexedDB){
    alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}else{
    init();
}

var dbManager = {
    db: null,
    put: put,
    get: get,
    all: all,
    del: del,
    clear: clear
}

function init() {
    var request = indexedDB.open("library"), db;

    //版本升级时调用一次
    request.onupgradeneeded = function() {
        console.log('onupgradeneeded')
        // The database did not previously exist, so create object stores and indexes.
        db = request.result;
        var store = db.createObjectStore("books", {keyPath: "isbn", autoIncrement: true});
        store.createIndex("by_title", "title", {unique: true});
        store.createIndex("by_author", "author");

        // Populate with initial data.
        // store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
        // store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
        // store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
    };

    request.onerror = function (e) {
        console.log(e.target.errorCode)
    }
    request.onsuccess = function() {
        db = request.result;
        console.log('创建或打开数据库成功');
        dbManager.db = db;
    }
}

function put(item, database) {
    var db = this.db || database;
    if(!db) return;

    var tx = db.transaction("books", "readwrite");
    var store = tx.objectStore("books");

    store.put(item);
    // store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});

    tx.oncomplete = function() {
        console.log('complete')
        // All requests have succeeded and the transaction has committed.
    }
}

function get(key, handler, database) {
    var db = this.db || database;
    if(!db) return;

    var tx = db.transaction("books", "readonly");
    var store = tx.objectStore("books");
    var index = store.index("by_title");

    var request = index.get(key);
    request.onsuccess = function() {
        var matching = request.result;
        if (matching !== undefined) {
            // A match was found.
            console.log(matching.isbn, matching.title, matching.author);
            handler(matching)
        } else {
            // No match was found.
            console.log(null);
        }
    }
}

function all(cb, database) {
    var db = this.db || database;
    if(!db) return;
    var tx = db.transaction("books", "readonly");
    var store = tx.objectStore("books");
    var index = store.index("by_author");

    var result = [];
    // var request = index.openCursor(IDBKeyRange.only("Fred"));
    var request = index.openCursor();
    request.onsuccess = function() {
        var cursor = request.result;
        if (cursor) {
            // Called for each matching record.
            console.log(cursor.value.isbn, cursor.value.title, cursor.value.author);
            result.push({
                isbn: cursor.value.isbn,
                title: cursor.value.title,
                author: cursor.value.author
            })
            cursor.continue();
        } else {
            // No more matching records.
            console.log(null)
            cb(result)
        }
    }
}

function del(key, database) {
    var db = this.db || database;
    if(!db) return;

    var tx = db.transaction("books", "readwrite");
    var store = tx.objectStore("books");
    var request = store.delete(Number(key));
    request.onsuccess = function () {
        console.log('deleted', key)
    }
    request.onerror = function (e) {
        console.log(e)
    }
}

function clear(database) {
    var db = this.db || database;
    if(!db) return;

    var tx = db.transaction("books", "readwrite");
    var store = tx.objectStore("books");
    var request = store.clear();
    request.onsuccess = function () {
        console.log('cleared')
    }
}
