import React from 'react';

function Form({submit, setSubmit, text, setText}) {

    let emailArray = [];

    //handlers. Need for submit button and input for text
    const setTextHandler = (e) => { 
        // console.log(e.target.value)
        
        setText(e.target.value);
    };

    const setSubmitHandler = (e) => {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        e.preventDefault();

        setSubmit(text);
        console.log(text)

        if(text.value.match(mailformat)) {
            console.log("it works")
            emailArray.push(text);
            return true
        } else if (!text.value.match(mailformat)) {
            console.log("FAIL");
            return false
        }

        emailArray.push(text);
        
        // console.log("hello world");
        console.log(emailArray[0])
        console.log(emailArray)
        setText("");
    }



    return(
        <div>
            <form>
                <input 
                    type="email" 
                    className="inputText"
                    onChange={setTextHandler}
                    placeholder="enter your email"
                ></input>
                
                <button
                    onClick={setSubmitHandler}
                >Submit</button>
            </form>
        </div>
    )
}

export default Form;