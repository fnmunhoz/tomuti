var React = require('react')

export default React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      <button onClick={this.props.onClick}>
        {this.props.status}
      </button>
    )
  }
})
