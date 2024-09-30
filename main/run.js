import webpack from "webpack";
import config from "./webpack.config.js";

const webpackConfigs = [ config ];

const compiler = webpack( webpackConfigs );

compiler.run( ( error, stats ) => {
    error = error || stats.hasErrors();

    compiler.close( closeError => {
        console.log( "\n" );

        if ( error ) {
            console.log( error.message );
        }
        else {
            console.log( stats.toString( { "preset": "normal", "colors": true } ) );
        }

        console.log( "ERROR:", error );
    } );
} );
