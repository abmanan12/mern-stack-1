import React, { useState } from 'react'

export default function MyTodo() {

  const [todo, setTodo] = useState([])
  let [state, setState] = useState([])

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const showTodo = () => {

    const todos = JSON.parse(localStorage.getItem("todos")) || []

    if (!todos.length) {
      window.tostify("There is not a single todo availabe", 'error')
    }
    else {
      window.tostify("All Todos Successfully Showed", 'success')
    }

    setTodo(todos)

  }

  const handleDelete = id => {

    const todos = JSON.parse(localStorage.getItem("todos"))

    let todoAfterDelete = todos.filter((todo) => {
      return todo.id !== id
    })

    localStorage.setItem('todos', JSON.stringify(todoAfterDelete))

    window.tostify("A Todo has been successfully deleted", 'success')

    setTodo(todoAfterDelete)

  }

  const handleEdit = (id) => {

    const todos = JSON.parse(localStorage.getItem("todos"))

    let todoAfterUpdate = todos.map((item) => {
      if (item.id === id) {
        return state
      }
      else {
        return item
      }
    })

    localStorage.setItem('todos', JSON.stringify(todoAfterUpdate))

    window.tostify("A Todo has been successfully Edited", 'success')

    setTodo(todoAfterUpdate)

  }

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h4 className="fw-bold text-center">My Todos</h4>
            </div>
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card p-2 shadow-lg border-0">
              <div className="card-body">
                <table className='table table-responsive text-center'>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                    {
                      todo.map((elem, i) => {
                        return (
                          <tr key={i}>
                            <td scope="col">{i + 1}</td>
                            <td scope="col">{elem.title}</td>
                            <td scope="col">{elem.location}</td>
                            <td scope="col">{elem.description}</td>
                            <td scope="col"><button className='btn btn-info btn-sm me-1' data-bs-toggle="modal" data-bs-target="#editModel" onClick={() => { setState(elem) }}>Edit</button><button className='btn btn-danger btn-sm me-1' onClick={() => { handleDelete(elem.id) }}>Delete</button></td>
                          </tr>
                        )
                      })
                    }
                  </thead>
                </table>
                <div className="row text-center mt-4">
                  <div className="col">
                    <button className='btn btn-danger w-50' onClick={showTodo}>Show Todo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="editModel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <input type="text" className='form-control mb-3' name='title' value={state.title} placeholder='Title' onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="text" className='form-control mb-3' name='location' value={state.location} placeholder='Location' onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="text" className='form-control mb-1' name='description' value={state.description} placeholder='Description' onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { handleEdit(state.id) }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
