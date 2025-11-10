import kingdomRouter from "./kingdom.js";

const Router = (app) => {
    app.use('/kingdoms', kingdomRouter)
}

export default Router;