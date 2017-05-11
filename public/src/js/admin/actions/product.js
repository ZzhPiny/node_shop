export const PRODUCT = 'PRODUCT';

export function getProduct(data) {
    return {
        type: PRODUCT,
        data: data
    }
}