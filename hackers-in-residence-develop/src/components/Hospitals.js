import React from "react"
import yashoda from "../assets/img/yashoda.jpg"
import appolo from "../assets/img/appolo.jpg"
import kims from "../assets/img/kims.jpg"
import care from "../assets/img/care.jpg"
import continental from "../assets/img/continental.jpg"

const Hospitals = () => {
    return(
<div className="body">
  <h1 align-items="center">
    <u>Hospitals In Hyderabad</u>
  </h1>
  <div className="charminar">
    <h2>
      <u> Apollo Hospital </u>
    </h2>
    <a
      href="https://www.google.com/maps/dir//Apollo+Hospitals+%7C+Hyderguda,+Near,+Plot+No.+3-5-836+to+838,+Hyderguda-Basheerbagh+Rd,+Old+MLA+Quarters,+King+Koti,+Hyderguda,+Hyderabad,+Telangana+500029/@17.3994426,78.476752,17z/data=!4m16!1m7!3m6!1s0x3bcb99b5be5befb1:0x59937b43fb2f9dda!2sApollo+Hospitals+%7C+Hyderguda!8m2!3d17.3994375!4d78.4793269!16s%2Fg%2F1v3gqcf1!4m7!1m0!1m5!1m1!1s0x3bcb99b5be5befb1:0x59937b43fb2f9dda!2m2!1d78.4793269!2d17.3994375?entry=ttu"
      target="_blank">
            <img
      src={appolo}
      title="Apollo Hospital click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
  <div className="golconda">
    <h2>
      <u> Yashoda Hospital </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Yashoda+Hospitals+-+Somajiguda,+6-3-905,+Raj+Bhavan+Rd,+Matha+Nagar,+Somajiguda,+Hyderabad,+Telangana+500082/@17.4244644,78.4540899,17z/data=!4m16!1m7!3m6!1s0x3bcb97b36c533e8d:0x3acfb01936398552!2sYashoda+Hospitals+-+Somajiguda!8m2!3d17.4244593!4d78.4566648!16s%2Fg%2F11p67mkc3j!4m7!1m0!1m5!1m1!1s0x3bcb97b36c533e8d:0x3acfb01936398552!2m2!1d78.4566648!2d17.4244593?entry=ttu"target="_blank">
    <img
      src={yashoda}
      title="Yashoda Hospital click me for direction" id="img"
    /></a>
  </div>
  <hr />
  <hr />
  <div className="Ramoji">
    <h2>
      <u> KIMS Hospital </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Begumpet,+KIMS+Hospitals,+1-8-31%2F1,+Minister+Rd,+Krishna+Nagar,+Ramgopalpet,+Secunderabad,+Hyderabad,+Telangana+500003/@17.4245094,78.4360651,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb9a044ce8779d:0xe3d099b2316a1d2b!2m2!1d78.4829868!2d17.4372675?entry=ttu"target="_blank">
    <img
      src={kims}
      title="KIMS Hospital click me for direction" id="img"
    /></a>
    <hr />
    <hr />
  </div>
  <div className="zoo">
    <h2>
      <u> Care Hospitals </u>
    </h2>
    <a href="https://www.google.com/maps/dir//CARE+Hospitals,+Banjara+Hills+%7C+Best+Hospital+in+Hyderabad,+Rd+Number+1,+Prem+Nagar,+Banjara+Hills,+Hyderabad,+Telangana+500034/@17.412618,78.4476688,17z/data=!4m16!1m7!3m6!1s0x3bcb972ff51ff959:0x55376a3d51b6637!2sCARE+Hospitals,+Banjara+Hills+%7C+Best+Hospital+in+Hyderabad!8m2!3d17.4126129!4d78.4502437!16s%2Fg%2F1thk75t6!4m7!1m0!1m5!1m1!1s0x3bcb972ff51ff959:0x55376a3d51b6637!2m2!1d78.4502437!2d17.4126129?entry=ttu"target="_blank">
    <img
      src={care}
      title="Care Hospitals click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
  <div className="sagar">
    <h2>
      <u> Continental Hospital </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Plot+No+3,+Continental+Hospitals,+Road+No.+2,+Financial+District,+Gachibowli,+Nanakramguda,+Telangana+500032/@17.4175315,78.336883,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb947fdee4f5a1:0x2ca09b4d2e3a79f!2m2!1d78.3394579!2d17.4175264?entry=ttu" target="_blank">
    <img
      src={continental}
      title="Continental Hsptl click me for direction"id="img"
    />
    </a>
  </div>
</div>
)
}
export default Hospitals;