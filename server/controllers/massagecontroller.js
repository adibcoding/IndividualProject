const {Massage} = require("../models")
const axios = require('axios')

class MassageController{
    static async allMassages (req, res, next){
        try {
            const massages = await Massage.findAll()
        
            // const { location } = req.body
            // console.log(location)
            // const {data} = await axios({
            //     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBKvc3oQF8Ef0yLOGXbL9-hHyvLc-LVfyc`,
            //     method: 'GET'
            // })

            // console.log(data.results[0].geometry)

            res.status(200).json({
                massages
            })
            
            
        } catch (err) {
            next(err)
        }
    }

    static async detailMassage (req, res, next){
        try {
            const {massageId} = req.params
            const massage = await Massage.findByPk(massageId)
        
            res.status(200).json({
                massage
            })
            
            
        } catch (err) {
            next(err)
        }
    }

    static async geocode(req, res, next){
        try {
            const { location } = req.body
            console.log(location)
            const {data} = await axios({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBKvc3oQF8Ef0yLOGXbL9-hHyvLc-LVfyc`,
                method: 'GET'
            })
            console.log(data)
            console.log(data.results[0].geometry)

            res.status(200).json({
                data
            })

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = MassageController
