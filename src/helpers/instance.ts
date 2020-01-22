import axios from "axios"

export const instance=axios.create({
    baseURL:'https://ancient-gorge-20298.herokuapp.com/'
})