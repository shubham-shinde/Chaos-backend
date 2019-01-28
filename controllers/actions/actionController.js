import db from '../../db/schema';

const { Action } = db

const _get = (req, res, next) => {
    Action.findAll()
    .then(res.send.bind(res))
    .catch(next);
}

const _put = (req, res, next) => {
    Action.create(req.body)
    .then(res.send.bind(res))
    .catch(next);

    // {
    //     consuming_nanobot : 5,
    //     manufactured_illness : 5,
    //     sacrificial_salvo : 5,
    //     echoing_smash : 5,
    //     crusade : 5,
    //     convert : 5,
    //     absorb_life : 5,
    //     normalize : 5,
    //     dissolve : 5,
    // }
}

const _byId = (req, res, next) => {
    Action.findById(req.params.id)
    .then(res.send.bind(res));
}

export default {
    get: _get,
    put: _put,
    getById: _byId
}