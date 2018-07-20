import React from 'react';

const MenuToggleButton = props => {
  let toggleButtonLinesClasses = 'ToggleButton__line';

  if(props.toggled) {
    toggleButtonLinesClasses = 'ToggleButton__line ToggleButton__line_active';
  }

  return (
    <button
      type="button"
      className="ToggleButton"
      onClick={props.click}
    >
      <span className={toggleButtonLinesClasses} />
      <span className={toggleButtonLinesClasses} />
      <span className={toggleButtonLinesClasses} />
    </button>
  );
};

export default MenuToggleButton;
