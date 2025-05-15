import {ticketService} from '../services/ticket-service.js'
import {createResponse} from '../utils.js'

export default class TicketController{
    constructor(service){
    this.service=service
    }

    generateTicket=async(req,res,next)=>{
        try{
            const user=req.user
            const ticket=await this.service.generateTicket(user)
            createResponse(res,201,ticket)
        }catch(error){
            next(error)
        }
    }

    getAll=async(req,res,next)=>{
        try{
            const tickets=await this.service.getAll()
            createResponse(res,200,tickets)
        }catch(error){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const ticket=await this.service.getById(id)
            createResponse(res,200,ticket)
        }catch(error){
            next(error)
        }
    }

    getByUser=async(req,res,next)=>{
        try{
            const{userId}=req.params
            const tickets=await this.service.getByUser(userId)
            createResponse(res,200,tickets)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const updatedTicket=await this.service.update(id,req.body)
            createResponse(res,200,updatedTicket)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const result=await this.service.delete(id)
            createResponse(res,200,{message:'Ticket deleted successfully',result})
        }catch(error){
            next(error)
        }
    }

    getByCode=async(req,res,next)=>{
        try{
            const{code}=req.params
            const ticket=await this.service.getByCode(code)
            createResponse(res, 200,ticket)
        }catch(error){
            next(error)
        }
    }
}

export const ticketController = new TicketController(ticketService)