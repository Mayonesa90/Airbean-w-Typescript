export interface Coffee {
    id: string,
    title: string,
    desc: string,
    price: number
}

export interface CoffeeResponse {
    success: boolean,
    menu: Coffee[]
}
