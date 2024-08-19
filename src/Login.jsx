import React from 'react'

function Login() {


  let n, p;


  function Nameclicked() {
    let text = document.getElementById("text");
    let namealert = document.getElementById("namealert")
    let sname = document.getElementById("sname")
    let pass = document.getElementById("pass")
    let details = document.getElementById("details")
    text.addEventListener("input", function () {
      let x = text.value;
      if (x.length < 3 || x.length > 20) {
        namealert.innerText = "Enter valid name";
        namealert.style.display = "block"
        text.style.color = "rgb(255, 138, 138)";
        namealert.style.color = "rgb(255, 138, 138)";
        details.style.display = "none"
        n = false;
      } else if (x.length >= 3 && x.length <= 20) {
        sname.innerText = "Name: "+x;
        text.style.color = "lightgreen";
        namealert.style.color = "lightgreen";
        namealert.style.display = "none"
        details.style.display = "none"
        n = true;
      }

    })
  }


  function passclicked() {

    let password = document.getElementById("password");
    let passwordalert = document.getElementById("passwordalert");
    let pass = document.getElementById("pass");

    password.addEventListener("input", function () {
      let y = password.value;
      if (y.length > 8) {
        passwordalert.innerText = "password must have only 8 characters"
        passwordalert.style.color = "rgb(255, 138, 138)";
        passwordalert.style.display = "block"
        password.style.color = "rgb(255, 138, 138)"
        p = false
      } else if (y.length < 8) {
        password.style.color = "white"
        passwordalert.innerText = "Enter valid password"
        passwordalert.style.color = "lightgreen";
        passwordalert.style.display = "block"
        p = false
      } else if (y.length === 8) {
        passwordalert.style.display = "none"
        password.style.color = "lightgreen"
        pass.innerText = "Password: "+y;
        p = true;
      }


    })

  }

  function Submitdetails(e) {
    e.preventDefault()
    let button1 = document.getElementById("button1")
    let details = document.getElementById("details")
    let namealert = document.getElementById("namealert")
    let passwordalert = document.getElementById("passwordalert")



    button1.addEventListener("click", function () {
      // e.preventDefault();
      if (n == true && p == true) {
        details.style.display = "block";
      } else if (n == true && p == false) {
        details.style.display = "none"
        passwordalert.innerText = "Enter correct password"

      } else if (n == false && p == true) {
        details.style.display = "none"
        namealert.innerText = "Enter correct name"
      } else if (n == false && p == false) {
        details.style.display = "none"
      }

    })



  }


function root(){
  let details = document.getElementById("details")
   details.style.display = "none" 

}



  return (
    <div >
      <div className="back">
        <form action="" >
          <h1>Login</h1>
          <div id='ele'>
            <label htmlFor="">Username</label>
            <input type="text" id='text' onFocus={Nameclicked} placeholder='Type your username' autoFocus />
            <span id='namealert'>hello</span>
          </div>
          <div id='ele'>
            <label htmlFor="">password</label>
            <input type="password" id="password" onFocus={passclicked} placeholder='Type your password' />
            <span id='passwordalert'>hello</span>
          </div>
          <div id='buttons'>
            <button id="button1" type="submit" onClick={Submitdetails} value="submit">Submit</button>
            {/* <button id="button2" >Cancel</button> */}
          </div>
        </form>
        <div id="details">
          <h1>Credentials</h1>
          <p id="sname"></p>
          <p id="pass"></p>
          <br />
          <button id="button2" onClick={root} >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Login
