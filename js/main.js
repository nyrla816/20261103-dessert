// 모바일 메뉴 열기/닫기
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(opened));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

// 일정 팝업에 표시할 예시 데이터
const scheduleData = {
  day1: [
    ['11:00', '페스타 오픈', '디저트 마켓 및 스탬프 투어 시작'],
    ['11:30', '달콤 시식 체험 1회차', '시식 체험존 · 사전 예약자 우선'],
    ['12:00', '베이킹 클래스 1회차', '컵케이크 만들기 · 50분'],
    ['13:00', '어쿠스틱 버스킹', '메인 무대'],
    ['13:30', '달콤 시식 체험 2회차', '시식 체험존'],
    ['14:00', '베이킹 클래스 2회차', '컵케이크 만들기 · 50분'],
    ['16:00', '어쿠스틱 버스킹', '메인 무대'],
    ['19:00', '행사 종료', '마켓 및 체험 부스 마감']
  ],
  day2: [
    ['11:00', '페스타 오픈', '디저트 마켓 및 스탬프 투어 시작'],
    ['11:30', '달콤 시식 체험 1회차', '시식 체험존'],
    ['12:00', '베이킹 클래스 1회차', '컵케이크 만들기 · 50분'],
    ['13:30', '달콤 시식 체험 2회차', '시식 체험존'],
    ['14:00', '베이킹 클래스 2회차', '컵케이크 만들기 · 50분'],
    ['15:30', '달콤 시식 체험 3회차', '시식 체험존'],
    ['16:00', '어쿠스틱 버스킹', '메인 무대'],
    ['19:00', '페스타 마감', '함께해 주셔서 감사합니다']
  ]
};

// 현재 선택한 날짜의 일정을 팝업에 그리는 함수
function renderSchedule(day) {
  const list = document.getElementById('scheduleList');
  if (!list) return;
  list.innerHTML = scheduleData[day].map(item => `
    <div class="schedule-row">
      <time>${item[0]}</time>
      <div><b>${item[1]}</b><small>${item[2]}</small></div>
    </div>
  `).join('');
}
renderSchedule('day1');

// 일정 날짜 탭 전환
document.querySelectorAll('.day-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.day-tab').forEach(button => button.classList.remove('active'));
    tab.classList.add('active');
    renderSchedule(tab.dataset.day);
  });
});

// 공통 팝업 열기/닫기
document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', closeModals);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModals();
});
function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
  document.body.style.overflow = '';
}
