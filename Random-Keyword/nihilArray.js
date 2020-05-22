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
    '마기사', '암흑 기사', '검투사', '예언가',
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
  ];

  // 남성
  var Mtop1 = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '복대 기반',
    '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구', '팔 보호구',
    '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구', '갑옷 상의 풀세트',
    '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시', '민소매 + 한쪽 팔토시',
    '목 보호대', '목 보호대 + 복대', '목토시', '상의 + 케이프', '한벌옷',

	  '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반', '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반',
	  '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반', '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반',
	  '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
  ];
  var Mtop2 = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '복대 기반',
    '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구', '팔 보호구',
    '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구', '갑옷 상의 풀세트',
    '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시', '민소매 + 한쪽 팔토시',
    '목 보호대', '목 보호대 + 복대', '목토시', '상의 + 케이프', '한벌옷',

	  '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반', '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반',
	  '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반', '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반',
	  '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
  ];
  var Mbottom1 = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '다리에 붕대', '발토시',
  ];
  var Mbottom2 = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '다리에 붕대', '발토시',
  ];
  var Munder = [
    '브리프', '드로어즈', '트렁크', '훈도시', 'T백',
    '복서', 'G스트링', '비키니', '힙 숏', '복서 브리프',
    '스트링', '작스트랩', '니플 패드', '니플 밴드', '전신수영복',
    '삼각 수영복', '사각 수영복', '5부 수영복', '9부 수영복', '트렁크',
    '보드쇼츠', '하이브리드 쇼츠', '니스킨', '학교 수영복', '잠수복',
    '래시가드', '바디스킨',
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

    '어글리 슈즈', '스니커즈', '발모랄', '원피스 뱀프',
  ];

  // 여성
  var Ftop1 = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '블라우스 기반',
    '복대 기반', '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구',
    '팔 보호구', '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구',
    '갑옷 상의 풀세트', '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시',
    '민소매 + 한쪽 팔토시', '목 보호대', '목 보호대 + 복대', '드레스 기반',

    '목토시', '상의 + 케이프', '한벌옷', '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반',
	  '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반', '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반',
	  '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반', '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
	  '어깨 노출이 있는 블라우스 기반', '허리 노출이 있는 블라우스 기반', '가슴 노출이 있는 블라우스 기반', '어깨 노출이 있는 드레스 기반', '허리 노출이 있는 드레스 기반',
	  '가슴 노출이 있는 드레스 기반',
  ];
  var Ftop2 = [
    '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '블라우스 기반',
    '복대 기반', '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구',
    '팔 보호구', '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구',
    '갑옷 상의 풀세트', '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시',
    '민소매 + 한쪽 팔토시', '목 보호대', '목 보호대 + 복대', '드레스 기반',

    '목토시', '상의 + 케이프', '한벌옷', '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반',
	  '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반', '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반',
	  '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반', '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
	  '어깨 노출이 있는 블라우스 기반', '허리 노출이 있는 블라우스 기반', '가슴 노출이 있는 블라우스 기반', '어깨 노출이 있는 드레스 기반', '허리 노출이 있는 드레스 기반',
	  '가슴 노출이 있는 드레스 기반',
  ];
  var Fbottom1 = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '스커트 기반', '롱 스커트 기반', '미니 스커트 기반',
    '다리에 붕대', '발토시',
  ];
  var Fbottom2 = [
    '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
    '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
    '바지 + 천쪼가리', '천쪼가리만 착용', '스커트 기반', '롱 스커트 기반', '미니 스커트 기반',
    '다리에 붕대', '발토시',
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
    '튜브 탑 비키니', '하이레그',
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
    '옥스퍼드', '드라이빙 슈즈', '도르세이',
  ];

  var acc1 = [
    '목걸이', '귀걸이', '팔찌', '발찌', '반지',
    '브로치', '머리띠', '머리핀', '비녀', '댕기',
    '곱창밴드', '헤어 브로치', '머리망', '염주', '묵주',
  ];
  var acc2 = [
    '목걸이', '귀걸이', '팔찌', '발찌', '반지',
    '브로치', '머리띠', '머리핀', '비녀', '댕기',
    '곱창밴드', '헤어 브로치', '머리망', '염주', '묵주',
  ];

  var extra1 = [
    '헤어밴드', '모자', '목도리', '장갑', '양말',
    '디지털 시계', '회중시계', '아날로그 시계', '가방', '문신',
    '흉터',
  ];
  var extra2 = [
    '헤어밴드', '모자', '목도리', '장갑', '양말',
    '디지털 시계', '회중시계', '아날로그 시계', '가방', '문신',
    '흉터',
  ];

  var keyword1 = [
    '보석', '망사', '트임', '사각형', '자수 장식',
    '구형', '삼각형', '육각형', '도형', '고리',
    '패턴', '사슬', '벨트', '리본', '프릴',
    '휘장', '레이스', '날개', '해골',
  ];
  var keyword2 = [
    '보석', '망사', '트임', '사각형', '자수 장식',
    '구형', '삼각형', '육각형', '도형', '고리',
    '패턴', '사슬', '벨트', '리본', '프릴',
    '휘장', '레이스', '날개', '해골',
  ];

  var genderdice;
  genderdice = gender[Math.floor(Math.random() * gender.length)];

  var outerdice = outer[Math.floor(Math.random() * outer.length)];

  var Mtop1dice = Mtop1[Math.floor(Math.random() * Mtop1.length)];
  var Mtop2dice = Mtop2[Math.floor(Math.random() * Mtop2.length)];
  var Mbottom1dice = Mbottom1[Math.floor(Math.random() * Mbottom1.length)];
  var Mbottom2dice = Mbottom2[Math.floor(Math.random() * Mbottom2.length)];
  var Munderdice = Munder[Math.floor(Math.random() * Munder.length)];
  var Mshoesdice = Mshoes[Math.floor(Math.random() * Mshoes.length)];

  var Ftop1dice = Ftop1[Math.floor(Math.random() * Ftop1.length)];
  var Ftop2dice = Ftop2[Math.floor(Math.random() * Ftop2.length)];
  var Fbottom1dice = Fbottom1[Math.floor(Math.random() * Fbottom1.length)];
  var Fbottom2dice = Fbottom2[Math.floor(Math.random() * Fbottom2.length)];
  var Funderdice = Funder[Math.floor(Math.random() * Funder.length)];
  var Fshoesdice = Fshoes[Math.floor(Math.random() * Fshoes.length)];

  var acc1dice = acc1[Math.floor(Math.random() * acc1.length)];
  var acc2dice = acc2[Math.floor(Math.random() * acc2.length)];
  var extra1dice = extra1[Math.floor(Math.random() * extra1.length)];
  var extra2dice = extra2[Math.floor(Math.random() * extra2.length)];
  var keyword1dice = keyword1[Math.floor(Math.random() * keyword1.length)];
  var keyword2dice = keyword2[Math.floor(Math.random() * keyword2.length)];

  var d2 = '0123456789';
  var destinyD2_1;
  var destinyD2_2;
  var destinyD2_3;
  var destinyD2_4;
  var destinyD2_5;
  var destinyD2_6;
  var destinyD2_7;
  var destinyD2_8;
  var destinyD2_9;
  var destinyD2_10;
  var destinyD2_11;
  var destinyD2_12;
  var destinyD2_13;

  if (genderdice == '남성' || '보이시한 여성') {

    destinyD2_1 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_2 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_3 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_4 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_5 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_6 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_7 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_8 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_9 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_10 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_11 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_12 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_13 = d2[Math.floor(Math.random() * d2.length)];

    if (destinyD2_1 <= '1') {
      outerdice = '없음';
    } else if (destinyD2_1 >= '2') {
      outerdice = outer[Math.floor(Math.random() * outer.length)];
    }

    if (destinyD2_2 <= '1') {
      Mtop1dice = '없음';
    } else if (destinyD2_2 >= '2') {
      Mtop1dice = Mtop1[Math.floor(Math.random() * Mtop1.length)];
    }

    if (destinyD2_3 <= '1') {
      Mtop2dice = '없음';
    } else if (destinyD2_3 >= '2') {
      Mtop2dice = Mtop2[Math.floor(Math.random() * Mtop2.length)];
    }

    if (destinyD2_4 <= '1') {
      Mbottom1dice = '없음';
    } else if (destinyD2_4 >= '2') {
      Mbottom1dice = Mbottom1[Math.floor(Math.random() * Mbottom1.length)];
    }

    if (destinyD2_5 <= '1') {
      Mbottom2dice = '없음';
    } else if (destinyD2_5 >= '2') {
      Mbottom2dice = Mbottom2[Math.floor(Math.random() * Mbottom2.length)];
    }

    if (destinyD2_6 <= '1') {
      Munderdice = '없음';
    } else if (destinyD2_6 >= '2') {
      Munderdice = Munder[Math.floor(Math.random() * Munder.length)];
    }

    if (destinyD2_7 <= '1') {
      Mshoesdice = '없음';
    } else if (destinyD2_7 >= '2') {
      Mshoesdice = Mshoes[Math.floor(Math.random() * Mshoes.length)];
    }

    if (destinyD2_8 <= '1') {
      acc1dice = '없음';
    } else if (destinyD2_8 >= '2') {
      acc1dice = acc1[Math.floor(Math.random() * acc1.length)];
    }

    if (destinyD2_9 <= '1') {
      acc2dice = '없음';
    } else if (destinyD2_9 >= '2') {
      acc2dice = acc2[Math.floor(Math.random() * acc2.length)];
    }

    if (destinyD2_10 <= '1') {
      extra1dice = '없음';
    } else if (destinyD2_10 >= '2') {
      extra1dice = extra1[Math.floor(Math.random() * extra1.length)];
    }

    if (destinyD2_11 <= '1') {
      extra2dice = '없음';
    } else if (destinyD2_11 >= '2') {
      extra2dice = extra2[Math.floor(Math.random() * extra2.length)];
    }

    if (destinyD2_12 <= '1') {
      keyword1dice = '없음';
    } else if (destinyD2_12 >= '2') {
      keyword1dice = keyword1[Math.floor(Math.random() * keyword1.length)];
    }

    if (destinyD2_13 <= '1') {
      keyword2dice = '없음';
    } else if (destinyD2_13 >= '2') {
      keyword2dice = keyword2[Math.floor(Math.random() * keyword2.length)];
    }

    var btntext = `
      <p>캐릭터의 성별은 <span class="color">${genderdice}!</span></p>
      <p style="font-size: 14pt;">아래의 결과는 그저 가능성일 뿐, 알아서 조합해서 사용한다.</p><br />
      <p style="font-size: 14pt;">외투: <span class="color">${outerdice}!</span> (${outer.length}개)</p>
      <p style="font-size: 14pt;">상의 1: <span class="color">${Mtop1dice}!</span> (${Mtop1.length}개)</p>
      <p style="font-size: 14pt;">상의 2: <span class="color">${Mtop2dice}!</span> (${Mtop2.length}개)</p>
      <p style="font-size: 14pt;">하의 1: <span class="color">${Mbottom1dice}!</span> (${Mbottom1.length}개)</p>
      <p style="font-size: 14pt;">하의 2: <span class="color">${Mbottom2dice}!</span> (${Mbottom2.length}개)</p>
      <p style="font-size: 14pt;">속옷: <span class="color">${Munderdice}!</span> (${Munder.length}개)</p>
      <p style="font-size: 14pt;">신발: <span class="color">${Mshoesdice}!</span> (${Mshoes.length}개)</p>
      <p style="font-size: 14pt;">액세서리 1: <span class="color">${acc1dice}!</span> (${acc1.length}개)</p>
      <p style="font-size: 14pt;">액세서리 2: <span class="color">${acc2dice}!</span> (${acc2.length}개)</p>
      <p style="font-size: 14pt;">잡화 1: <span class="color">${extra1dice}!</span> (${extra1.length}개)</p>
      <p style="font-size: 14pt;">잡화 2: <span class="color">${extra2dice}!</span> (${extra2.length}개)</p>
      <p style="font-size: 14pt;">키워드 1: <span class="color">${keyword1dice}!</span> (${keyword1.length}개)</p>
      <p style="font-size: 14pt;">키워드 2: <span class="color">${keyword2dice}!</span> (${keyword2.length}개)</p>
      
    `;
  } else if (genderdice == '여성' || '걸리쉬한 남성') {

    destinyD2_1 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_2 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_3 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_4 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_5 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_6 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_7 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_8 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_9 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_10 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_11 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_12 = d2[Math.floor(Math.random() * d2.length)];
    destinyD2_13 = d2[Math.floor(Math.random() * d2.length)];

    if (destinyD2_1 <= '1') {
      outerdice = '없음';
    } else if (destinyD2_1 >= '2') {
      outerdice = outer[Math.floor(Math.random() * outer.length)];
    }

    if (destinyD2_2 <= '1') {
      Ftop1dice = '없음';
    } else if (destinyD2_2 >= '2') {
      Ftop1dice = Ftop1[Math.floor(Math.random() * Ftop1.length)];
    }

    if (destinyD2_3 <= '1') {
      Ftop2dice = '없음';
    } else if (destinyD2_3 >= '2') {
      Ftop2dice = Ftop2[Math.floor(Math.random() * Ftop2.length)];
    }

    if (destinyD2_4 <= '1') {
      Fbottom1dice = '없음';
    } else if (destinyD2_4 >= '2') {
      Fbottom1dice = Fbottom1[Math.floor(Math.random() * Fbottom1.length)];
    }

    if (destinyD2_5 <= '1') {
      Fbottom2dice = '없음';
    } else if (destinyD2_5 >= '2') {
      Fbottom2dice = Fbottom2[Math.floor(Math.random() * Fbottom2.length)];
    }

    if (destinyD2_6 <= '1') {
      Funderdice = '없음';
    } else if (destinyD2_6 >= '2') {
      Funderdice = Funder[Math.floor(Math.random() * Funder.length)];
    }

    if (destinyD2_7 <= '1') {
      Fshoesdice = '없음';
    } else if (destinyD2_7 >= '2') {
      Fshoesdice = Fshoes[Math.floor(Math.random() * Fshoes.length)];
    }

    if (destinyD2_8 <= '1') {
      acc1dice = '없음';
    } else if (destinyD2_8 >= '2') {
      acc1dice = acc1[Math.floor(Math.random() * acc1.length)];
    }

    if (destinyD2_9 <= '1') {
      acc2dice = '없음';
    } else if (destinyD2_9 >= '2') {
      acc2dice = acc2[Math.floor(Math.random() * acc2.length)];
    }

    if (destinyD2_10 <= '1') {
      extra1dice = '없음';
    } else if (destinyD2_10 >= '2') {
      extra1dice = extra1[Math.floor(Math.random() * extra1.length)];
    }

    if (destinyD2_11 <= '1') {
      extra2dice = '없음';
    } else if (destinyD2_11 >= '2') {
      extra2dice = extra2[Math.floor(Math.random() * extra2.length)];
    }

    if (destinyD2_12 <= '1') {
      keyword1dice = '없음';
    } else if (destinyD2_12 >= '2') {
      keyword1dice = keyword1[Math.floor(Math.random() * keyword1.length)];
    }

    if (destinyD2_13 <= '1') {
      keyword2dice = '없음';
    } else if (destinyD2_13 >= '2') {
      keyword2dice = keyword2[Math.floor(Math.random() * keyword2.length)];
    }

    var btntext = `
      <p>캐릭터의 성별은 <span class="color">${genderdice}!</span></p>
      <p style="font-size: 14pt;">아래의 결과는 그저 가능성일 뿐, 알아서 조합해서 사용한다.</p><br />
      <p style="font-size: 14pt;">외투: <span class="color">${outerdice}!</span> (${outer.length}개)</p>
      <p style="font-size: 14pt;">상의 1: <span class="color">${Ftop1dice}!</span> (${Ftop1.length}개)</p>
      <p style="font-size: 14pt;">상의 2: <span class="color">${Ftop2dice}!</span> (${Ftop2.length}개)</p>
      <p style="font-size: 14pt;">하의 1: <span class="color">${Fbottom1dice}!</span> (${Fbottom1.length}개)</p>
      <p style="font-size: 14pt;">하의 2: <span class="color">${Fbottom2dice}!</span> (${Fbottom2.length}개)</p>
      <p style="font-size: 14pt;">속옷: <span class="color">${Funderdice}!</span> (${Funder.length}개)</p>
      <p style="font-size: 14pt;">신발: <span class="color">${Fshoesdice}!</span> (${Fshoes.length}개)</p>
      <p style="font-size: 14pt;">액세서리 1: <span class="color">${acc1dice}!</span> (${acc1.length}개)</p>
      <p style="font-size: 14pt;">액세서리 2: <span class="color">${acc2dice}!</span> (${acc2.length}개)</p>
      <p style="font-size: 14pt;">잡화 1: <span class="color">${extra1dice}!</span> (${extra1.length}개)</p>
      <p style="font-size: 14pt;">잡화 2: <span class="color">${extra2dice}!</span> (${extra2.length}개)</p>
      <p style="font-size: 14pt;">키워드 1: <span class="color">${keyword1dice}!</span> (${keyword1.length}개)</p>
      <p style="font-size: 14pt;">키워드 2: <span class="color">${keyword2dice}!</span> (${keyword2.length}개)</p>
    `;
  }

  var btnresult = document.getElementById("btnresult");
  btnresult.innerHTML = btntext;
} // 의상 조합

function btnwhatIllust() {
  var btnwhatIllust = [
    '팬아트를 그려라', '리퀘스트 캐릭터를 그려라', '세계관 캐릭터를 그려라', '오늘의 그림은 없다! 쉬어라',
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

	  '강철 제국의 어딘가', '신 제국의 어딘가', '고르고니아 제국의 어딘가', '하얀 숲의 어딘가',
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
	  '자신이 만들어진 이유를 찾기', '강력한 무기를 만들기', '어떤 도시에 테러를 하기',
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

  var placedice = 어디[Math.floor(Math.random() * 어디.length)];
  var objectdice = 목적[Math.floor(Math.random() * 목적.length)];
  var whodice = 누구[Math.floor(Math.random() * 누구.length)];

  var diceTotal = 어디.length * 목적.length * 누구.length;

  var btnresult = document.getElementById("btnresult");
  var btntext = `
    <p style="font-size: 14pt;">
      당신의 캐릭터는 <span class="color">${placedice}</span>에서 왔습니다. 그는
      <span class="color">${objectdice}</span> 위해 여행을 시작한
      <span class="color">${whodice}</span>입니다. (${diceTotal}개)
    </p>
  `;
  btnresult.innerHTML = btntext;
} // 백스토리

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random() * word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 단어는 <span class="color">${dice}!</span> (${word.length}개)`;
  btnresult.innerHTML = btntext;
} // 항목