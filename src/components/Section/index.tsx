import React from "react"

import "./style.scss"

export interface ISectionProps {
    title?: string
    class: string
    children?: React.ReactNode
}

class Section extends React.Component<ISectionProps> {
    static displayName = "Section"

    render() {
        // const { title, className } = this.props

        return (
            <div className={this.props.class}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Section