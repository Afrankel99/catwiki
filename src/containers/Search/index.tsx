import React from "react"
import { Button } from "@blueprintjs/core"
import Section from "../../components/Section"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

class Search extends React.Component {

    render() {

        return (
            <Section title="Let's meet your new best friend." class="SearchSection">
                <Autocomplete
                    renderInput={(params) => <TextField {...params} label="Enter breed" />}
                    options={[
                        { label: 'Ragdoll', id: 1 },
                        { label: 'Russian Blue', id: 2 },
                    ]}
                    sx={{ width: 300 }}
                    disablePortal
                    id="combo-box-demo"
                />
                <FavoriteBorderIcon />
            </Section>
        )
    }
}

export default Search