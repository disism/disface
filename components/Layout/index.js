
import React from "react";

const Layout = ({ children }) => {
    return (
        <>

            <div style={{ margin: `1rem`}}>
                {children}
            </div>
            <footer
                style={{ padding: `1rem` }}
                className="footer"
            >
                <br/>
                Godis
                © {new Date().getFullYear()},
                Powered by {''}
                <a
                    href="https://disism.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    disism.com

                </a>
            </footer>
        </>
    )
}
export default Layout
