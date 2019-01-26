import cardController from '../controllers/cards/';

export default function(app) {
    app.get('/cards', cardController.all);
    app.get('/cards/:id', cardController.name);
}