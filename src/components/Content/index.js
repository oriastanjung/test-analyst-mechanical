import React from 'react'
import arrowIMG from '../../assets/arrowIcon.png'
// 1cm = n * 30px
function Content(props) {
  let panjangPenampang = 10
  let posisiArrow = 5
  let posisiRoll = 0
  let posisiSendi = 10

  return (
    <div className="content">
      <div className="content-container">
        <div className="beban" style={{marginLeft : `${(posisiArrow * 30)-35}px`}}></div>
        <div className="arrow" style={{marginLeft : `${(posisiArrow * 30)-15}px`}}>
          <img src={arrowIMG} alt="" width='30px'/>
        </div>
        <div className="penampang"> 
            <div style={{width: `${panjangPenampang * 30}px`, borderTop: '1px solid black'}}></div>
            <p style={{marginLeft : `${panjangPenampang * 30}px`}}>{`${panjangPenampang}cm`}</p>
        </div>
        <div className={'roll'} style={{marginLeft : `${(posisiRoll * 30)-25}px`}}></div>
        <div className='triangle' style={{marginLeft : `${(posisiSendi * 30)-30}px`}}></div>
      </div>
    </div>
  )
}

export default Content