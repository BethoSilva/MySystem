
import styles from './FormUsers.module.css';

export default function FormUsers({ HandleChange}) {
    return (
        <div className={styles.wrapper_FormUsers} >

            <div className={styles.dados_pessoais} >
                <h3>DADOS PESSOAIS</h3>
                <label htmlFor='id'>CÓDIGO</label>
                <input type={'text'} id='id' name='id'  onChange={HandleChange}  className={'inputClass'} /><br />
                <label htmlFor='nome'>NOME</label>
                <input type={'text'} id='nome' name='nome' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='sobrenome'>SOBRENOME</label>
                <input type={'text'} id='sobrenome' name='sobrenome' onChange={HandleChange}  className={'inputClass'} required /><br />
                <label htmlFor='email'>EMAIL</label>
                <input type={'text'} id='email' name='email' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='contato'>CONTATO</label>
                <input type={'text'} maxLength={15} id='contato' name='contato' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='nascimento'>NASCIMENTO</label>
                <input type={'text'} maxLength={10} id='nascimento' name='nascimento' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='cpf'>CPF</label>
                <input type={'text'} maxLength={14} id='cpf' name='cpf' onChange={HandleChange}  className={'inputClass'} required /><br />
            </div>
            <div className={styles.endereco}>
                <h3>ENDEREÇO</h3>
                <label htmlFor='rua'>RUA</label>
                <input type={'text'} id='rua' name='rua' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='numero'>NÚMERO</label>
                <input type={'text'} id='numero' name='numero' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='bairro'>BAIRRO</label>
                <input type={'text'} id='bairro' name='bairro' onChange={HandleChange}  className={'inputClass'} required /><br />
                <label htmlFor='cidade'>CIDADE</label>
                <input type={'text'} id='cidade' name='cidade' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='estado'>ESTADO</label>
                <input type={'text'} id='estado' name='estado' onChange={HandleChange}  className={'inputClass'} required />
                <label htmlFor='cep'>CEP</label>
                <input type={'text'} maxLength={10} id='cep' name='cep' onChange={HandleChange}  className={'inputClass'} required /><br />

            </div>
            <div className={styles.usuario}>
                <h3>ACESSO</h3>
                <label htmlFor='login'>LOGIN</label>
                <input type={'text'} id='login' name='login' onChange={HandleChange}  className={'inputClass'} required />
                <label>PERFIL</label>
                <select id={'perfil'} name={'perfil'} onChange={HandleChange}  className={'inputClass'} required >
                    <option value={''}>SELECIONE O PERFIL</option>
                    <option value={'OPERADOR'}>OPERADOR</option>
                    <option value={'ADMINISTRADOR'}>ADMINISTRADOR</option>
                </select><br />
                <label htmlFor='senha'>SENHA</label>
                <input type={'text'} id='senha' name='senha' onChange={HandleChange}  className={'inputClass'} required /><br />
                <label htmlFor='senhaRep'>REPITA SENHA</label>
                <input type={'text'} id='senhaRep' name='senhaRep' onChange={HandleChange}  className={'inputClass'} required /><br />

            </div>





        </div>
    )
}