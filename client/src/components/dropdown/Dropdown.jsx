import React from 'react';

const Dropdown = ({ categories, onchange }) => {
    const renderCategory = (category, level = 0) => {
        const indentation = Array(level).fill('-').join(' ');
        return (
            <React.Fragment key={category?._id}>
                <option value={category?._id}>{indentation} {category?.name}</option>
                {category?.children && category?.children?.map(child => (
                    renderCategory(child, level + 1)
                ))}
            </React.Fragment>
        );
    };

    return (
        <select className="py-3 px-3 rounded-lg border-2 border-primary-foreground bg-white outline-none" onChange={onchange}>
            {categories?.map(category => renderCategory(category))}
        </select>
    );
};

export default Dropdown;