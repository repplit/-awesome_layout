
let phone = document.querySelector('#phone');
      phone.addEventListener('focus', ()=>{
            phone.value = '+380';
});

const startLoader = () =>{
      document.getElementById('loader').classList.add('active');
      document.getElementById('content').classList.add('disable');
}
// Сбор данных для отправки
const createData = () => {
      data = {};
      data.name = validName(document.querySelector('#name').value);
      data.phone = validPhone(document.querySelector('#phone').value);
      data.region =  window.location.search.replace('=', '');

      return data;
}
// Проверка на число
const isNumber = (n) =>  !isNaN(parseFloat(n)) && !isNaN(n - 0);

// Проверка валидности номера
const validPhone = (phone) => {
      if(phone.length >= 10 && isNumber(phone)){
            return phone.substr(-10);
      }else if(phone.length < 10 ){
            return false;
      }
};

// Проверка валидности имени  
const validName = (name) => (name.length > 2 && !isNumber(name)) ? name : false;

// коструктор ошибок
const createError = (status) =>{
      let errorMessege = {
            nameError: 'Недопустимое имя',
            phoneFormatError: 'Неправильный формат телефона',
            phoneError: 'Номер телефона уже зарегестрирован'
      };

      let errorArea = document.querySelector('#error-output');
      errorArea.innerHTML = `<span>${errorMessege[status]}</span>`;

      setTimeout(()=>{errorArea.innerHTML = ''}, 5000);
};

// Функция запроса на сервер
const post = (url, data) =>{
      return fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                  'Content-Type': 'application/json'
                }),
      })
      .then(response => response.json());
}

// Функция отпрвки данных 
const sendData = async () =>{
      let data = createData();
      let url = 'http://httpbin.org/post'; // тестовый адрес
      
      if(!data.name){
            createError('nameError');
            return;
      }else if(!data.phone){
            createError('phoneFormatError');
            return;
      }

      // Отправка и обработка ответа
      post(url, data)
            // обрабатываем результат вызова 
            .then((data)=>{
                  console.log(data);
                  startLoader();
            })
            .catch(error => console.error(error))
}

let button = document.querySelector('#button');

// Событие для запуска
button.addEventListener('click', sendData);



