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
  racedice = race[Math.floor(Math.random() * race.length)];
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
    '갑옷 상인', '약초 상인', '잡품 상인', '무기장인(대장장이)', '자연숭배자',

    '광투사', '야만투사', '정찰꾼', '해적', '산적',
    '현상금 사냥꾼', '교주', '(무기를 사용하는)술사', '예언가', '암살자',
    '암흑 기사', '인형술사', '건달', '병사', '노예',
    '집사', '영매사', '암상인', '사서', '촌장',
    '저격술사', '장교', '의료사', '간호원', '신부(종교)',

    '사기꾼', '파계승', '학자', '마도학자', '음양사',
    '항해사', '선장', '요리사', '교사', '세계의 수호자',
    '수호자', '모험가', '해결사', '퇴역 장교', '사격술사',
    '마기사', '암흑 기사', '검투사', '예언가', '영웅',
  ];

  var classdice;
  classdice = btnclass[Math.floor(Math.random() * btnclass.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 직업은 <span class="color">' + classdice + "!</span> (" + btnclass.length + "개)";
  btnresult.innerHTML = btntext;
} // 니힐라 직업

function btnclothesSet() {
  var gender = [
    '남성', '여성', '보이쉬한 여성', '걸리쉬한 남성',
  ];

  var outer = [
    '털 망토', '망토', '가디건 기반', '재킷 기반', '롱 코트 기반',
    '코트 기반', '기다란 휘장을 목에 두름', '로브 기반', '가운 기반', '점퍼 기반',
    '케이프', '롱 케이프', '숏 케이프', '강화복', '강화 외골격', '롱 가디건 기반',
	  '롱 점퍼', '크롭 가디건', '크롭 점퍼', '크롭 망토', '크롭 로브',
	  '없음', '없음', '없음',
  ];

  // 남성
  var Mtop = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '복대 기반',
    '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구', '팔 보호구',
    '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구', '갑옷 상의 풀세트',
    '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시', '민소매 + 한쪽 팔토시',
    '목 보호대', '목 보호대 + 복대', '목토시', '상의 + 케이프', '한벌옷',

	  '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반', '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반',
	  '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반', '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반',
	  '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반', '긴 티셔츠 기반', '짧은 티셔츠 기반', '긴 셔츠 기반',
	  '짧은 셔츠 기반', '긴 스웨터 기반', '짧은 스웨터 기반', '긴 후드티 기반', '짧은 후드티 기반',
	  '없음', '없음', '없음', '없음',
  ];
  var Mbottom = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '다리에 붕대', '발토시', '털이 붙어있는 바지',
	  '없음', '없음', '없음', '없음',
  ];
  var Munder = [
    '브리프', '드로어즈', '트렁크', '훈도시', 'T백',
    '복서', 'G스트링', '비키니', '힙 숏', '복서 브리프',
    '스트링', '작스트랩', '니플 패드', '니플 밴드', '전신수영복',
    '삼각 수영복', '사각 수영복', '5부 수영복', '9부 수영복', '트렁크',
    '보드쇼츠', '하이브리드 쇼츠', '니스킨', '학교 수영복', '잠수복',
    '래시가드', '바디스킨', '없음', '없음', '없음',
  ];
  var Mshoes = [
    '운동화', '슬리퍼', '샌들', '롱 부츠', '부츠',
    '고무신', '짚신', '나막신', '스니커즈', '실내화',
    '등산화', '런닝화', '축구화', '캔버스화', '꽃신',
    '전투화', '목화', '장화', '레인부츠', '클릿 슈즈',
    '농구화', '구두', '맨발', '맨발 + 붕대를 감음', '맨발 + 한쪽 발에만 붕대를 감음',
    '옥스포드', '더비', '몽크 스트랩', '호스 빗 로퍼', '테슬 로퍼',
    '베네시안 로퍼', '드라이빙 슈즈', '페니 로퍼', '블로퍼', '몽크 스트랩',
    '클리퍼', '킬티 테슬 로퍼', '드레스 부츠', '첼시 부츠', '쳐커 부츠',
    '오페라 펌프', '윙 팁', '플레인 팁', '스플릿 토', '스커트 토',
    '브로그', '더블 몽크 스트랩', '스트레이트 팁', '보트 슈즈', '슬립 온 슈즈',

    '어글리 슈즈', '스니커즈', '발모랄', '원피스 뱀프', '없음',
	  '없음', '없음', '없음', '없음',
  ];

  // 여성
  var Ftop = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '블라우스 기반',
    '복대 기반', '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구',
    '팔 보호구', '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구',
    '갑옷 상의 풀세트', '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시',
    '민소매 + 한쪽 팔토시', '목 보호대', '목 보호대 + 복대', '드레스 기반',

    '목토시', '상의 + 케이프', '한벌옷', '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반',
	  '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반', '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반',
	  '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반', '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
	  '어깨 노출이 있는 블라우스 기반', '허리 노출이 있는 블라우스 기반', '가슴 노출이 있는 블라우스 기반', '어깨 노출이 있는 드레스 기반', '허리 노출이 있는 드레스 기반',
	  '가슴 노출이 있는 드레스 기반', '긴 티셔츠 기반', '짧은 티셔츠 기반', '긴 셔츠 기반', '짧은 셔츠 기반',

	  '긴 스웨터 기반', '짧은 스웨터 기반', '긴 후드티 기반', '짧은 후드티 기반', '긴 블라우스 기반',
	  '짧은 블라우스 기반', '없음', '없음', '없음', '없음',
  ];
  var Fbottom = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '스커트 기반', '롱 스커트 기반', '미니 스커트 기반',
    '다리에 붕대', '발토시', '털이 붙어있는 바지', '털이 붙어있는 스커트', '없음',
	  '없음', '없음', '없음',
  ];
  var Funder = [
    '슈미즈', '콤비네이션', '스트랩리스 브래지어', '발코니 브래지어', '플런지 브래지어',
    '풀컵 브래지어', '멀티웨이 브래지어', '미니미스터 브래지어', '3/4컵 브래지어', '몰드 브래지어',
    '코르셋 브래지어', '트라이앵글 브래지어', 'G스트링', '블루머', '드로어즈',
    '브리프', '브래지어', '거들', '올인원', '코르셋',
    '웨이스트니퍼', '파니에', '뷔스티에', '니퍼', '가터',
    '가터벨트', '가슴붕대', '브라탑', '페티코트', '슬립',
    '캐미솔', '플레어 팬티', '가슴 가리개', '누드 브래지어', '스포츠 브라',
    'T팬티', 'C스트링', '줄무늬 팬티', 'T프런트', '갈라팬티',
    '하이레그', '로우레그', '로우라이즈', '테디', '바디슈트',
    '팬티 코르셋', '바디 스타킹', '와이어 브래지어', '노와이어 브래지어', '런닝 브래지어',

    '브라렛', '니플 패드', '니플 밴드', '학교 수영복', '잠수복',
    '래시가드', '바디스킨', '니스킨', '로우레그', '로우라이즈',
    '전신수영복', '스트링 비키니', '부르키니', '스포츠 비키니', '슬링 샷',
    '원피스', '모노키니', '비키니', '하이웨이스트 비키니', '프릴 비키니',
    '홀터넥 비키니', '탱크탑 비키니', '오프 숄더 비키니', '스커트 랩', '시스루 니트',
    '튜브 탑 비키니', '하이레그', '없음', '없음', '없음',
	  '없음',
  ];
  var Fshoes = [
    '맨발', '맨발 + 붕대를 감음', '맨발 + 한쪽 발에만 붕대를 감음', '모카신', '몽크',
    '고무신', '나막신', '샌들', '슬리퍼', '쪼리',
    '운동화', '스니커즈', '실내화', '꽃신', '농구화',
    '등산화', '런닝화', '축구화', '캔버스화', '부츠',
    '전투화', '목화', '장화', '레인부츠', '클릿 슈즈',
    '펌프스', '메리제인슈즈', '슬링백', '플랫슈즈', '뮬',
    '핍 토 펌프', '슬링백 웻지', '웨지 샌들', '통', '웨지힐',
    '웨스턴', '앵클 하이', '앵클 스트랩', '스트랩 샌들', '클록',
    '미들부츠', '엔지니어부츠', '니하이부츠', '싸이하이부츠', '글레디에이터 힐',
    '워커 힐', '슬립온', '스텔레토힐', '사이드고어 부츠', '플랫폼',

    '오르세', '클로그', '독사이드', '핍토', '키튼힐',
    '로퍼', '토오픈', 'T스트랩', '부티', '부츠',
    '글레디에이터 슈즈', '플립플랍', '샌들', '웨지 부티', '힐리스 힐',
    '사이드 오픈', '플랫', '포니 힐', '발렛 힐', '에스파드류',
    '옥스퍼드', '드라이빙 슈즈', '도르세이', '없음', '없음',
	  '없음', '없음',
  ];

  var acc = [
    '목걸이', '귀걸이', '팔찌', '발찌', '반지',
    '브로치', '머리띠', '머리핀', '비녀', '댕기',
    '곱창밴드', '헤어 브로치', '머리망', '염주', '묵주',
	  '없음', '없음',
  ];

  var extra = [
    '헤어밴드', '모자', '목도리', '장갑', '양말',
    '디지털 시계', '회중시계', '아날로그 시계', '가방', '문신',
    '흉터', '없음', '없음',
  ];

  var keyword = [
    '보석', '망사', '트임', '사각형', '자수 장식',
    '구형', '삼각형', '육각형', '도형', '고리',
    '패턴', '사슬', '벨트', '리본', '프릴',
    '휘장', '레이스', '날개', '해골', '송곳니',
	  '털', '없음', '없음',
  ];

  var genderdice = gender[Math.floor(Math.random() * gender.length)];

	var outerdice = outer[Math.floor(Math.random() * outer.length)];
	var accdice;
	var extradice;
	var keyworddice;

  var Mtopbox = [];
  var Mbottombox = [];
	var Ftopbox = [];
	var Fbottombox = [];
  var accbox = [];
  var extrabox = [];
  var keywordbox = [];
  var overlapbox = [];

  for (var c = 0; c < 2; c++) {
	  accdice = acc[Math.floor(Math.random() * acc.length)];
	  if (accbox.length === 0) {
	  	accbox.push(accdice);
	  } else {
	  	if (accbox.includes(accdice)) {
	  		overlapbox.push(accdice);
	  		c -= 1;
		  } else {
			  accbox.push(accdice);
		  }
	  }
  }
  for (var d = 0; d < 2; d++) {
	  extradice = extra[Math.floor(Math.random() * extra.length)];
	  if (extrabox.length === 0) {
	  	extrabox.push(extradice);
	  } else {
	  	if (extrabox.includes(extradice)) {
	  		overlapbox.push(extradice);
	  		d -= 1;
		  } else {
			  extrabox.push(extradice);
		  }
	  }
  }
  for (var e = 0; e < 2; e++) {
	  keyworddice = keyword[Math.floor(Math.random() * keyword.length)];
	  if (keywordbox.length === 0) {
		  keywordbox.push(keyworddice);
	  } else {
	  	if (keywordbox.includes(keyworddice)) {
	  		overlapbox.push(keyworddice);
	  		e -= 1;
	  	} else {
			  keywordbox.push(keyworddice);
		  }
	  }
  }

  if (genderdice == '남성' || '보이쉬한 여성') {
	  var Mtopdice;
    var Mbottomdice;
    var Munderdice = Munder[Math.floor(Math.random() * Munder.length)];
    var Mshoesdice = Mshoes[Math.floor(Math.random() * Mshoes.length)];

    for (var a = 0; a < 2; a++) {
	    Mtopdice = Mtop[Math.floor(Math.random() * Mtop.length)];
	    if (Mtopbox.length === 0) {
		    Mtopbox.push(Mtopdice);
	    } else {
	    	if (Mtopbox.includes(Mtopdice)) {
			    overlapbox.push(Mtopdice);
			    a -= 1;
		    } else {
			    Mtopbox.push(Mtopdice);
		    }
	    }
    }
    for (var b = 0; b < 2; b++) {
	    Mbottomdice = Mbottom[Math.floor(Math.random() * Mbottom.length)];
	    if (Mbottombox.length === 0) {
		    Mbottombox.push(Mbottomdice);
	    } else {
		    if (Mbottombox.includes(Mbottomdice)) {
			    overlapbox.push(Mbottomdice);
			    b -= 1;
		    } else {
			    Mbottombox.push(Mbottomdice);
		    }
	    }
    }

    var btntext = `
      <p>캐릭터의 성별은 <span class="color">${genderdice}!</span></p>
      <p style="font-size: 14pt;">아래의 결과는 그저 가능성일 뿐, 알아서 조합해서 사용한다.</p><br />
      <p style="font-size: 14pt;">외투: <span class="color">${outerdice}!</span> (${outer.length}개)</p>
      <p style="font-size: 14pt;">상의 1: <span class="color">${Mtopbox[0]}!</span> (${Mtop.length}개)</p>
      <p style="font-size: 14pt;">상의 2: <span class="color">${Mtopbox[1]}!</span> (${Mtop.length}개)</p>
      <p style="font-size: 14pt;">하의 1: <span class="color">${Mbottombox[0]}!</span> (${Mbottom.length}개)</p>
      <p style="font-size: 14pt;">하의 2: <span class="color">${Mbottombox[1]}!</span> (${Mbottom.length}개)</p>
      <p style="font-size: 14pt;">속옷: <span class="color">${Munderdice}!</span> (${Munder.length}개)</p>
      <p style="font-size: 14pt;">신발: <span class="color">${Mshoesdice}!</span> (${Mshoes.length}개)</p>
      <p style="font-size: 14pt;">액세서리 1: <span class="color">${accbox[0]}!</span> (${acc.length}개)</p>
      <p style="font-size: 14pt;">액세서리 2: <span class="color">${accbox[1]}!</span> (${acc.length}개)</p>
      <p style="font-size: 14pt;">잡화 1: <span class="color">${extrabox[0]}!</span> (${extra.length}개)</p>
      <p style="font-size: 14pt;">잡화 2: <span class="color">${extrabox[1]}!</span> (${extra.length}개)</p>
      <p style="font-size: 14pt;">키워드 1: <span class="color">${keywordbox[0]}!</span> (${keyword.length}개)</p>
      <p style="font-size: 14pt;">키워드 2: <span class="color">${keywordbox[1]}!</span> (${keyword.length}개)</p>
      
    `;
  } else if (genderdice == '여성' || '걸리쉬한 남성') {
    var Ftopdice;
    var Fbottomdice;
    var Funderdice = Funder[Math.floor(Math.random() * Funder.length)];
    var Fshoesdice = Fshoes[Math.floor(Math.random() * Fshoes.length)];

    for (var f = 0; f < 2; f++) {
	    Ftopdice = Ftop[Math.floor(Math.random() * Ftop.length)];
	    if (Ftopbox.length === 0) {
	    	Ftopbox.push(Ftopdice);
	    } else {
	    	if (Ftopbox.includes(Ftopdice)) {
	    		overlapbox.push(Ftopdice);
	    		f -= 1;
		    } else {
			    Ftopbox.push(Ftopdice);
		    }
	    }
    }
	  for (var g = 0; g < 2; g++) {
		  Fbottomdice = Fbottom[Math.floor(Math.random() * Fbottom.length)];
		  if (Fbottombox.length === 0) {
			  Fbottombox.push(Fbottomdice);
		  } else {
		  	if (Fbottombox.includes(Fbottomdice)) {
		  		overlapbox.push(Fbottomdice);
		  		g -= 1;
			  } else {
				  Fbottombox.push(Fbottomdice);
			  }
		  }
	  }

    var btntext = `
      <p>캐릭터의 성별은 <span class="color">${genderdice}!</span></p>
      <p style="font-size: 14pt;">아래의 결과는 그저 가능성일 뿐, 알아서 조합해서 사용한다.</p><br />
      <p style="font-size: 14pt;">외투: <span class="color">${outerdice}!</span> (${outer.length}개)</p>
      <p style="font-size: 14pt;">상의 1: <span class="color">${Ftopbox[0]}!</span> (${Ftop.length}개)</p>
      <p style="font-size: 14pt;">상의 2: <span class="color">${Ftopbox[1]}!</span> (${Ftop.length}개)</p>
      <p style="font-size: 14pt;">하의 1: <span class="color">${Fbottombox[0]}!</span> (${Fbottom.length}개)</p>
      <p style="font-size: 14pt;">하의 2: <span class="color">${Fbottombox[1]}!</span> (${Fbottom.length}개)</p>
      <p style="font-size: 14pt;">속옷: <span class="color">${Funderdice}!</span> (${Funder.length}개)</p>
      <p style="font-size: 14pt;">신발: <span class="color">${Fshoesdice}!</span> (${Fshoes.length}개)</p>
      <p style="font-size: 14pt;">액세서리 1: <span class="color">${accbox[0]}!</span> (${acc.length}개)</p>
      <p style="font-size: 14pt;">액세서리 2: <span class="color">${accbox[1]}!</span> (${acc.length}개)</p>
      <p style="font-size: 14pt;">잡화 1: <span class="color">${extrabox[0]}!</span> (${extra.length}개)</p>
      <p style="font-size: 14pt;">잡화 2: <span class="color">${extrabox[1]}!</span> (${extra.length}개)</p>
      <p style="font-size: 14pt;">키워드 1: <span class="color">${keywordbox[0]}!</span> (${keyword.length}개)</p>
      <p style="font-size: 14pt;">키워드 2: <span class="color">${keywordbox[1]}!</span> (${keyword.length}개)</p>
    `;
  }

  var btnresult = document.getElementById("btnresult");
  btnresult.innerHTML = btntext;
} // 의상 조합

function btnwhatIllust() {
  var btnwhatIllust = [
    '팬아트를 그려라', '리퀘스트를 그려라', '세계관 캐릭터를 그려라', '오늘은 쉬도록 하라', '랜덤 디자인을 해라',
	  '판타지 디자인을 해라', 'SF 디자인을 해라', '몬스터 디자인을 해라', '데일리 디자인을 해라', '좀 더 생각해봐야겠다',
	  '세계관 캐릭터 리메이크를 해라',
  ];

  var whatIllustdice;
  whatIllustdice = btnwhatIllust[Math.floor(Math.random() * btnwhatIllust.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 그림은... 어디보자... 이게 좋겠군! <span class="color">${whatIllustdice}!</span> (${btnwhatIllust.length}개)`;
  btnresult.innerHTML = btntext;
} // 어떤 그림을 그릴까

function btnNihilbackstory() {
  var 어디 = [
    '어딘가의 폐허', '어딘가의 깊은 숲 속', '어딘가의 산골', '어딘가의 호화로운 저택', '어딘가의 왕실',
    '어딘가의 어두운 곳', '어딘가의 신전', '어딘가의 바닷가', '어딘가의 장소', '어딘가의 고대 유적',
    '어딘가의 평원', '어딘가의 초원', '어딘가의 던전', '어딘가의 감옥', '어딘가의 실험실',
    '어딘가의 고원', '어딘가의 협곡', '어딘가의 치열한 전장', '어딘가의 골목길', '어딘가의 촌락',
    '어딘가의 술집', '이 세상이 아닌 곳', '어딘가의 길거리', '어딘가의 행성', '어딘가의 은하계',
    '우주의 어딘가', '어딘가의 유흥가', '어딘가의 건물 지하', '어딘가의 상가', '어딘가의 상단',
    '어딘가의 황야', '어딘가의 연구실', '기억나지 않는 곳', '어딘가의 수용소', '어딘가의 작은 마을',
    '어딘가의 도시', '어딘지 모르는 곳', '시공의 바깥', '어딘가의 대륙', '대륙 너머의 어딘가',
    '어딘가의 다른 나라', '지금은 없는 어딘가', '드라스 섬의 어딘가', '발라큐아 섬의 어딘가', '바르기스 대륙의 어딘가',
	  '유센티아 대륙의 어딘가', '썩은 고원의 어딘가', '리자루스 제도의 어딘가', '조각 섬의 어딘가', '검은 협곡의 어딘가',

	  '강철 제국의 어딘가', '신 제국의 어딘가', '고르고니아 제국의 어딘가', '하얀 숲의 어딘가', '드라코니르 왕국의 어딘가',
	  '철벽 섬의 어딘가', '이름 없는 섬',
  ];

  var 목적 = [
    '고대의 지식을', '누군가의 복수를', '삶의 의미를 찾기', '스스로를 증명하기', '짜릿한 모험을',
    '어떤 사람을 찾기', '잃어버린 누군가를 찾기', '돈을 벌기', '심심함을 달래기', '보물을 찾기',
    '어떠한 물건을 찾기', '누군가의 야망을 막기', '삶의 원수를 찾기', '어떠한 사명을 완수하기', '어떠한 장소를 찾기',
    '원래 있던 곳으로 돌아가기', '자신이 어떤 사람인지 알기', '잃어버린 기억을 찾기', '명령을 수행하기', '자신이 있을 곳을 찾기',
    '사람을 죽이기', '자신의 운명을 확인하기', '운명의 짝을 찾기', '고향을 구하기', '만병통치약을 찾기',

    '전설의 무기를 찾기', '전설의 약초를 찾기', '세계를 지키기', '힘을 얻기', '자신의 죄를 속죄하기',
    '누군가의 유언을 전하기', '가족의 유언을 지키기', '꿈을 이루기', '더욱 강해지는 것을', '강한 상대를 찾기',
    '누군가를 죽이기', '사람들을 돕기', '전설의 마법주문을 찾기', '고대의 파괴병기를 찾기', '물건을 팔기',
    '친구를 만들기', '죽은 사람을 살리기', '소중한 사람을 되찾기', '세계를 자신의 손아귀에 넣기', '죽음을 뛰어넘기',
	  '자신이 만들어진 이유를 찾기', '강력한 무기를 만들기', '어떤 도시에 테러를 하기', '목적을 찾기', '세상을 구경하기',

	  '새로운 국가를 개척하기', '새로운 대륙을 탐사하기', '새로운 땅을 찾기', '새로운 종족을 찾기', '유적을 찾기',
	  '붙잡힌 동료를 구하기', '붙잡힌 가족을 구하기', '붙잡힌 친구를 구하기', '죽을 곳을 찾기', '죽기',
	  '악당이 되기', '악의 세력에 가담하기', '도적단에 합류하기', '수호자가 되기', '살기',
	  '학문을 깨우치기', '추적자에게서 도망치기', '바이러스를 퍼뜨리기', '위험한 유물을 파괴하기', '원수의 비밀을 찾기',
	  '자신의 비밀을 알아내기', '세상에 퍼진 바이러스를 바로잡기', '악을 타파하기',
  ];

  var 누구 = [
    '원소 마법사', '투사', '그림자 투사', '음악가', '사격수',
    '궁사', '도적', '신성 기사', '기사', '약초사',
    '갑옷장인(대장장이)', '정비사', '정화사', '사제', '암흑 마법사',
    '신성 마법사', '소환 마법사', '무기 상인', '요리사', '강령술사',
    '사령술사', '무투사(격투가)', '마법투사', '농부', '무법자',
    '수도승', '살인청부업자', '신관', '점술사', '정령 마법사',
    '이단심판관', '어부', '왕', '왕자', '공주',
    '여왕', '황제', '여제', '용사', '퇴마사',
    '장의사', '가수', '주술사', '마왕', '방패투사',
    '갑옷 상인', '약초 상인', '잡품 상인', '무기장인(대장장이)', '자연숭배자',

    '광투사', '야만투사', '정찰꾼', '해적', '산적',
    '현상금 사냥꾼', '교주', '(무기를 사용하는)술사', '예언가', '암살자',
    '암흑 기사', '인형술사', '건달', '병사', '노예',
    '집사', '영매사', '암상인', '사서', '촌장',
    '저격술사', '장교', '의료사', '간호원', '신부(종교)',
    '사기꾼', '파계승', '학자', '마도학자', '음양사',
    '항해사', '선장', '요리사', '교사', '세계의 수호자',
    '수호자', '모험가', '해결사', '퇴역 장교', '사격술사',
    '마기사', '암흑 기사', '검투사', '예언가', '휴미안',
	  '엘피안', '다르크엘피안', '디엘피안', '우르키안', '디모니안',

	  '듀아피안', '고블리안', '아스모디안', '고르고니안', '타이타니안',
	  '디아볼리안', '엘리오시안', '오우간', '리아피안', '머메디안',
	  '블라디안', '엘레멘티', '엔티안', '그렘리안', '오블리안',
	  '불카니안', '드라고니안', '드라큘리안', '락토니안',
	  '아스트리안', '엘리오스', '디아볼로스', '데미 셀레스티안', '셀레스티안',

	  '아르탈른', '안드로이드', '사이보그', '언데드', '기어로비아',
	  '고스티아', '이레귤러', '아크 아르탈른', '신룡', '마수',
	  '마룡', '신수', '몬스터',
  ];

  var 성별 = [
  	'남성', '여성', '보이쉬한 여성', '걸리쉬한 남성',
  ];

  var placedice = 어디[Math.floor(Math.random() * 어디.length)];
  var objectdice = 목적[Math.floor(Math.random() * 목적.length)];
  var whodice = 누구[Math.floor(Math.random() * 누구.length)];
  var genderdice = 성별[Math.floor(Math.random() * 성별.length)];

  var diceTotal = 어디.length * 목적.length * 누구.length * 성별.length;

  var btnresult = document.getElementById("btnresult");
  var btntext = `
    <p style="font-size: 14pt;">
      당신의 캐릭터는 <span class="color">${placedice}</span>에서 왔습니다. 그는
      <span class="color">${objectdice}</span> 위해 여행을 시작한
      <span class="color">${genderdice} ${whodice}</span>입니다. (${diceTotal}개)
    </p>
  `;
  btnresult.innerHTML = btntext;
} // 백스토리

function btngroup() {
	var groupword = [
		'구 대제국 황도 13 기사단', '대제국 흑도 13 기사단', '신 제국 기사단', '황금향 기사단', '레드 마운틴 도적단',
		'블루 스피어 도적단', '다크 스퀘어', '푸른 극락조 수호결사단', '블랙 윈터', '데스 아크스',
		'안티 노른', '매드 스펠즈', '블러드 라인', '데모닉 오더', '북방 레지스탕스',
		'수호자 연합', '정화기관', '까마귀 마녀단', '해골 교단', '명신교단',
		'파나믹 교단', '기계황신교', '기계신교', '신비교', '나티레네 교단',
		'종족연합', '반 종족연합',
	];

	var groupworddice = groupword[Math.floor(Math.random() * groupword.length)];

	var groupDesc;

	switch (groupworddice) {
		case '구 대제국 황도 13 기사단':
			groupDesc = '황도 13궁 하나 하나를 상징하는 13개의 기사단을 통틀어서 부르는 이름.';
			break;
		case '대제국 흑도 13 기사단':
			groupDesc = '황도 13 기사단이 해체되고 이레귤러에 의해 세워진 새로운 기사단. 악을 섬기는 악의 기사단이다.';
			break;
		case '신 제국 기사단':
			groupDesc = `<span style="font-weight: 900;">'신(Sin) 제국'</span>에서 운용하는 기사단. 역시 마찬가지로 다양한 기사단이 존재한다.`;
			break;
		case '황금향 기사단':
			groupDesc = '황금을 두른 기사들. 빛의 신을 섬기는 신자들이기도 하다.';
			break;
		case '레드 마운틴 도적단':
			groupDesc = '알세이아 대륙단 전체에 걸쳐 수많은 요새와 기지를 보유하고 있는 강력한 도적집단. 희대의 골칫거리.';
			break;
		case '블루 스피어 도적단':
			groupDesc = '레드 마운틴 도적단과 경쟁하는 마찬가지로 강력한 도적집단. 레드 마운틴 도적단보다는 양반이다.';
			break;
		case '다크 스퀘어':
			groupDesc = '다르크 엘피안으로 구성된 비밀결사. 데몬스톤 유저들을 모아 이레귤러를 파멸시키려한다.';
			break;
		case '푸른 극락조 수호결사단':
			groupDesc = '신 제국의 어느 한 지역에서부터 탄생한 집단. 흑인들로 구성되어있다.';
			break;
		case '블랙 윈터':
			groupDesc = '뛰어난 마법사들만이 들어갈 수 있는 마법사들의 집단. 비밀결사이다.';
			break;
		case '데스 아크스':
			groupDesc = '세상을 파괴하려는 미치광이들이 속해있는 집단. 데몬스톤을 카피한 붉은 데몬스톤을 보유한다.';
			break;
		case '안티 노른':
			groupDesc = '수 세기 전에 몰락한 집단을 누군가가 다시 일으켰다. 미치광이들로 가득하지만 뛰어난 마도과학력을 지니고 있다.';
			break;
		case '매드 스펠즈':
			groupDesc = '안티 노른의 산하 집단. 여기엔 마법사들이 속하는데, 마찬가지로 미치광이들로만 가득하다.';
			break;
		case '블러드 라인':
			groupDesc = '쉽게 말해 테러리스트들. 레드 마운틴보다도 과격하지만 소수정예로 움직인다.';
			break;
		case '데모닉 오더':
			groupDesc = '소유주의 몸을 빼앗은 데몬스톤들의 집단. 데몬스톤들을 결집시켜 이레귤러를 파하려한다. 이들에게는 인류또한 적이다.';
			break;
		case '북방 레지스탕스':
			groupDesc = '철벽 섬에 요새를 두고 있는 집단. 수호자들로 이루어져 있고, 지금은 병력을 보강중에 있다.';
			break;
		case '수호자 연합':
			groupDesc = '범세계적인 집단. 수호자들이라면 수호자 연합에 반드시 소속된다. 수호자를 양성, 파견한다.';
			break;
		case '정화기관':
			groupDesc = '이레귤러 헌터라고도 불리는 자들. 수호자 연합과 연계하는 정화사들이다. 혼돈을 정화한다.';
			break;
		case '까마귀 마녀단':
			groupDesc = '정확히 무엇을 하는지는 알 수 없는 집단. 까마귀를 심볼로 하며 여성 마법사들이 속한다.';
			break;
		case '해골 교단':
			groupDesc = '죽음의 신을 섬긴다. 다소 과격하고, 광적이게 섬긴다. 산 자를 죽은 자로 만들려한다.';
			break;
		case '명신교단':
			groupDesc = '죽음의 신을 섬긴다. 정상적이게 섬긴다. 해골 교단을 이단으로 간주하며 소탕하려한다.';
			break;
		case '파나믹 교단':
			groupDesc = '무기를 사용하지 않으며 맨몸을 단련시키는 수행을 하는 교단. 무술의 신 파나믹을 섬긴다.';
			break;
		case '기계황신교':
			groupDesc = '기계 숲에 기거하는 교단. 기계 숲의 왕을 신으로 신격화하여 섬기고 있다. 침입자를 사살한다.';
			break;
		case '기계신교':
			groupDesc = '기계황신교와 마찬가지로 기계 숲의 왕을 섬기지만 저돌적이지 않다. 타지역에도 포진되어있다.';
			break;
		case '신비교':
			groupDesc = '신비와 기적의 신을 섬기는 교단이었으나 현재엔 붕괴되었다.';
			break;
		case '나티레네 교단':
			groupDesc = '물의 여신 나티레네를 섬기는 교단. 나티레네의 수족들인 물의 정령과 계약을 하기도 한다.';
			break;
		case '종족연합':
			groupDesc = '수많은 종족들이 하나의 뜻을 이루기 위해 일으킨 연합. 이레귤러를 이 땅에서 몰아내려고 한다.';
			break;
		case '반 종족연합':
			groupDesc = '종족연합이 탄생하자 이레귤러들이 자신들의 수하들을 결집시켜 형성한 이레귤러 집단.';
			break;
		case '':
			groupDesc = '';
			break;
	}

	var btnresult = document.getElementById("btnresult");
	var btntext = `
		오늘의 조직은 <span class="color">${groupworddice}!</span> (${groupword.length}개)<br />
		<span style="font-size: 14pt;">${groupDesc}</span>
	`;
	btnresult.innerHTML = btntext;
} // 소속

function btnhome() {
	var area = [
		'드라스 섬', '발라큐라 섬', '바르기스 대륙', '유센티아 대륙', '철벽섬',
		'조각섬', '하얀 숲', '검은 협곡', '썩은 고원', '리자루스 제도',
		'이름 미정 섬',
	];

	var areadice = area[Math.floor(Math.random() * area.length)];

	if (areadice === '드라스 섬') {
		var drassCity = [
			'스톤마운틴 마을', '산디아스 마을',
		];
		var Citydice = drassCity[Math.floor(Math.random() * drassCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '발라큐라 섬') {
		var vallacuaCity = [
			'빌레 마을', '발라큐아 마을', '헤르날 마을',
		];
		var Citydice = vallacuaCity[Math.floor(Math.random() * vallacuaCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '바르기스 대륙') {
		var bargissCity = [
			'오드론 마을', '레네토스 마을', '로가리아 마을', '모르제 마을', '사라마 마을',
			'레보네스 항구', '바르기스 마을', '사이리아 마을', '디에스티 마을', '메세니움 마을',
			'라보레누스 마을', '베리나르 마을',
		];
		var Citydice = bargissCity[Math.floor(Math.random() * bargissCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '이름 미정 섬') {
		var nonameCity = [
			'바르메스 항구', '키아니르 마을',
		];
		var Citydice = nonameCity[Math.floor(Math.random() * nonameCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '유센티아 대륙') {
		var ucentiaNation = [
			'고르고니아 제국', '신 제국', '강철 제국', '드라코니르 왕국', '대제국 알세이아',
			'비점령 지역',
		];
		var Nationdice = ucentiaNation[Math.floor(Math.random() * ucentiaNation.length)];
		if (Nationdice === '고르고니아 제국') {
			var gorgoniaCity = [
				'수도 딜나르스', '텔슈타인 마을', '엘제이스 항구', '르나힘 마을', '마람키아 마을',
				'타미움 마을', '레란타 마을', '네아제른 요새', '엘덴타인 마을', '마샤 마을',
				'살로우 마을', '아스카플론 마을', '드라네이스 마을', '마그라스 마을', '에레디온 요새',
				'스바티아 요새',
			];
			var Citydice = gorgoniaCity[Math.floor(Math.random() * gorgoniaCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Nationdice}/${Citydice}!</span>`;
		} else if (Nationdice === '신 제국') {
			var sinCity = [
				'수도 엘카르스', '샤샤스 마을', '브키아 마을', '베르피 마을', '쉐누아 마을',
				'발카니아 요새', '오즈린 요새', '쟈그로 마을', '딜리키아 마을', '아트레닐 마을',
				'노르제아 마을', '드라베이츠 마을', '마일레누스 마을', '드라그메른 마을', '드람노르 마을',
			];
			var Citydice = sinCity[Math.floor(Math.random() * sinCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Nationdice}/${Citydice}!</span>`;
		} else if (Nationdice === '강철 제국') {
			var blackironCity = [
				'수도 데로무스', '로스네이크 요새', '게르힘 마을', '리에니스 마을', '샤하리스 마을',
				'라글레스 마을', '하르니디움 마을', '록사리아 마을', '에르페디 마을', '아스톤 요새',
				'모레슬리 요새',
			];
			var Citydice = blackironCity[Math.floor(Math.random() * blackironCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Nationdice}/${Citydice}!</span>`;
		} else if (Nationdice === '드라코니르 왕국') {
			var draconirCity = [
				'수도 베마로스', '마르보레스 마을', '브로시아 마을', '페데일 마을', '뎀버튼 요새',
				'아즈마르 요새',
			];
			var Citydice = draconirCity[Math.floor(Math.random() * draconirCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Nationdice}/${Citydice}!</span>`;
		} else if (Nationdice === '대제국 알세이아') {
			var alseiaCity = [
				'수도 유센티아',
			];
			var Citydice = alseiaCity[Math.floor(Math.random() * alseiaCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Nationdice}/${Citydice}!</span>`;
		} else if (Nationdice === '비점령 지역') {
			var ucentiaCity = [
				'가슈트렘 마을', '엘피디온 마을', '메드린 마을', '우르고스 마을', '네델로스 마을',
				'스크렛 마을', '가르텐시아 마을', '바드웬 마을', '스파로스 요새(레드 마운틴)', '데크레헴 요새',
				'코르코스 마을', '아즈토네아 마을', '엘메우스 고성',
			];
			var Citydice = ucentiaCity[Math.floor(Math.random() * ucentiaCity.length)];
			var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
		}
	} else if (areadice === '철벽섬') {
		var fortressCity = [
			'레아닌 항구', '북방 레지스탕스 철벽의 요새', '엑세르노 마을', '카라미스 마을',
		];
		var Citydice = fortressCity[Math.floor(Math.random() * fortressCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '조각섬') {
		var fragmentCity = [
			'미구현..',
		];
		var Citydice = fragmentCity[Math.floor(Math.random() * fragmentCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	} else if (areadice === '하얀 숲') {
		var btntext = `오늘의 출신지는 <span class="color">${areadice}!</span>`;
	} else if (areadice === '검은 협곡') {
		var btntext = `오늘의 출신지는 <span class="color">${areadice}!</span>`;
	} else if (areadice === '썩은 고원') {
		var btntext = `오늘의 출신지는 <span class="color">${areadice}!</span>`;
	} else if (areadice === '리자루스 제도') {
		var lizarusCity = [
			'그론길스 마을', '고른시아 마을', '리자루스 마을', '파르타니엄 마을',
		];
		var Citydice = lizarusCity[Math.floor(Math.random() * lizarusCity.length)];
		var btntext = `오늘의 출신지는 <span class="color">${areadice}/${Citydice}!</span>`;
	}

	var btnresult = document.getElementById("btnresult");

	btnresult.innerHTML = btntext;
} // 출신지

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random() * word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 단어는 <span class="color">${dice}!</span> (${word.length}개)`;
  btnresult.innerHTML = btntext;
} // 항목