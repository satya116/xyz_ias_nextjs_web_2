import React from 'react'

const VideoThumbnail = () => {
    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                    <div>
                        <dt className="sr-only">Price</dt>

                        <dd className="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                    </div>
                </dl>


            </div>
        </a>
    )
}

export default VideoThumbnail