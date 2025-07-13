import { fileURLToPath } from "node:url";
import config from "package-a/webpack.config.js";
import ResolverPlugin from "./lib/resolver.js";

export default {
    ...config,
    "name": "main",
    "target": "web",
    "mode": "production",
    "context": import.meta.dirname,
    "devtool": "eval-source-map",
    "experiments": {
        "topLevelAwait": true,
    },

    "entry": {
        "app": "./src/main.js",
    },

    "output": {
        "path": fileURLToPath( new URL( "www", import.meta.url ) ),
        "publicPath": "auto",
        "filename": "js/[name].[contenthash].js",
        "chunkFilename": "js/[name].[contenthash].js",
        "hashDigestLength": 8,
    },

    "cache": {
        "type": "filesystem",
        "buildDependencies": {
            "_configs": [

                //
                import.meta.filename,
            ],
        },
    },

    "resolve": {
        "extensions": [ ".js" ],
        "plugins": [ new ResolverPlugin() ],
        "symlinks": true,
    },

    "module": {
        "rules": [

            // js
            {
                "test": /\.m?jsx?$/,
                "exclude": [],
                "use": [
                    {
                        "loader": "babel-loader",
                        "options": {
                            "compact": false,
                            "presets": [ [ "@babel/preset-env", { "shippedProposals": true } ] ],
                        },
                    },
                ],
            },
        ],
    },
};
