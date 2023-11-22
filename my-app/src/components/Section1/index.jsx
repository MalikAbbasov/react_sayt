import React from 'react'
import "./section1.css"

function Section1() {
  return (
    <div>
        <section id='card_section'>
            <p className='text'>A better way to start building.</p>
            <div className="cards">
                <div className="card">
                <img src="https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750" alt="" />
                    <h4>Messi</h4>
                    <p>Lionel Andrés Messi also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club ...</p>

                </div>
                <div className="card">
                <img src="https://www.elite-athletes-agency.com/wp-content/uploads/2020/11/ronaldinho-gaucho-mls.jpg.webp" alt="" />
                    <h4>Ronaldinho</h4>
                    <p>Ronaldo de Assis Moreira , more commonly known as Ronaldinho, or Ronaldinho Gaúcho, is a retired Brazilian footballer</p>

                </div>
                <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLUXh3K_UiMTphcbDB-wIbECY_27YlYyZDw&usqp=CAU" alt="" />
                    <h4>Maldini</h4>
                    <p>Paolo Cesare Maldini OMRI is an Italian former professional footballer who played primarily as a left back and centre back for AC Milan and the Italy ...</p>

                </div>
                <div className="card">
                <img src="https://w0.peakpx.com/wallpaper/336/288/HD-wallpaper-iker-casillas-soccer.jpg" alt="" />
                    <h4>Casillas</h4>
                    <p>Iker Casillas Fernández is a Spanish former professional footballer who played as a goalkeeper and currently works as a football commentator.</p>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Section1