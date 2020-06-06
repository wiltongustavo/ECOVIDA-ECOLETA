import React from 'react';
import './styles.css'
import { FiLogIn} from 'react-icons/fi'


import logo from '../../assets/logo.svg';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Seu marketplace de coleta de residuos.</h1>
                    <p>Ajudamos pessoas a encontrarem ponsto de coleta de forma eficiente.</p>
                    <a href="/cadastro">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>
                            Cadastre um ponto de coleta
                        </strong>
                    </a>
                </main>
            </div>
        </div>
    );
}


export default Home;