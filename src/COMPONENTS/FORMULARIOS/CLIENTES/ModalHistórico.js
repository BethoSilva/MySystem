import styles from './FormCustomers.module.css';

import { useState } from 'react';

export default function ModalHistorico({setShowModal}){
    
    
    const[user, setUser] = useState(getUser() || '');

    function getUser(){
        let user = sessionStorage.getItem('dataForm');
        user = JSON.parse(user);
        return user[0];
    };


    return(
        <div className={styles.wrapper_modalHistorico}>

            
            
            <div className={styles.header_resume}>
                 <h1>{user.nome+' '+user.sobrenome} </h1>
                 <input type={'button'} className={styles.btn_historico} onClick={setShowModal}value='VOLTAR' />
            </div>
           

            
            
            <h3>Compras Realizadas</h3>
            
            <div className={styles.area_resumo}>
            
                <table className={styles.table_resume}>
                    <tbody>
                        <tr>
                            <td colSpan={1}><b>DESCRIÇÃO:</b></td>
                            <td colSpan={3}>aqui vai o nome do produto</td>
                            <td colSpan={1}>CODIGO:</td>
                            <td colSpan={1}>id do produto</td>
                        </tr>
                        <tr>
                            <td colSpan={1}><b>QUANTIDADE:</b></td>
                            <td colSpan={1}>qtdade</td>
                            <td colSpan={1}><b>Tipo de Credito:</b></td>
                            <td colSpan={1}>especie/cartao</td>
                            <td colSpan={1}><b>CONDIÇÕES DE PAGAMENTO:</b></td>
                            <td colSpan={1}>a vista/a prazo </td>
                        </tr>
                        <tr>
                            <td colSpan={1}><b>SITUAÇÃO:</b></td>
                            <td colSpan={1}>se esta pago</td>
                            <td colSpan={1}><b>VENDEDOR:</b></td>
                            <td colSpan={1}>nome do vendedor</td>
                            <td colSpan={1}><b>CÓDIGO :</b></td>
                            <td colSpan={1}>id do vendedor</td>
                        </tr>

                        
                    </tbody>
                </table>
                
            </div>


                {
                    /*lista com

                    - nome cliente 
                    - descrição
                    - quntidade
                    - tipo de credito
                    - condições de pagamento
                    - situação (se esta quitado)
                    - vendedor
                    - codigo do produto 
                    - codigo do vendedor
                      */
                }
            

        </div>
    )
}