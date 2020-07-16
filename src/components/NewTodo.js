import React, {Component} from "react";

class NewTodo extends Component{
    state = {
        msg: '',
        done: false
    }

    setNewMessage = (e) => {
        this.setState({
            msg : e.target.value
        })
    }


    addTodo = () => {
        this.props.addIntoTodos(this.state);
        this.setState({msg: ''});
    }


    render() {
        return (
            <div className='container'>
                <div className='row m-5'>
                    <div className='col-8 offset-2'>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='new msg' value={this.state.msg} onChange={this.setNewMessage}/>
                            <div className='input-group-append'>
                                <button className='btn btn-primary' onClick={this.addTodo}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTodo;