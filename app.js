class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onMouseEnterItem() {
    this.setState({
      hover: true
    });
  }
  onMouseExitItem() {
    this.setState({
      hover: false
    });
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onMouseEnterItem.bind(this)} onMouseLeave={this.onMouseExitItem.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h2>Edwin's Basik Grocery List</h2>
    <ul>
      {props.groceryItems.map( (item, index) =>
        <GroceryListItem item = {item} key={index}/>
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItems = {['Acai', 'Kale', 'Bananas']} />, document.getElementById('app'));

