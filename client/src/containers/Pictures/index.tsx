import React from "react"
import Section from "../../components/Section"
import ImageList from "@mui/material/ImageList"

import "./style.scss"

class Pictures extends React.Component {

    render() {

        return (
            <Section title="Sweet pics" class="Pictures">
                <ImageList>
                    
                </ImageList>
            </Section>
        )
    }
}

export default Pictures