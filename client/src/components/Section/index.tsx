import React from "react"

import "./style.scss"

export interface ISectionProps {
    title?: string
    class: string
    children?: React.ReactNode
}

function Section(props: ISectionProps) {
    return (
        <div className={props.class}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Section
