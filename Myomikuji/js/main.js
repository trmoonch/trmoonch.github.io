'use strict';
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() =>{
    
    const n = Math.random();
    if (n < 0.3){
      btn.textContent = '当たり!!';
      document.getElementById('btn_audio').currentTime = 0;
      document.getElementById('btn_audio').play();
     }
    else if (n < 0.4) {
      btn.textContent = '再挑戦';
      document.getElementById('btn_audio3').currentTime = 0;
      document.getElementById('btn_audio3').play();
    } 
    else {
        btn.textContent = '残念..';
        document.getElementById('btn_audio2').currentTime = 0;
      document.getElementById('btn_audio2').play();
      } 
  });
  }
