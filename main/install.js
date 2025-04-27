#!/usr/bin/env node

import fs from "node:fs";

const root = import.meta.dirname;

// create symlink to "package-a" and "package-b"
linkPackage( "package-a" );
linkPackage( "package-b" );

function linkPackage ( name ) {

    // create "node_modules" if not exists
    if ( !fs.existsSync( root + "/node_modules" ) ) {
        fs.mkdirSync( root + "/node_modules" );
    }

    fs.rmSync( root + "/node_modules/" + name, {
        "force": true,
        "recursive": true,
    } );

    if ( process.platform === "win32" ) {
        fs.symlinkSync( root + "/../" + name, root + "/node_modules/" + name, "junction" );
    }
    else {
        fs.symlinkSync( root + "/../" + name, root + "/node_modules/" + name, "dir" );
    }
}
