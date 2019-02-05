import cardController from '../controllers/cards/cardController';
import keywordController from '../controllers/keywords/keywordController';
import actionController from '../controllers/actions/actionController';

export default function(app) {
    app.get('/cards', cardController.all.get);
    app.get('/cards/:id', cardController.id);
    app.get('/cards/rarity/:rarity', cardController.all.byRarity)
    app.get('/cards/type/:type', cardController.all.byType);
    app.get('/keywords', keywordController);
    app.put('/cards', cardController.all.put);
    app.get('/actions', actionController.get);
    app.get('/action/:id', actionController.getById);
    app.put('/action', actionController.put);
    app.get('/card/query', cardController.all.query)
}
