export interface Order {
    name: string,
    price: number
}

export interface OrderResponse {
    order: string,
    eta: number,
    orderNr: string,
    
}