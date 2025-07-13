import path from "node:path";

export default class ResolverPlugin {

    // public
    apply ( resolver ) {
        resolver.hooks.resolve.tap( "Resolver Plugin", ctx => {
            return {
                "path": path.join( ctx.path, ctx.request ),
            };
        } );
    }
}
