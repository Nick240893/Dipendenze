//Session Storage
function session(type,name,value) { 
 if ((type && name) && (type.toUpperCase() === "GET")) {var get = sessionStorage.getItem(name); if (get) {return get} else {return}}
 if ((type && name && value) && (type.toUpperCase() === "SET")) {sessionStorage.setItem(name,value); return}
 if ((type && name && value) && (type.toUpperCase() === "DEL")) {sessionStorage.removeItem(name); return}
}
//Local Storage
function local(type,name,value) { 
 if ((type && name) && (type.toUpperCase() === "GET")) {var get = localStorage.getItem(name); if (get) {return get} else {return}}
 if ((type && name && value) && (type.toUpperCase() === "SET")) {localStorage.setItem(name,value); return}
 if ((type && name && value) && (type.toUpperCase() === "DEL")) {localStorage.removeItem(name); return}
}
