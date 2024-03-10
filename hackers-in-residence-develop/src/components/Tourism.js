import React from "react"
import charminar1 from "../assets/img/charminar1.webp"
import golconda from "../assets/img/golconda.jpg"
import nehru from "../assets/img/nehru.jpg"
import sagar from "../assets/img/sagar.jpg"
import ramoji from "../assets/img/ramoji.jpg"

const Tourism = () => {
    return(
<div className="body">
  <h1 align-items="center">
    <u>Tourism Places In Hyderabad</u>
  </h1>
  <div className="charminar">
    <h2>
      <u> Charminar </u>
    </h2>

    <a
      href="https://www.google.com/maps/dir//Charminar,+Charminar+Rd,+Char+Kaman,+Ghansi+Bazaar,+Hyderabad,+Telangana+500002/@17.3613506,78.4707089,16.76z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb978a6e1a939b:0xcb5a69e4aaf113fb!2m2!1d78.4746645!2d17.3615636?entry=ttu"
      target="_blank">
            <img
      src={charminar1}
      title="Charminar click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
  <div className="golconda">
    <h2>
      <u> Golconda-Fort </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Golconda+Fort,+Hyderabad,+Telangana/@17.3834143,78.3911467,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb968c5f1342f3:0xd752a9bdbdde84df!2m2!1d78.4033392!2d17.3847636?entry=ttu"target="_blank">
    <img
      src={golconda}
      title="golconda click me for direction" id="img"
    /></a>
  </div>
  <hr />
  <hr />
  <div className="Ramoji">
    <h2>
      <u> Ramoji-Film-City </u>
    </h2>

    <a href="https://www.google.com/maps/dir//Ramoji+Film+City,+Abdullahpurmet,+Vijayawada+Highway,+Hyderabad,+Telangana+501512/@17.3420251,78.4098985,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb098aaf875395:0xc344846c0208671b!2m2!1d78.6818239!2d17.2641373?entry=ttu"target="_blank">
    <img
      src={ramoji}
      title="Ramoji-Film-City click me for direction" id="img"
    /></a>
    <hr />
    <hr />
  </div>
  <div className="zoo">
    <h2>
      <u> Nehru Zoological Park </u>
    </h2>
    
    <a href="https://www.google.com/maps/dir//Nehru+Zoological+Park+Hyderabad,+NH+44,+Bahadurpura,+Hyderabad,+Telangana+500064/@17.3507881,78.4489026,17z/data=!4m16!1m7!3m6!1s0x3bcb97c6c008fa9d:0x7b71bb447d86245b!2sNehru+Zoological+Park+Hyderabad!8m2!3d17.350783!4d78.4514775!16zL20vMDd0cHFt!4m7!1m0!1m5!1m1!1s0x3bcb97c6c008fa9d:0x7b71bb447d86245b!2m2!1d78.4514775!2d17.350783?entry=ttu"target="_blank">
    <img
      src={nehru}
      title="Nehru Zoological Park click me for direction" id="img"
    />
    </a>
    <hr />
    <hr />
  </div>
  <div className="sagar">
    <h2>
      <u> Hussain-Sagar </u>
    </h2>
    <a href="https://www.google.com/maps/dir//Hussain+Sagar,+Hyderabad,+Telangana/@17.4241454,78.4539169,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb97558c2e9b6b:0x25705363cc844e9d!2m2!1d78.4738215!2d17.4238798?entry=ttu" target="_blank">
    <img
      src={sagar}
      title="Hussain-Sagar click me for direction"id="img"
    />
    </a>
  </div>
</div>
)
}
export default Tourism;