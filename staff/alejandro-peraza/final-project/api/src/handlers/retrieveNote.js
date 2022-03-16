const { verifyTokenAndGetUserId } = require("../helpers");
const { retrieveNote } = require("logic");

module.exports = (req, res) => {
  try {
    
    const userId = verifyTokenAndGetUserId(req)
    const { params: { recipeId, noteId } } = req

    retrieveNote(userId, recipeId, noteId)
      .then((note) => res.status(200).json(note))
      .catch((error) => res.status(400).json({ error: error.message }))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};