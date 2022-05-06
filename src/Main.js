import './Main.css';
import ph from './img/ph.png';
const Main = () => {
  return(
    <div className='Main'> 
     <div class="ph"><img src={ph} /></div>
     <h1 class="main-item">Поиск репетитора:</h1>
     <input class="main-item" type="text"></input>
    <p class="main-item">Если Вам нужен репетитор, то наш проект поможет вам осуществить 
    поиск репетитора.</p>
    <p class="main-item">Подбор репетитора осуществляется БЕСПЛАТНО, Вы оплачиваете только занятия с репетитором. </p>
    <p class="main-item">Оставьте заявку и ждите звонка репетитора!</p>
    
                
     </div>
  )
}

export default Main;


   