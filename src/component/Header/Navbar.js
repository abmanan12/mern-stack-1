import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Navbar() {

  const { isAuthenticated, dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' })
  }
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='mytodo' className="nav-link active" aria-current="page">My Todos</Link>
              </li>
              <li className="nav-item">
                <Link to='addtodo' className="nav-link active" aria-current="page">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {
                !isAuthenticated
                  ? <Link to='addtodo' className="btn btn-success btn-sm" onClick={handleLogin}>Login</Link>
                  : <Link to='/' className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</Link>
              }
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}
