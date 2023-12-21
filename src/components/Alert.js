import React from 'react'

export default function Alert(props) {
  return (
    props.al && <div className={`alert alert-${props.al.type} alert-dismissible fade show`} role="alert">
        {props.al.message} 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    
  )
}
