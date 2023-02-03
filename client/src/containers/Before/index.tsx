import React from "react"
import Section from "../../components/Section"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

import "./style.scss"

class Before extends React.Component {

    render() {
        return (
            <Section title="A few things first.." class="Before">
                <image></image>
                <Paper elevation={5} sx={{
                    boxShadow: 1,
                    borderRadius: .5,
                    p: 2,
                    width: 500,
                    height: 500
                }}>
                    <Typography variant="body2" color="text.secondary" fontSize={20}>
                        There are a couple things to consider before getting a cat:
                        <ol>
                            <li>First, can you afford it? Remember you'll need to pay for vet bills, grooming, food and litter!</li>
                            <li>Second, do you have any allergies? When you go visit cats do you notice yourself sneezing or having watery eyes? It may be a good idea to get an allergy test before getting a cat.</li>
                            <li>Lastly, do you have a well ventilated area to put the litter box? Or are you willing to train them to use the toilet like those cats online!</li>
                        </ol>
                    </Typography>
                </Paper>
            </Section>
        )
    }
}

export default Before