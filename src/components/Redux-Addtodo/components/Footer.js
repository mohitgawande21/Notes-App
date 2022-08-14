import React from 'react'
export default function Footer() {

    const footerStyle = {
        position: "fixed",
        bottom: "0",
    }
    return (
    <div className="mt-5">
        <footer style={footerStyle} data-test="footerCompo" className=" navbar-light bg-dark h-10 w-100">
            <div className="h-50 p-3 text-light text-center">  Copyright:&copy;
                <strong className="min-vh-100" href="/"> Mohit Gawande</strong>
            </div>
        </footer>
        </div>
    )
}
