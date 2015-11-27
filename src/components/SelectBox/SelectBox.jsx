import React, { Component, PropTypes } from 'react'

import styles from './SelectBox.scss'

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.props.handleChange('/api/city/' + ev.target.value)
  }

  render() {
    return (
      <div className={styles.selectbox_helper}>
        <select
          defaultValue=""
          className={styles.selectbox}
          onChange={this.handleChange}>
          <option value="">Select a city</option>
          {this.props.cityList.map(city => <option value={city} key={city}>{city}</option>)}
        </select>
      </div>
    )
  }
}

SelectBox.propTypes = {
  cityList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}