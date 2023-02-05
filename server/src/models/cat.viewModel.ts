import { CatModel } from "./cat.model"
import { ChartData } from "./chartData.viewModel"

export class CatViewModel {
    name?: string
    id?: string
    description?: string
    metrics?: ChartData[]

    static fromModel(model: CatModel): CatViewModel {
        const result = new CatViewModel

        result.name = model.name
        result.id = model.id
        result.description = model.description

        const metricsArray = [
            { argument: 'Adaptability', value: model.adaptability },
            { argument: 'Affection level', value: model.affection_level },
            { argument: 'Child friendly', value: model.child_friendly },
            { argument: 'Grooming', value: model.grooming },
            { argument: 'Health issues', value: model.health_issues },
            { argument: 'Intelligence', value: model.intelligence },
            { argument: 'Social needs', value: model.social_needs },
            { argument: 'Stranger friendly', value: model.stranger_friendly }
        ]

        result.metrics = metricsArray

        return result
    }
}