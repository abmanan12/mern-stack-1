import React, { useState } from 'react'

const initaialValue = {
    title: '',
    location: '',
    description: ''
}

export default function Index() {

    let [state, setState] = useState(initaialValue)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        const { title, location, description } = state

        if (title.length < 3) {
            return window.tostify("Please enter your title correctly", 'error')
        }

        if (location.length < 3) {
            return window.tostify("Please enter your location correctly", 'error')
        }

        if (description.length < 10) {
            return window.tostify("Please enter description length Min 10", 'error')
        }

        let todo = { title, location, description }


        todo.id = Math.random().toString(36).slice(2)
        todo.dateCreated = new Date().getTime()

        const todos = JSON.parse(localStorage.getItem("todos")) || []

        todos.push(todo)

        localStorage.setItem('todos', JSON.stringify(todos))

        window.tostify("New todo has been successfully added", 'success')

    }

    return (
        <>
            <div className="py-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">Add Your Task</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="card p-3 shadow-lg border-0">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="input-group">
                                                <input type="text" name="title" className="form-control bgInput"
                                                    placeholder="Title" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="input-group">
                                                <input type="text" name="location" className="form-control bgInput"
                                                    placeholder="Location" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="input-group">
                                                <textarea className="form-control bgInput" name="description"
                                                    placeholder="Description" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="mt-3">
                                                <button className='btn btn-danger mt-2 w-50'>Add User</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
