import path from 'path'
import {createTransport} from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import {templateHtml} from '../utils/template.js'
import 'dotenv/config'

export const transporter=createTransport({
    host:'gmail',
    port:process.env.PORT_ETH,
    auth:{
        user:process.env.USER_ETH,
        pass:process.env.PASS_ETH,
    },
})

const hbsConfig={
    viewEngine:{
        extName:'.handlebars',
        partialsDir:path.resolve('./src/views'),
        defaultLayout:false,
    },
    viewPath:path.resolve('./src/views'),
    extName:'.handlebars',
}

transporter.use('compile',hbs(hbsConfig))

export const configMail={
    from:process.env.USER_ETH,
    to:process.env.USER_ETH,
    subject:'Bienvenido/a',
    text:'Bienvenido/a',
    html:templateHtml,
    attachments:[
        {
            path:process.cwd()+'/src/utils/test.txt',
            filename:'resumen-de-cuenta.txt',
        },
    ],
}

export const configMailHbs={
    from:process.env.USER_ETH,
    to:process.env.USER_ETH,
    subject:'Bienvenido/a',
    template:'email',
    context:{
        name:'Juan',
        text:'Te estabamos esperando'
    }
};