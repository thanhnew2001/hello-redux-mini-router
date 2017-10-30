import React from 'react'

export default class StudentList extends React.Component{
    render(){
        return(
            <div>

                <h1>Student List</h1>
                {this.props.students.map(s=>
                    <li>{s.name} |
                    
                    <a onClick={()=>this.props.deleteStudent(s.id)}>Delete</a> |

                    <a onClick={()=>this.props.editStudent(s.id)}>Edit</a>

                    </li>
                )}

            </div>
        )
    }
}