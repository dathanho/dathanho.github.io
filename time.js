function display_ct7() {
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
  display_c7();
}
function display_c7() {
  var refresh = 1000;
  mytime = setTimeout("display_ct7()", refresh);
}
display_c7();