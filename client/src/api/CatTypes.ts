export interface ICatViewModel {
    name: string
    id: string
    description: string
    metrics: ChartData[]
}

export interface ChartData {
    argument: string
    value: number
}
