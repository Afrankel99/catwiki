import React from "react"
import { Alignment, Button, Navbar } from "@blueprintjs/core"
import PetsIcon from "@mui/icons-material/Pets"

import "./style.scss"

interface INavBarProps {
    isFooter: boolean
}

class NavBar extends React.Component<INavBarProps> {

    render() {
        return (
            <div>
                {!this.props.isFooter &&
                    <div>
                        <Navbar className="Navbar">
                            <Navbar.Group align={Alignment.LEFT}>
                                <PetsIcon className="Icon" />
                                <Navbar.Heading>Purrfect: for Finding the Perfect Cat</Navbar.Heading>
                            </Navbar.Group>
                        </Navbar>
                    </div>
                }

                {this.props.isFooter &&
                    <div>
                        <Navbar className="Navbar">
                            <Navbar.Group align={Alignment.RIGHT}>
                                <Navbar.Heading>Created by Alannah Frankel for Blowfish Studios Coding Challenge 2023</Navbar.Heading>
                            </Navbar.Group>
                        </Navbar>
                    </div>
                }
            </div>
        )
    }
}

export default NavBar
