
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo from '../IMAGES/support.png'
import Shutdown from '../IMAGES/shutdown.png'


export default function NavBar() {

    function logOut(){
        sessionStorage.removeItem('token')
        window.location.reload();
    }
    return (
        <div className={styles.wrapper_nav}>

            <div id={styles.navLogo}>
                <Link to={'/'}><img src={Logo} alt='logo' /></Link>
            </div>
            <div id={styles.navMenu}>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/Dashboard'>DASHBOARD</Link></li>
                    <li><Link to='/Registers'>REGISTERS</Link></li>
                </ul>



            </div>

            <div id={styles.navLogout}>
                <img src={Shutdown} alt='shutdown' onClick={logOut} />
            </div>


        </div>
    )

}