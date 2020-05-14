/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-14 13:45:59
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 13:46:07
 */

import Document, { Head, Main, NextScript} from 'next/document';

export default class MDocument extends Document{
    render(){
        return (
            <html>
                <Head>
                    <title>Next JS Awesome Kit</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}
