import React from 'react'
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
                 Centers of Dominant Acheivement
             </div>
            
        </div>
    )
}

export default AboutUS
