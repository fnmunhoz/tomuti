var React = require('react')

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
})
