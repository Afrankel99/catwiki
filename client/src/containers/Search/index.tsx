import React from "react"
import Section from "../../components/Section"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import Paper from "@mui/material/Paper"
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui"
import { CatsApi } from "../../api/index"
import { ICatViewModel } from "../../api/CatTypes"

import "./style.scss"

interface ICatBreed {
    label: string
    id: number
}

interface ISearchState {
    isInfoPageOn: boolean
    selectedBreed: ICatViewModel
    breeds: ICatViewModel[]
}

interface ISearchProps {

}

class Search extends React.Component<ISearchProps> {
    state = {
        isInfoPageOn: false,
        selectedBreed: {},
        breeds: []
    } as ISearchState

    private async getBreeds() {
        const allBreeds = CatsApi.getAllBreeds()
        this.setState({ breeds: allBreeds })

        // await axios.get("http://localhost:3001/allCats").then(response => {
        //     console.log(response)
        // })
    }

    private getBreedNames(breedsData: any[]): any[] { // should probably make these typed
        let breedNames = []

        for (let i = 0; i < breedsData.length; i++) {
            breedNames.push({ label: breedsData[i].name, id: i })
        }

        return breedNames.length == 0 ? [{ label: "No breeds here :(", id: 0 }] : breedNames
    }

    private getCatDetails(catId: number): any[] { // should probably make these typed
        /* <Chart rotated={true} data={[
            { argument: 'Monday', value: 30 },
            { argument: 'Tuesday', value: 20 },
            { argument: 'Wednesday', value: 10 },
            { argument: 'Thursday', value: 50 },
            { argument: 'Friday', value: 60 },
        ]}> */

        let catDetails = []

        const theCatWeWant = this.state.breeds[catId]
        const catDetailsObjects = Object.entries(theCatWeWant)

        catDetails = catDetailsObjects.map((e) => {
            ({ argument: e[0], value: e[1] })
        })

        return catDetails
    }

    private onBreedClick(catBreed: ICatBreed) {
        this.setState({ ...this.state, isInfoPageOn: true, selectedBreed: catBreed })
    }

    componentDidMount() {
        this.getBreeds()
    }

    render() {

        return (
            <div className="SearchSection">
                {!this.state.isInfoPageOn &&
                    <Section title="Let's meet your new best friend." class="Search">
                        <Autocomplete
                            renderInput={(params) => <TextField {...params} label="Enter breed" />}
                            options={this.getBreedNames(this.state.breeds)}
                            sx={{
                                width: 1 / 4,
                                mx: "auto",
                                mb: 2
                            }}
                            disablePortal
                            id="combo-box-demo"
                            onChange={(_event, value) => this.onBreedClick(value as ICatBreed)}
                        />
                        <FavoriteBorderIcon className="Icon"/>
                    </Section>
                }

                {this.state.isInfoPageOn &&
                    <Section title={this.state.selectedBreed.name} class="CatInfo">
                        <Card className={"CatInfoCard"}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {this.state.selectedBreed.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* {this.state.selectedBreed.description} */}
                                    {"Description will go here"}
                                </Typography>
                            </CardContent>
                        </Card>

                        <Paper className={"CatInfoGraph"}>
                            <Chart rotated={true} data={this.getCatDetails(this.state.selectedBreed.id)}>
                                <BarSeries valueField="value" argumentField="argument" />
                            </Chart>
                        </Paper>
                    </Section>
                }
            </div>
        )
    }
}

export default Search
