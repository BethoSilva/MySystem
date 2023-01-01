
import Footer from "../LAYOUT/Footer";
import styles from './Main.module.css';

import Login from '../LOGIN/Login'
import Rotes from '../LAYOUT/Rotes';



export default function Main() {


    const getToken = () => {
        let token = sessionStorage.getItem('token');
        return token;
    }
    const token = getToken();

    if (!token) {
        return <Login />
    } else {

    }

    return (
        <div className={styles.wrapper_Main}>

            <Rotes />
            <Footer />
        </div>
    )
}