module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then(result => res.status(200).send(result))
        .catch(err => {
            res.status(500).send({errorMessage: 'Cannot get all'})
            console.log(err)
        });
    },
    addProduct: (req, res) => {
        const {name, price, img} = req.body
        const db = req.app.get('db')
        db.create_product([name, price, img])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'something went wrong with post'})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id)
        .then ( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "did not delete"})
            console.log(err)
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        db.update_product([req.params.id, req.body.name, req.body.price, req.body.img])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "edit failed"})
            console.log(err)
            console.log(req.body)
            console.log(req.query)
        })
    }
}