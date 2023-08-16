const TOKEN = "6370476991:AAEWj_riyz6BFIS6If57bW8kDWe4elugMLo";
const CHAT_ID = "-1001932830894";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const numberReg = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

document.getElementById('tg').addEventListener('submit', (element) => {
  element.preventDefault();

  const tgName = document.getElementById('tg-name').value;
  const tgNumber = document.getElementById('tg-number').value;
  const tgMessage = document.querySelector('.tg-message');

  if (numberReg.test(tgNumber)) {
    let message = `<b>Нова заявка з сайту!</b>\n`;
    message += `<b>Ім'я:</b> ${tgName}\n`;
    message += `<b>Номер телефону:</b> ${tgNumber}`;
  
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    });

    tgMessage.innerHTML = 'Заявку на дзвінок відправлено!';
    tgMessage.classList.remove('red');
  } else {
    tgMessage.innerHTML = 'Будь ласка, введіть коректний номер телефону';
    tgMessage.classList.add('red');
  }
});

// tg-button
const tgPhone = document.querySelector('.tg-phone');
const tgForm = document.querySelector('.tg-form');

tgPhone.addEventListener('click', () => {
  tgForm.classList.toggle('active');
  document.querySelector(".tg-message").innerHTML = '';
});
