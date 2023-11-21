const isOnline = navigator.onLine;

window.addEventListener("online", () => {
  document.querySelector(".results").innerHTML = "インターネットに接続中です";
});
window.addEventListener("offline", () => {
  document.querySelector(".results").innerHTML = "インターネットから切断されました";
});
