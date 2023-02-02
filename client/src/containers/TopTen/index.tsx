import React from "react"
import Section from "../../components/Section"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

import "./style.scss"

class TopTen extends React.Component {

    render() {
        return (
            <Section title="Most Searched" class="TopTen">
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Section>
        )
    }
}

export default TopTen