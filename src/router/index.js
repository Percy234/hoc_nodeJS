import kingdomRouter from "./kingdom.js";
import phylumRouter from "./phylum.js";

const Router = (app) => {
    app.use('/kingdoms', kingdomRouter);
    app.use('/phylums', phylumRouter)
}

export default Router;