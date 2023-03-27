export function setLocalStorage(item) {
  window.localStorage.setItem("todos", JSON.stringify(item));
}

export function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem("todos")) || [];
}