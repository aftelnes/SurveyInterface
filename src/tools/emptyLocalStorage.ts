const emptyLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

export default emptyLocalStorage;
