export interface ICatViewModel {
    name: string
    id: string
    description: string
    metrics: ChartData[]
    imageUrl: string
}

export interface ChartData {
    argument: string
    value: number
}
