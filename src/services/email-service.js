import path from 'path'
import {createTransport} from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import {templateHtml} from '../utils/template.js'
import 'dotenv/config'

export const transporter=createTransport({
    service:'gmail',
    port:process.env.PORT_GGL,
    auth:{
        user:process.env.USER_GGL,
        pass:process.env.PASS_GGL,
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
    from:process.env.USER_GGL,
    to:process.env.USER_GGL,
    subject:'Bienvenido/a',
    html:templateHtml,
    attachments:[
        {
            path:process.cwd()+'/src/utils/test.txt',
            filename:'resumen-de-cuenta.txt',
        },
    ],
}

export const configMailHbs={
    from:process.env.USER_GGL,
    to:process.env.USER_GGL,
    subject:'Bienvenido/a',
    template:'email',
    context:{
        name:'Juan',
        text:'Te estabamos esperando'
    }
}