<!DOCTYPE html>
<html lang="ru"> 
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Steko Bonus</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style/style.css">
</head>
<body>
      <main class="content">
            <div id="loader" class="main__loader">
                  <div class="loader">
                        <div class="loader__circle lvl-1"></div>
                        <div class="loader__circle lvl-2"></div>
                        <div class="loader__circle lvl-3"></div>
                        <div class="loader__circle lvl-content">
                              <h3 class="circle--title">
                                    Вашу <b>ВИГОДУ</b> від <b>Steko</b> ми вже загорнули та відправили в <b>sms</b>.
                              </h3>
                              <div class="circle__logo">
                                    <img src="img/logo-loader.png" alt="logo" class="logo-1 step-start">
                                    <img src="img/logo-loader-2.png" alt="logo" class="logo-2 step-load">
                                    <img src="img/logo-final.png" alt="logo" class="logo-3 step-finish">
                                    <img src="img/loader-check.png" alt="logo" class="logo-4 step-check">
                              </div>
                              <h3 class="circle--subtitle">
                                    Ідеальних покупок зі <b>Steko</b>!
                              </h3>
                        </div>
                  </div>
            </div>
            <div id="content" class="main__content">
                  <div class="main__card card">
                        <div class="card__content">
                              <div class="card__bakground"></div>
                              <div class="card__logo-container">
                                    <img src="img/logo.png" alt="logo" class="card--logo">
                              </div>
                              <div class="card__title-container">
                                    <h1 class="card--title">
                                          Введіть ім'я та номер телефону, щоб отримати <b>ВИГОДУ</b> від <b>Steko</b>
                                    </h1>
                              </div>
                              <div class="card__form-container">
                                    <div class="form__input">
                                          <input id="name" type="text" required >
                                          <span class="bar"></span>
                                          <label class="">Ім'я</label>
                                    </div>
                                    <div class="form__input">      
                                          <input id="phone" type="text" required maxlength='13'>
                                          <span class="bar"></span>
                                          <label class="">Номер телефону</label>
                                    </div>
                                    <div id="error-output"></div>
                              </div>
                              <div class="card__button-container">
                                    <button id='button' class="card--btn">Отримати промокод</button>
                              </div>
                        </div>
                  </div>
            </div>
      </main>
      <script src="script/script.js"></script>
</body>
</html>
