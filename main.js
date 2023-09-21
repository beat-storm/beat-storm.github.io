// bootstrap on page load

document.cookie = "oldOrigin='"+ getCookie(newOrigin);
document.cookie = "newOrigin="+ window.location.href;

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }