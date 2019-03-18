// import cardController from '../controllers/cards/cardController';
// import keywordController from '../controllers/keywords/keywordController';
// import actionController from '../controllers/actions/actionController';
// import file from '../controllers/file/dirInfo';
// import createDir from '../controllers/file/createDir';
// import updateFile from '../controllers/file/createFile';
// import readFile from '../controllers/file/readFile';
// import deleteFile from '../controllers/file/deleteFile';
// import cardActions from '../controllers/eos/cardActions';
// import controllerActions from '../controllers/eos/controllerActions';
// import cardTables from '../controllers/eos/cardTables';
// import controllerTables from '../controllers/eos/controllerTables';
// import newController from '../controllers/eos/controllerActons2';
import actions from '../controllers/eos/controllerActionsPost';

export default function(app) {
    app.post('/card/add', actions.addcard);
    // {
    //     "s": "Last Card",
    //     "cardName":     "Last Card",
    //     "type":         "Unit",
    //     "faction":      "pata nhi",
    //     "manaCost":     8,
    //     "attack":       3,
    //     "health":       8,
    //     "expset":       "Chiffon",
    //     "craftCost":    8,
    //     "cardText":     "This card is added through server",
    //     "cardKeywords": "pata nhi"
    // }

    app.post('/card/remove', actions.rmcard);
    app.post('/card/update', actions.updcard);
    app.post('/card/transfer', actions.trnsfrcard);
    app.post('/card/issue', actions.issuecard);
    // {
    //     "cardName": "Blessed Oil",
    //     "owner": "user2account"
    // }

    app.post('/cards/update', actions.updcards);

    app.post('/pack/open', actions.openpack);
    // {
    //     "packId" : 20,
    //     "owner" : "user2account"
    // }

    app.post('/pack/issue', actions.issuepack);
    // {
    //     "packType" : "Type1",
    //     "owner" : "user2account"
    // }

    app.post('/pack/update', actions.updpacks);

    app.post('/user/add', actions.adduser);
    // {
    //     "s": "user1",
    //     "userName": "user2account",
    //     "actor": "user2account",
    //     "key": "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ"
    // }

    app.post('/user/remove', actions.rmuser);
    app.post('/user/transfer', actions.trnsfrcard);
    app.post('/user/transfer', actions.trnsfrcard);



    // //Actions--------------------------------------------------------------------
    // app.post('/card/create', cardActions.create);
    // app.post('/card/transfer', cardActions.transfer);
    // app.post('/card/burn', cardActions.burn);
    // app.post('/controller/upsert', controllerActions.upsert);
    // app.post('/controller/erase', controllerActions.erase);
    // //Tables-----------------------------------------------------------------------
    // app.get('/card/accounts', cardTables.getTableAccounts);
    // app.get('/card/stats', cardTables.getTableStat);
    // app.get('/card/tokens', cardTables.getTableToken);
    // app.get('/controller/packslogs', controllerTables.getTablePackslogs);

    // new controller ----------------------------------------------------------------
    // app.post('/controller/createuser', newController.createuser);
    // app.post('/controller/freezeuser', newController.freezeuser);
    // app.post('/controller/unfreezeuser', newController.unfreezeuser);
    // app.post('/controller/createcol', newController.createcol);
    // app.post('/controller/creatpack', newController.creatpack);

    // app.get('/pack/create')

    
    // app.get('/cards', cardController.all.get);
    // app.get('/cards/:id', cardController.id);
    // app.get('/cards/rarity/:rarity', cardController.all.byRarity);
    // app.get('/cards/type/:type', cardController.all.byType);
    // app.get('/keywords', keywordController);
    // app.put('/cards', cardController.all.put);
    // app.get('/actions', actionController.get);
    // app.get('/action/:id', actionController.getById);
    // app.put('/action', actionController.put);
    // app.get('/card/query', cardController.all.query)

    // //file system -------------------------------------------------------------------------
    // app.get('/files/:user', file)
    // app.post('/files/create/:name', createDir)
    // app.post('/files/:name/updatefile/:filename', updateFile)
    // app.get('/files/:name/readfile/:filename', readFile);
    // app.post('/files/:name/deletefile/:filename', deleteFile);

}
