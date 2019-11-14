const createData = () => {
      data = {};
      data.name = validName(document.querySelector('#name').value);
      data.phone = validPhone(document.querySelector('#phone').value);
      data.region =  window.location.search.replace( '?', '');

      return data;
}

const validPhone = (phone) => {
      const isNumber = (n) =>  !isNaN(parseFloat(n)) && !isNaN(n - 0);

      if(phone.length > 10){
            return phone.substr(-10);
      }else if(phone.length < 10 ){
            return false;
      }else if(!isNumber(phone)){
            return false;
      }
};

const validName = (name) => (name.length > 2) ? name : false;


const createError = (status) =>{
      let errorMessege = {
            nameError: 'Недопустимое имя',
            phoneFormatError: 'Непраильный формат телефона',
            phoneError: 'Номер телефона уже зарегестрирован'
      };

      let errorArea = document.querySelector('#error-output');
      errorArea.innerHTML = `<span>${errorMessege[status]}</span>`;

      setTimeout(()=>{errorArea.innerHTML = ''}, 5000);
};

const sendData = async () =>{
      let data = createData();
      let url = 'http://httpbin.org/post';
      

      if(!data.name){
            createError('nameError');
            return;
      }else if(!data.phone){
            createError('phoneFormatError');
            return;
      }

      try {
            const response = await fetch(url, {
                  method: 'POST', 
                        body: JSON.stringify(data), 
                        headers: {
                              'Content-Type': 'application/json'
                  }
            });

            document.querySelector('#content').classList.add('disable');
            document.querySelector('#loader').classList.add('active');
      } catch (error) {
            createError(phoneError);
      }
}
let button = document.querySelector('#button');
button.addEventListener('click', sendData);