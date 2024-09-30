import config from "package-b/webpack-config/main";

export default {
    ...config,
};

console.log( "--- package-a config used" );
