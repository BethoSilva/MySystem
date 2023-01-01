import styles from './FormProducts.module.css';

export default function FormProducts({ HandleChange }) {
    return (
        <div className={styles.wrapper_products}>


            <div className={styles.dados_produto} >
                <h3>DADOS DO PRODUTO</h3>
                <label htmlFor='id'>CÓDIGO</label>
                <input type={'text'} id='id' name='id' onChange={HandleChange} className={'inputClass'} /><br />

                <label htmlFor='descricao'>DESCRIÇÃO</label>
                <input type={'text'} id='descricao' name='descricao' onChange={HandleChange} className={'inputClass'} required /><br />


                <label htmlFor='tipo'>TIPO</label>
                <select type={'text'} id='tipo' name='tipo' onChange={HandleChange} className={'inputClass'} required >
                    <option value={''}>SELECIONE O TIPO</option>
                    <option value={'TEXTIL'}>TEXTIL</option>
                    <option value={'ELETRONICOS'}>ELETRONICOS</option>
                    <option value={'ELETRODOMESTICOS'}>ELETRODOMESTICOS</option>
                    <option value={'CAMA'}>CAMA</option>
                    <option value={'MESA'}>MESA</option>
                    <option value={'BANHO'}>BANHO</option>
                </select><br />

                <label htmlFor='unidade'>UNIDADES</label>
                <input type={'text'} id='unidade' name='unidade' onChange={HandleChange} className={'inputClass'} required />


                <label htmlFor='categoria'>CATEGORIA</label>
                <select id='categoria' name='categoria' onChange={HandleChange} className={'inputClass'} required >

                    <option value={''}>SELECIONE CATEGORIA</option>
                    <option value={'NACIONAL'}>NACIONAL</option>
                    <option value={'IMPORTADO'}>IMPORTADO</option>
                </select><br />


                <label htmlFor='subcategoria'>SUBCATEGORIA</label>
                <select id='subcategoria' name='subcategoria' onChange={HandleChange} className={'inputClass'} required>

                    <option value={''}>SELECIONE SUBCATEGORIA</option>
                    <option value={'PRONTA ENTREGA'}>PRONTA ENTREGA</option>
                    <option value={'PEDIDO'}>PEDIDO</option>
                </select><br />

                <label htmlFor='marca'>MARCA</label>
                <input type={'text'} id='marca' name='marca' onChange={HandleChange} className={'inputClass'} required /><br />

                <label htmlFor='modelo'>MODELO</label>
                <input type={'text'} maxLength={14} id='modelo' name='modelo' onChange={HandleChange} className={'inputClass'} required /><br />

            </div>
            <div className={styles.end_fornecedor}>
                <h3>FORNECEDOR</h3>

                <label htmlFor='fornecedor'>NOME</label>
                <input type={'text'} maxLength={14} id='fornecedor' name='fornecedor' onChange={HandleChange} className={'inputClass'} required /><br />

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
            <div className={styles.tributos}>
                <h3>Tributos</h3>
                <label htmlFor='custo'>CUSTO</label>
                <input type={'text'} id='custo' name='custo' onChange={HandleChange} className={'inputClass'} required />

                <label htmlFor='estoque'>ESTOQUE</label>
                <input type={'text'} id='estoque' name='estoque' onChange={HandleChange} className={'inputClass'} required /><br />
                <label htmlFor='venda'>VENDA</label>
                <input type={'text'} id='venda' name='venda' onChange={HandleChange} className={'inputClass'} required /><br />

            </div>

        </div>

    );
}