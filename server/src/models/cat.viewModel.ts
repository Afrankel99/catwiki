import { CatModel } from "./cat.model"
import { ChartData } from "./chartData.viewModel"

export class CatViewModel {
    name?: string
    id?: string
    description?: string
    metrics?: ChartData[]
    imageUrl?: string

    static fromModel(model: CatModel): CatViewModel {
        const result = new CatViewModel

        result.name = model.name
        result.id = model.id
        result.description = model.description

        const metricsArray = [
            { name: 'Adaptability', value: model.adaptability },
            { name: 'Affection level', value: model.affection_level },
            { name: 'Child friendly', value: model.child_friendly },
            { name: 'Grooming', value: model.grooming },
            { name: 'Health issues', value: model.health_issues },
            { name: 'Intelligence', value: model.intelligence },
            { name: 'Social needs', value: model.social_needs },
            { name: 'Stranger friendly', value: model.stranger_friendly }
        ]

        result.metrics = metricsArray

        return result
    }
}