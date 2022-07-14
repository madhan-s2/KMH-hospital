import React from 'react'
import Styles from '../Styles/Specialities.module.css'
import { Helmet,HelmetProvider } from 'react-helmet-async';

function AboutUS() {
    return (
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | Specialities</title>
                    </Helmet>
             </HelmetProvider>

             <div className="aboutus">
                 <div className={Styles.title}>
                    <h1>Centers of Dominant Acheivement</h1>
                 </div>
             </div>
            
        </div>
    )
}

export default AboutUS
