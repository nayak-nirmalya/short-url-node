const URL = require("../models/url");

async function handleGetURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  return res.json({ url: entry.redirectURL });
}

module.exports = { handleGetURL };
