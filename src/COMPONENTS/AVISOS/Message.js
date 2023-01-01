
import styles from './Messages.module.css';

export default function Message({msg, type, Handle}){

    if(type !== 'confirm'){
    return(
        <div className={styles.wrapper_msg}>
            <div className={`${styles.boxMessage}  ${styles[type]}`} >
                <h1>{msg}</h1>
            </div>

        </div>
        )
    }else{
        
        return(
        <div className={styles.wrapper_msg}>
            <div className={`${styles.boxMessage}  ${styles[type]}`} >
                <h1>{msg}</h1>
                <div className={styles.btn_msg}>

                    <input type={'button'} value='SIM' onClick={Handle}/>
                    <input type={'button'} value='NÃO' onClick={Handle}/>

                </div>

            </div>

        </div>
    )

    }

}