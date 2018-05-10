import   rules     from "./config/module"
import { resolve } from "./config/resolve"
import { server }  from "./config/server"
import   optimizer from "./config/optimization"

export const configuration = (serverConf) => ({
    module: rules(),
    resolve: resolve(),
    devServer: ({ ...server(), ...serverConf }),
    // plugins: plugins(),
    optimization: optimizer()
});