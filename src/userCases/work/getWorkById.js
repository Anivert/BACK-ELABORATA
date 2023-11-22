//// nas linhas de baixo que é *GETE* vai pegar  o trabalho peo id
function getWorkById(req, res) {
  try {
    res.send({
      id: req.params.id,
      name: "Anivert",
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getWorkById;
