var a = new Date().toLocaleTimeString();
document.querySelector("#Time").innerHTML = a;

(function time() {
  setInterval(() => {
    var a = new Date().toLocaleTimeString();
    document.querySelector("#Time").innerHTML = a;
  }, 1000);
})();
