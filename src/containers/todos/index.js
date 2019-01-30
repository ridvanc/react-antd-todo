import React from 'react'
import { connect } from 'react-redux'
// importing our Todos component
import Todos from '../../components/Todos'

// importing our todo's action's
import { todoActions } from '../../actions'

const TodosContainer = props => {
    
    // form submit handler to add a todo
    const handleformSubmit = todo => props.addTodo(todo)

    // Todo state of completed / uncompleted handler
    const handleTodoToggle = todo => props.toggleTodo(todo)

    return <Todos 
                onFormSubmit = { todo => handleformSubmit(todo) } 
                onTodoToggle = { id   => handleTodoToggle(id) } 
                todos        = { props.todos } 
            />
};

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = {
    addTodo: todoActions.addTodo,
    toggleTodo: todoActions.toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)