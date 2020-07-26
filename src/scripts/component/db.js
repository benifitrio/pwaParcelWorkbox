import idb from 'idb';

let dbPromise = idb.open("teams-football", 1, upgradeDb => {
    upgradeDb.createObjectStore("teams", { keyPath: "id" });
});

export default dbPromise;
