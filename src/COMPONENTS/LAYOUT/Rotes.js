
import styles from './Rotes.module.css';
import Home from '../PAGES/Home';
import Dashboard from '../PAGES/Dashboard';
import Registers from '../PAGES/Registers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

export default function Rotes() {
    return(
        <div className={styles.wrapper_rotes}>
            <Router>
                <NavBar/>
                <Routes >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Dashboard' element={<Dashboard/>}/>
                    <Route path='/Registers' element={<Registers/>}/>
                </Routes>
                
            </Router>
            
            
        </div>
    )
    
}