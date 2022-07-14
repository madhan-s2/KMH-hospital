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

             
            
        </div>
    )
}

export default AboutUS
