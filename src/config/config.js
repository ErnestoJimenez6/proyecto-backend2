import {program} from 'commander'
import dotenv from 'dotenv'

program
    .option('-e, --env <environment>','Entorno de ejecución (dev|qas|prd)','dev')
    .parse(process.argv)

const options=program.opts()

dotenv.config({
    path:options.env==='prd'?'./.env.prd':
        options.env==='qas'?'./.env.qas':
        './.env.dev'
})

export default{
    ENV:options.env,
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL,
    SECRET_KEY:process.env.SECRET_KEY,
}