import React from 'react';
import style from './ToggleBtn.module.css'

const ToggleBtn = ({ isChecked, onToggle }) => {
    return (
        <div className={style.toggle_switch}>
            <input
                type="checkbox"
                id="toggle"
                checked={isChecked}
                onChange={onToggle}
            />
            <label htmlFor="toggle"></label>
        </div>
    );
};

export default ToggleBtn;
