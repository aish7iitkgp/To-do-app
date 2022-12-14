import React from 'react'

function Showtodo(props) {
  return (
    <>
    <div className="container my-3">
        <div className="row">
            <div className="col-9">
                <div className="card">
                    <div className="card-body">
                       {
                        props.task
                       }
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="my-3">
                <button className='btn btn-primary' onClick={(props.removetask(props.id))}>Remove</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Showtodo