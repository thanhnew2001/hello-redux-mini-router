import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './App.jsx'
import thunk from 'redux-thunk'

var initialState = [{id: 1, name: 'Thanh'}, {id: 2, name: 'Henry'}]

function students(state = initialState, action){
    switch(action.type){
        case 'LOAD_STUDENT_SUCCESS':
            return state
        case 'DELETE_STUDENT_SUCCESS':
            var newState = state.filter(s=>s.id!==action.payload)
            return newState
        case 'ADD_STUDENT':
            return [...state, action.payload]
        case 'UPDATE_STUDENT':
            var newState = state.map(s=>s.id!==action.payload.id? s: action.payload)
            console.log(newState)
            return newState      
        default:
        return state
    }
}

function editedStudent(state = {}, action){
    switch(action.type){
        case 'EDIT_STUDENT':
            return action.payload
        default:
        return state
    }
}

export function editStudent(id) {
  return (dispatch, getState) => {
    const students = getState().students;
    var student = students.filter((s)=>s.id===id)[0]
    console.log(student)
    dispatch({ type: 'EDIT_STUDENT', payload: student });
  }
}


const centralState = combineReducers({
    students, editedStudent
})

ReactDOM.render(
    <Provider store={createStore(centralState, applyMiddleware(thunk))}>
        <App />
    </Provider>
    , document.getElementById('app'))