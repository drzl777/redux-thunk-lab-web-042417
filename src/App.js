import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {fetchCats} from './actions/catActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

export class App extends Component {
  //
  // handleClick = event => {
  //   event.preventDefault()
  //   this.props.fetchCats()
  //
  // }
  componentDidMount () {
    this.props.fetchCats()
  }

  render () {
    return (
      <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
