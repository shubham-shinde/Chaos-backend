// import cardController from '../controllers/cards/cardController';
// import keywordController from '../controllers/keywords/keywordController';
// import actionController from '../controllers/actions/actionController';
// import file from '../controllers/file/dirInfo';
// import createDir from '../controllers/file/createDir';
// import updateFile from '../controllers/file/createFile';
// import readFile from '../controllers/file/readFile';
// import deleteFile from '../controllers/file/deleteFile';
import cardActions from '../controllers/eos/cardActions';
import controllerActions from '../controllers/eos/controllerActions';
import cardTables from '../controllers/eos/cardTables';
import controllerTables from '../controllers/eos/controllerTables';


export default function(app) {
    //Actions--------------------------------------------------------------------
    app.post('/card/create', cardActions.create);
    app.post('/card/transfer', cardActions.transfer);
    app.post('/card/burn', cardActions.burn);
    app.post('/controller/upsert', controllerActions.upsert);
    app.post('/controller/erase', controllerActions.erase);
    //Tables-----------------------------------------------------------------------
    app.get('/card/accounts', cardTables.getTableAccounts);
    app.get('/card/stats', cardTables.getTableStat);
    app.get('/card/tokens', cardTables.getTableToken);
    app.get('/controller/packslogs', controllerTables.getTablePackslogs);

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
