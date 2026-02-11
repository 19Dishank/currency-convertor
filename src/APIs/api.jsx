import axios from "axios";

const api = axios.create({
    // baseURL:`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/pair`
    baseURL: `https://v6.exchangerate-api.com/v6/9cadc2ac0ee984ca054162f5`
})
export const currencyConverter = (from, to, amount) => {
    return api.get(`/pair/${from}/${to}/${amount}`)
}