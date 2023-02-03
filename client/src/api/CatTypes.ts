export interface ICatViewModel {
    name?: string
    id?: string
    description?: string
    metrics?: CatMetrics
}

export class CatMetrics {
    adaptability?: number
    affectionLevel?: number
    childFriendly?: number
    grooming?: number
    intelligence?: number
    healthIssues?: number
    socialNeeds?: number
    strangerFriendly?: number
}