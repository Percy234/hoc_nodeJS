import kingdomRouter from "./kingdom.js";
import phylumRouter from "./phylum.js";
import { 
    notFound, 
    errrorHandler 
} from "./error.js";

const Router = (app) => {
    app.use('/kingdoms', kingdomRouter);
    app.use('/phylums', phylumRouter)

    app.use(notFound);
    app.use(errrorHandler);
}

export default Router;