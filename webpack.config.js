const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 패스를 불러와야한다.

module.exports = {
    // name: 'word-relay-dev',
    // 이름이다. 사실 별 다른 기능은 가지지 않는다.

    // mode: 'development',
    mode: 'production',
    // 모드는 두가지가 있다. 디벨로먼트(개발)와 프로덕션(배포)이다.

    // devtool: 'eval',
    devtool: 'source-map',
    // 빠르게 작업하게 한다.

    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    // 이 확장자들은 알아서 찾는다.

    entry: {
        app: './client',
    },
    // 여기에 적인 파일을 기준으로 파일들이 합쳐진다.

    module: {
        rules: [
                    {
                        test: /\.jsx?$/,
                        // 이 룰을 js와 jsx파일에 적용하겠다는 의미다.
                        exclude: path.join(__dirname, 'node_modules'),
                        // 이 파일들은 제외한다는 것이다.
                        loader: 'babel-loader',
                        // 바벨을 통해서 최신문법과 jsx를 구문법의 js로 만들며 브라우저들과 호환 가능하게 만들어준다.
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        browsers: ['> 5% in KR', 'last 2 chrome versions']
                                        // 브라우저를 지원하게 만드는 설정. browserslist에서 참고하면 좋다.
                                    },
                                    debug: true,
                                    // 
                                }],
                                '@babel/preset-react',
                            ],
                            plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    'react-hot-loader/babel',
                                    "styled-jsx/babel",
                                    '@babel/plugin-syntax-dynamic-import',
                            ],
                        },
                        // 바벨의 옵션들을 명시해둔다.
                    },
                    {
                        test: /\.css|scss?$/,
                        loader: 'style-loader',
                        exclude: /node_modules/,
                    },
                    // CSS를 HTML에 합쳐준다.
                    {
                        test: /\.css|scss?$/,
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'global',
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                            },
                        },
                        exclude: /node_modules/,
                    },
                    // CSS를 JS와 합쳐준다.
                    {
                        test: /\.css|scss?$/,
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'url-loader',
                        options: {
                            name: '[hash]-[ext]',
                            publicPath: './public/',
                            limit: 10000,
                        },
                    },
                    {
                        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'file-loader',
                        options: {
                            publicPath: './public/',
                            name: '[name]-[ext]-[hash]',
                        }
                    },
                ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    // 확장 설정 기능들을 말한다. 여러가지가 있다. 이건 더 자세히 알아보면 좋을 것 같다.

    output: {
        path: path.join(__dirname, 'dist'),
        // 이 경로로 내보내준다.
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // 내보낼 파일 이름을 적는다. 이런 파일을 내보내준다.
        publicPath: '/',
        // react-hot-loader && webpack-dev-server 적용을 위한 가상의 path 설정
    },
};