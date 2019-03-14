import api from '../../eosjs';



// var body = {
//     "actor" : "user2account",
//     "key" : "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ",
//     "packname" : "kuchbhi"
//     "colname" : "kuchbhi2"
//     "cards" : [2, 3, 4, 7, 1, 8]
// }

const create = (req, res) => {
    var { actor, key, packname, colname, cards } = req.body;
    api.createPack(actor, key, packname, colname, cards).then((rply) => {
        console.log(rply);
        res.send(rply);
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

export default { create, transfer, burn };