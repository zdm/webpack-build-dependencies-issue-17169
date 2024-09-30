import config from "package-a/webpack.config.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default {
    ...config,
    "name": "main",
    "target": "web",
    "mode": "production",
    "context": path.dirname( fileURLToPath( import.meta.url ) ),
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
                fileURLToPath( import.meta.url ),
            ],
        },
    },

    "resolve": {
        "extensions": [ ".js" ],

        // "symlinks": false,
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
