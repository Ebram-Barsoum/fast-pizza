import axios from "axios";

const BASE_API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
    const { data } = await axios.get(`${BASE_API_URL}/menu`);
    return data.data;
}

export async function getOrder(orderID) {
    const { data } = await axios.get(`${BASE_API_URL}/order/${orderID}`);
    return data.data;
}

export async function createOrder(order) {
    try {
        const res = await fetch(`${BASE_API_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw Error();
        const { data } = await res.json();
        return data;
    } catch {
        throw Error('Failed creating your order');
    }
}

export async function updateOrder(id, updates) {
    axios.patch(`${BASE_API_URL}/order/${id}`, { ...updates }, {
        headers: {
            "Content-Type": "application/json",
        }
    }).catch((error) => { throw new Error(error.message) });
}