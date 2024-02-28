import React from 'react'

const RadioButton2 = () => {
    return (
        <fieldset className="flex flex-wrap gap-3">
            <legend className="sr-only">Color</legend>

            <div>
                <input
                    type="radio"
                    name="ColorOption"
                    value="ColorBlack"
                    id="ColorBlack"
                    className="peer hidden"
                    checked
                />

                <label
                    htmlFor="ColorBlack"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                >
                    <p className="text-sm font-medium">Texas Tea</p>
                </label>
            </div>

            <div>
                <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" className="peer hidden" />

                <label
                    htmlFor="ColorRed"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                >
                    <p className="text-sm font-medium">Fiesta Red</p>
                </label>
            </div>

            <div>
                <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" className="peer hidden" />

                <label
                    htmlFor="ColorBlue"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                >
                    <p className="text-sm font-medium">Cobalt Blue</p>
                </label>
            </div>

            <div>
                <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" className="peer hidden" />

                <label
                    htmlFor="ColorGold"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                >
                    <p className="text-sm font-medium">Goldtop</p>
                </label>
            </div>
        </fieldset>
    )
}

export default RadioButton2