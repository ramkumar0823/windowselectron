const Store = require("electron-store");

const store = new Store();

export const getData = () => {
  return store.get("data", []);
};

export const setData = (data) => {
  store.set("data", data);
};
