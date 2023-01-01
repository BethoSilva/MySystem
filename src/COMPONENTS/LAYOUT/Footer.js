import styles from './Footer.module.css';

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
    return(
        <div className={styles.wrapper_footer}>
            <div className={styles.sociais}>                
                    <div><FaFacebook /></div>
                    <div><FaInstagram/></div>
                    <div><FaLinkedin/></div>                
            </div>
            <div>&copy; 2022</div>
        </div>
    )
    
}