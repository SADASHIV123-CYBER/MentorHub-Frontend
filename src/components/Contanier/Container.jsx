
import React from "react"

function Container({children}) {
    return (
        <header className="max-w-7xl mx-auto px-6 border-b-4 border-[#002244]  ">
                {children}
        </header>
    )
}

export default Container