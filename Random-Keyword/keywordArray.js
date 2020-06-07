function btnrandom() {
	var btnrandom = [
		'가루', '목욕 가운', '영혼', '악당', '가죽 벨트',
		'가면', '가발(색상 자유)', '가방', '가슴붕대',	'가시',
		'가죽', '가죽 장갑', '각력이 센', '각목', '갓',
		'거울', '야구 방망이', '계산기', '계약서', '고글',
		'고아', '고양이 귀 머리띠', '고통', '공 (Ball)', '공감각',
		'워해머', '공구', '공구/곡괭이', '공구/너트(나사)', '공구/니퍼',
		'공구/드릴', '공구/망치', '공구/볼트(나사)', '공구/삽', '공구/송곳',
		'공구/스크류(나사)', '공구/스패너', '공구/슬레지해머', '공구/전기톱', '공구/톱',
		'공구/펜치', '공구/플라이어', '공구/장도리(클로해머)', '먹구름', '광명',
		'공기', '공기총', '과거의 망령', '과일', '광속',

		'교복', '구름', '군복', '귀가 들리지 않는', '귀걸이',
		'귀도리', '귀마개', '그림자', '근력이 센', '글러브',
		'금속', '기갑의', '기모노', '기상/눈', '기상/비',
		'기상/우박', '기적', '깃털', '깨끗한', '꼬리',
		'꽃', '나무', '나뭇잎', '나비넥타이', '나이프(미술용)',
		'나침반', '낙하산', '날개', '낡은', '낡은 의상',
		'낡은 칼', '내복', '넥타이', '노안', '노출증',
		'노트북', '농구공', '농기구', '니트양말', '다중인격',
		'다트', '단단한', '단신', '단안경', '담배',
		'담뱃대', '대걸레', '더러운', '덫', '살생부',

		'데일리', '도감', '도복', '독약', '돋보기',
		'동성애자', '동안', '동정', '두개골', '등산 배낭',
		'디젤펑크', '떡', '라켓', '랜턴', '램프',
		'렌즈', '로리콤', '로브', '로켓 추진기', '로켓(목걸이)',
		'마력이 깃든', '마마콤', '마법서', '마석', '마술',
		'마스크 (복면)', '마약', '막대기', '만년필', '망토',
		'맹독', '머리끈', '머리띠', '머리핀', '머플러',
		'메가폰', '메신저백', '명부', '목걸이', '목도리',
		'목줄', '못생긴', '공구/몽키 스패너', '물총', '물풍선',
		'미다스의 손', '무술', '무테안경', '무표정', '문신',

		'물약', '미로', '미망인', '바가지', '바구니',
		'바리게이트', '바이저 마스크', '바퀴', '반무테안경', '반지',
		'발광', '발라클라바(안면마스크)', '발목양말', '발찌', '발차기',
		'발토시', '발톱', '밧줄', '방독면', '방사능',
		'버선', '버킷리스트', '범재', '벙어리 장갑', '벨트',
		'변태', '병약한', '병풍', '보석', '복수심',
		'부싯돌', '부적', '부채', '부케', '부활',
		'부활석', '불꽃', '붓', '붕대', '브로치',
		'비녀', '비늘', '비니', '비상', '비수',
		'빛', '빠른', '빵', '뼈', '뿌리',

		'뿔', '뿔테안경', '사이버펑크', '사이코패스', '사탕',
		'산소통', '상처', '새싹', '새장', '색소',
		'색안경', '생크림', '샤프', '샤프심', '서류가방',
		'선글라스', '성별역전(TS)', '성소수자', '성수', '소시오패스',
		'소환', '손목시계', '손톱', '쇠구슬', '쇼타콤',
		'수면양말', '수염', '술', '스냅백', '스마트폰',
		'스카프', '스팀펑크', '스프레이', '스피드 스터', '스피커',
		'슬픔', '시약', '식기/나무 숟가락', '식기/나무 젓가락', '식기/나무 포크',
		'식기/쇠 숟가락', '식기/쇠 젓가락', '식기/쇠 포크', '식기/플라스틱 숟가락', '식기/플라스틱 젓가락',
		'식기/플라스틱 포크', '식물', '시체', '식물인간', '신성력',

		'신호탄', '신화', '실내화', '실크 해트', '실험도구',
		'심장', '십자가', '씨앗', '아령', '아름다운',
		'아름다운 미소', '악력이 센', '악마 뿔 머리띠', '악마의 날개', '악장',
		'안경', '알람시계', '알몸', '알비노 (백색증)', '암석',
		'앞이 보이지 않는', '야구공', '야구방망이', '얀데레', '양말',
		'양산', '양성애자', '얼음', '에코백', '연필',
		'염동력', '염주', '예지력', '오로라', '오존',
		'오토바이', '오페라 글러브', '오피스룩', '와인', '완력이 센',
		'왕관(동양)', '왕관(서양)', '외톨이', '요리', '욕데레',
		'우산', '운동복', '운동화', '원반', '은밀한',

		'음속', '의수', '의안', '의족', '이끼',
		'이빠진 무기', '이어폰', '인공심장', '인공지능', '일회용품',
		'자석', '자연', '자폭', '잘생긴', '잠옷',
		'장기/눈알', '장신', '재생력', '잭 오 랜턴', '저울',
		'전자공학', '전자기기', '전자기파', '제 3의 눈', '젤리',
		'종이', '죄수복', '주사위', '주술', '중력',
		'지뢰', '지우개', '지팡이', '채소', '책',
		'책가방', '처녀', '천리안', '천사 링 머리띠', '천사의 날개',
		'천재', '철가방', '철조망', '철테안경', '체크무늬',
		'초감각(감지 능력)', '초롱', '초커', '촛불', '총기',

		'총알', '축구공', '츄리닝', '츤데레', '치마바니',
		'칠죄종', '카드', '카리스마', '칼날', '캐리어',
		'캐멀백', '캔트지(종이)', '컴퓨터', '케이크', '쿠키',
		'큐브', '키메라', '탄알집', '탈리스만', '탈옥',
		'탈주', '태엽', '털복숭이', '털양말', '투포환',
		'트랜스젠더', '파괴', '파레트', '파장', '파파콤',
		'팔랑귀', '팔찌', '팔토시', '폭탄', '풍선',
		'페인트', '페인트탄', '펜', '펜던트', '폭발물',
		'프리즘', '피', '피어싱', '합금/강철', '합금/아말감',
		'합금/청동', '합금/티타늄', '항공모함', '해골', '해독제',

		'핸드백', '행운', '향초', '허수아비', '헤드셋',
		'헤드폰', '헤어브릿지', '헬멧', '호리병', '호박',
		'화관', '화장품', '환자복', '후라이팬', '흉터',
		'희망', '히메로리', 'CD', 'EMP', '유틸리티 벨트',
		'원한', '미련', '애착', '짝사랑', '외사랑',
		'전기', '바람', '화산', '어둠', '폭발',
		'희생', '아포칼립스', '포스트 아포칼립스', '엑소시즘', '초능력',
		'초상능력', '마법', '마력', '집착', '계승자',
		'멸망', '구원', '혈흔', '지문', '꿰맨 흔적',
		'도벽', '수술자국', '수술', '느와르', '잠입',

		'암살', '이중인격', '강박증', '결벽증', '분노조절장애',
		'다혈질', '기상/안개', '도술', '소환술', '살인무술',
		'권법', '태극권', '검도', '무에타이', '복싱',
		'킥복싱', '태권도', '공수도', '유도', '다른 차원',
		'다른 세계', '돌풍', '파워드 슈트', '에너지 아머', '강화 외골격',
		'기계 슈트', '수건', '매혹적인', '사랑스러운', '귀여운',
		'예쁜', '밝은', '우울한', '패기', '위압적인',
		'엄격한', '흉측한', '괴상한', '신비로운', '두려운',
		'무서운', '겁에 질린', '혈안', '태블릿 PC', '두려움이 없는',
		'젖은', '기뻐하는', '즐거워하는', '끔찍한', '기괴한',

		'완장', '동전', '트럼프', '속임수', '마그마',
		'용암', '화염', '불', '물', '눈 결정',
		'돌', '돌덩이', '바위', '암석/현무암', '암석/화강암',
		'꽃잎', '이파리', '창조', '섬광', '길잡이',
		'바이러스', '백신', '세포', '면역', '광신도',
		'신앙', '종교', '동물', '의인화', '살인',
		'살생', '살해', '살인자', '곤충', '세계',
		'핵전쟁', '핵미사일', '전략무기', '핵', '핵폭탄',
		'파멸', '멸종', '멸족', '재시작', '환생',
		'괴물', '몬스터', '인형', '저승사자', '스켈레톤',

		'미라', '강시', '좀비', '잔인한', '네크로맨서',
		'망자', '불사자', '잔혹한', '고대인', '고대종족',
		'고대의', '고대', '태고의', '태초의', '태초',
		'시간', '암거래', '암흑', '칠흑', '공간',
		'시간여행', '타임머신', '시간이동', '공간이동', '텔레포트',
		'미래', '과거', '현재', '상상', '초원',
		'고원', '평원', '과수원', '식인', '식인종',
		'꿈', '수면', '마취', '마취탄', '마취총',
		'화장', '눈물', '금은보화', '보물지도', '보물',
		'유적지', '금단의 구역', '제단', '제물', '희생양',

		'살의', '증오', '희열', '족쇄', '기쁨',
		'분노', '즐거움', '공포', '사랑', '혐오',
		'욕망', '수치심', '질투', '죄책감', '승부욕',
		'악의 조직', '비밀 결사', '자경단', '클론', '현자의 돌',
		'혈석', '소환석', '마법석', '천상계', '천국',
		'지옥', '마계', '뜨거운', '차가운', '이세계',
		'저승', '성불', '잎사귀', '잎', '왕권',
		'도그 태그 (군번줄)', '따분한', '심심한', '안대', '독극물',
		'독성물질', '발암물질', '핵융합', '번개', '자기장',
		'투명', '전류', '지진', '해일', '쓰나미',

		'재앙', '악기', '리본 장식', '도끼빗', '빗',
		'꼬리빗', '빗자루', '쓰레기통', '보물상자', '나무상자',
		'지도', '마도서', '죽음', '삶', '생명',
		'소멸', '수갑', '쇠사슬', '사슬', '석양',
		'우주', '천체/달', '천체/태양', '천체/항성', '천체/행성',
		'천체/유성', '천체/혜성', '천체/운석', '천체/태양계', '천체/수성',
		'천체/금성', '천체/지구', '천체/화성', '천체/목성', '천체/토성',
		'천체/천왕성', '천체/해왕성', '천체/명왕성', '천체/항성계', '천체/은하',
		'천체/초은하단', '천체/블랙홀', '천체/화이트홀', '천체/웜홀', '역병의사',
		'스승', '제자', '불행', '비극', '희극',

		'코즈믹 호러', '크툴루 신화', '암석/섬록암', '암석/반려암', '암석/감람암',
		'암석/휘록암', '암석/섬록 반암', '암석/석영 반암', '암석/유문암', '암석/안산암',
		'암석/흑요석', '암석/이암', '암석/엽암', '암석/사암', '암석/역암',
		'암석/석회암', '암석/응회암', '암석/석탄', '석유', '우유',
		'고대의 문명', '쿨데레', '메가데레', '보코데레', '다루데레',
		'빈데레', '위선자', '위악자', '가슴 사이즈/무유(無乳)', '가슴 사이즈/미유(微乳)',
		'가슴 사이즈/빈유(貧乳)', '가슴 사이즈/평유(平乳)', '가슴 사이즈/거유(巨乳)', '가슴 사이즈/폭유(爆乳)', '가슴 사이즈/초유(超乳)',
		'무기', '갑옷', '리본', '망사', '스타킹',
		'노출', '야한', '19금', '시공간', '도형',
		'스페이드', '클로버', '다이아몬드', '하트', '조커',

		'타로 카드', '낙인', '어두운', '괴인', '히어로',
		'영웅', '빌런', '광석', '광물', '마이크',
		'불량한', '양아치', '광대', '울상', '미소',
		'웃음', '나태한', '질투하는', '색욕적인', '오만한',
		'자만스러운', '겸손한', '고독', '즐거운', '불행한',
		'행복한', '증오하는', '사랑하는', '봄', '여름',
		'행복', '가을', '겨울', '더운', '추운',
		'시원한', '따뜻한', '기상/눈보라', '자연재해', '비밀스러운',
		'차원', '창세', '섹시한', '성적인', '핸드폰',
		'사전', '백과사전', '감각', '촉각', '청각',

		'시각', '미각', '통각', '지각력', '부하',
		'통솔력', '하렘', '추한', '역하렘', '쓰레기',
		'쓰레기더미', '신체 불구', '성불구', '하드 디스크', '플로피 디스크',
		'방어구', '묵주', '교단', '종교인', '사이비 종교',
		'이빨', '짐승의 이빨', '송곳니', '짐승의 송곳니', '짐승 귀',

		'음란한', '변태같은', '신사', '기사도', '불치병',
		'전염병',
  ];

  var randomdice;
  var randomdice2;
  var randomdice3;
  var randomdice4;
  var randomdice5;
  var randomdice6;

  randomdice = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  randomdice2 = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  randomdice3 = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  randomdice4 = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  randomdice5 = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  randomdice6 = btnrandom[Math.floor(Math.random() * btnrandom.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `
      오늘의 키워드는... 이거다!
      <div class="wordbox color">
        <p>${randomdice}! (${btnrandom.length}개)</p>
        <p style="color: #333333; margin: 20px 0; font-size: 14pt;">보너스</p>
        <p style="font-size: 14pt;">${randomdice2}!</p>
        <p style="font-size: 14pt;">${randomdice3}!</p>
        <p style="font-size: 14pt;">${randomdice4}!</p>
        <p style="font-size: 14pt;">${randomdice5}!</p>
        <p style="font-size: 14pt;">${randomdice6}!</p>
      </div>
  `;
  btnresult.innerHTML = btntext;
} // 랜덤 키워드

// ---------- 템플릿 ----------

function word() {
  var word = [];

  var dice;
  dice = word[Math.floor(Math.random() * word.length)];
  var btnresult = document.getElementById("btnresult");
  var btntext = `오늘의 단어는 <span class="color">${dice}!</span> (${word.length}개)`;
  btnresult.innerHTML = btntext;
} // 항목