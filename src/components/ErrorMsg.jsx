import React from 'react'
import { Link } from 'react-router-dom'

const ErrorMsg = () => {
  return (
    <>
    <div id="content-wrapper">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 mx-auto text-center  pt-4 pb-5">
        <h1>
          <img alt={404} src="img/404.png" className="img-fluid" />
        </h1>
        <h1>Sorry! Page not found.</h1>
        <p className="land">
          Unfortunately the page you are looking for has been moved or deleted.
        </p>
        <div className="mt-5">
          <Link className="btn btn-outline-primary" to="/">
            <i className="mdi mdi-home" /> GO TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
 
</div>

    </>
  )
}

export default ErrorMsg
