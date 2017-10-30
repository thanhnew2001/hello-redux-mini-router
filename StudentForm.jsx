import React from 'react'

export default class StudentForm extends React.Component{

    constructor(){
        super()
        this.state = {id: '', name: '', isEditing: false}
    }

    componentWillReceiveProps(props){
        this.setState(props.editedStudent)
    }
    
    handleSave(){
        if(!this.state.isEditing)
            this.props.addStudent(this.state)
        else{
            this.props.updateStudent(this.state)
        }         
        this.setState({id: '', name: '', isEditing: false})
    }

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleAddnew(){
        this.setState({id: '', name: '', isEditing: false})
    }

    render(){
        return(
            <div>
               <h1>Student Form</h1>
               <div>
                    <input type="text" name='id' value={this.state.id} onChange={this.handleChange.bind(this)}/>
                   <input type="text" name='name' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                   <button onClick={this.handleSave.bind(this)}>Save</button>
                   <button onClick={this.handleAddnew.bind(this)}>Add</button>
               </div>
            </div>
        )
    }
}