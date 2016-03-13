var React = require('react')

export default React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      <button onClick={this.props.onClick}>
        {this.renderLabel()}
      </button>
    )
  },

  renderLabel: function () {
    switch (this.props.status) {
      case 'running':
        return 'STOP'
      case 'stopped':
        return 'START'
    }
  }
})
