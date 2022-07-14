import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Bmi_Calculator() {
    return (
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | BMI Calculator</title>
                    </Helmet>
             </HelmetProvider>

             <div >
                <h1>BMI Calculator</h1>
            </div>
            
        </div>
    )
}

export default Bmi_Calculator
