import React from 'react';

const FormErrors = ({formErrors}) => {
  return (
    <div>
      <div>
        {Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName].length > 0) {
            return (
              <p key={i}>{fieldName} {formErrors[fieldName]}</p>
            )
          }
        })}
      </div>
    </div>
  );
};


export default FormErrors;
