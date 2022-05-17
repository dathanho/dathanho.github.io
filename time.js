function get_time() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? " PM" : " AM";
  hours = x.getHours() % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;

  var minutes = x.getMinutes().toString();
  minutes = minutes.length == 1 ? 0 + minutes : minutes;

  var seconds = x.getSeconds().toString();
  seconds = seconds.length == 1 ? 0 + seconds : seconds;

  var dt = x.getDate().toString();
  dt = dt.length == 1 ? 0 + dt : dt;

  var x1;
  x1 = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("time").innerHTML = x1;
  display_time();
}
function display_time() {
  var refresh = 1000;
  mytime = setTimeout("get_time()", refresh);
}
display_time();
