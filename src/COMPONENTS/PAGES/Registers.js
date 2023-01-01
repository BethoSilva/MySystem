
import styles from './Registers.module.css';
import './Pages.css';
import Usuarios from '../IMAGES/add-group1.png';
import Clientes from '../IMAGES/consumer1.png';
import Produtos from '../IMAGES/add-package1.png';
import Servicos from '../IMAGES/customer-service1.png';
import Painel from '../FORMULARIOS/Painel';
import { useState } from 'react';

import ErrorBoundary from '../UTIL/ErrorBoundary';


export default function Register() {

    const [showPainel, setShowPainel] = useState(getIcon() || '');


    function setIcon(e) {
        let keyIcone = e.target.className;
        sessionStorage.setItem('keyIcone', JSON.stringify(keyIcone));
        setShowPainel(keyIcone);
    };

    function getIcon() {
        let keyIcone = sessionStorage.getItem('keyIcone');
        keyIcone = JSON.parse(keyIcone);
        return keyIcone
    }









    return (

        <ErrorBoundary>


            <div className='wrapper_page' >



                {showPainel &&

                    <Painel />
                }










                <div className={styles.icons}>


                    <div className={styles.iconList}>

                        <div className={'iconUser'} onClick={setIcon}>
                            <img src={Usuarios} alt={'usuario'} className={'iconUser'} onClick={setIcon} /><br />
                            <span className={'iconUser'} onClick={setIcon}>usuarios</span>
                        </div>

                        <div className={'iconCustomer'} onClick={setIcon}>
                            <img src={Clientes} alt={'clientes'} className={'iconCustomer'} onClick={setIcon}/><br />
                            <span className={'iconCustomer'}  onClick={setIcon}>Clientes</span>
                        </div>

                        <div className={'iconProducts'}  onClick={setIcon}>
                            <img src={Produtos} alt={'produtos'} className={'iconProducts'} onClick={setIcon}/><br />
                            <span className={'iconProducts'}  onClick={setIcon}>Produtos</span>
                        </div>

                        <div className={'iconService'}>
                            <img src={Servicos} alt={'serviços'} /><br />
                            <span>Serviços</span>
                        </div>

                    </div>
                </div>
                <div className={styles.workspace}>



                </div>

            </div>
        </ErrorBoundary>
    )
}