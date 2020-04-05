function btnrace() {
  var race = [
      '휴미안', '엘피안', '다르크엘피안', '디엘피안', '우르키안',
      '듀아피안', '고블리안', '아스모디안', '고르고니안', '타이타니안',
      '디아볼리안', '엘리오시안', '오우간', '리아피안', '머메디안',
      '블라디안', '엘레멘티', '엔티안', '그렘리안', '오블리안',
      '불카니안', '드라고니안', '드라큘리안', '락토니안', '디모니안',
      '아스트리안', '엘리오스', '디아볼로스', '데미 셀레스티안',
      '셀레스티안', '아르탈른', '안드로이드', '사이보그', '언데드',
      '기어로비아', '고스티아', '이레귤러', '아크 아르탈른', '신룡',
      '마수', '마룡', '신수', '몬스터',
  ];
  // 레이스라는 이름으로 배열을 만든다.

  var racedice;
  racedice = race[Math.floor(Math.random()*race.length)];
  // 방금 변수로 지정한 배열에서 랜던감 값을 뽑아낸다.

  var btnresult = document.getElementById("btnresult");
  // 값을 출력할 div 태그를 변수로 지정한다.

  var btntext = '오늘의 종족은 <span class="color">' + racedice + "!</span> (" + race.length + "개)";
  // 랜덤으로 뽑아낸 값을 이용해 메시지를 작성한다.

  btnresult.innerHTML = btntext;
  // 메시지를 div 태그 안에 넣는다.
} // 니힐라 종족

function btnclass() {
  var btnclass = [
      '원소 마법사', '투사', '그림자 투사', '음악가', '사격수',
      '궁사', '도적', '신성 기사', '기사', '약초사',
      '갑옷장인(대장장이)', '정비사', '정화사', '사제', '암흑 마법사',
      '신성 마법사', '소환 마법사', '무기 상인', '요리사', '강령술사',
      '사령술사', '무투사(격투가)', '마법투사', '농부', '무법자',
      '수도승', '살인청부업자', '신관', '점술사', '정령 마법사',
      '이단심판관', '어부', '왕', '왕자', '공주',
      '여왕', '황제', '여제', '용사', '퇴마사',
      '장의사', '가수', '주술사', '마왕', '방패투사',
      '갑옷 상인', '약초 상인', '잡품 상인', '무기장인(대장장이)', '자연숭배가',

      '광투사', '야만투사', '정찰꾼', '해적', '산적',
      '현상금 사냥꾼', '교주', '(무기를 사용하는)투사', '예언가', '암살자',
      '암흑 기사', '인형술사', '건달', '병사', '노예',
      '집사', '영매사', '암상인', '사서', '촌장',
      '저격수', '장교', '의료사', '간호원', '신부(종교)',

      '사기꾼', '파계승', '학자', '마도학자', '음양사',
      '항해사', '선장', '요리사', '교사', '세계의 수호자',
      '수호자', '모험가', '해결사',
  ];

  var classdice;
  classdice = btnclass[Math.floor(Math.random()*btnclass.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 직업은 <span class="color">' + classdice + "!</span> (" + btnclass.length + "개)";
  btnresult.innerHTML = btntext;
} // 니힐라 직업

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random()*word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '<span class="color">' + dice + " </span>" + "문구 (" + word.length + "개)";
  btnresult.innerHTML = btntext;
}