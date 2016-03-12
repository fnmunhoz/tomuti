var React = require('react')

export default React.createClass({
  render: function () {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
})
