import { useState, useEffect } from "react"
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
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import "./style.scss"

function Search() {
    const [isInfoPageOn, setIsInfoPageOn] = useState(false)
    const [selectedBreed, setSelectedBreed] = useState({} as ICatViewModel)
    const [breeds, setBreeds] = useState([] as ICatViewModel[])

    function getBreeds() {
        CatsApi.getAllBreeds().then(response => {
            setBreeds(response)
        })
    }

    function onBreedClick(catBreed: ICatViewModel) {
        CatsApi.getBreed(catBreed.id).then(response => {
            setIsInfoPageOn(true)
            setSelectedBreed(response)
        })
    }
    
    function onBackClick() {
        setSelectedBreed({} as ICatViewModel)
        setIsInfoPageOn(false)
    }

    useEffect(() => {
        getBreeds()
    }, [])

    return (
        <div className="SearchSection">
            {!isInfoPageOn &&
                <Section title="Let's meet your new best friend." class="Search">
                    <Autocomplete
                        renderInput={(params) => <TextField {...params} label="Enter breed" />}
                        options={breeds}
                        getOptionLabel={(option) => option.name ?? ""}
                        sx={{
                            width: 1 / 4,
                            mx: "auto",
                            mb: 2
                        }}
                        disablePortal
                        id="combo-box-demo"
                        onChange={(_event, value) => onBreedClick(value as ICatViewModel)}
                    />
                    <FavoriteBorderIcon className="Icon" />
                </Section>
            }

            {isInfoPageOn &&
                <Section title={selectedBreed.name} class="CatInfo">
                    <Button
                        variant="contained"
                        endIcon={<ArrowBack />}
                        sx={{ marginBottom: "10px", backgroundColor: "#FFFFFF", color: "#BC4B4C" }}
                        onClick={() => onBackClick()}
                        className={"BackButton"}
                    >
                        Back
                    </Button>
                    <div className="Metrics">
                        <Card className={"CatInfoCard"}>
                            <div className={"ImageBox"}>
                                <img
                                    src={selectedBreed.imageUrl}
                                    className={"BeforeImage"}
                                />
                            </div>
                            <CardContent sx={{ height: 1 / 4 }}>
                                <Typography variant="h5" component="div">
                                    {selectedBreed.name}
                                </Typography>
                                <Typography variant="body2">
                                    {selectedBreed.description}
                                </Typography>
                            </CardContent>
                        </Card>

                        <Paper className={"CatInfoGraph"}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    layout="horizontal"
                                    data={selectedBreed.metrics}
                                    barCategoryGap={15}
                                >
                                    <XAxis dataKey="name" interval={0} />
                                    <YAxis dataKey="value" />
                                    <Bar dataKey="value" fill="#BC4B4C" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </div>
                </Section>
            }
        </div>
    )
}

export default Search
