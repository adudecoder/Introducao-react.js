import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
      <Item texto='Item 1 com Texto' />
      <Item texto='Item 2 com Texto' />
      <Item texto='Item 3 com Texto' />
      </ul>
      <ul>
      <Item>Item 1 com Children</Item>
      <Item>Item 2 com Children</Item>
      <Item>Item 3 com Children</Item>
      </ul>
      <Card />
    </div>
  )
}

export default App;