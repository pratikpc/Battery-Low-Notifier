const {
   override,
   getBabelLoader,
   addWebpackModuleRule
} = require('customize-cra');

module.exports = (config, env) => {
   const babelLoader = getBabelLoader(config);

   return override(
      addWebpackModuleRule({
         test: /\.worker\.ts$/,
         use: [
            {
               loader: 'worker-loader',
               options:{
                  worker: 'Worker'
               }
            },
            {
               loader: babelLoader.loader,
               options: babelLoader.options
            }
         ]
      })
   )(config, env);
};
