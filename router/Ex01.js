app.get("/api/v1/produto", (req, res) => {
    const { produto, preco } = req.query

    res.status(200).send({ message: `O produto ${produto} custa ${preco}` })
})