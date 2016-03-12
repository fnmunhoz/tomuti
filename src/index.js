import style from './index.css'

var React = require('react')
var ReactDOM = require('react-dom')

import Ticker from './ticker'

ReactDOM.render(
  <Ticker className={style.component} />,
  document.getElementById('tomuti')
)
