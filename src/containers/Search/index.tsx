import React from "react"
import Section from "../../components/Section"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import axios from "axios"

import "./style.scss"

// interface ISearchState {
//     // breeds: string[]
// }

class Search extends React.Component {
    state = { breeds: [] }

    private async getBreeds() {
        let response = await axios.get("https://api.thecatapi.com/v1/breeds/")
        this.setState({ breeds: response.data })
    }

    private getBreedNames(breedsData: any[]): any[] {
        let breedNames = []

        for (let i = 0; i < breedsData.length; i++) {
            breedNames.push({ label: breedsData[i].name, id: i })
        }

        return breedNames.length == 0 ? [{ label: 'No breeds here :(', id: 0 }] : breedNames
    }

    componentDidMount() {
        this.getBreeds()
    }

    render() {

        return (
            <Section title="Let's meet your new best friend." class="Search">
                <Autocomplete
                    renderInput={(params) => <TextField {...params} label="Enter breed" />}
                    options={this.getBreedNames(this.state.breeds)}
                    sx={{ 
                        width: 1/4,
                        mx: "auto",
                        mb: 2
                    }}
                    disablePortal
                    id="combo-box-demo"
                />
                <FavoriteBorderIcon />
            </Section>
        )
    }
}

export default Search