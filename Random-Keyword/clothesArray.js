function btnshoes() {
  var gender = [
    '남성', '여성', '공용',
  ];

  var male = [
    '옥스포드', '더비', '몽크 스트랩', '호스 빗 로퍼', '테슬 로퍼',
    '베네시안 로퍼', '드라이빙 슈즈', '페니 로퍼', '블로퍼', '몽크 스트랩',
    '클리퍼', '킬티 테슬 로퍼', '드레스 부츠', '첼시 부츠', '쳐커 부츠',
    '오페라 펌프', '윙 팁', '플레인 팁', '스플릿 토', '스커트 토',
    '브로그', '더블 몽크 스트랩', '스트레이트 팁', '보트 슈즈', '슬립 온 슈즈',

    '어글리 슈즈', '스니커즈', '발모랄', '원피스 뱀프',
  ];
  
  var common = [
    '고무신', '나막신', '샌들', '슬리퍼', '쪼리',
    '운동화', '스니커즈', '실내화', '꽂신', '농구화',
    '등산화', '런닝화', '축구화', '캔버스화', '부츠',
    '전투화', '목화', '장화', '레인부츠', '클릿 슈즈',
  ];
  
  var female = [
    '펌프스', '메리제인슈즈', '슬링백', '플랫슈즈', '뮬',
    '핍 토 펌프', '슬링백 웻지', '웨지 샌들', '통', '웨지힐',
    '웨스턴', '앵클 하이', '앵클 스트랩', '스트랩 샌들', '클록',
    '미들부츠', '엔지니어부츠', '니하이부츠', '싸이하이부츠', '글레디에이터 힐',
    '워커 힐', '슬립온', '스텔레토힐', '사이드고어 부츠', '플랫폼',
    '오르세', '클로그', '독사이드', '핍토', '키튼힐',
    '로퍼', '토오픈', 'T스트랩', '부티', '부츠',
    '글레디에이터 슈즈', '플립플랍', '샌들', '웨지 부티', '힐리스 힐',
    '사이드 오픈', '플랫', '포니 힐', '발렛 힐', '에스파드류',
    '옥스퍼드', '드라이빙 슈즈', '도르세이', '모카신', '몽크',
  ];

  var genderdice;
  genderdice = gender[Math.floor(Math.random() * gender.length)];
  var shoesdice;
  var diceTotal = male.length + common.length + female.length;

  if (genderdice == '남성') {
    shoesdice = male[Math.floor(Math.random() * male.length)];
  } else if (genderdice == '여성') {
    shoesdice = female[Math.floor(Math.random() * female.length)];
  } else if (genderdice == '공용') {
    shoesdice = common[Math.floor(Math.random() * common.length)];
  }

  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 신발은 <span class="color">${genderdice} - ${shoesdice}!</span> (${diceTotal}개)`;
  btnresult.innerHTML = btntext;
} // 항목

function btnunderwear() {
  var gender = [
    '여성', '남성',
  ];

  var male = [
    '브리프', '드로어즈', '트렁크', '훈도시', 'T백',
    '복서', 'G스트링', '비키니', '힙 숏', '복서 브리프',
    '스트링', '작스트랩', '니플 패드', '니플 밴드',
  ];

  var female = [
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

    '브라렛', '니플 패드', '니플 밴드',
  ];

  var genderdice;
  genderdice = gender[Math.floor(Math.random() * gender.length)];

  if (genderdice == '여성') {
    var underweardice = female[Math.floor(Math.random() * female.length)];
  } else {
    var underweardice = male[Math.floor(Math.random() * male.length)];
  }

  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 속옷은 <span class="color">${genderdice} - ${underweardice}!</span> (${female.length + male.length}개)`;
  btnresult.innerHTML = btntext;
} // 속옷

function btnbikini() {
  var gender = [
    '남성', '여성', '공용',
  ];

  var common = [
    '래시가드', '바디스킨', '니스킨', '학교 수영복', '잠수복',
    '전신수영복',
  ];

  var female = [
    '원피스', '모노키니', '비키니', '하이웨이스트 비키니', '프릴 비키니',
    '홀터넥 비키니', '탱크탑 비키니', '오프 숄더 비키니', '스커트 랩', '시스루 니트',
    '튜브 탑 비키니', '스트링 비키니', '부르키니', '스포츠 비키니', '슬링 샷',
    '하이레그', '로우레그', '로우라이즈',
  ];

  var male = [
    '삼각 수영복', '사각 수영복', '5부 수영복', '9부 수영복', '트렁크',
    '보드쇼츠', '하이브리드 쇼츠',
  ];

  var genderdice;
  genderdice = gender[Math.floor(Math.random() * gender.length)];
  var diceTotal = common.length + female.length + male.length;

  if (genderdice == '공용') {
    var bikinidice = common[Math.floor(Math.random() * common.length)];
  } else if (genderdice == '남성') {
    var bikinidice = male[Math.floor(Math.random() * male.length)];
  } else if (genderdice == '여성') {
    var bikinidice = female[Math.floor(Math.random() * female.length)];
  }

  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 수영복은 <span class="color">${genderdice} - ${bikinidice}!</span> (${diceTotal}개)`;
  btnresult.innerHTML = btntext;
} // 수영복

function btnacc() {
  var btnacc = [
    '목도리', '머리장식', '반지', '목걸이', '귀걸이',
    '팔찌', '브로치',
  ];

  var muffler = [
    '니트 목도리', '넥 워머', '캐시미어 목도리',
  ];

  var headDeco = [
    '머리띠', '머리핀', '머리끈', '헤어밴드',
  ];

  var rings = [
    '밴드링', '솔리테르 링', '스라피럴 링', '스네이크 링', '트윈 링',
    '링 브레스', '링 워치', '멘즈 링', '가드 링', '레이어드 링',
    '큐빅 링', '인게이지먼트 링(약혼반지)', '참링(부적)', '웨딩 링', '스쿨링',
    '슬라이트 링', '스퀘어 포인트 링', '스퀘어 링', '서클 링', '드롭 링',
    '패션 링', '프로미스 링', '헤일로 링', '세미 마운트 링', '애니버서리 밴드',

    '이터니티 밴드',
  ];

  var neckclace = [
    '칼라 네클리스(가장 짧음)', '초커 네클리스(칼라보다 넓음)', '프린세스 네클리스(초커보다 넓음)', '마티네 네클리스(프린세스보다 넓음)', '오페라 네클리스(마티네보다 넓음)',
    '로프 네클리스(오페라보다 넓음)', '도그 칼라 네클리스', '로켓', '소뜨와르 네클리스', '팬던트',
    '파이어리츠 네클리스', '비브', '참 스트링 네클리스', '차플렛 네클리스', '리비에르 네클리스',
    '체인 네클리스', '그라데이션',
  ];

  var earring = [
    '스터드 이어링', '클러스터 이어링', '드롭 이어링', '재킷 이어링', '댕글 이어링',
    '후프 이어링', '하기스 이어링', '샹들리에 이어링', '티어 드롭 이어링', '이어 커프',
    '바벨 이어링', '타셀 이어링', '이어머프 이어링', '버튼 이어링', '캐스케이드 이어링',
    '클립 온 이어링', '슬레이브 이어링', '스프레이 이어링', '모빌 이어링', '피어스드 이어링',
    '스크류 이어링', '볼 이어링', '피어싱',
  ];

  var bracelet = [
    '카르마 브레이슬릿', '참 브레이슬릿', '뱅글 브레이슬릿', '비디드 브레이슬릿', '링크 브레이슬릿',
    '커프 브레이슬릿', '워프 브레이슬릿', '체인 브레이슬릿', '테니스 브레이슬릿', '디자이너 브레이슬릿',
    '펄 브레이슬릿', '프렌드십 브레이슬릿', '슬라이더 브레이슬릿', '아이덴티피케이션 브레이슬릿', '슬레이브 브레이슬릿',
    '우든 브레이슬릿', '에퍼메이션 브레이슬릿', '홀로리스 브레이슬릿', '리스틀릿', '암릿',
    '염주',
  ];

  var accdice;
  accdice = btnacc[Math.floor(Math.random() * btnacc.length)];
  var diceTotal = muffler.length + headDeco.length + rings.length + neckclace.length + earring.length + bracelet.length - 1;

  if (accdice == '목도리') {
    var mufflerdice = muffler[Math.floor(Math.random() * muffler.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${mufflerdice}!</span> (${diceTotal}개)`;
  } else if (accdice == '머리장식') {
    var headDecodice = headDeco[Math.floor(Math.random() * headDeco.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${headDecodice}!</span> (${diceTotal}개)`;
  } else if (accdice == '반지') {
    var ringsdice = rings[Math.floor(Math.random() * rings.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${ringsdice}!</span> (${diceTotal}개)`;
  } else if (accdice == '목걸이') {
    var neckclacedice = neckclace[Math.floor(Math.random() * neckclace.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${neckclacedice}!</span> (${diceTotal}개)`;
  } else if (accdice == '귀걸이') {
    var earringdice = earring[Math.floor(Math.random() * earring.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${earringdice}!</span> (${diceTotal}개)`;
  } else if (accdice == '팔찌') {
    var braceletdice = bracelet[Math.floor(Math.random() * bracelet.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${braceletdice}!</span> (${diceTotal}개)`;
  } else {
    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 장신구는 <span class="color">${accdice}!</span> (${diceTotal}개)`;
  }

  // var btnresult = document.getElementById("btnresult");
  // var btntext = `오늘의 장신구는 <span class="color">${accdice}!</span> (${diceTotal}개)`;
  btnresult.innerHTML = btntext;
} // 액세서리

function btnextra() {
  var btnextra = [
    '모자', '가방', '양말', '장갑', '안경',
    '시계', '발토시', '팔토시', '허리띠',
  ];

  var hat = [
    '볼캡', '밀리터리캡', '헌팅캡', '선캡', '챙비니',
    '챙모자', '와치캡', '바이저 캡', '비니', '뉴스보이',
    '페도라', '보울러', '베레모', '파나마', '칵테일',
    '패시네이터', '클로슈', '필박스', '트랩퍼', '카우보이',
    '디어스토커', '버킷', '플랫캡', '버블 햇', '홈버그',
    '보트 햇', '포크파이 햇', '트릴비', '개츠비', '티른',
    '보닛', '투구', '안전모', '야구헬멧', '투구',
    '두건', '삿갓', '밀짚모자', '나이트캡', '남바위(모자)',
    '유건(모자)', '타지(이슬람계 챙없는 모자)', '중절모', '털모자', '터번(이슬람/아랍/남성)',
    '히잡(이슬람/아랍/여성)', '흑립', '초립', '복건', '탕건',

    '복두', '익선관', '금관', '사모', '정립',
    '정자관', '패랭이', '면류관', '통천관', '화관',
    '족두리', '굴레', '조바위', '아얌', '가리마',
    '장옥', '전모', '너울', '볼끼',
  ];

  var bag = [
    '토트백', '숄더백', '크로스백', '백팩', '클러치백',
    '쇼퍼백', '보스톤백', '버킷백', '바게트백', '호보백',
    '체인백', '책가방', '철가방', '서류가방', '배낭',
    '등산가방', '여행가방', '핵가방', '란도셀', '스쿨백',
    '캐멀백',
  ];

  var socks = [
    '풋 커버 양말', '크루 삭스', '망사 스타킹', '루즈 스타킹', '바디 스타킹',
    '검은색 스타킹', '흰색 스타킹', '투명 스타킹', '팬티 스타킹', '레깅스',
    '쓰리 쿼터 삭스', '하이 삭스', '오버 니삭스', '니삭스', '사이하이 삭스',
    '앵클 삭스', '타이츠', '스타킹', '니하이 스타일 스타킹', '가터벨트',
    '캣 가터', '버선', '무릎 버선', '수면 양말', '털 양말',

    '발목 양말', '발가락 양말',
  ];

  var gloves = [
    '면장갑', '가죽장갑', '비닐장갑', '고무장갑', '벙어리장갑',
    '털장갑', '목이 긴 장갑', '라텍스 장갑', '스키 장갑', '헬스 글러브',
    '드로잉 장갑', '골프 장갑', '등산 장갑', '방열 장갑', '복싱 글러브',
    '오픈핑거 글러브',
  ];

  var glasses = [
    '고글', '단안경', '무테안경', '반무테 안경', '뿔테안경',
    '철테안경', '선글라스', '색안경', '3D 안경',
  ];

  var watch = [
    '디지털 시계', '스마트 워치', '아날로그 시계', '회중시계',
  ];

  var extradice;
  extradice = btnextra[Math.floor(Math.random() * btnextra.length)];
  var diceTotal = hat.length + bag.length + socks.length + gloves.length + glasses.length + watch.length + 3;

  if (extradice == '모자') {
    var hatdice = hat[Math.floor(Math.random() * hat.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${hatdice}!</span> (${diceTotal}개)`;
  } else if (extradice == '가방') {
    var bagdice = bag[Math.floor(Math.random() * bag.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${bagdice}!</span> (${diceTotal}개)`;
  } else if (extradice == '양말') {
    var socksdice = socks[Math.floor(Math.random() * socks.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${socksdice}!</span> (${diceTotal}개)`;
  } else if (extradice == '장갑') {
    var glovesdice = gloves[Math.floor(Math.random() * gloves.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${glovesdice}!</span> (${diceTotal}개)`;
  } else if (extradice == '안경') {
    var glassesdice = glasses[Math.floor(Math.random() * glasses.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${glassesdice}!</span> (${diceTotal}개)`;
  } else if (extradice == '시계') {
    var watchdice = watch[Math.floor(Math.random() * watch.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${watchdice}!</span> (${diceTotal}개)`;
  } else {
    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의류잡화는 <span class="color">${extradice}!</span> (${diceTotal}개)`;
  }

  // var btnresult = document.getElementById("btnresult");
  // var btntext = `오늘의 의류잡화는 <span class="color">${extradice}</span> (${diceTotal}개)`;
  btnresult.innerHTML = btntext;
} // 의류잡화

function btnfashion() {
  var btnfashion = [
    '스쿨룩', '애니멀룩', '에스닉 룩', '록커룩', '오피스룩',
    '히피룩', '개량 한복', '갸루 패션', '라이더 패션', '로리타 패션',
    '고스로리', '히메로리', '고스 룩', '메탈 룩', '모드 룩',
    '펑크 룩', '페어리 패션', '시스루 룩', '빈티지 패션', '프레피 룩',
    '바디 컨셔스 룩', '스트리트 패션', '이모 패션', '클리비지룩', '옆트임(스타일)',
    '가슴트임(스타일)', '빈티지룩', '그런지룩', '개츠비룩', '가르손느룩',
    '그래피티룩', '뉴실크로드룩', '디오르룩', '뉴룩', '라이더스룩',
    '레이어드 룩', '러시안룩', '란제리룩', '레기룩', '로큰롤룩',
    '마린룩', '마타도어룩', '마돈나룩', '마이크로룩', '마오룩',
    '마스큘린룩', '머터니티룩', '밀리터리룩', '모즈룩', '미디벌룩',

    '미디엄룩', '몬드리안룩', '바이올런스룩', '배기룩', '베세베제룩',
    '베어룩', '보니룩', '보로룩', '보이스카우트룩', '보이시룩',
    '보헤미안룩', '볼드룩', '보텀아웃룩', '브리티시룩', '브리티시인디아룩',
    '비아리츠룩', '비틀즈룩', '빅룩', '사이클룩', '스포티룩',
    '사파리룩', '산타페룩', '서퍼룩', '세일러룩', '섹시돌룩',
    '셰이프룩', '소버걸룩', '슈미즈룩', '스코티시룩', '스쿨걸룩',
    '스쿨보이룩', '스페이스룩', '시스루룩', '시티스포츠룩', '아마데우스룩',
    '아메리칸 인디언룩', '아미룩', '아웃도어룩', '아이비룩', '안데스룩',
    '양키룩', '앤드로지너스룩', '얼리아메리칸룩', '에드워드룩', '에스닉룩',
    '에스키모룩', '에어포스룩', '에이섹슈얼룩', '오프보디룩', '오피서 룩',

    '올드아메리칸 룩', '올드 웨스턴 룩', '올드 잉글랜드 룩', '올드 파이어니어 룩', '워크룩',
    '워크웨어룩', '원포인트룩', '원피스룩', '웨스트코스트룩', '원터 머린룩',
    '어그제큐티브룩', '이노센트룩 ', '이미그런트룩', '인디언룩', '지골로룩',
    '집시룩', '차이니즈룩', '카나비 스트리트룩', '카니발룩', '카우보이룩',
    '캠퍼스룩 ', '컨트리룩', '코오디네이트룩', '코사크룩', '코스모코르룩',
    '콜로니얼룩', '쿠튀르룩', '쿨리룩', '테디보이룩', '테니스룩',
    '토털룩 ', '투인원룩', '투피스룩', '트라이앵글룩', '트로피컬룩',
    '티롤리안룩', '파자마룩', '파이어리츠룩', '파운데이션룩', '파머룩',
    '팝룩', '펑크룩', '프레피룩', '프티트피유룩', '피프티즈스타룩',
    '포크로룩', '페전트룩', '페어룩', '피터팬룩', '피에로룩',

    '호보룩',
  ];

  var fashiondice;
  fashiondice = btnfashion[Math.floor(Math.random() * btnfashion.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 패션은 <span class="color">${fashiondice}!</span> (${btnfashion.length}개)`;
  btnresult.innerHTML = btntext;
} // 패션스타일

function btntradiclothing() {
  var btntradiclothing = [
    '중국 한족 - 한푸', '한국 - 한복', '일본 - 기모노', '일본 - 후리소데', '일본 - 토메소데',
    '일본 - 쥬니히토에', '일본 - 유카타', '일본 - 시로무쿠', '일본 - 이로무지', '일본 - 호우몬기',
    '일본 - 츠케사게', '일본 - 하카마', '일본 - 소쿠타이', '일본 - 가리기누', '일본 오키나와 - 우치나스가이',
    '중국 만주 - 치파오', '중국 만주 - 마과', '몽골 - 델', '베트남 - 아오자이', '베트남 - 아오임',
    '태국 - 수타이', '미얀마 - 론지', '라오스 - 씬', '인도네시아 - 끄바야', '독일 바이에른 - 디른들(여성)',
    '독일 바이에른 - 레더호젠(남성)', '이탈리아 나폴리 - 타란텔라', '터키 - 페스', '터키 - 터번', '터키 - 카프탄',
    '터키 - 돌라만', '터키 - 엔타리', '터키 - 굄렉(gömlek)', '터키 - 옐렉(yelek)', '터키 - 샬바르(şalvar)',
    '터키 - 쿠샥(kuşak)', '아랍 국가 - 히잡', '아랍 국가 - 아바야', '아랍 국가 - 차도르', '아랍 국가 - 카피예',
    '아랍 국가 - 싸웁', '아랍 국가 - 젤라비야', '아랍 국가 - 간도라', '아랍 국가 - 터번', '이란 - 차르샤프(차도르)',
    '이스라엘 - 키파', '고대 그리스 - 튜닉', '고대 그리스 - 키톤', '고대 그리스 - 페플로스', '근대 그리스 - 푸스타넬라',

    '고대 로마 - 토가', '러시아, 루크라이나, 벨라루스 - 루바하', '러시아, 루크라이나, 벨라루스 - 사라판', '러시아, 루크라이나, 벨라루스 - 루바슈카', '러시아, 루크라이나, 벨라루스 - 샤프카',
    '러시아, 루크라이나, 벨라루스 - 우샨카', '불가리아 - 리탁', '영국 잉글랜드 - 정장', '영국 스코틀랜드 - 킬트', '프랑스 - 블루즈',
    '프랑스 - 누빔', '프랑스 - 베레모', '네덜란드 - 더치 보닛', '네덜란드 - 클롬펜', '스페인 - 투우복',
    '스페인 - 플라멩코 드레스', '스웨덴 - 펄크드라크', '페루 - 폰초', '멕시코 - 후아라체', '멕시코 - 솜브레로',
    '멕시코 - 레보소', '미국 - 텐갤런 햇', '이집트 - 로인클로스', '이집트 - 드레이퍼리', '이집트 - 갈라베야',
  ];

  var tradiclothingdice;
  tradiclothingdice = btntradiclothing[Math.floor(Math.random() * btntradiclothing.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 전통의상은 <span class="color">${tradiclothingdice}!</span> (${btntradiclothing.length}개)`;
  btnresult.innerHTML = btntext;
} // 전통의상

function btnclothes() {
  var btnclothes = [
    '원피스/드레스', '셔츠', '후드티셔츠', '티셔츠', '스웨터',
    '가디건', '코트', '재킷', '조끼(베스트)', '팬츠',
    '블라우스', '스커트', '세트옷',
  ];

  var dress = [
    '애프터눈 드레스', '이브닝 드레스', '칵테일 드레스', '디너 드레스', '웨딩 드레스',
    '들러리 드레스', '파티 드레스', '서머 드레스', '비치 드레스', '드레스',
    '스웨터 드레스', '스묵 드레스', '칼라블록 드레스',
  ];

  var shirt = [
    '드레스 셔츠(와이셔츠)', '스포츠 셔츠', '아이비리그 셔츠(버튼 다운 셔츠)', '카우보이 셔츠', '폴로셔츠',
    '하와이언 셔츠', '데님 셔츠', '사파리 셔츠',
  ];

  var hoodie = [
    '집업 후드티', '후드티', '크롭 후드티', '롱 후드티', '반팔 후드티',
    '오버사이즈 후드티',
  ];

  var tshirt = [
    '무지 티셔츠', '레글런 티셔츠', '단가라 티셔츠', '슬리브레스 티셔츠', '캡 슬리브 티셔츠',
    '숏 슬리브 티셔츠', '3/4 슬리브 티셔츠', '롱 슬리브 티셔츠', '포켓 티셔츠', '폴라 티셔츠',
    '반팔 티셔츠',
  ];

  var sweater = [
    '무지 스웨터', '레글런 스웨터', '단가라 스웨터', '슬리브레스 스웨터', '캡 슬리브 스웨터',
    '숏 슬리브 스웨터', '3/4 슬리브 스웨터', '롱 슬리브 스웨터', '포켓 스웨터', '폴라 스웨터',
    '반팔 스웨터',
  ];

  var cardigan = [
    '가디건', '루즈핏 가디건', '오픈 가디건', '롱 슬림핏 가디건', '박스 가디건',
    '오버사이즈 가디건', '패턴 가디건', '프린트 가디건', '빈티지 가디건', '코트 가디건',
    '단가라 가디건', '벨티드 가디건', '가디건 베스트', '크롭 가디건', '재킷 가디건',
    '후드 가디건', '튜닉 가디건', '포켓 가디건',
  ];

  var coat = [
    '체스터필드 코트 싱글', '체스터필드 코트 더블', '폴로코트', '브리티시 웜 코트', '박스 코트',
    '레글런 코트', '맥 코트',
  ];

  var jacket = [
    '피코트', '블레이저(정장 재킷 아님)', '라이더 재킷', '볼레로 재킷', '트렌치 코트',
    '랩 코트', '스윙 코트', '베이비돌 재킷', '더플 코트', '밀리터리 재킷',
    '블루종 재킷', '밴드 재킷', '데님 재킷', '파카', '퍼퍼(puffer)',
    '케이프', '판초', '슈트 재킷', '싱글 브레스티드 테일러드 재킷', '더블 브레스티드 테일러드 재킷',
    '디너 재킷', '턱시도 재킷', '벨보이 재킷', '노퍽 재킷', '사파리 재킷 ',

    '샤넬 재킷', '페플럼 재킷', '다운 재킷',
  ];

  var vest = [
    '우븐 베스트', '푸퍼 베스트', '털 베스트', '정장 베스트(칼라)', '정장 베스트(노칼라)',
    '정장 베스트(더블)', '정장 베스트(U넥)', '데님 베스트', '플리스 베스트', '퀄티드 베스트',
    '턱시도 베스트',
  ];

  var pants = [
    '카고 팬츠', '니커즈 팬츠', '숏 팬츠', '진 팬츠', '버뮤다 팬츠',
    '벨 바텀 팬츠', '배기 팬츠', '가우초 팬츠', '부츠컷 팬츠', '와이드 팬츠',
    '슬랙스', '슬림 스트레이트 팬츠', '스키니 팬츠', '스키니진 팬츠', '핫팬츠',
    '스웨트 팬츠', '세일러 팬츠', '페기드 팬츠', '5 포켓 진 팬츠', '하렘 팬츠',
    '점프 슈트', '오버롤', '스터럽 팬츠', '조드퍼즈', '팔라초 팬츠',

    '와이드 레그 팬츠', '플레어 팬츠', '시티 숏 팬츠', '롬퍼스', '니커스',
    '퀼로트 팬츠', '카프리 팬츠', '커브드 팬츠', '트라우저스', '브리치스 팬츠',
    '힙합 팬츠', '카키 숏 팬츠', '보드 숏 팬츠', '펑크 팬츠', '크롭 팬츠',
    '조거 팬츠', '트루저 팬츠', '스커트 팬츠',
  ];

  var blouse = [
    '블루종 블라우스', '벌룬슬리브 블라우스', '새시 블라우스', '페전트 블라우스', '미디 블라우스',
    '뷔스티에 블라우스', '자보 블라우스', '시폰 블라우스', '블라우스', '플리티드 블라우스',
    '칼라리스 블라우스', '프릴 블라우스',
  ];
  
  var skirt = [
    '타이트 스커트', 'A라인 스커트', 'H라인 스커트', '미디 스커트', '미니 스커트',
    '나이프 플리츠 스커트', '박스 플리츠 스커트', '인버티드 플리츠 스커트', '아코디언 플리츠 스커트', '플레어 스커트',
    '개더 스커트', '서큘러 스커트', '고어드 스커트', '티어드 스커트', '러플 스커트',
    '요크 스커트', '랩 어라운드 스커트', '엠파이어 스커트', '맥시 / 롱스커트', '고고 스커트',
    '디바이디드 스커트', '브롬 스틱 스커트', '버블 스커트', '사롱 스커트', '서스팬더 스커트',

    '사야 스커트', '시스 스커트', '슬릿 스커트', '슬림 스커트', '오버 스커트',
    '점퍼 스커트', '칼럼 스커트', '킬트 스커트', '코니컬 스커트', '튜닉 스커트',
    '패널 스커트', '페그탑 스커트', '파라솔 스커트', '후프 스커트', '힙 히거 스커트',
  ];

  var setclothes = [
    '산타복', '우주복', '드레스', '바니걸 슈트', '방화복',
    '사제복', '웨딩 드레스', '부르마', '턱시도', '하우스메이드복',
    '정장', '가쿠란', '구속복', '관복', '수도복',
    '수의', '하쿠란(하얀 가쿠란)', '우의', '레오타드(운동복)', '전투복(군복)',
    '교복',
  ];

  var clothesdice;
  clothesdice = btnclothes[Math.floor(Math.random() * btnclothes.length)];

  var neckLine = [
    '라운드 네크라인', 'U 네크라인', '스쿱 네크라인', '더치 네크라인', '호스슈 네크라인',
    '키홀 네크라인', '슬릿 네크라인', 'V 네크라인', '트라페즈 네크라인', '오블롱 네크라인',
    '헨리 네크라인', '턱드 네크라인', '스퀘어 네크라인', '보트 네크라인', '원 숄더 네크라인',
    '스윗하트 네크라인', '오프 숄더 네크라인', '캐미솔 네크라인', '홀터 네크라인', '슈거백 네크라인(드로스트링 네크라인)',
    '카울 네크라인', '서플리스 네크라인', '가디건 네크라인', '하이 네크라인', '데콜테 네크라인',

    '오블리크 네크라인', '스칼럽 네크라인', '다이아몬드 네크라인', '하이 네크라인', '터틀 네크라인',
    '딥 스쿱 네크라인', '러플 네크라인', '딥 V 네크라인', '숄카라 네크라인', '오벌 네크라인',
    '로 네크라인', '오프 네크라인', '베어드 톱 네크라인(이브닝 네크라인)', '오픈 프론트 네크라인', '플런징 네크라인(다이빙 네크라인)',
    '스캘럽트 네트라인', '랩 오버 네크라인', '크류 네크라인', '플라워 네크라인',
  ];

  var collar = [
    '하이넥 칼라', '만다린 칼라', '피터팬 칼라', '스탠드 칼라', '친 칼라',
    '셔츠 칼라', '버튼 다운 칼라', '이탈리안 칼라', '컨버터블 칼라', '윙 칼라',
    '스탠드 어웨이 칼라', '리퍼 칼라', '버서 칼라', '호스슈 칼라', '파 어웨이 칼라',
    '이튼 칼라', '오브롱 칼라', '피크드 칼라', '피시 마우스 칼라', '테일러드 칼라',
    '나폴레옹 칼라', '사이드 웨이 칼라', '숄 칼라(턱시도 칼라)', '보우 칼라', '세일러 칼라',
    '케이프 칼라', '컷 어웨이 칼라', '노치드 라펠', '피크드 라펠', '더블 칼라',
    '스탠드 업 칼라', '타이 칼라', '리본 칼라', '스톨 칼라', '스카프 칼라',
    '넥밴드 칼라', '조니 칼라', '링 칼라', '프릴 칼라', '러프 칼라',
    '러플드 칼라', '라바 칼라', '피슈 칼라', '스텐 칼라', '터틀넥 칼라',
    '캐스케이팅 칼라', '모트 칼라', '리플드 칼라', '팬 칼라', '후드 칼라',

    '사이드웨이 칼라', '셰익스피어 칼라', '더치 칼라', '체스터필드 칼라', '베르타 칼라',
    '첼시 칼라', '차이니즈 칼라', '퓨리턴 칼라', '푸시 보우 칼라',
  ];

  var silhouette = [
    '시스 실루엣', '튜블러 실루엣', 'H 라인 실루엣', '트라페즈 실루엣', '엠파이어 실루엣',
    '시프트 실루엣', '돔 실루엣', '미나렛 실루엣', '머메이드 실루엣', '버슬 실루엣',
    '프린세스 실루엣', '피티드 실루엣', '크리놀린 실루엣', '박스 실루엣', '배럴 실루엣',
    '코쿤 실루엣', 'O 라인 실루엣', 'T 라인 실루엣', 'Y 라인 실루엣', '벌룬 실루엣',
    '볼 실루엣', '케이프 실루엣', '콜드 숄더 실루엣', '하이로우 실루엣', '맥시 실루엣',
    '미디 실루엣', '마이크로 미니 실루엣', '미니 실루엣', '뉴룩 실루엣', '파고다 숄더 실루엣',
    '페플럼 실루엣', '트레일 실루엣', '트럼펫 실루엣', '랩 실루엣', '바디콘 실루엣',
    '베이비돌 실루엣', '슈미즈 실루엣', '드레이프트 실루엣', '스트레이트 실루엣', '스트레치 실루엣',
    '앰플 실루엣', '와인 글래스 실루엣', '아워글라스 실루엣', '슬림 실루엣', '호블 실루엣',
    '롱 토르소 실루엣', '포멀 실루엣', '플레어 실루엣', '텐트 실루엣', '피나포어 실루엣',

    '파딩게일 실루엣', '셔츠 웨이스트 실루엣', '드롭 웨이스트 실루엣', '카프탄 실루엣',
  ];

  var diceTotal = setclothes.length + jacket.length + (shirt.length * (collar.length - 1)) + hoodie.length +
  (tshirt.length * neckLine.length) + (sweater.length * neckLine.length) + vest.length + pants.length + coat.length +
  (neckLine.length * (blouse.length - 1)) + (collar.length * (blouse.length - 1)) + cardigan.length +
  skirt.length + (dress.length * silhouette.length);

  if (clothesdice == '세트옷') {
    var setclothesdice = setclothes[Math.floor(Math.random() * setclothes.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${setclothesdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '재킷') {
    var jacketdice = jacket[Math.floor(Math.random() * jacket.length)];

    var lapelWidth = [
      '슬림', '레귤러', '와이드',
    ];
    
    var lapelShape = [
      '노치트 라펠', '피그드 라펠', '숄 라펠', '클로버 리프 라펠', '피시 마우스 라펠',
      '벨드 라펠',
    ];

    if (jacketdice == ('블레이저(정장 재킷 아님)' || '슈트 재킷')) {
      var widthDice = lapelWidth[Math.floor(Math.random() * lapelWidth.length)];
      var shapeDice = lapelShape[Math.floor(Math.random() * lapelShape.length)];

      var btnresult = document.getElementById("btnresult");
      var btntext = `오늘의 의상은 <span class="color">${jacketdice}(${widthDice} ${shapeDice})!</span> (${diceTotal}개)`;
    }

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${jacketdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '원피스/드레스') {
    var dressdice = dress[Math.floor(Math.random() * dress.length)];
    var silhouettedice = silhouette[Math.floor(Math.random() * silhouette.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${silhouettedice} ${dressdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '셔츠') {
    var shirtdice = shirt[Math.floor(Math.random() * shirt.length)];
    var collardice = collar[Math.floor(Math.random() * collar.length)];

    if (shirtdice == '아이비리그 셔츠(버튼 다운 셔츠)') {
      var btnresult = document.getElementById("btnresult");
      var btntext = `오늘의 의상은 <span class="color">${shirtdice}!</span> (${diceTotal}개)`;
    } else {
      var btnresult = document.getElementById("btnresult");
      var btntext = `오늘의 의상은 <span class="color">${collardice} ${shirtdice}!</span> (${diceTotal}개)`;
    }
  } else if (clothesdice == '후드티셔츠') {
    var hoodiedice = hoodie[Math.floor(Math.random() * hoodie.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${hoodiedice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '티셔츠') {
    var tshirtdice = tshirt[Math.floor(Math.random() * tshirt.length)];
    var neckLinedice = neckLine[Math.floor(Math.random() * neckLine.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${neckLinedice} ${tshirtdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '스웨터') {
    var sweaterdice = sweater[Math.floor(Math.random() * sweater.length)];
    var neckLinedice = neckLine[Math.floor(Math.random() * neckLine.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${neckLinedice} ${sweaterdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '가디건') {
    var cardigandice = cardigan[Math.floor(Math.random() * cardigan.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${cardigandice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '코트') {
    var coatdice = coat[Math.floor(Math.random() * coat.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${coatdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '조끼(베스트)') {
    var vestdice = vest[Math.floor(Math.random() * vest.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${vestdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '팬츠') {
    var pantsdice = pants[Math.floor(Math.random() * pants.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${pantsdice}!</span> (${diceTotal}개)`;
  } else if (clothesdice == '블라우스') {
    var blousedice = blouse[Math.floor(Math.random() * blouse.length)];
    var collardice = collar[Math.floor(Math.random() * collar.length)];
    var neckLinedice = neckLine[Math.floor(Math.random() * neckLine.length)];

    var d2 = '12';
    var destinyD2 = d2[Math.floor(Math.random() * d2.length)];

    if (destinyD2 == '1') {
      if (blousedice == '칼라리스 블라우스') {
        var btnresult = document.getElementById("btnresult");
        var btntext = `오늘의 의상은 <span class="color">${blousedice}!</span> (${diceTotal}개)`;
      } else {
        var btnresult = document.getElementById("btnresult");
        var btntext = `오늘의 의상은 <span class="color">${neckLinedice} ${blousedice}!</span> (${diceTotal}개)`;
      }
    } else {
      if (blousedice == '칼라리스 블라우스') {
        var btnresult = document.getElementById("btnresult");
        var btntext = `오늘의 의상은 <span class="color">${blousedice}!</span> (${diceTotal}개)`;
      } else {
        var btnresult = document.getElementById("btnresult");
        var btntext = `오늘의 의상은 <span class="color">${collardice} ${blousedice}!</span> (${diceTotal}개)`;
      }
    }
  } else if (clothesdice == '스커트') {
    var skirtdice = skirt[Math.floor(Math.random() * skirt.length)];

    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 의상은 <span class="color">${skirtdice}!</span> (${diceTotal}개)`;
  }

  btnresult.innerHTML = btntext;
} // 의상

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random() * word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `<span class="color">${dice}</span> (${word.length}개)`;
  btnresult.innerHTML = btntext;
} // 항목