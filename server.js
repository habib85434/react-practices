const mockData = require('./data');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
    res.jsonp(
        {
            success: true,
            message: "string",
            exception: {},
            data: res.locals.data
        }
    );
};

function isAuthorized(req) {
    // check token
    console.log(req.header);
    return true;
}

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/session', (req, res) => {
    res.jsonp(mockData.session);
});

server.delete('/session', (req, res) => {
    res.jsonp(req.query)
});

server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
});

require('./routes/authentication')(server, mockData);

server.use(router);
server.listen(3002, () => {
    console.log('JSON Server is running')
});

