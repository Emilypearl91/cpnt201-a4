import dayjsMin from 'dayjs/dayjs.min'
import '/css/style.css'
import javascriptLogo from '/images/javascript.svg'
import viteLogo from '/images/vite.svg'
import { setupCounter } from '/js/counter.js'
import 'dayjs'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="event" data-date="oct,30,2023">
      <h2> today's date</h2>
      <div class="date"></div>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const event = document.querySelectorAll('event');

event.forEach( event => {
  const date = dayjs(event.dataset.date).format(MMM,DD,YYYY);
  const dateElement = event.querySelector('date');
  dateElement.innerText = date;
});
console.log('event')