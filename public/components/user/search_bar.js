import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term : ''}
  }

  render() {
    return (
      <div>
       <input onChange={this.onInputChange.bind(this)}/>
       Input: {this.state.term}
       {/* replace line 14 with any type of input manipulation  */}
     </div>
   )
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }
}

export default SearchBar
