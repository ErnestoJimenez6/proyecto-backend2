import {exec,execFile,spawn} from 'child_process'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const runWithSpawn=(command,args=[],options={})=>{
    return new Promise((resolve,reject)=>{
        const child=spawn(command,args,{...options,stdio:'pipe'})

        let stdoutData=''
        let stderrData=''

        child.stdout.on('data',(data)=>{
            stdoutData+=data.toString()
            console.log('📤 Recibiendo datos stdout...')
        })

        child.stderr.on('data',(data)=>{
            stderrData += data.toString()
            console.error('📤 Recibiendo datos stderr...')
        })

        child.on('error',(error)=>{
            console.error(`❌ Error en proceso hijo: ${error.message}`)
            reject(error)
        })

        child.on('close',(code)=>{
            console.log(`🔚 Proceso hijo finalizado con código ${code}`)
            if(code!==0){
                const error=new Error(`Proceso falló con código ${code}`)
                error.stderr=stderrData
                reject(error)
            }else{
                resolve({stdout:stdoutData,stderr:stderrData})
            }
        })
    })
}

runWithSpawn('find',['/'])
    .then(({stdout})=>{
        console.log('✅ Resultado find:',stdout)
    })
    .catch((error)=>{
        console.error('Error en spawn:',error.message)
        if (error.stderr) console.error('Detalles:',error.stderr)
    })

exec('find /',(err,stdout,stderr)=>{
    if(err){
        console.error(`Error: ${err.message}`)
        return
    }

    if(stderr){
        console.warn('Stderr:',stderr)
    }

    console.log('Resultado exec:',stdout)
})

const scriptPath=path.join(__dirname,'leer.txt')
execFile(scriptPath, (err, stdout,stderr)=>{
    if(err){
        console.error(`Error en archivo: ${err.message}`)
        return
    }

    console.log('Archivo ejecutado:',stdout)
})

console.log(`🆔 PID Principal: ${process.pid}`)