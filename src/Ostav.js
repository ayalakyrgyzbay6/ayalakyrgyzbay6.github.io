import './Ostav.css';
import React from "react";
import Ostavki from "./Ostavki";

class Ostav extends React.Component {
    render() {
        let newUserName = React.createRef();
        let addUser = () => {
            let textToUserName = newUserName.current.value;
            alert(`Здраствуйте: ${textToUserName}. Вы были добавлены в список заявок, ожидайте ваш очередь!`);
        }
        return (
            <div>
                <p className="text">Ваше имя:</p>
                <input className="input" ref={newUserName}/>
                <p className="text1" >Ваш возраст:</p>
                <input className="input1"/>
                <p className="text2" >Ваш электронный адрес:</p>
                <input className="input2"/>
                <button className="button" onClick={ addUser }>Оставить заявку</button>

                <Ostavki name="Адема" message="Репетитор по химии"/>
                <Ostavki name="Аслан" message="История, обществознание, турецкий"/>
                <Ostavki name="Батыр" message="Репетитор по английскому языку"/>
                <Ostavki name="Ирина" message="Музыка, логопед, вокал"/>

            </div>
        );
    }
}
export default Ostav;