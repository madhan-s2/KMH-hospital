import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';

function AboutUS() {
    return (
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | About Us</title>
                    </Helmet>
             </HelmetProvider>

             <div className={Styles.title}>
                <h1>About Us</h1>
            </div>
            
        </div>
    )
}

export default AboutUS
