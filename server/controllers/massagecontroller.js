const {Massage} = require("../models")

class MassageController{
    static async allMassages (req, res, next){
        try {
            const massages = await Massage.findAll()

            res.status(200).json({
                massages
            })
            
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = MassageController
