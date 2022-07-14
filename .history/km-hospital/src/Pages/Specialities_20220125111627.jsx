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
                 <div className={Style.title}>
                    <h1>Centers of Dominant Acheivement</h1>
                 </div>
             </div>
            
        </div>
    )
}

export default AboutUS
