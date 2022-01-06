import './Footer.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Footer(){
    return(
      
        <footer className="Footer bg-dark py-5">
            <div className='container'>    
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <h className='Footer-h'> Событие</h>
                        <hr className='Footer-hr'></hr>
                        <ul className="list-unstyled text-small">
                            <h3 className='Footer-h3'>МЕЖРЕГИОНАЛЬНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ ХИРУРГОВ ИРКУТСКОЙ ОБЛАСТИ</h3>
                            <h3 className='Footer-h3'>«АКТУАЛЬНЫЕ ВОПРОСЫ ХИРУРГИИ»</h3>
                            <h3 className='Footer-h3'>К 100-ЛЕТИЮ КАФЕДРЫ ОБЩЕЙ ХИРУРГИИ И КАФЕДРЫ ФАКУЛЬТЕТСКОЙ ХИРУРГИИ ИГМУ</h3>
                            </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <h className='Footer-h'>Ресурсы</h>
                        <hr className='Footer-hr'></hr>
                        <ul className="list-unstyled text-small">
                            <li><a className="Footer-link" href="/">Главная</a></li>
                            <li><a className="Footer-link" target="_blank" href="/files/rasp.pdf">Распоряжение о проведении конференции</a></li>
                            <li><a className="Footer-link" target="_blank" href="/files/prog.pdf">Программа конференции</a></li>
                            <li><a className="Footer-link" target="_blank" href="/files/prikaz.pdf">Приказ о проведении конференции</a></li>
                            <li><a className="Footer-link" href="/politic">Политика обработки персональных данных</a></li>
                            <li><a className="Footer-link" href="/useragreement">Пользовательское соглашение</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <h className='Footer-h'>Контакты</h>
                        <hr className='Footer-hr'></hr>
                        <ul className="list-unstyled text-small">
                            <li><a className="Footer-link" href="https://ismu.baikal.ru">Федеральное государственное бюджетное образовательное учреждение высшего образования «Иркутский государственный медицинский университет» Министерства здравоохранения Российской Федерации</a></li>
                            <li><a className="Footer-link" href="https://goo.gl/maps/uzvWoXGWTtfrLFKA7"> Адрес: г. Иркутск, ул. Красного Восстания, 1</a></li>
                            <li><a className="Footer-link" href="mailto:rektorat@ismu.baikal.ru">E-mail: rektorat@ismu.baikal.ru</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Footer-copyright py-3 text-center">
                    <small className=" Footer-copyright d-block text-center"><a className='Footer-copyright' href="mailto:kotov.irk@gmail.com">Разработка - Иван Котов</a> &copy; 2022г.</small>
                </div>
            </div>    
        </footer>
    );
}

export default Footer;