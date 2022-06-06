import auth from "./middlewares/auth";
import genarateToken from "./controllers/token.controller";
import slack from "./controllers/slack.controller"
import telegram from "./controllers/telegram.controller"

export default (app, router) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    /* AUTH module */
    router.get('/', auth, (req, res) => {
        res.status(200).send({ hello: 'hello' });
    });
    router.get('/message/getToken', genarateToken);

    router.post('/message/slack', slack.slackSendMessage);
    router.get('/message/telegram', telegram.telegramSendMessage);

    // router.post('/test/add', auth.auth, createNew);

    //use router api
    app.use('/api/v1', router);

}
