// 신청 폼 제출 처리: 서버 전송 없이 브라우저에서 데모 접수 완료 팝업을 보여줍니다.
const form = document.getElementById('registrationForm');
const successModal = document.getElementById('successModal');
const successMessage = document.getElementById('successMessage');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = data.get('name');
  const date = data.get('visitDate');
  const choice = data.get('programChoice');
  successMessage.textContent = `${name}님, ${date} 방문 신청이 완료된 것으로 표시됩니다. 선택 프로그램: ${choice}. (데모 화면)`;
  successModal.classList.add('open');
  successModal.setAttribute('aria-hidden', 'false');
});
document.getElementById('closeSuccess').addEventListener('click', () => {
  successModal.classList.remove('open');
  successModal.setAttribute('aria-hidden', 'true');
});
successModal.addEventListener('click', event => {
  if (event.target === successModal) {
    successModal.classList.remove('open');
    successModal.setAttribute('aria-hidden', 'true');
  }
});
