import api from '../../eosjs';
// import check from 'express-validator/check';


const defaultUser = {
    NAME: "user2account",
    KEY: "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ"
}

// var body = {
//     "user" : "user1account",
//     "_packs_available" : 1,
//     "rand" : [2,3,5,6,9],
//     "_packs_opened_count" : 2,
//     "_cards_owned_count" : 2
// }

// var addallcard = (req, res, next) => {
    // var { s, cardName, type, faction, manaCost, attack, health, expset, carftCost, cardText, cardKeywords } = req.body;

    // api.addcard( s, cardName, type, faction, manaCost, attack, health, expset, carftCost, cardText, cardKeywords ).then((data) => {
    //     res.send(data);
    // }).catch((err) => {
    //     console.log(err);
    //     next(err);
    // });
// };

var addcard = (req, res, next) => {
    var { s,cardId, cardName, type, faction, manaCost, attack, health, expset, craftCost, cardText, cardKeywords } = req.body;
    api.addcard( s, cardId, cardName, type, faction, manaCost, attack, health, expset, craftCost, cardText, cardKeywords ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var rmcard = (req, res, next) => {
    var {  s , cardName } = req.body;
    api.rmcard( s, cardName ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var updcard = (req, res, next) => {
    var { cardName, type, faction, cardText, cardKeywords } = req.body;
    api.updcard( cardName, type, faction, cardText, cardKeywords ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var trnsfrcard = (req, res, next) => {
    var {  issueNumber, ownerFrom, ownerTo } = req.body;
    api.trnsfrcard( issueNumber, ownerFrom, ownerTo ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var issuepack = (req, res, next) => {
    var {  packType, owner } = req.body;
    api.issuepack( packType, owner ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var issuecard = (req, res, next) => {
    var { cardName, owner } = req.body;
    api.issuecard( cardName, owner ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var openpack = (req, res, next) => {
    var { packId, owner } = req.body;
    api.openpack( packId, owner && defaultUser.NAME ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var adduser = (req, res, next) => {
    var { actor, key, s, userName } = req.body;
    api.adduser( actor && defaultUser.NAME, key && defaultUser.KEY, s, userName ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var rmuser = (req, res, next) => {
    var {  s, userName } = req.body;
    api.rmuser( s, userName ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var updcardcnt = (req, res, next) => {
    var { userName, newCardsCount } = req.body;
    api.updcardcnt( userName, newCardsCount ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var updcards = (req, res, next) => {
    var { userName, _newCards } = req.body;
    api.updcards( userName, _newCards ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var updpackcnt = (req, res, next) => {
    var {  userName, newPacksCount } = req.body;
    api.updpackcnt( userName, newPacksCount ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};

var updpacks = (req, res, next) => {
    var { userName, _ownedPacks } = req.body;
    api.updpacks( userName, _ownedPacks ).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    });
};



  var addbuyord =(req, res, next) => {
    var { userName, cardId } = req.body;
    api.addbuyord(userName, cardId).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    })
    
  }

  var addsellord =(req, res, next) => {
    var { userName, cardId } = req.body;
    api.addsellord(userName, cardId).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    })
    
  }

  var rmbuyord =(req, res, next) => {
    var { owner, buyOrderId } = req.body;
    api.rmbuyord(owner, buyOrderId).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    })
    
  }

  var rmsellord =(req, res, next) => {
    var { owner, sellOrderId } = req.body;
    api.rmsellord(owner, sellOrderId).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
        next(err);
    })
    
  }

export default { addcard,
    rmcard,
    updcard,
    trnsfrcard,
    issuepack,
    issuecard,
    openpack,
    adduser,
    rmuser,
    updcardcnt,
    updcards,
    updpackcnt,
    updpacks,
    addbuyord,
    addsellord,
    rmbuyord,
    rmsellord
};