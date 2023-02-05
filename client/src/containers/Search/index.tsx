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
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from "@devexpress/dx-react-chart-material-ui"
import { CatsApi } from "../../api/index"
import { ICatViewModel } from "../../api/CatTypes"
import { Button } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

import "./style.scss"

interface ISearchState {
    isInfoPageOn: boolean
    selectedBreed: ICatViewModel
    breeds: ICatViewModel[]
}

class Search extends React.Component {
    state = {
        isInfoPageOn: false,
        selectedBreed: {} as ICatViewModel,
        breeds: []
    } as ISearchState

    private async getBreeds() {
        CatsApi.getAllBreeds().then(response => {
            this.setState({ breeds: response })
        })
    }

    private onBreedClick(catBreed: ICatViewModel) {
        this.setState({ ...this.state, isInfoPageOn: true, selectedBreed: catBreed })
    }

    private onBackClick() {
        this.setState({ ...this.state, isInfoPageOn: false, selectedBreed: {} as ICatViewModel })
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
                            options={this.state.breeds}
                            getOptionLabel={(option) => option.name ?? ""}
                            sx={{
                                width: 1 / 4,
                                mx: "auto",
                                mb: 2
                            }}
                            disablePortal
                            id="combo-box-demo"
                            onChange={(_event, value) => this.onBreedClick(value as ICatViewModel)}
                        />
                        <FavoriteBorderIcon className="Icon" />
                    </Section>
                }

                {this.state.isInfoPageOn &&
                    <Section title={this.state.selectedBreed.name} class="CatInfo">
                        <Button
                            variant="contained"
                            endIcon={<ArrowBack />}
                            sx={{ display: "block", color: "white" }}
                            onClick={() => this.onBackClick()}
                        >
                            Back
                        </Button>
                        <Card className={"CatInfoCard"}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg"
                            />
                            <CardContent sx={{ height: 100 }}>
                                <Typography variant="h5" component="div">
                                    {this.state.selectedBreed.name}
                                </Typography>
                                <Typography variant="body2">
                                    {this.state.selectedBreed.description}
                                </Typography>
                            </CardContent>
                        </Card>

                        <Paper className={"CatInfoGraph"}>
                            <Chart rotated={true} data={this.state.selectedBreed.metrics}>
                                <ArgumentAxis />
                                <ValueAxis />
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
