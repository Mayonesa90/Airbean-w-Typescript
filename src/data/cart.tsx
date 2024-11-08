import {create} from 'zustand'
import { Order, OrderResponse } from '../interfaces/orderInterface'
import { Coffee } from '../interfaces/coffeeItemInterface'

interface CartState {
    cart: Coffee[],
    addToCart: (item: Coffee) => void
}

export const useStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (item: Coffee) => set((state) => ({ cart: [...state.cart, item] })),
    deleteFromCart: (item: Coffee) => set((state) => ({ cart: state.cart.filter((cartItem) => cartItem.id !== item.id) }))
}))

interface OrderState {
    order: OrderResponse,
    setOrder: (order: OrderResponse) => void
}

export const useOrderStore = create<OrderState>((set) => ({
    order: "",
    addToOrder: (order: OrderResponse) => set((state) => ({ order: order }))
}))