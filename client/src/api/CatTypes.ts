export interface ICatViewModel {
    name?: string
    id?: string
    description?: string
    metrics?: CatMetrics
}

export interface CatMetrics {
    adaptability?: number
    affectionLevel?: number
    childFriendly?: number
    grooming?: number
    intelligence?: number
    healthIssues?: number
    socialNeeds?: number
    strangerFriendly?: number
}

export interface AutocompleteOption {
    label: string,
    id: number
}

export interface ChartData {
    argument: string,
    value: number
}
