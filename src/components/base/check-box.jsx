import React from 'react'

const CheckBox = ({ className, onchange, defaultValue, name }) => {
  return (
        <div className={className}>
            <div className="flex items-center">
                <input id="default-checkbox" name={name} defaultValue={defaultValue} onChange={onchange} type="checkbox" value="" className="w-4 h-4 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
        </div>

  )
}

export default CheckBox