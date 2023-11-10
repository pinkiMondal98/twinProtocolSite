import React from "react";
const NavBar = () => {
  return (
    <div className="navbar">
      <style>
        {`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');
.navbar {
            display: flex;
            align-items: center;
            height: 15%;
            background-color: #ffff;
            color: black;
            width:100%;
            font-family: 'Inter', sans-serif;
            justify-content: center;
            padding: 0 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
          }

          .company-name {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            text-align: center;
            font-size: 2.5rem;
          }
        `}
      </style>
      <div className="company-name flex">
        <div>
          <img
            src="https://demo.twinprotocol.com/assets/twinLogo-625c17ac.webp"
            alt="Twin Logo"
            style={{
              width: "95px",
              height: "95px",
           
            }}
            
          />
        </div>
        <div 
        style={{
          width: "100%",
        }}
        >
          <img
            src="data:image/webp;base64,UklGRuAPAABXRUJQVlA4WAoAAAAYAAAADgEAVAAAVlA4TAAPAAAvDgEVEBWH4rZtHHP/tXO9vCNiAvJQsQ7TVFnRJh8Mt/v/rh23+bk8jC/r45TUyzxOL5e9XPqB8iyba6+91dLLz90bCvFPWw4op60J3E0E6qIMdekYk/xcOONu87gXZqKWxjQXYkO9bBCC6x65E5xJbyq8GMwh5O5DRIRB6Ez6QNvdKueC7gtxGtu2q6w5c8r9ZDQKxXz5JTrWgYySYr6AHMm2q1YTmZCEBy29t0svDV1XAiPZpm3t7Kxn27Zt27Zt2/q2bdu2bdu2sXOycrYER5IUSfKozYE98Mrm7h9IirVt2ZsnsMpERkREAgrAdZRkyXxNhqnM7bLeuP2+b2LgipIaoKCLfxkBcVIU8Amok0dFGZz8O8itbbtOTovuI29tWTnnHEcekUbIBZAKoAjKQIyQBbu2bVWtLIqgCAo4Y40JxN09+XSBMtvWsuWZO/fDIbpGl+zumkgukehOJLn8ACe+QyQ5yd0lOsnhzHMUuW3bMLunvoM/0cjP+8/PDQc6BB0YoWD37lEWdKiP0YTJhAyKdoWgSN9R7HxMWHuz26vf9R2RPaUmCyBLiUn1R8hASqNtRV0Z7eERNhAAwhKBaOUF0J7HACIsmbKSVQHI0GFJoeQ1OFSSgHRhgCTHWRJJyAP5II9zJGqVeQBZkpg5v0Be/59ZyEQqkmPSO+NBZjNwVzICfVANKp1AlSAf+O4iawdIFZRuOCrP3YKCgSJZ+9sDNEEy6Aczng+6QfyjPL1KoHDjqOf6chRUPzX0SAJtkPpGaEYmCSkXNbYmgen5YBy0ACx4I0j02buzA87P/QKYAyZs/AXzc93D3wG1oByqBfbsytAnGAbvwAPwxJtF6N3zCcLBi0XwCuyBd/jRYUlJeUrRM3aFHiFn4bBjIgciGAM+gDuzoJf3+D8C0ST2ii7QO2p1/LSjEqwCb8AjcO06QsBTLiSHnhmA7Dlwb26LfZLbCGIBzwXimr/sxazJHoEjQJkkyWwWmgV086OqCKzBIvBFkmSzTwPGHDqMwR8VBVyqHUkSsgfLwA85mX0+MGQvT0UCf7ADYpJkjlDlWWhb4EKQmQTEf94iU65DkkAjR2UYEcxTrjUmN2ADx48wE/zFkzNVPtADYkLcXMi18/c7FPohE+RMfvuwMUc/gImA4py4HYkEpyTwDzJm4rMNTPKMETckgXqOnImCSIUAIWBZgBCkxSXWrHnRjEKIsevaIJsFwcw3FjRD/6Q2hhBb6augnA6Q9JxiljAKoY1ZDDpWuZJQd5TaLoxiawLfQLFv5avAFLMm5uz3Q/n5n73giBQiJIR+F6TNvc5AhhJKh3jURlnOkJsQmjyEqhUF9vGbzucg5WlP7CvXZzlG3ru1IrCFX3u5Bn77ejMhoa9Ec97YECV0RGH/Xg747FaetyOCckVt5ADRaoLcNFHgGVDnMGPaIMwv7qj4F1k/SPIMKQriitGkaLrQLStmkmlkjcxkBl2pSZL/aHlJU5SgYVbusly4DfDQmfTVaZmiGRjFIZn4/7MWg2TTZhpFzf4FE1nzZrVl6fOyWedDNHXOh1teSQLlOUHYAHe6UCz0bR5uDvyM305SIy8HGgkKhwXhNw8r5W/f794dAiCCdO9syHMa8MMpITgjDySYy7aMILDiMSATpE9CxdCKoChoHiE6gbTpuIA5MxZ1FknWvFAhCPpwIQi96KIboBnnqB8EtbNH1u940OTkgx7zOQuCxjxmQmE7yYpgmrUQ2tzp2y+66Ggwa0Zt0CoTSRJaoxgMegA6gTewXDrljBU1eldGzevmFKVf/u9zge25L9+UOs1dxzpjUq2VhEy7xuNd43VwS1pcW5hwWGDiay0KLOHg64Wb0DTGJcO11nDs4ewmcofW+z8akf9tHy5GXSrWkuAnwaqQsQAkBkET3IEMFGHBNujk6GnpnOuYMhp9kE6OnFew7azrCcFg0AZInU6ug3YJQunZvt37hrUGBfp29VM2CnoCUKWTveCA+hbOZc0BoXJrG70SkqSTJXBGD6ITsEdRMzkHPmjG2dbo5RBkDG5IZ0Pynj0AMJ+WwK8/VJSE4XCVsauXDSOfjHyjEfmsN7KUK4sUHeSTZ1Qlpi8H+QeF/EjFxVa5kNIg8ZWKgkIzjvzXRsczpUHvZIJiRYFWJta/pSiwgEw1MtTqRIJ16gROuCcpaXAyjxUkCIrlQkLB7prkwlWKEP+YTxJsUaeDZMUD82r1Rleol7gT8nYbMaVW0y9lL9V1nXo8d0atQDrrQ4GKuzIWIWX28sv/PRYNDNv186JCTi4ZHkwGPV8PiLyw9f5/E3nw0ZV6lQn9YURnF662MoWaxhlVMRa0ygHJMVctGoj10COrBZ6iKKiXY75DrcCV2nNY53hRQSAw95K4qlZHeywuUWsnknVeEsiDZwoCnlzghqJu4zAvlFfbzDiKiW4GfLlaA8fIVB0yZKJYxhsdsn3rfypAfP6rQvkQIWw2slx3EHlj5LfXjr8HFVp5XydqFalFrAkh2IVkVZcikSShUwbhDuCaAdlmQEtyHfol9bXFBYJlipriwLcdflqd/pcpT/bhaG7LAa1T1NFMPskNRYFxTAS7bNS8lAPf6TLJytm03lrRm2VpeomD6ro8Hd0MCQ4p6puRG3W3MauHzTuTYff3w3NkFawoOZuJHpG/B4UUJAiDLiz1QaCRFZmWThDEtJwyljLAIpLVAeD8Sxa0f41cWJaBFzvp6VXF9f2yfayK8PRG4NHHfZJDPuVfd2iTHM9Jy2WO1Tcr6nn5hePsVd9lUZdwYR8kXqNWryIv8qiwMI6+nEyvz7BeqUc2mxO3TxsVmkGsEw0L1EJBm+CBWgh1YSnuOOvEffuWoyAMuoapzpBm950InYEuLDYKrUAvE9fBK2mT/iuC9M/S4sdZjqfMSrcVSI6XZVeNuXda9gT2ilm1qHcweU0eo6gLON4HZHqr+o3IZ6WRm9DIw+vcdY+bjQDZhAqForAPwPc1FuVBCfbK62bVBjuOfK5aLw2cREmSQpSBCayYMaNgMplCXwKryJqQNvgk3cZEbw5K0LOd7EoBDKFvOwQ2FUjW4IR09gEurTT2/DKAfkXd5JDf9WxXqzceJoWJ77fY+GX7/2/n64G3O9wbjV0yHELLQkNPJ1pytTFimQYWcWluYrwyK618wElsZJJJmlkl6dLEBsIQgjS3Sg4rrs/LfrlM2VWyrN0iQftY+Qt0TYLujHkd9EcG1rAuV6a8JKdArYdNQYZw/RY14ZRl+OF3nz/we6ad+N3bFR5CPygX3SAiJJbpnU1SAoT6ILNhbRDo/7Qfg9Bmrzp7cfG3bnscpE8P9p6DCgqvPBpSpNP89CeyW9f9X0PaX5UOwdcm8OSAX/LPpxttkpAk9EK6qmYhzn4GDBfwRkFMN/Pkw+YDwSS1mocQhsMr3u9xzX/ksOIwNrFH6A8AI7SplmpnEEg6byVwrwneDxAK6q4OfPzjY5I9ZxPJaARmPPUctXotmUhywC9CPGrS/9f+WxATNImDkn/t/xT1GKY8A75fUdAoDgi2KOgUJs86VFfkG7l3Wrpq4D+Peas0fS3TYULFpaggwYjwwe/5e1/wwOPqBwwRMpuHqNrVRlrOBzlMzmjUBPn/yKo7AWSgcy9DHD7HKYWg/3bp8Ty1dtWAKf8DKf6pgoAvkaGlqHmNIMGWez7JR92qYMCdiVuKOov5rwbOQmfFg4p6P5P/fADib+GwznHZoQpr/oZCCJqHBTxw3Ow4PGt+SXQFPLSsHp3RDzu8WNCxHLyx60jmgKwzwBLytYq686J8d/7Eot5Dpsv6/csGJNihaNAhkqUgE3RDUV8kB5kkCi5j9URFA7s4rDheVNTzyYFrv/MJkCvJHh9jQfEUMiFDt9WJ3L6iICietYPez4XLRs5Nwe7QYruaJhgY5vdMZ4nvv2D2S6JOMS2tpjuCigpozy/3fPnqDjveOZWCmJbHrJyV5xSIN0Ffuo5OIPNNtYLwk+yVJPExCkFXrNHJ0ofVChL+gjUTJ2000nvW6eTcZUFfpkhWzkKF/oFSuvn0tDp9iWSGtfq092LgUIFD/rIFzdx9/jPmfV/3dHPQTqI/QOwVBbvayFSQG20xo0KcayWuzSnmT4trgmGFVvufP/XJl04+dNpi0Crr0qXmFxRaO+d/JySPv1Ox0QYTyYofUxs0+0oQD7m/FMoF6yC0Fdmz2Kv41D+1aHbiadvP/YX375NFza+xx4kS9I9TW6dmAblQNlS8xO5QAQGEMp3Lum983ksSas460airndQK8iMeKgwTT1ET9PL8jvuVUjSpbU0WTWCQFUtD8ml5SckgJkHd+fss/EcpyhSDLETTBisyEbKcVxtNio2sazW/xET2JmhkkiTJjuXoUIFceKYgPDe7fgR+6CFrFOetXVIRE18CvZF+PwcUqT/QBURBwdz+A3xpdQZ7TATdgliYPjK3QnFjRhYjhKGLpnO2SPo4TSujo9n3bk2nTcvyN9tmJ1l5hP4+Sl0MoWul+b/NiwPt26QmjkLoGum2NSZnzzCp2MbYxYmsQPz9xaAIx8tmz3xxEQNCzfYlwh/hD5x2IBjMD0Liyxw0iJ3zu0wE/l20p7FHet6CytxduMdIgoaLi3OLr0eSXzLpt9e4h2Q1JDB+2pyZJM1DU65j7eddkqBE7qZnDHntGbeYJNM8mLDGmvSMpX+clZlkX7nsgO9qm5NnrUgmxX2Tjgc54pbJ8yo9rkyBZG+VoE8Hiqi4PnMNB/yRcUdEkdAfKhSTl3qNmUGmGTfJ5DsNTbx25u9zPVvbAtk3LnEP/fn45PvO/6Q7oZ1bD/q9T1/LLt+rnSD6tNeCUVD9KYU35Ssu/d2DHrRW0I1Erh+9+tqHvP+mjxdIThwu1h6TCUHV/77LK1STvOivHv3aR29dRHo6dN3Wg/J534O2fo0l/nLa+vsLPn0yizLkXx2gE1SN+elL3Qx1r14KKbLH61ZXX3GKv0XnvoMdD41UBf8Sh8ljXhX5lXMuL4kMHXiEhiRLSFTpkLTh8Jq64PlaV8xoNOr7tFDg9eouS73eIHeiWPYxXQlJspRQ3UslhCzVmY4VTMefjmSpFu0+JMtrtTWm7Ce7oqeUZMWfaOTn/efn/ecnGwhFWElGugAAAEV4aWYAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAAC3cBAOgDAAALdwEA6AMAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAAAPAQAAA6AEAAEAAABVAAAAAAAAAA=="
            alt=""
            style={{position:"relative",top:"10px",left:"10px",
            height: "75px",
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
