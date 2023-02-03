import { CatModel } from "./cat.model"
import { CatMetrics } from "./catMetrics.viewModel";

export class CatViewModel {
    name?: string
    id?: string
    description?: string
    metrics?: CatMetrics

    static fromModel(model: CatModel): CatViewModel {
        const result = new CatViewModel

        result.name = model.name
        result.id = model.id
        result.description = model.description

        const metrics = new CatMetrics

        metrics.adaptability = model.adaptability
        metrics.affectionLevel = model.affection_level
        metrics.childFriendly = model.child_friendly
        metrics.grooming = model.grooming
        metrics.healthIssues = model.health_issues
        metrics.intelligence = model.intelligence
        metrics.socialNeeds = model.social_needs
        metrics.strangerFriendly = model.stranger_friendly

        result.metrics = metrics

        return result
    }
}