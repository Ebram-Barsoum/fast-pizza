import axios from "axios";

export default async function getAddress({ latitude, longitude }) {
    return axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    )
        .then(({ data }) => {
            return data;
        }).catch((error) => {
            throw new Error(error.message);
        });
}
