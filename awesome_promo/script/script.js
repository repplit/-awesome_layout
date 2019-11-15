
//Вствляем код украины для ввода номера
let phone = document.querySelector('#phone');
      phone.addEventListener('focus', ()=>{
            phone.value = '+380';
});

// Запуск лоадера
const startLoader = () =>{
      document.getElementById('loader').classList.add('active');
      document.getElementById('content').classList.add('disable');
}

// Событие для запуска
document.querySelector('#button').addEventListener('click', ()=>{
      let messege = new Sender('http://httpbin.org/post');
      messege.sendMessege();
});

class Sender {
      constructor(url){
            this.url = url;
      }

      createData(){
            const isNumber = (n) =>  !isNaN(parseFloat(n)) && !isNaN(n - 0);
            const getMarket = (market) =>  new URLSearchParams(window.location.search).get("market");
            const validName = (name) => (name.length > 2 && !isNumber(name)) ? name : false;
            const validPhone = (phone) => (phone.length >= 10 && isNumber(phone)) ?  phone.substr(-10) : false;
            
            let data = {
                  name : validName(document.querySelector('#name').value),
                  phone : validPhone(document.querySelector('#phone').value),
                  region :  getMarket()
            };

            return data;
      }

      createError(status){
            let errorMessege = {
                  nameError: 'Недопустимое имя',
                  phoneFormatError: 'Неправильный формат телефона',
                  phoneError: 'Номер телефона уже зарегестрирован'
            }

            document.querySelector('#error-output').innerHTML = `<span>${errorMessege[status]}</span>`;
            setTimeout(()=>{document.querySelector('#error-output').innerHTML = ''}, 5000);
      }

      async sendMessege(){
            let data = this.createData();

            if(!data.name){
                  let name = document.getElementById('name');
                  name.classList.add('error');
                  setInterval(()=>{name.classList.remove('error')}, 2000);
                  return this.createError('nameError'); 
            }else if(!data.phone){ 
                  let phone = document.getElementById('phone');
                  phone.classList.add('error');
                  setInterval(()=>{phone.classList.remove('error')}, 2000);
                  return this.createError('phoneFormatError');
            };

            return fetch(this.url, {
                  method: 'POST',
                  body: JSON.stringify(data),
                  headers: new Headers({
                        'Content-Type': 'application/json'
                        })
            })
            .then(response => response.json())
            .then((data) => {
                  console.log(data);
                  startLoader();
            })
            .catch(error=> console.error(error));
      }
}

