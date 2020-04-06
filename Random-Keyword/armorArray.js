function btnarmor() {
  var btnarmor = [
'퀄티드 아머 (quilted armor)', '스터디드 레더 아머 (Studded leather armor)', '링 메일 (Ring Mail)', '트랜지셔널 아머 (Transitional armor)',
'패디드 아머 (Padded armor )', '레더 아머 (Leather armor)', '보일드 레더 아머 (Boiled leather armor)', '스케일 메일 (Scale Mail)',
'라멜라 아머 (Lamela Armor)', '하이드 아머 (hide Armor)', '체인 메일 (Chain Mail)', '밴디드 메일 (Banded Mail)', '브리간딘 (Brigandine)',
'스플린트 메일 (Splint Mail)', '플레이트 앤 메일 (Plate&mail)', '스쿠타토스 갑옷', '사르가트 찰갑', '스파이크 아머 (Spiked Armor)',
'버프 코트 (Buff coat)', '레더 라멜라(Leather Lamellar)', '스키타이 찰갑', '로리카(Lorica/Lorica Musculata)', '로리카 하마타(Lorica Hamata)',
'로리카 세그멘타타(Lorica Segmentata)', '로리카 스쿠아마타 (Lorica Squamata)', '고대 그리스 - 파노플리아 (Panoplia)',
'고대 그리스 - 리노토락스 (Linothorax)', '고대 그리스 - 청동 흉갑', '5~6세기 그리스 갑옷', '5~6세기 스파르타 갑옷', '단코오(短甲, 단갑)',
'케이코오(掛甲, 괘갑)', '오오요로이(大鎧, 대개)', '도오마루(胴丸, 동환)', '하라아테(腹當, 복당)', '하라마키(腹巻, 복권)',
'마루도오요로이(丸胴鎧, 환동개)', '마루도오구소쿠(丸胴具足, 환동구족)', '도오세이구소쿠(當世具足, 당세구족)', '오케가와도오(桶側胴, 통측동)',
'호토케도오(仏胴, 불동)', '고마이도오(五枚胴, 오매동)', '오카시구소쿠(御貸具足, 어대구족)', '난반도오구소쿠(南蛮胴具足, 남만동구족)',

'다타미구소쿠(畳具足, 첩구족)', '다타미카타비라(畳帷子, 첩유자)', '쿠사리카타비라(鎖帷子, 쇄유자)', '킷코오카타비라(亀甲帷子, 귀갑유자)',
'모가미도오(最上胴, 최상동)', '다타미도오(畳胴, 첩동)','<br>풀 플레이트 아머<br>(Full Plate Armor)<br>(International style)<br>',
'<br>카스튼 브르스트 갑옷<br>(Full Plate Armor)<br>(Kasten-brust armor)<br>',
'<br>고딕 양식<br>(Full Plate Armor)<br>(Gothic style)<br>', '<br>밀라노 양식<br>(Full Plate Armor)<br>(Milanese style)<br>',
'<br>주스팅 갑옷<br>(Full Plate Armor)<br>(Jousting armor)<br>', '<br>맥시밀리언 갑옷<br>(Full Plate Armor)<br>(Maximilian armor)<br>',
'<br>그리니치 갑옷<br>(Full Plate Armor)<br>(Greenwich armor)<br>', '퀴레이스 아머 (Cuirass Armor)', '조선 두석린갑(豆錫鱗甲)',
'조선 누비지갑(紙甲)', '조선 지찰갑(紙札甲)', '조선 면제배갑(綿製背甲)', '조선 경번갑(鏡幡甲)', '조선 쇄자갑(鎖子甲)',
'천갑옷', '가야 찰갑(札甲)', '신라 찰갑(札甲)', '당나라 명광개(明光鎧)', '조선시대 찰갑(札甲)', '조선 두정갑(頭釘甲)',
'고대 미케네 병사 갑옷',
  ];

  var armordice;
  armordice = btnarmor[Math.floor(Math.random() * btnarmor.length)];
  var armorImage;

  switch (armordice) {
    case '퀄티드 아머 (quilted armor)':
      armorImage = './image/퀄티드 아머.jpg';
      break;
    case '스터디드 레더 아머 (Studded leather armor)':
      armorImage = './image/스터디드 레더 아머.png';
      break;
    case '링 메일 (Ring Mail)':
      armorImage = './image/링 메일.png';
      break;
    case '트랜지셔널 아머 (Transitional armor)':
      armorImage = './image/트랜지셔널 아머.jfif';
      break;
    case '패디드 아머 (Padded armor )':
      armorImage = './image/패디드 아머.png';
      break;
    case '레더 아머 (Leather armor)':
      armorImage = './image/레더 아머.jfif';
      break;
    case '보일드 레더 아머 (Boiled leather armor)':
      armorImage = './image/보일드 레더 아머.jfif';
      break;
    case '스케일 메일 (Scale Mail)':
      armorImage = './image/스케일 메일.jfif';
      break;
    case '라멜라 아머 (Lamela Armor)':
      armorImage = './image/라멜라 아머.jfif';
      break;
    case '하이드 아머 (hide Armor)':
      armorImage = './image/하이드 아머.jfif';
      break;
    case '체인 메일 (Chain Mail)':
      armorImage = './image/체인 메일.png';
      break;
    case '밴디드 메일 (Banded Mail)':
      armorImage = './image/밴디드 메일.png';
      break;
    case '브리간딘 (Brigandine)':
      armorImage = './image/브리간딘.png';
      break;
    case '스플린트 메일 (Splint Mail)':
      armorImage = './image/스플린트 메일.png';
      break;
    case '플레이트 앤 메일 (Plate&mail)':
      armorImage = './image/플레이트 앤 메일.jpg';
      break;
    case '스쿠타토스 갑옷':
      armorImage = './image/스쿠타토스 갑옷.png';
      break;
    case '사르가트 찰갑':
      armorImage = './image/사르가트 찰갑.png';
      break;
    case '스파이크 아머 (Spiked Armor)':
      armorImage = './image/스파이크 아머.jpg';
      break;
    case '버프 코트 (Buff coat)':
      armorImage = './image/버프 코트.jpg';
      break;
    case '레더 라멜라(Leather Lamellar)':
      armorImage = './image/레더 라멜라.jfif';
      break;
    case '스키타이 찰갑':
      armorImage = './image/스키타이 찰갑.jfif';
      break;
    case '로리카(Lorica/Lorica Musculata)':
      armorImage = './image/로리카.jpg';
      break;
    case '로리카 하마타(Lorica Hamata)':
      armorImage = './image/로리카 하마타.jpg';
      break;
    case '로리카 세그멘타타(Lorica Segmentata)':
      armorImage = './image/로리카 세그멘타타.jpg';
      break;
    case '로리카 스쿠아마타 (Lorica Squamata)':
      armorImage = './image/로리카 스쿠아마타.jfif';
      break;
    case '고대 그리스 - 파노플리아 (Panoplia)':
      armorImage = './image/파노플리아.jpg';
      break;
    case '고대 그리스 - 리노토락스 (Linothorax)':
      armorImage = './image/리노토락스 아머.jpg';
      break;
    case '고대 그리스 - 청동 흉갑':
      armorImage = './image/고대 그리스 청동 흉갑.jpg';
      break;
    case '5~6세기 그리스 갑옷':
      armorImage = './image/5~6세기 그리스 갑옷.png';
      break;
    case '5~6세기 스파르타 갑옷':
      armorImage = './image/5~6세기 스파르타 갑옷.png';
      break;
    case '단코오(短甲, 단갑)':
      armorImage = './image/단코오.jfif';
      break;
    case '케이코오(掛甲, 괘갑)':
      armorImage = './image/케이코오.jfif';
      break;
    case '오오요로이(大鎧, 대개)':
      armorImage = './image/오오요로이.png';
      break;
    case '도오마루(胴丸, 동환)':
      armorImage = './image/도오마루.jfif';
      break;
    case '하라아테(腹當, 복당)':
      armorImage = './image/하라아테.jfif';
      break;
    case '하라마키(腹巻, 복권)':
      armorImage = './image/하라마키.jfif';
      break;
    case '마루도오요로이(丸胴鎧, 환동개)':
      armorImage = './image/마루도오요로이.jfif';
      break;
    case '마루도오구소쿠(丸胴具足, 환동구족)':
      armorImage = './image/마루도오구소쿠.jfif';
      break;
    case '도오세이구소쿠(當世具足, 당세구족)':
      armorImage = './image/도오세이구소쿠.jpg';
      break;
    case '오케가와도오(桶側胴, 통측동)':
      armorImage = './image/오케가와도오.jfif';
      break;
    case '호토케도오(仏胴, 불동)':
      armorImage = './image/호토케도오.jfif';
      break;
    case '고마이도오(五枚胴, 오매동)':
      armorImage = './image/고마이도오.jfif';
      break;
    case '오카시구소쿠(御貸具足, 어대구족)':
      armorImage = './image/오카시구소쿠.jfif';
      break;
    case '난반도오구소쿠(南蛮胴具足, 남만동구족)':
      armorImage = './image/난반도오구소쿠.jfif';
      break;
    case '다타미구소쿠(畳具足, 첩구족)':
      armorImage = './image/다타미구소쿠.jfif';
      break;
    case '다타미카타비라(畳帷子, 첩유자)':
      armorImage = './image/다타미카타비라.jfif';
      break;
    case '쿠사리카타비라(鎖帷子, 쇄유자)':
      armorImage = './image/쿠사리카타비라.jfif';
      break;
    case '킷코오카타비라(亀甲帷子, 귀갑유자)':
      armorImage = './image/킷코오카타비라.jfif';
      break;
    case '모가미도오(最上胴, 최상동)':
      armorImage = './image/모가미도오.png';
      break;
    case '다타미도오(畳胴, 첩동)':
      armorImage = './image/다타미도오.jpg';
      break;
    case '<br>풀 플레이트 아머<br>(Full Plate Armor)<br>(International style)<br>':
      armorImage = './image/풀 플레이트 아머.jfif';
      break;
    case '<br>카스튼 브르스트 갑옷<br>(Full Plate Armor)<br>(Kasten-brust armor)<br>':
      armorImage = './image/카스튼 브르스트 풀 플레이트 아머.png';
      break;
    case '<br>고딕 양식<br>(Full Plate Armor)<br>(Gothic style)<br>':
      armorImage = './image/고딕 양식 풀 플레이트 아머.jfif';
      break;
    case '<br>밀라노 양식<br>(Full Plate Armor)<br>(Milanese style)<br>':
      armorImage = './image/밀라노 양식 풀 플레이트 아머.jfif';
      break;
    case '<br>주스팅 갑옷<br>(Full Plate Armor)<br>(Jousting armor)<br>':
      armorImage = './image/주스팅 풀 플레이트 아머.jpg';
      break;
    case '<br>맥시밀리언 갑옷<br>(Full Plate Armor)<br>(Maximilian armor)<br>':
      armorImage = './image/맥시밀리언 풀 플레이트 아머.jfif';
      break;
    case '<br>그리니치 갑옷<br>(Full Plate Armor)<br>(Greenwich armor)<br>':
      armorImage = './image/그리니치 풀 플레이트 아머.jfif';
      break;
    case '퀴레이스 아머 (Cuirass Armor)':
      armorImage = './image/퀴레이스 아머.jfif';
      break;
    case '조선 두석린갑(豆錫鱗甲)':
      armorImage = './image/두석린갑.jfif';
      break;
    case '조선 누비지갑(紙甲)':
      armorImage = './image/누비지갑.jfif';
      break;
    case '조선 지찰갑(紙札甲)':
      armorImage = './image/지찰갑.jfif';
      break;
    case '조선 면제배갑(綿製背甲)':
      armorImage = './image/면제배갑.jfif';
      break;
    case '조선 경번갑(鏡幡甲)':
      armorImage = './image/경번갑.jfif';
      break;
    case '조선 쇄자갑(鎖子甲)':
      armorImage = './image/쇄자갑.png';
      break;
    case '천갑옷':
      armorImage = './image/천갑옷.png';
      break;
    case '가야 찰갑(札甲)':
      armorImage = './image/가야 찰갑.jfif';
      break;
    case '신라 찰갑(札甲)':
      armorImage = './image/신라 찰갑.jfif';
      break;
    case '당나라 명광개(明光鎧)':
      armorImage = './image/명광개.jfif';
      break;
    case '조선시대 찰갑(札甲)':
      armorImage = './image/조선시대 찰갑.png';
      break;
    case '조선 두정갑(頭釘甲)':
      armorImage = './image/두정갑.jfif';
      break;
    case '고대 미케네 병사 갑옷':
      armorImage = './image/고대 미케네 귀족 전사 갑옷.jpg';
      break;
    default:
      armorImage = '';
  }

  var btnresult = document.getElementById("btnresult");
  var btntext = `
    오늘의 갑옷은 <span class="color">${armordice}</span> 기반의 갑옷! (${btnarmor.length}개)
    <span style="font-size: 16pt;">
      <img style="width: 350px; display: block; margin: 10px auto;" src="${armorImage}" alt="이미지가 없습니다.">
    </span>
  `;
  btnresult.innerHTML = btntext;
} // 갑옷