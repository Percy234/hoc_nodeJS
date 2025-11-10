const Router = (app) => {
    app.get('/', (req, res) => {
        res.json({ message: 'Server is running' })
    });
}

export default Router;