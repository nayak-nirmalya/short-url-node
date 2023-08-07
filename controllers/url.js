const shortid = require("shortid");

const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "URL is Required." });

  const shortId = shortid();

  await URL.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = { handleGenerateNewShortURL };
