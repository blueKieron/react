import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'

class Person extends Component {
  add = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    this.props.addPerson({id: nanoid(), name, age})
  }
  render() {
    return (
      <div>
        <input ref={c => this.nameNode = c} type="text" placeholder="name"/>
        <input ref={c => this.ageNode = c} type="text" placeholder="age"/>
        <button onClick={this.add}>添加</button>
        <ul>
          {
            this.props.persons.map(p => <li key={p.id}>{p.name}- {p.age}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({persons: state.persons}),
  {
    addPerson: createAddPersonAction
  }
)(Person)
