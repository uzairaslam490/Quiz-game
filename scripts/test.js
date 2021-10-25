var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert("Well done!</h4>"+
    "<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>"+
    "<hr>"+
    "<p class='mb-0'>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>", 'success')
  })
}

var myModalEl = document.getElementById('staticBackdrop')

var popover = new bootstrap.Popover(document.getElementById('popover'), {
    container: myModalEl
  })