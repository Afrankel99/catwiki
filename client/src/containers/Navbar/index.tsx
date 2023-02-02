import React from "react"
import { Alignment, Button, Navbar } from "@blueprintjs/core"

import "./style.scss"

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar className="Navbar">
                    <Navbar.Group align={Alignment.CENTER}>
                        <Navbar.Heading>Purrfect</Navbar.Heading>
                        <Navbar.Divider />
                        <Button icon="home" text="Home" />
                        <Button icon="document" text="ReadMe.MD" />
                    </Navbar.Group>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
