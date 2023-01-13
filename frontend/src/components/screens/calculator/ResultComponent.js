import React, { Component } from 'react';

const terbilang = require('angka-menjadi-terbilang')

class ResultComponent extends Component {

  render() {
    let {result} = this.props;
    return (
      <div className="result">
        <p>{result}</p>
        <h5>{terbilang(result)}</h5>
      </div>
    )
    ;
  }
}

export default ResultComponent;