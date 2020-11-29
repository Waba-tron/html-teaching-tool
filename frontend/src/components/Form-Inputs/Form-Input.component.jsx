import React from 'react';
import './Form-Input.styles.scss';
export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <div className="group">
            
            <input className="form-input" autoComplete="off" onChange={handleChange} {...otherProps} required/>

                {label ?
                (
                    <label className={`${
                        otherProps.value.length ? 'shrink' : ''
                        
                        } form-input-label`} >

                            {label}
                    </label>

                ): null}

         
        </div>
    )
}