const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        db.Actor.findAll({
            order: [
                ['first_name', 'ASC'],
                ['last_name', 'ASC']
            ]
        })
            .then((actors) => {
                return res.render('actorsList', {
                    actors
                })
            })
            .catch(error => console.log(error))
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then((actor) => {

                return res.render('actorsDetail', {
                    actor
                })

            })

            .catch(error => console.log(error))
    }
}