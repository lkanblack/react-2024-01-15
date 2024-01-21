import ReactDOM from 'react-dom/client'
import { restaurants } from './mock/mock'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <section>
      <p>Restaraunt name: <b>{restaurants[0].name}</b></p>
      <h3>Menu</h3>
      <ul>
        <li><em>{restaurants[0].menu[0].name}</em></li>
        <li><em>{restaurants[0].menu[1].name}</em></li>
        <li><em>{restaurants[0].menu[2].name}</em></li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li><u>{restaurants[0].reviews[0].text}</u></li>
        <li><u>{restaurants[0].reviews[1].text}</u></li>
      </ul>
    </section>
    <hr />
    <section>
      <p>Restaraunt name: <b>{restaurants[1].name}</b></p>
      <h3>Menu</h3>
      <ul>
        <li><em>{restaurants[1].menu[0].name}</em></li>
        <li><em>{restaurants[1].menu[1].name}</em></li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li><u>{restaurants[1].reviews[0].text}</u></li>
        <li><u>{restaurants[1].reviews[1].text}</u></li>
        <li><u>{restaurants[1].reviews[2].text}</u></li>
      </ul>
    </section>
    <hr />
    <section>
      <p>Restaraunt name: <b>{restaurants[2].name}</b></p>
      <h3>Menu</h3>
      <ul>
        <li><em>{restaurants[2].menu[0].name}</em></li>
        <li><em>{restaurants[2].menu[1].name}</em></li>
        <li><em>{restaurants[2].menu[2].name}</em></li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li><u>{restaurants[2].reviews[0].text}</u></li>
      </ul>
    </section>
    <hr />
    <section>
      <p>Restaraunt name: <b>{restaurants[3].name}</b></p>
      <h3>Menu</h3>
      <ul>
        <li><em>{restaurants[3].menu[0].name}</em></li>
        <li><em>{restaurants[3].menu[1].name}</em></li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li><u>{restaurants[3].reviews[0].text}</u></li>
        <li><u>{restaurants[3].reviews[1].text}</u></li>
      </ul>
    </section>
  </div>
)

