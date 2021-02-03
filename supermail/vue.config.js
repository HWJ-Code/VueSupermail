/**
 * 如果需要进行一些配置项时在这个文件单独更改 不要在node_modules里面修改任何东西
 * 导出后这个文件可以将这里单独配置的配置项与node_modules里面已有相关配置项结合起来一起用
 */
module.exports = {
    configureWebpack: { //webpack相关配置
        resolve: {  //可以拮据路径相关问题\别名问题
            alias: {    //配置相关别名
                // '@': 'src', //cli3已经有配置了 不需要单独配置
                //router和store可以使用$router和$store直接拿到该对象 不需要配置
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}