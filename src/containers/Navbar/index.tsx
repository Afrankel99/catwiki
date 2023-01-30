import React from "react"
import { Alignment, Button, Navbar } from "@blueprintjs/core"

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <Navbar>
                    <Navbar.Group align={Alignment.CENTER}>
                        <Navbar.Heading>Purrfect</Navbar.Heading>
                        <Navbar.Divider />
                        <Button className="bp4-minimal" icon="home" text="Home" />
                        <Button className="bp4-minimal" icon="document" text="ReadMe.MD" />
                    </Navbar.Group>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
