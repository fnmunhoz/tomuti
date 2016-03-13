import style from './start-button.css'

var React = require('react')

export default React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      <button className={this.renderButton()} onClick={this.props.onClick} />
    )
  },

  renderButton: function () {
    switch (this.props.status) {
      case 'running':
        return style.stop
      case 'stopped':
        return style.start
    }
  }
})
