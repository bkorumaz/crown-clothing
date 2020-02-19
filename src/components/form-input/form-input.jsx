import React, {useEffect} from 'react';
import './form-input.styles.scss'


function FormInput({ handleChange, label, ...otherProps }) {


  //if user type something in the form, input use different css
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<label
                    className={`${
                      otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                  >
                    {label}
                  </label>)
                : null 
            }
        </div>
    );
}


export default FormInput;