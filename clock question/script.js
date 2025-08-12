// Get references to hand elements
const hourHand = document.getElementById('hour');
const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');
const clock = document.getElementById('clock');
const face = document.getElementById('face');

// Create 12 hour marks
for(let i=0;i<12;i++){
  const m = document.createElement('div');    // create a new div
  m.className = 'mark';                        // assign 'mark' class
  m.style.transform = `rotate(${i * 30}deg) translateY(-6px)`; // each mark rotated by 30 degrees
  face.appendChild(m);                         // add mark to face
}

// Rotate element to given degree
function setRotation(element, deg){
  element.style.transform = `rotate(${deg}deg)`;
}

// Update clock hands
function updateClock(){
  const now = new Date();  // current time

  const seconds = now.getSeconds();            // seconds value
  const minutes = now.getMinutes();            // minutes value
  const hours = now.getHours() % 12;           // hours in 12-hour format

  // Calculate degrees for each hand
  const secDeg = seconds * 6;                                // 360° / 60
  const minDeg = minutes * 6 + (seconds / 60) * 6;           // minutes + seconds progress
  const hourDeg = hours * 30 + (minutes / 60) * 30;          // hours + minutes progress

  // When seconds reset to 0, disable transition to avoid jump
  if(seconds === 0){
    clock.classList.add('no-transition');
    requestAnimationFrame(()=> {
      setRotation(secHand, secDeg);
      setRotation(minHand, minDeg);
      setRotation(hourHand, hourDeg);
      requestAnimationFrame(()=> clock.classList.remove('no-transition'));
    });
  } else {
    // Normal update
    setRotation(secHand, secDeg);
    setRotation(minHand, minDeg);
    setRotation(hourHand, hourDeg);
  }
}

// Initial run
updateClock();

// Run every second
setInterval(updateClock, 1000);
