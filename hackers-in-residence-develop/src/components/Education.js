import React from "react"
import appolo from "../assets/img/appolo.jpg"
import oosmania from "../assets/img/oosmania.jpg"
import jntu from "../assets/img/jntu.jpg"
import cbit from "../assets/img/cbit.jpg"

const Education = () => {
    return(
<div className="body">
  <h1 align-items="center">
    <u>Educational Services</u>
  </h1>
  <div className="charminar">
    <h2>
      <u> Oosmania University </u>
    </h2>

    <a
      href="https://www.google.com/maps/dir//Osmania+University,+Amberpet,+Hyderabad,+Telangana/@17.4228635,78.4933749,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb9973bb0015e9:0x2b40415"
      target="_blank">
            <img
      src={oosmania}
      title="Oosmania University click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
  <div className="golconda">
    <h2>
      <u> Jawaharlal Nehru Technological University,Hyderabad </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Jawaharlal+Nehru+Technological+University+Hyderabad,+Ashok+Nagar,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500085/@17.4932681,78.386522,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb9186c9216501:0x5b92f2e1fd8fc012!2m2!1d78.3913929!2d17.4932682?entry=ttu"target="_blank">
    <img
      src={jntu}
      title="JNTU click me for direction" id="img"
    /></a>
  </div>
  <hr />
  <hr />
  <div className="Ramoji">
    <h2>
      <u> Chaitanya Bharathy Institute Of Techology </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Chaitanya+Bharathi+Institute+of+Technology,+Osman+Sagar+Rd,+Kokapet,+Gandipet,+Hyderabad,+Telangana+500075/@17.4135591,78.3124796,14.45z/data=!4m16!1m7!3m6!1s0x3bcb94eba8ad7c87:0xb78f51ed556f7cc5!2sChaitanya+Bharathi+Institute+of+Technology!8m2!3d17.3919735!4d78.3194368!16zL20vMGJ4dHhi!4m7!1m0!1m5!1m1!1s0x3bcb94eba8ad7c87:0xb78f51ed556f7cc5!2m2!1d78.3194368!2d17.3919735?entry=ttu"target="_blank">
    <img
      src={cbit}
      title="CBIT University click me for direction" id="img"
    /></a>
    <hr />
    <hr />
  </div>
  <div className="zoo">
    <h2>
      <u> Apollo Institute of Medical Sciences and Research </u>
    </h2>
    
    <a href="https://www.google.com/maps/dir//Apollo+Institute+of+Medical+Sciences+and+Research,+Apollo+health+City+Campus,+Road+No.92,+Jubilee+Hills,+Film+Nagar,+Hyderabad,+Telangana+500090/@17.4180004,78.4020241,14.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb96cedf4c3327:0x41edbf89d86ce2c8!2m2!1d78.4124111!2d17.4142362?entry=ttu"target="_blank">
    <img
      src={appolo}
      title="Apollo Institute click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
</div>
)
}
export default Education;