import ItemCount from './ItemCount/ItemCount.js';
import './ItemListContainer.css';

function ItemListContainer({ greetings }) {
  return (
    <section>
        <h3> { greetings } </h3>
        <ItemCount stock='13' />
    </section>
  );
}

export default ItemListContainer;