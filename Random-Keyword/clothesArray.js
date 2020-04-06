function btnclothes() {
  var btnclothes = [
    '원피스/드레스',
    '와이셔츠',
    '후드티셔츠',
    '티셔츠',
    '가디건',
    '코트',
    '재킷',
    '조끼(베스트)',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  var clothesdice;
  clothesdice = btnclothes[Math.floor(Math.random() * btnclothes.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '<span class="color">' + clothesdice + " </span>" + "문구 (" + btnclothes.length + "개)";
  btnresult.innerHTML = btntext;
} // 의상