var SimpleTable = require('react-simple-table');
var React = require('react');

var fruitColors = [{
  apple: 'Green',
  peach: 'Yellow',
  cherry: 'Red'
}];

React.renderComponent({
  render: function() {
    return (
      <SimpleTable columns={['apple', 'peach', 'cherry']}, data={fruitColors} />
    )
  }
});