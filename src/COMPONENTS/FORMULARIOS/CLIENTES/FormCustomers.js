
import styles from './FormCustomers.module.css';

import { useState } from 'react';

import ModalHistorico from './ModalHistórico';
import Message from '../../AVISOS/Message'

export default function FormCustomers({ HandleChange }) {

    const [showModal, setShowModal] = useState(false);
    const [showMsg, setShowMsg] = useState([false,'',''])

    const user = getUser();

    function getUser() {
        let user = sessionStorage.getItem('dataForm');
        user = JSON.parse(user);
        return user;
    };



    function showHistorico() {

        let dado = user;

        if (dado !== null) {
            if (showModal) {
                setShowModal(false);
            } else {
                setShowModal(true)
            }
        }else{
            setShowMsg([true, 'error' , 'POR FAVOR INSIRA O CLIENTE'])
            setTimeout(() => {
                setShowMsg([false]);
            }, 3500);
        }

    }


    return (
        <div className={styles.wrapper_FormCustomers} >
            {
                showModal &&
                <ModalHistorico setShowModal={showHistorico} />
            }
            {
                showMsg[0] && <Message type={showMsg[1]} msg={showMsg[2]}/>
            }



            <div className={styles.dados_pessoais} >
                <h3>DADOS PESSOAIS</h3>
                <label htmlFor='id'>CÓDIGO</label>
                <input type={'text'} id='id' name='id' onChange={HandleChange} className={'inputClass'} /><br />
                <label htmlFor='nome'>NOME</label>
                <input type={'text'} id='nome' name='nome' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='sobrenome'>SOBRENOME</label>
                <input type={'text'} id='sobrenome' name='sobrenome' onChange={HandleChange} className={'inputClass'} required /><br />
                <label htmlFor='email'>EMAIL</label>
                <input type={'text'} id='email' name='email' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='contato'>CONTATO</label>
                <input type={'text'} maxLength={15} id='contato' name='contato' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='nascimento'>NASCIMENTO</label>
                <input type={'text'} maxLength={10} id='nascimento' name='nascimento' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='cpf'>CPF</label>
                <input type={'text'} maxLength={14} id='cpf' name='cpf' onChange={HandleChange} className={'inputClass'} required /><br />
            </div>
            <div className={styles.endereco}>
                <h3>ENDEREÇO</h3>
                <label htmlFor='rua'>RUA</label>
                <input type={'text'} id='rua' name='rua' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='numero'>NÚMERO</label>
                <input type={'text'} id='numero' name='numero' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='bairro'>BAIRRO</label>
                <input type={'text'} id='bairro' name='bairro' onChange={HandleChange} className={'inputClass'} required /><br />
                <label htmlFor='cidade'>CIDADE</label>
                <input type={'text'} id='cidade' name='cidade' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='estado'>ESTADO</label>
                <input type={'text'} id='estado' name='estado' onChange={HandleChange} className={'inputClass'} required />
                <label htmlFor='cep'>CEP</label>
                <input type={'text'} maxLength={10} id='cep' name='cep' onChange={HandleChange} className={'inputClass'} required /><br />

            </div>
            <div className={styles.cliente}>
                <h3>RESUMO</h3>
                <label htmlFor='compra'>ULTIMA COMPRA</label>
                <input type={'text'} id='compra' name='compra' onChange={HandleChange} className={'inputClass'} required /><br />                <label>PERFIL</label>
                <select id={'perfil'} name={'perfil'} onChange={HandleChange} className={'inputClass'} required >
                    <option value={''}>SELECIONE O PERFIL</option>
                    <option value={'ATIVO'}>ATIVO</option>
                    <option value={'INATIVO'}>INATIVO</option>
                </select>

                <input type='button' value={'HISTÓRICO'} className={styles.btn_historico} onClick={showHistorico} />


                <br />
                <label htmlFor='limite'>LIMITE DE CRÉDITO</label>
                <input type={'text'} id='limite' name='limite' onChange={HandleChange} className={'inputClass'} required /><br />


            </div>





        </div>
    )
}