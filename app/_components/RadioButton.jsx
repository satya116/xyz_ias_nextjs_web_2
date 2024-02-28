import React from 'react'

const RadioButton = () => {
    return (
        <div>
            <input className="peer sr-only" id="option1" type="radio" tabIndex="-1" name="option" />

            <label
                htmlFor="option1"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
            >
                <span className="text-sm"> Option 1 </span>
            </label>
        </div>
    )
}

export default RadioButton