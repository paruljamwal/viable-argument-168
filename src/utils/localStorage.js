const getLocalData = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

const saveLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getFormData = (key) => {
  if (key) {
    const Fdata = localStorage.getItem(key);
    return Fdata;
  }
};

const saveFromData = (key, value) => {
  console.log("key", key);
  console.log("value", value);
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export { getLocalData, saveLocalData, saveFromData, getFormData };
