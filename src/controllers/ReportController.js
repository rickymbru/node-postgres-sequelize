const { Op} = require('sequelize');
const User = require ('../models/User');

module.exports = {
    async show (req, res) {
        const user = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                {
                    association: 'addresses', 
                    where: {
                        street: 'Rua dsadsdas sdsadsa'
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
            });

            return res.json(user);
        },
}