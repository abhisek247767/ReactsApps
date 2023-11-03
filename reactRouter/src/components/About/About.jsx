import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React is an open-source JavaScript library.  It is sometimes referred to as React.js or ReactJS. In programming, libraries serve as toolkits for developers. Their contents may include configuration data, prewritten code, and message templates. A React developer uses their programming skills to create JavaScript-based applications for web or mobile environments. They typically specialize in front-end development, such as building user interfaces (UI).
                        </p>
                        <p className="mt-4 text-gray-600">
                        According to the US Bureau of Labor Statistics (BLS), an above-average growth rate of 25 percent is projected for software developer occupations between 2021 and 2031 [1]. In regard to the relevancy of React, it is the second most commonly used web framework worldwide as of 2023 [2]. If you’re interested in front-end development and web design, learning to use React can be a great way to enter this exciting industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}