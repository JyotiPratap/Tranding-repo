const { default: axios } = require("axios");
const express = require("express");
const app = express();

const Tranding_repo = async function (req, res) {
    try {
        const { since, language } = req.params;
        if (since) params["since"] = since;
        if (language) params["language"] = language;

        const response = await axios.get(
            "https://private-d1997-githubtrendingapi.apiary-mock.com/repositories");

        return res.json({ data: response.data });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
module.exports.Tranding_repo = Tranding_repo;