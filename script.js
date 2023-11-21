const isOnline = navigator.onLine;
/*
console.log('isOnline = ' + isOnline);

if(isOnline === true){
  document.querySelector(".results").innerHTML = "インターネットに接続中です";
}else{
  document.querySelector(".results").innerHTML = "インターネットから切断されました";
}

window.addEventListener("online", () => {
  document.querySelector(".results2").innerHTML = "インターネットに接続中です";
});
window.addEventListener("offline", () => {
  document.querySelector(".results2").innerHTML = "インターネットから切断されました";
});
*/
const updateOnlineStatus = () => {
  document.getElementById('results').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
