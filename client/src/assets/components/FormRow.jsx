import React from 'react'
 
const FormRow = ({type,name,labelText,defaultValue}) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label">
    {labelText||name}
    </label>
    <input
      type={type}
      className="form-input"
      name={name}
      id={name}
      required
      defaultValue={defaultValue||''}
    />
  </div>
  )
}

export default FormRow;