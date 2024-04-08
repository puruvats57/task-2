const { Op } = require('sequelize');
const User = require("../models/Notes");


exports.register = async (req, res) => {
    const { text } = req.body;
    console.log("text", text);
    try {
        const mike = await User.create({
            text: text
        });
        console.log("mike", mike);
        res.json({ data: mike });
    } catch (error) {
        console.log(error);
    }

}

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    try {
        const s = await User.destroy({
            where: {
                id: id,
            }
        });

        console.log("del", s);
        res.json({ data: s });
    } catch (err) {

    }

}
// exports.update = async (req, res) => {
//     const id = req.params.id;
//     const { p } = req.body;
//     try {
//         const s = await User.update({ p: p }, {
//             where: {
//                 id: id,
//             },
//         });


//         res.json({ d: s });

//     } catch (err) {

//     }



// }
exports.getAll = async (req, res) => {

    try {
        const users = await User.findAll();

        res.json({ d: users })

    } catch (err) {

    }
}