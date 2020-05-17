function btnrace2() {
  var race2 = [
    '거인', '고블린', '골렘', '귀신', '난쟁이',
    '네피림', '노움', '늑대인간', '다크엘프', '드래곤',
    '드워프', '로봇', '마인', '마족', '망령',
    '뱀파이어', '사신', '사이보그', '설인', '소인',
    '수인', '신', '신수', '악마', '안드로이드',

    '언데드', '엘프', '오크', '하프 오크', '외계인',
    '요정', '용인', '유령', '이종족', '인간',
    '인수', '인어/어인', '인조인간', '하플링', '임프',
    '인큐버스', '서큐버스', '와이번', '드레이크',
    '듀라한', '트롤', '천사', '타천사', '정령',

    '오우거', '하프 엘프', '요괴', '괴인', '마수',
    '괴수', '그렘린', '인형 캐릭터', '저승사자',
  ];

  var race2dice;
  race2dice = race2[Math.floor(Math.random() * race2.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 종족은 <span class="color">' + race2dice + "!</span> (" + race2.length + "개)";
  btnresult.innerHTML = btntext;
} // 종족

function btnclass2() {
  var btnclass2 = [
    '군주', '만화가', '소설가', '프로게이머', '프로그래머',
    '간호사', '갑옷장인', '검사', '검투가', '격투가',
    '공주', '공학자', '과학자', '광대', '괴도',
    '교사', '군인', '기사', '노예', '농부',
    '대장장이', '도끼병', '도둑', '도박꾼', '드래곤 슬레이어',
    '드루이드', '디자이너', '마녀', '마법사', '마법소녀',
    '마법소년', '마술사', '마왕', '마피아', '망자',
    '중장보병', '메이드', '무녀', '무법자', '문지기',
    '방랑자', '범죄자', '불사자', '빌런', '사냥꾼',
    '사제', '사형수', '살인마', '살인청부업자', '상인',

    '성기사', '성직자', '소환사', '승려', '신관',
    '신부', '암살자', '약초사', '약초장인', '어부',
    '여왕', '영매사', '영웅', '왕', '왕자',
    '요리사', '음유시인', '의사', '이단심판관', '인형술사',
    '장교', '장군', '저격수', '전사', '점술사',
    '정령술사', '정복자', '정찰자', '족장', '주술사',
    '지휘관', '천민', '초능력자', '거너', '퇴마사',
    '파계승', '피난민', '학생', '해적', '현상금 사냥꾼',
    '궁병', '회사원', '히어로', '용사', '혁명가',
    '바운티 헌터', '심리학자', '최면술사', '연금술사', '항해사',

    '도선사', '정원사', '보모', '암상인', '기술자',
    '재봉사', '사육사', '은행지기', '사서', '촌장',
    '시장', '서포터', '길드 안내원', '해부학자', '백수',
    '수호자', '엑소시스트', '전령', '닌자', '떠돌이',
    '부랑자', '사령술사', '원소술사', '킥복서', '음양사',

    '카발리어', '창기병', '바바리안', '광전사', '석국병',
    '현자', '흑마법사', '흑기사', '마법사', '궁사',
    '포병', '보병', '스트리머', '건달', '깡패',
    '모험가', '해결사', '역병의사', '매드 사이언티스트', '퇴역 군인',
  ];

  var class2dice;
  class2dice = btnclass2[Math.floor(Math.random() * btnclass2.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 직업은 <span class="color">' + class2dice + "!</span> (" + btnclass2.length + "개)";
  btnresult.innerHTML = btntext;
} // 직업

function btngender() {
  var btngender = [
    '남성', '여성', '보이쉬한 여성', '걸리쉬한 남성', '자웅동체',
    '무성',
  ];

  var genderdice;
  genderdice = btngender[Math.floor(Math.random() * btngender.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 성별은 <span class="color">' + genderdice + "!</span> (" + btngender.length + "개)";
  btnresult.innerHTML = btntext;
} // 성별

function btnbodytype() {
  var btnbodytype = [
    '가슴이 없는(여캐)', '가슴이 작은(여캐)', '가슴이 큰(여캐)', '각진 얼굴인', '거유(여캐 가슴크기)',
    '건장한', '광대뼈가 두드러진 얼굴인', '근육이 과하게 많은', '근육이 많은', '글래머러스한(여캐)',
    '길쭉한 얼굴인', '날씬한', '동그란 얼굴인', '뚱뚱한', '마른', '말라 비틀어진',
    '머리가 작은', '머리가 큰', '몸매가 에스라인인(여캐)', '무유(여캐 가슴크기)', '미유(여캐 가슴크기)',
    '뱃살이 나온', '보통', '브이라인 얼굴인', '빈유(여캐 가슴크기)', '상체가 긴',

    '약간 근육이 있는', '육감적인', '짧막한 얼굴인', '초유(여캐 가슴크기)', '통통한',
    '팔이 긴', '평유(여캐 가슴크기)', '폭유(여캐 가슴크기)', '하체가 긴', '한쪽 다리가 짧은',
    '한쪽 팔이 짧은', '허약한', '짧은 꼬리가 달린', '긴 꼬리가 달린', '귀가 긴',
    '2등신', '3등신', '4등신', '5등신', '6등신',
    '7등신', '8등신', '9등신',
  ];

  var bodytypedice;
  bodytypedice = btnbodytype[Math.floor(Math.random() * btnbodytype.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 체형은 <span class="color">' + bodytypedice + " 체형!</span> (" + btnbodytype.length + "개)";
  btnresult.innerHTML = btntext;
} // 체형

function btnattribute() {
  var btnattribute = [
    '어둠', '빛', '바람', '불', '물',
    '전기', '공기', '생명', '죽음', '땅',
    '모래', '바위', '피', '마그마', '얼음',
    '흙', '그림자', '맹독', '식물', '나무',
    '시간', '공간', '금속', '영혼', '공허',
    '한기', '열기', '자석', '폭발', '비행',
    '레이저', '(뭔가를)흡수', '(뭔가를)방출', '방사능', '수정',
    '유리', '섬유', '장력', '먼지', '염력',
    '석유', '플라스틱', '고무', '실', '산성',
    '부식', '소리', '진공', '굴절', '왜곡',

    '반사', '중력', '연소', '가스', '향기',
    '환각', '환상', '환청', '플라즈마', '암흑물질',
    '용암', '음파', '힘', '속도', '체력',
    '청각', '시각', '후각', '창조', '파괴',
    '심안', '날씨', '폭풍우', '뼈', '유전자',

    '기억', '정신', '안개', '눈(기상)', '진동',
  ];

  var attributedice;
  attributedice = btnattribute[Math.floor(Math.random() * btnattribute.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 속성은 <span class="color">' + attributedice + "!</span> (" + btnattribute.length + "개)";
  btnresult.innerHTML = btntext;
} // 속성

function btnweapon() {
  var btnweapon = [
    '식칼', '대검', '표창', '건틀릿', '창',
    '특대검', '단검', '곡검', '투핸드 소드', '대곡검',
    '특대곡검', '활', '대궁', '단궁', '채찍',
    '석궁', '자동 쇠뇌', '낫', '복합궁', '투척용 도끼',
    '투창', '나무 각목', '작살', '대형 단도', '소형 단도',
    '맥가이버 나이프', '올가미', '손쇠뇌', '수리검', '슬링',
    '막대 슬링', '볼라', '너클', '주먹',
    '죽도', '목검', '일본도', '기병도', '곤봉',
    '나기나타', '언월도', '쿠크리 나이프', '쌍절곤',
    '삼절곤', '장창', '사모(창)', '쌍검', '부월(도끼)',

    '경찰봉', '과도', '레이피어', '철퇴', '나이프',
    '회칼', '도끼', '양날도끼', '전투도끼', '할버드',
    '폴액스', '토마호크', '톤파', '워해머', '메이스',
    '모닝스타', '월도', '삼지창', '협도', '월극',
    '스피어', '랜스', '글레이브', '투석기', '발리스타',
    '새총', '클로', '도리깨', '커틀러스', '사브르',
    '브로드 소드', '수류탄', '화염병', '섬광탄', '연막탄',
    '데린저', '피스톨', '리볼버', '펌프 샷건', '더블 배럴 샷건',
    '머스켓', '돌격 소총', '저격 소총', '기관총', '기관단총',
    '화염방사기', '미사일', '로켓 발사기', '박격포', '곡사포',

    '평사포', '중기관총', '유탄', '가우스 라이플', '레이저 건',
    '레이저 라이플', '광선검', '빔 라이플', '빔 캐논', '레이저 캐논',
    '단분자 커터', '꼭두각시 인형 캐릭터', '은사 (와이어)', '전기톱', '몽키 스패너',
    '야구 방망이', '곡괭이', '무술', '다이너마이트', '폭탄',
    '스태프', '완드'
  ];

  var weapondice;
  weapondice = btnweapon[Math.floor(Math.random() * btnweapon.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 무기는 <span class="color">' + weapondice + "!</span> (" + btnweapon.length + "개)";
  btnresult.innerHTML = btntext;
} // 무기

function btnshield() {
  var btnshield = [
    '강철 방패', '버클러(주먹으로 쥐는 원형방패)', '방탄 방패', '라운드 실드', '아스피스',
    '스쿠툼', '파르마', '케트라투스', '연미패', '등패',
    '카이트 실드', '히터 실드', '타지(팔에 걸쳐서 사용하는 원형방패)', '파비스', '맨틀리트',
    '타워 실드', '에너지 방패', '원소 방패'
  ];

  var shielddice;
  shielddice = btnshield[Math.floor(Math.random() * btnshield.length)];

  switch (shielddice) {
    case '버클러(주먹으로 쥐는 원형방패)':
      var shieldimage = 'https://i.pinimg.com/564x/77/8b/d4/778bd41647a59bdeb7becc5fffcac26d.jpg';
      break;
    case '라운드 실드':
      var shieldimage = 'https://i.pinimg.com/564x/0a/6e/00/0a6e003364240a262f8ef7231a36b967.jpg';
      break;
    case '파르마':
      var shieldimage = 'https://i.pinimg.com/564x/a7/b0/86/a7b086f0114cfbc3b252120e12089009.jpg';
      break;
    case '타지(팔에 걸쳐서 사용하는 원형방패)':
      var shieldimage = 'https://i.pinimg.com/564x/e9/05/37/e90537f4a6f51ce4034fd7e90b6555ff.jpg';
      break;
    case '방탄 방패':
      var shieldimage = 'https://s-media-cache-ak0.pinimg.com/originals/f2/e0/ab/f2e0abd659035d4b3c188972c43b5c0b.jpg';
      break;
    case '아스피스':
      var shieldimage = 'http://isword.co.kr/admin/goods/files/IS01110004(3).jpeg';
      break;
    case '스쿠툼':
      var shieldimage = 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F2741CA3B57DED02A010F70';
      break;
    case '케트라투스':
      var shieldimage = 'https://i.pinimg.com/236x/2f/94/fe/2f94fe441bb0b494d5c04eef3f00371b--roman-shield-roman-empire.jpg';
      break;
    case '연미패':
      var shieldimage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHlmu5W2593ul_j0Wo6tjH4qFg4qVmAOAN4FQ4J4zVoaWPvB6U&usqp=CAU';
      break;
    case '카이트 실드':
      var shieldimage = 'https://lh3.googleusercontent.com/proxy/xO7VEGKcHJQLRgsvqiyjbOwEQ3EarBTZ6c4zvSC-iMgS-9sc3j370jiAuvv1QDh8MGteazFeS1sm92phdUbLGq6G-hExw3dxDSYsuxSUrjq9lkgJ5PJGIWlbVk3LIH7f_fDaftxsQwc6A6McVfjw';
      break;
    case '등패':
      var shieldimage = 'http://pds24.egloos.com/pds/201110/01/83/d0033083_4e871c364340c.jpg';
      break;
    case '히터 실드':
      var shieldimage = 'http://yeoldegaffers.com/sbg/shield_p1.jpg';
      break;
    case '파비스':
      var shieldimage = 'https://w.namu.la/s/5f3701edc72a6266bd498b77413bec240e885464832d9706ee4c6b379a57d5be89175b427874f9f2f88deba03e1eec238c5bda5a0cfe1940723dc6b4e473f1fd1e1b1942accba70cb5a96cab1c841d2388d886883021fb5735d70236f5fd45d3';
      break;
    case '맨틀리트':
      var shieldimage = 'https://ww.namu.la/s/9eb889311bf78716afba07ab5604d166fa448f555a358a24122b3aee4e7c5a166f56c81118f517e6a57b284bd5c615136dd239cfed883b1bb4052531dac529db24b26d01d0d0e869d4839bf105220d03163d17afd1a53c1dc5ad7d129fbcb639';
      break;
    default:
      var shieldimage = '';
  }

  var btnresult = document.getElementById("btnresult");
  var btntext = `
    오늘의 방패는 <span class="color">${shielddice}!</span> (${btnshield.length}개)
    <span style="font-size: 16pt;">
      <img style="width: 350px; display: block; margin: 10px auto;" src="${shieldimage}" alt="이미지가 없습니다.">
    </span>
  `;
  btnresult.innerHTML = btntext;
} // 방패

function btnAlignment() {
  var btnAlignment = [
    '질서 선', '질서 중립', '질서 악', '혼돈 선', '혼돈 중립',
    '혼돈 악', '중립 선', '중립 악', '완전한 중립'
  ];

  var Alignmentdice;
  Alignmentdice = btnAlignment[Math.floor(Math.random() * btnAlignment.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 성향은 <span class="color">' + Alignmentdice + "!</span> (" + btnAlignment.length + "개)";
  btnresult.innerHTML = btntext;
} // 성향

function btnhair() {
  var btnhair = [
    '비현실적 머리', '긴생머리', '롤머리', '스트레이트 헤어', '빗자루 머리',
    '숏컷', '미디엄헤어', '다이도 플립', '곱슬머리', '스킨헤드',
    '투블럭', '모히칸', '웨이브 헤어', '샤기컷', '댄디컷',
    '울프컷', '미역머리', '리젠트', '올백머리', '시스루 뱅',
    '처피뱅', '바가지 머리', '댕기머리', '벼머리', '드레드록스',
    '올림머리', '포니테일', '사과머리', '꽁지머리', '트윈테일',
    '트윈빔', '트윈드릴', '투 사이드 업', '만두머리', '베이비펌',
    '볼륨 펌', '다운 펌', '스왈로 펌', '쉐도우 펌', '쉼표머리',
    '여신머리', '히메컷', '단발머리', '민머리', '초코송이 머리',
    '패션 삭발', '바보털', '아프로머리', '깻잎머리', '땋은머리',

    '스포츠컷', '뾰족머리', '호일펌', '반삭발',
  ];

  var hairdice;
  var d2 = '0123456789';
  var hairD2 = Number(d2[Math.floor(Math.random() * d2.length)]);

  if (hairD2 <= 2) {
    hairdice = '대머리';
  } else if (hairD2 >= 3) {
    hairdice = btnhair[Math.floor(Math.random() * btnhair.length)];
  }

  // hairdice = btnhair[Math.floor(Math.random()*btnhair.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 헤어스타일은 <span class="color">' + hairdice + "!</span> (" + btnhair.length + "개)";
  btnresult.innerHTML = btntext;
} // 헤어스타일

function btnpersonality1() {
  var btnpersonality1 = [
    '잘 적응하는', '모험심이 강한', '다정한', '경계심이 강한', '야심만만한',
    '분석적인', '고마워할 줄 아는', '대범한', '침착한', '조심성이 많은',
    '중심이 잡힌', '매력적인', '자신감 있는', '협조적인', '용기 있는',
    '예의 바른', '창조적인', '호기심이 많은', '결단력 있는', '협상에 능한',
    '절제력이 있는', '신중한', '느긋한', '효율적인', '공감을 잘하는',
    '열정적인', '외향적인', '대담한', '교태를 부리는', '몰입하는',
    '우호적인', '재미있는', '관대한', '온화한', '행복해하는',
    '정직한', '명예를 중시하는', '환대하는', '겸손한', '이상주의적인',
    '상상력이 풍부한', '독립적인', '부지런한', '순수한', '영감을 주는',
    '지적인', '내성적인', '정의로운', '친절한', '충직한',

    '어른스러운', '자비로운', '꼼꼼한', '자연주의적인', '잘 보살피는',
    '순종적인', '객관적인', '관찰력이 뛰어난', '낙천적인', '조직적인',
    '격정적인', '참을성이 많은', '애국적인', '사색적인', '통찰력 있는',
    '끈기 있는', '설득력 있는', '철학적인', '놀기 좋아하는', '개인적인',
    '주도적인', '전문적인', '정확한', '보호본능이 강한', '별난',
    '지략이 풍부한', '책임감 있는', '양식 있는', '관능적인', '감성이 풍부한',
    '소박한', '사회적 인식이 높은', '교양 있는', '영적인', '즉흥적인',
    '혈기가 왕성한', '학구적인', '조력적인', '재능 있는', '알뜰한',
    '관용적인', '보수적인', '잘 믿는', '자유분방한', '사심이 없는',
    '기발한', '건전한', '현명한', '재치 있는',
  ];

  var personality1;
  personality1 = btnpersonality1[Math.floor(Math.random() * btnpersonality1.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 긍정적 성격은 <span class="color">' + personality1 + " </span>" + "성격! (" + btnpersonality1.length + "개)";
  btnresult.innerHTML = btntext;
} // 긍정성격

function btnpersonality2() {
  var btnpersonality2 = [
    '아니꼬운', '중독에 빠지는', '반사회적인', '무관심한', '냉담한',
    '심술궂은', '어린아이 같은', '거만한', '강박적인', '대립을 일삼는',
    '지배욕이 강한', '비겁한', '잔인한', '냉소적인', '방어적인',
    '기만적인', '정직하지 못한', '불충한', '체계적이지 못한', '무례한',
    '얼버무리며 회피하는', '악독한', '낭비벽 있는', '광적인', '엉뚱한',
    '어리석은', '잘 잊어버리는', '경박한', '깐깐한', '남의 말을 하기 좋아하는',
    '탐욕스러운', '퉁명스러운', '잘 속는', '오만한', '적대적인',
    '재미없는', '위선적인', '무식한', '성마른', '충동적인',
    '부주의한', '우유부단한', '융통성 없는', '병적으로 내성적인', '불안정한',
    '비이성적인', '무책임한', '질투심이 강한', '비판적인', '뭐든 아는 체하는',

    '게으른', '마초적인', '조종하는', '희생양인 척하는', '물질만능주의인',
    '감정과잉인', '짓궂은', '병적인', '잔소리가 심한', '애정결핍인',
    '신경과민인', '오지랖이 넓은', '집착이 강한', '과민한', '피해망상이 심한',
    '완벽주의인', '비관적인', '소유욕이 강한', '편파적인', '허세를 부리는',
    '문란한', '강압적인', '반항적인', '무모한', '원망하는',
    '말썽을 피우는', '산만한', '자기파괴적인', '방종하는', '이기적인',
    '추잡한', '응석을 부리는', '인색한', '고집불통인', '비굴한',
    '미신을 믿는', '의심이 많은', '눈치 없는', '변덕스러운', '소심한',
    '지나치게 말수가 적은', '비협조적인', '상스러운', '비윤리적인', '고마워할 줄 모르는',
    '우둔한', '허영심이 강한', '지나치게 말이 많은', '앙갚음을 하는', '폭력적인',

    '다혈질인', '의지박약인', '불평이 많은', '움츠러드는', '일중독인',
    '사서 걱정하는',
  ];

  var personality2;
  personality2 = btnpersonality2[Math.floor(Math.random() * btnpersonality2.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 부정적 성격은 <span class="color">' + personality2 + " </span>" + "성격! (" + btnpersonality2.length + "개)";
  btnresult.innerHTML = btntext;
} // 부정성격

function btncharacterType() {
  var btncharacterType = [
    '주연/주인공', '주연/조력자', '주연/악역', '주연/반동인물', '조연/조력자',
    '조연/악역', '조연/반동인물', '주연/스승', '조연/스승', '주연/라이벌',
    '조연/라이벌', '엑스트라', '주연/선역', '조연/선역', '주연/아군',
    '조연/아군', '주연/적', '조연/적',
  ];

  var characterTypedice;
  characterTypedice = btncharacterType[Math.floor(Math.random() * btncharacterType.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 캐릭터 유형은 <span class="color">' + characterTypedice + "!</span> (" + btncharacterType.length + "개)";
  btnresult.innerHTML = btntext;
} // 캐릭터 역할

function btncharacterImage() {
  var btncharacterImage = [
    '개그 캐릭터', '나르시시즘 캐릭터', '바보 캐릭터', '덜렁이 캐릭터', '호색한 캐릭터',
    '대인배 캐릭터', '중2병 캐릭터', '열혈 캐릭터', '다혈질 캐릭터', '쿨한 캐릭터',
    '쿨뷰티(냉정) 캐릭터', '쿨뷰티(무표정) 캐릭터', '냉혈한 캐릭터', '과묵한 캐릭터', '보이쉬 캐릭터',
    '걸리쉬 캐릭터', '괴짜 캐릭터', '다중인격 캐릭터', '게이름뱅이 캐릭터', '마이페이스 캐릭터',
    '천연 캐릭터', '치유계 캐릭터', '강철멘탈 캐릭터', '애어른 캐릭터', '브라콤 캐릭터',
    '시스콤 캐릭터', '천재 캐릭터', '신사 캐릭터', '울보 캐릭터', '겁쟁이 캐릭터',
    '구두쇠 캐릭터', '처녀 캐릭터', '초딩캐릭터', '하라구로 캐릭터', '츤데레(여성형) 캐릭터',
    '츤데레(남성형) 캐릭터', '얀데레(소프트) 캐릭터', '얀데레(하드) 캐릭터', '얀데레(포지티브) 캐릭터', '얀데레(네거티브) 캐릭터',
    '다루데레 캐릭터', '메가데레 캐릭터', '보코데레 캐릭터', '빈데레 캐릭터', '쿨데레 캐릭터',
    '욕데레 캐릭터', '악당 캐릭터', '위선자 캐릭터', '위악자 캐릭터', '정의의 사자',

    '다크 히어로', '복수귀 캐릭터', '안티 히어로', '매국노 캐릭터', '악녀 캐릭터',
    '동물인간 캐릭터', '혼혈 캐릭터', '전투종족 캐릭터', '한국인 캐릭터', '외국인 캐릭터',
    '흑인 캐릭터', '황인 캐릭터', '백인 캐릭터', '노안 캐릭터', '동안 캐릭터',
    '무표정 캐릭터', '색기 캐릭터', '섹시한 캐릭터', '청순한 캐릭터', '귀여운 캐릭터',
    '고양이상 캐릭터', '강아지상 캐릭터', '흑발적안 캐릭터', '금발벽안 캐릭터', '은발적안 캐릭터',
    '실눈 캐릭터', '애꾸눈 캐릭터', '죽는 눈 캐릭터', '오드아이 캐릭터', '로리 캐릭터',
    '쇼타 캐릭터', '무유(가슴없는) 캐릭터', '빈유 캐릭터', '평유 캐릭터', '거유 캐릭터',
    '로리거유 캐릭터', '오토코노코 캐릭터', '여장남자 캐릭터', '남장여자 캐릭터', '근육돼지 캐릭터',
    '단신 캐릭터', '장신 캐릭터', '안경 캐릭터', '방독면 캐릭터', '마약 복용 캐릭터',
    '의수 캐릭터', '의족 캐릭터', '의안 캐릭터', '가운 캐릭터', '치파오 캐릭터',

    '귀고리 착용 캐릭터', '반지 착용 캐릭터', '머리핀 착용 캐릭터', '목걸이 착용 캐릭터', '머리띠 착용 캐릭터',
    '피어싱 착용 캐릭터', '비녀 착용 캐릭터', '헤어밴드 착용 캐릭터', '립스틱 바른 캐릭터', '안대 착용 캐릭터',
    '검사(법조계) 캐릭터', '경찰 캐릭터', '공주 캐릭터', '군인 캐릭터', '매드 사이언티스트 캐릭터',
    '과학자 캐릭터', '기술자 캐릭터', '노예 캐릭터', '귀족 캐릭터', '닌자 캐릭터',
    '독재자 캐릭터', '변호사 캐릭터', '왕자 캐릭터', '평범한 고득학생 캐릭터', '중학생 캐릭터',
    '초등학생 캐릭터', '집사 캐릭터', '투희 캐릭터', '왕 캐릭터', '황제 캐릭터',
    '교사 캐릭터', '요리사 캐릭터', '얼굴을 가린 캐릭터', '폭주하는 캐릭터', '만악의 근원 캐릭터',
    '세계관 최강자 캐릭터', '최종 보스 캐릭터', '예언자 캐릭터', '레즈비언 캐릭터', '게이 캐릭터',
    '양성애자 캐릭터', '건달 캐릭터', '히트맨 캐릭터', '욕쟁이 캐릭터', '반말 캐릭터',
    '말버릇 캐릭터', '존댓말 캐릭터', '오타쿠 캐릭터', '음치 캐릭터', '변신하는 캐릭터',

    '무당 캐릭터', '살인마 캐릭터', '암살자 캐릭터', '스님 캐릭터', '목사 캐릭터',
    '신부(종교) 캐릭터', '사제 캐릭터', '수녀 캐릭터', '사서 캐릭터', '사신 캐릭터',
    '장의사 캐릭터', '암상인 캐릭터', '마법사 캐릭터', '전사 캐릭터', '궁수 캐릭터',
    '도적 캐릭터', '해적 캐릭터', '광전사 캐릭터', '사냥꾼 캐릭터', '격투가 캐릭터',
    '괴도 캐릭터', '광대 캐릭터', '마법소녀 캐릭터', '마녀 캐릭터', '대장장이 캐릭터',
    '마피아 캐릭터', '마왕 캐릭터', '가수 캐릭터', '음유시인 캐릭터', '퇴마사 캐릭터',
    '주술사 캐릭터', '바바리안 캐릭터', '드루이드 캐릭터', '흑기사 캐릭터', '모험가 캐릭터',
    '신관 캐릭터', '성직자 캐릭터', '정비공 캐릭터', '붙잡힌 히로인', '기다리는 히로인',
    '타이틀 히로인', '메인 히로인', '서브 히로인', '추가 히로인', '진 히로인',
    '페이크 히로인', '오피셜 히로인', '패배한 히로인', '히로인', '낙천형 캐릭터',

    '냉정형 캐릭터', '냉혹형 캐릭터', '막장형 캐릭터', '먼치킨형 캐릭터', '민폐형 캐릭터',
    '변태형 캐릭터', '악인형 캐릭터', '안습형 캐릭터', '얼빵형 캐릭터', '오타쿠형 캐릭터',
    '우유부단형 캐릭터', '지도자형 캐릭터', '책사형 캐릭터', '철인형 캐릭터', '폐인형 캐릭터',
    '서브 주인공', '더블 주인공', '다중 주인공', '페이크 주인공', '진 주인공',
    '돌아온 주인공', '힘을 숨기는 주인공', '마지막에 패배하는 주인공',
  ];

  var characterImagedice;
  characterImagedice = btncharacterImage[Math.floor(Math.random() * btncharacterImage.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 캐릭터 이미지는 <span class="color">' + characterImagedice + "!</span> (" + btncharacterImage.length + "개)";
  btnresult.innerHTML = btntext;
} // 캐릭터 유형

function btnnationality() {
  var btnnationality = [
    '아프카니스탄', '아르메니아', '아제르바이잔', '방글라데시', '브루나이',
    '부탄', '중국', '홍콩', '인도네시아', '인도',
    '일본', '키르기스스탄', '캄보디아', '북한', '한국',
    '카자흐스탄', '라오스', '스리랑카', '미얀마', '몽골',
    '마카오', '몰디브', '말레이지아', '네팔', '필리핀',
    '파키스탄', '싱가포르', '태국', '타지크', '티모르',
    '투르크멘', '대만', '우즈베크', '베트남', '아랍에미리트 연합',
    '바레인', '알제리', '이집트', '이스라엘', '이라크',
    '이란', '요르단', '쿠웨이트', '레바논', '리비아',
    '모로코', '모리타니', '중립지대', '오만', '카타르',

    '사우디아라비아', '수단', '시리아', '튀니지', '예맨',
    '안도라', '알바니아', '오스트리아', '알랜드 군도', '보스니아-헤르체고비나',
    '벨기에', '불가리아', '베라루스', '스위스', '사이프러스',
    '체코공화국', '독일', '덴마크', '에스토니아', '에리트리아',
    '스페인', '핀란드', '파로에 군도', '프랑스', '프랑스 메트로폴리탄',
    '영국', '조지아', '건지', '지브랄타', '그리스',
    '남조지아 & 남샌드위치 군도', '크로아티아', '헝가리', '아일랜드', '맨섬',
    '아이슬란드', '이탈리아', '저어지', '리히텐슈타인', '리투아니아',
    '룩셈부르그', '라트비아', '모나코', '몰도바', '몬테네그로',
    '마세도니아', '몰타', '네덜란드', '노르웨이', '폴란드',

    '포루투갈', '루마니아', '세르비아', '러시아 연방', '스웨덴',
    '슬로베니아', '스발비드 군도', '슬로바키아', '산마리노', '터키',
    '우크라이나', '교황청', '유고', '캐나다', '미국',
    '안티가 바부다', '네덜란드 열도', '안타티카', '아르헨티나', '아루바',
    '바베이도스', '세인트 바르탤르미', '버뮤다', '볼리비아', '보네르 신트외스타티위스',
    '브라질', '바하마', '벨리제', '칠레', '콜롬비아',
    '코스타리카', '쿠바', '큐라소', '도미니카', '도미니카 공화국',
    '에쿠아도르', '포클랜드 군도', '그레나다', '불령 가이아나', '그린랜드',
    '과델로프', '과테말라', '가이아나', '온두라스', '아이티',
    '자마이카', '세인트 키츠 네비스', '영령 캐이맨 군도', '세인트 루시아', '세인트 마틴',

    '미드웨이 군도', '마티니크', '몬트세라트', '멕시코', '니카라과',
    '파나마', '페루', '세인트 피레 미켈론', '푸에르토리코', '파라과이',
    '파나마운하지역', '수리남', '엘살바도르', '투르크 & 카이코스 군도', '트리니다드 토바고',
    '우루과이', '세인트 빈센트 그레나딘', '베네주엘라', '영령 버진군도', '미령 버진군도',
    '앙귈라', '앙골라', '부르키나 파소', '부룬디', '베닝',
    '보빗군도', '보츠와나', '콩고민주공화국', '중앙 아프리카공화국', '콩고',
    '코트디봐르', '카메룬', '카보 베르데', '지부티', '서사하라',
    '이디오피아', '가봉', '가나', '감비아', '기니',
    '적도 기니', '기네비소', '영령 인도양', '케냐', '코모로스',
    '라이베리아', '레소토', '마다카스카르', '말리', '모리셔스',

    '말라위', '모잠비크', '나미비아', '니제르', '나이지리아',
    '팔레스타인 해방기구', '불령 리유니온 코모도 제도', '루안다', '세이쉘', '세인트 헬레나',
    '시에라 리온', '세네갈', '소말리아', '남수단', '상토메 프린스페',
    '스와질랜드', '챠드', '불령 남부지역', '토고', '탄자니아',
    '우간다', '메요트', '남아프리카 공화국', '잠비아', '자이르',
    '짐바브웨', '호주', '쿡 아일랜드', '피지', '괌',
    '뉴 칼레도니아', '나우르', '니우에', '뉴질랜드', '불령 폴리네시아',
    '파푸아 뉴기니', '솔로몬 군도', '토켈라우', '통가', '사모아',
    '아메리칸 사모아', '코스 군도', '캔톤아일랜드', '크리스마스 아일랜드', '마이크로네시아',
    '허드 앤 맥도날드 군도', '존스톤 아일랜드', '키리바티', '마샬군도', '북마리아나 군도',

    '노폴크 아일랜드', '피트카이른', '팔라우', '투발루', '마이너 아우틀링 합중국 군도',
    '바누아투', '왈라스 & 퓨투나 군도', '웨이크 아일랜드', '오스트리아', '벨기에',
    '불가리아', '사이프러스', '체코공화국', '독일', '덴마크',
    '에스토니아', '스페인', '핀란드', '프랑스', '영국',
    '그리스', '크로아티아', '헝가리', '아일랜드', '이탈리아',
    '리투아니아', '룩셈부르그', '라트비아', '몰타', '네덜란드',
    '폴란드', '포루투갈', '루마니아', '스웨덴', '슬로베니아',
    '슬로바키아', '오스트리아', '호주', '벨기에', '캐나다',
    '스위스', '체코공화국', '독일', '덴마크', '스페인',
    '핀란드', '프랑스', '영국', '그리스', '헝가리',

    '아일랜드', '아이슬란드', '이탈리아', '일본', '한국',
    '룩셈부르그', '멕시코', '네덜란드', '노르웨이', '뉴질랜드',
    '폴란드', '포루투갈', '스웨덴', '슬로바키아', '터키',
    '미국', '브루나이', '인도네시아', '캄보디아', '라오스',
    '미얀마', '말레이지아', '필리핀', '싱가포르', '태국',
    '베트남', '아르메니아', '아제르바이잔', '베라루스', '조지아',
    '키르기스스탄', '카자흐스탄', '몰도바', '러시아 연방', '타지크',
    '투르크멘', '우크라이나', '우즈베크', '캐나다', '멕시코',
    '미국', '호주', '브루나이', '캐나다', '칠레',
    '중국', '홍콩', '인도네시아', '일본', '한국',

    '멕시코', '말레이지아', '뉴질랜드', '페루', '파푸아 뉴기니',
    '필리핀', '러시아 연방', '싱가포르', '태국', '대만',
    '미국', '베트남', '브루나이', '홍콩', '인도네시아',
    '캄보디아', '라오스', '미얀마', '말레이지아', '필리핀',
    '싱가포르', '태국', '대만', '베트남', '알바니아',
    '보스니아-헤르체고비나', '불가리아', '체코공화국', '헝가리', '몬테네그로',
    '마세도니아', '폴란드', '루마니아', '세르비아', '슬로베니아',
    '슬로바키아', '마세도니아', '유고', '오스트리아', '벨기에',
    '브루나이', '중국', '독일', '덴마크', '스페인',
    '핀란드', '프랑스', '영국', '그리스', '인도네시아',

    '아일랜드', '이탈리아', '일본', '한국', '룩셈부르그',
    '말레이지아', '네덜란드', '필리핀', '포루투갈', '스웨덴',
    '싱가포르', '태국', '베트남', '스위스', '아이슬란드',
    '리히텐슈타인', '노르웨이', '아르헨티나', '브라질', '파라과이',
    '우루과이',
  ];

  var nationalitydice;
  nationalitydice = btnnationality[Math.floor(Math.random() * btnnationality.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = '오늘의 국적은 <span class="color">' + nationalitydice + "!</span> (" + btnnationality.length + "개)";
  btnresult.innerHTML = btntext;
} // 국가

function btnsuperpower() {
  var passiveActive = [
    '패시브', '액티브',
  ];

  var btnsuperpower = [
    '신체를 변형하는', '신체를 강화하는', '신체를 여러개로 분열 할 수 있는', '신체에 뭔가를 결합 할 수 있는', '원소를 조종하는',
    '원소를 생성하는', '원소를 신체의 일부분으로 대체 할 수 있는', '원소와 원소를 합성  할 수 있는', '원소를 분해 할 수 있는', '사물을 조종하는',
    '사물을 생성하는', '사물을 신체의 일부분으로 대체 할 수 있는', '사물과 사물을 합성 할 수 있는', '사물을 분해 할 수 있는', '생물을 조종하는',
    '생물을 생성하는', '생물을 신체의 일부분으로 대체할 수 있는', '생물과 생물을 합성할 수 있는', '생물을 분해할 수 있는', '시간 여행',
    '시간 소거', '시간 창조', '시간 합성', '시간 정지', '공간 이동',
    '공간 소거', '공간 창조', '공간 합성', '천체를 조종하는', '천체는 생성하는',
    '천체를 분해할 수 있는', '정신을 강화할 수 있는', '정신을 여러개로 분열할 수 있는', '정신을 말소하는', '기억을 주입할 수 있는',
    '기억을 소거하는', '정신을 조종하는', '신체를 통해 에너지를 투사할 수 있는', '빠르게 움직일 수 있는 스피드스터', '죽어도 다시 살아나는',
    '여러개의 목숨을 가질 수 있는', '영원히 살 수 있는', '생명이 무한한', '생명을 강탈할 수 있는', '다른 모습으로 환생할 수 있는',
    '무언가를 소환할 수 있는', '눈을 마주치면 상대를 조종할 수 있는', '영혼과 대화할 수 있는', '귀신을 볼 수 있는', '투시',

    '바라보는 것으로 상대의 행동을 따라할 수 있는', '순간적으로 다른 곳으로 이동할 수 있는', '죽은자를 일으킬 수 있는', '평행우주의 자신과 대화할 수 있는',
    '에너지를 빨아들일 수 있는', '만진 물건의 사용법을 바로 알 수 있는', '어떠한 탈 것이든 탈 수 있는', '하늘을 날 수 있는',
    '신체가 물체를 투과할 수 있는', '타인의 시간을 되돌릴 수 있는', '한 번 보거나 들은 것을 잊지 않는', '차원을 이동할 수 있는',
    '타인의 무기를 자신의 무기로 만드는', '만지기만 해도 사물이나 생물의 기억을 읽을 수 있는', '동물의 말을 들을 수 있는', '미래에 일어날 일을 미리 알 수 있는',
    '상상을 현실로 만들 수 있는', '차원 이동을 할 수 있는', '전지전능한', '전능한', '전지한', '타인을 세뇌할 수 있는',
    '타인의 능력을 강탈할 수 있는', '타인에게 능력을 부여할 수 있는', '타인의 능력을 복사할 수 있는', '문을 통해 다른 곳으로 이동할 수 있는',
    '능력과 능력을 합성할 수 있는', '타인의 모습으로 변할 수 있는', '동물로 변할 수 있는', '식물과 대화를 할 수 있는', '식물의 말을 들을 수 있는',
    '눈을 마주치면 기억을 읽는', '눈을 마주치면 마음을 읽을 수 있는', '우주에서도 숨을 쉴 수 있는', '물 속에서 숨을 쉴 수 있는',
    '어둠 속에서도 밝게 볼 수 있는', '누군가와 합체할 수 있는', '눈에서 레이저 빔이 투사되는', '차가운 입김을 불 수 있는', '몸이 아주 단단한',
    '타인의 움직임을 예측할 수 있는', '기척을 숨길 수 있는', '피를 원하는 형태로 바꿀 수 있는', '죽음에 가까워지면 더욱 강해지는', '타인의 능력을 알 수 있는',

    '순간적으로 상처를 회복하는', '체내의 뼈를 변형할 수 있는', '꺼지지 않는 불꽃을 다루는', '상상하는 것을 에너지로 구현하는', '블랙홀을 열 수 있는',
    '특별한 힘이 깃든 갑옷을 입는', '가면을 쓰면 강해지는', '불꽃을 발사할 수 있는', '몸을 고무로 만들 수 있는', '멀리 볼 수 있는',
    '아주 작은 소리까지 들을 수 있는', '파장을 감지할 수 있는', '아주 희미한 향까지 맡을 수 있는', '고통을 느끼지 않는', '타인의 5감을 반전시키는',
    '싸울수록 점점 강해지는', '물건 안에 무언가를 가둘 수 있는', '햇빛에 노출되면 강해지는', '달빛에 노출되면 강해지는', '재채기를 하면 인격이 바뀌는',
    '타인에게 빙의할 수 있는', '음식을 섭취하지 않아도 생존할 수 있는', '큰 소리를 내서 음파를 방출하는', '죽으면 특정 과거로 이동하는',
  ];

  var superpowerdice;
  var passiveActivedice;
  passiveActivedice = passiveActive[Math.floor(Math.random() * passiveActive.length)];
  var d2 = '0123456789';
  var superpowerD2 = Number(d2[Math.floor(Math.random() * d2.length)]);

  if (superpowerD2 <= 1) {
    superpowerdice = '무능력';
    var btnresult = document.getElementById("btnresult");
    var btntext = '오늘의 초능력은 <span class="color">' + superpowerdice + "!</span> (" + (btnsuperpower.length * passiveActive.length + 1) + "개)";
  } else if (superpowerD2 >= 2) {
    superpowerdice = btnsuperpower[Math.floor(Math.random() * btnsuperpower.length)];
    var btnresult = document.getElementById("btnresult");
    var btntext = '오늘의 초능력은 <span class="color">(' + passiveActivedice + ') ' + superpowerdice + " </span>능력! (" + (btnsuperpower.length * passiveActive.length + 1) + "개)";
  }

  // superpowerdice = btnsuperpower[Math.floor(Math.random()*btnsuperpower.length)];

  btnresult.innerHTML = btntext;
} // 초능력

function btnstatus() {
  var btnstatus = [
    '천민', '노예', '평민', '귀족', '왕족',
    '황족',
  ];

  var nobility = [
    '남작', '자작', '백작', '후작', '공작',
    '대공',
  ];

  var statusdice;
  statusdice = btnstatus[Math.floor(Math.random() * btnstatus.length)];
  var nobilitydice;
  nobilitydice = nobility[Math.floor(Math.random() * nobility.length)];

  if (statusdice == '귀족') {
    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 신분은 <span class="color">${statusdice} - ${nobilitydice}!</span> (${(btnstatus.length + nobility.length) - 1}개)`;
  } else {
    var btnresult = document.getElementById("btnresult");
    var btntext = `오늘의 신분은 <span class="color">${statusdice}!</span> (${(btnstatus.length + nobility.length) - 1}개)`;
  }

  btnresult.innerHTML = btntext;
} // 신분

function btnbackstory() {
  var 어디 = [
    '어딘가의 폐허', '어딘가의 깊은 숲 속', '어딘가의 산골', '어딘가의 호화로운 저택', '어딘가의 왕실', 
    '어딘가의 어두운 곳', '어딘가의 신전', '어딘가의 바닷가', '어딘가의 장소', '어딘가의 고대 유적', 
    '어딘가의 평원', '어딘가의 초원', '어딘가의 던전', '어딘가의 감옥', '어딘가의 실험실', 
    '어딘가의 고원', '어딘가의 협곡', '어딘가의 치열한 전장', '어딘가의 골목길', '어딘가의 촌락', 
    '어딘가의 술집', '이 세상이 아닌 곳', '어딘가의 길거리', '어딘가의 행성', '어딘가의 은하계',

    '우주의 어딘가', '어딘가의 유흥가', '어딘가의 건물 지하', '어딘가의 상가', '어딘가의 상단',
    '어딘가의 황야', '어딘가의 연구실', '기억나지 않는 곳', '어딘가의 수용소', '어딘가의 작은 마을',
    '어딘가의 도시', '어딘지 모르는 곳', '시공의 바깥', '어딘가의 대륙', '대육 너머의 어딘가',
    '어딘가의 다른 나라', '지금은 없는 어딘가',
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
  ];

  var 누구 = [
    '군주', '만화가', '소설가', '프로게이머', '프로그래머',
    '간호사', '갑옷장인', '검사', '검투가', '격투가',
    '공주', '공학자', '과학자', '광대', '괴도',
    '교사', '군인', '기사', '노예', '농부',
    '대장장이', '도끼병', '도둑', '도박꾼', '드래곤 슬레이어',
    '드루이드', '디자이너', '마녀', '마법사', '마법소녀',
    '마법소년', '마술사', '마왕', '마피아', '망자',
    '중장보병', '메이드', '무녀', '무법자', '문지기',
    '방랑자', '범죄자', '불사자', '빌런', '사냥꾼',
    '사제', '사형수', '살인마', '살인청부업자', '상인',

    '성기사', '성직자', '소환사', '승려', '신관',
    '신부', '암살자', '약초사', '약초장인', '어부',
    '여왕', '영매사', '영웅', '왕', '왕자',
    '요리사', '음유시인', '의사', '이단심판관', '인형술사',
    '장교', '장군', '저격수', '전사', '점술사',
    '정령술사', '정복자', '정찰자', '족장', '주술사',
    '지휘관', '천민', '초능력자', '거너', '퇴마사',
    '파계승', '피난민', '학생', '해적', '현상금 사냥꾼',
    '궁병', '회사원', '히어로', '용사', '혁명가',
    '바운티 헌터', '심리학자', '최면술사', '연금술사', '항해사',

    '도선사', '정원사', '보모', '암상인', '기술자',
    '재봉사', '사육사', '은행지기', '사서', '촌장',
    '시장', '서포터', '길드 안내원', '해부학자', '백수',
    '수호자', '엑소시스트', '전령', '닌자', '떠돌이',
    '부랑자', '사령술사', '원소술사', '킥복서', '음양사',

    '카발리어', '창기병', '바바리안', '광전사', '석국병',
    '현자', '흑마법사', '흑기사', '마법사', '궁사',
    '포병', '보병', '스트리머', '건달', '깡패',
    '모험가', '해결사', '역병의사', '매드 사이언티스트', '퇴역 군인',
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

function btnheight() {
	var number = Math.floor(Math.random() * 14);

	var threedice;

	if (number <= 1) {
		threedice = 'minus';
	} else if (number >= 13) {
		threedice = 'plus';
	} else {
		threedice = 'middle';
	}

	switch (threedice) {
		case 'minus':
			var heighttext = '100cm 미만';
			break;
		case 'middle':
			var height = Math.floor(Math.random() * 90);
			var heighttext = `${100 + height}cm`;
			break;
		case 'plus':
			var heighttext = '190cm 초과';
			break;
	}

	var btnresult = document.getElementById("btnresult");
	var btntext = `오늘의 신장은 <span class="color">${heighttext}!</span> (100cm- ~ 190cm+)`;
	btnresult.innerHTML = btntext;
} // 신장

function btnweight() {
	var number = Math.floor(Math.random() * 14);

	var threedice;

	if (number <= 1) {
		threedice = 'minus';
	} else if (number >= 13) {
		threedice = 'plus';
	} else {
		threedice = 'middle';
	}

	switch (threedice) {
		case 'minus':
			var weighttext = '50kg 미만';
			break;
		case 'middle':
			var weight = Math.floor(Math.random() * 70);
			var weighttext = `${50 + weight}kg`;
			break;
		case 'plus':
			var weighttext = '120kg 초과';
			break;
	}

	var btnresult = document.getElementById("btnresult");
	var btntext = `오늘의 체중은 <span class="color">${weighttext}!</span> (50kg- ~ 120kg+)`;
	btnresult.innerHTML = btntext;
} // 체중

function btnage() {
	var number = Math.floor(Math.random() * 14);

	var threedice;

	if (number <= 1) {
		threedice = 'minus';
	} else if (number >= 13) {
		threedice = 'plus';
	} else {
		threedice = 'normal';
	}

	switch (threedice) {
		case 'minus':
			var agetext = '10세 미만';
			break;
		case 'normal':
			var age = Math.floor(Math.random() * 100);
			var agetext = `${10 + age}세`;
			break;
		case 'plus':
			var agetext = '110세 초과';
			break;
	}

	var btnresult = document.getElementById("btnresult");
	var btntext = `오늘의 나이는 <span class="color">${agetext}!</span> (10세- ~ 110세+)`;
	btnresult.innerHTML = btntext;
} // 나이

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random() * word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 단어는 <span class="color">${dice}!</span> (${word.length}개)`;
  btnresult.innerHTML = btntext;
} // 항목