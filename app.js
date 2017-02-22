class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <div>
    <h2>Edwin's Basik Grocery List</h2>
    <ul>
      {props.groceryItems.map( (item) =>
        <GroceryListItem item = {item} />
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItems = {['Acai', 'Kale']} />, document.getElementById('app'));

