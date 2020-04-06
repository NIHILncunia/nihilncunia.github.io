function btnclothes() {
  var btnclothes = [];

  var clothesdice;
  clothesdice = btnclothes[Math.floor(Math.random() * btnclothes.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '<span class="color">' + clothesdice + " </span>" + "문구 (" + btnclothes.length + "개)";
  btnresult.innerHTML = btntext;
} // 의상