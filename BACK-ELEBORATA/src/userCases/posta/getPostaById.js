//essa function pegou todas postas pelo id
function getPostaById(req, res) {
  try {
    res.send({
      name: "pegou a posta pelo Id",
      id: req.params.id,
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getPostaById;
