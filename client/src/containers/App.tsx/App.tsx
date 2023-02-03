import React from "react"
import NavBar from "../Navbar"
import Search from "../Search"
import Before from "../Before"

class App extends React.Component {

    render() {

        return (
            <div>
                <NavBar isFooter={false} />
                <Search />
                <Before />
                <NavBar isFooter={true} />
            </div>
        )
    }
}

export default App
