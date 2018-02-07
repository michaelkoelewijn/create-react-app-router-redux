export function increment(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

export function decrement(id) {
    return {
        type: 'DECREMENT',
        id
    }
}