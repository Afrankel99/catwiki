import React from "react"
import Section from "../../components/Section"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { CatsApi } from "../../api/index"
import { ICatViewModel } from "../../api/CatTypes"
import Button from "@mui/material/Button"
import ArrowBack from "@mui/icons-material/ArrowBack"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
        CatsApi.getBreed(catBreed.id).then(response => {
            this.setState({ ...this.state, isInfoPageOn: true, selectedBreed: response })
        })
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
                            sx={{ marginBottom: "10px", backgroundColor: "#FFFFFF", color: "#BC4B4C"}}
                            onClick={() => this.onBackClick()}
                            className={"BackButton"}
                        >
                            Back
                        </Button>
                        <div className="Metrics">
                            <Card className={"CatInfoCard"}>
                                <div className={"ImageBox"}>
                                    <img
                                        src={this.state.selectedBreed.imageUrl}
                                        className={"BeforeImage"}
                                    />
                                </div>
                                <CardContent sx={{ height: 1 / 4 }}>
                                    <Typography variant="h5" component="div">
                                        {this.state.selectedBreed.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {this.state.selectedBreed.description}
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Paper className={"CatInfoGraph"}>
                                <BarChart
                                    layout="horizontal"
                                    width={700}
                                    height={500}
                                    data={this.state.selectedBreed.metrics}
                                    barCategoryGap={10}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis dataKey="value" />
                                    <Bar dataKey="value" fill="#BC4B4C" />
                                </BarChart>
                            </Paper>
                        </div>
                    </Section>
                }
            </div>
        )
    }
}

export default Search
