<template>
<div class="about__section">
  <div class="about__head">
    <h2>Крупнейший в России производитель корабельного остветительного оборудования</h2>
    <div>
      <p>Наша компания специализируется на произ водстве и поставке качественной осветительной техники.</p>
      <button class="about__head__btn">Подробнее</button>
    </div>
  </div>
  <div class="about__main">
    <div class="about__main__block">
      <h1>10</h1>
      <h3>ЛЕТ НА РЫНКЕ</h3>
      <p>Наша компания была основана в <span>2010 году</span> в г. Северодвинске</p>
    </div>
    <div class="about__main__block">
      <h1>35</h1>
      <h3>КОМПАНИЙ ПАРТНЁРОВ</h3>
      <p>Нашими партнерами являются такие компании, как <span>Tesla, Aeroflot, FedEx</span> и т.д</p>
    </div>
    <div class="about__main__block">
      <h1>750</h1>
      <h3>ЗАКАЗОВ ЕЖЕГОДНО</h3>
      <p>Мы выолняем заказы как <span>физических</span> лиц, так и <span>юридических</span>.</p>
    </div>
  </div>
  <img class="about__section__bg" src="@/assets/images/mainPage/bg_wave.svg" alt="">
</div>
</template>

<script>
export default {
name: "AboutSection"
}
</script>

<style scoped>
h1{
  font-family: Jost,sans-serif;
  color: #5BC0BE;
  font-size: 96px;
  text-shadow: 0 0 5px rgba(112,234,231,0.7);
  font-weight: normal;
}
h2{
  font-family: Jost,sans-serif;
  color: white;
  font-size: 48px;
  font-weight: normal;
}
h3{
  font-family: Montserrat,sans-serif;
  color: white;
  font-size: 24px;
}
p{
  font-family: Montserrat,sans-serif;
  color: #D1D1D1;
  font-size: 18px;
  font-weight: lighter;
}
span{
  font-family: Montserrat,sans-serif;
  color: #F2F2F2;
  font-size: 18px;
  font-weight: bold;
}
.about__section{
}
.about__section__bg{
  position: absolute;
}
.about__head{

}
.about__main__block{
  display: inline-block;
}
.about__head__btn{
  background-color: #F2F2F2;
  font-family: Montserrat,sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #0B132B;
  padding: 10px 65px;
  border-radius: 7px;
  box-shadow: 0 0 9px rgba(112,234,231,0.7);
}
</style>
