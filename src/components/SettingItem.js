import React from 'react';

const SettingItem = ({ title, options, value, onChange}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <span>{title}</span>
      <select
        className="bg-white"
        value={value}
        onChange={({ target: { value }}) => onChange(value)}
      >
        {options.map(op => (
          <option key={op.label} value={op.value}>{op.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SettingItem;
