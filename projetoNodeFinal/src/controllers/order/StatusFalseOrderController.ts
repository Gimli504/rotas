import { Request, Response } from "express";

import { StatusFalseOrderService } from "../../services/order/StatusFalseOrderService";

class StatusFalseOrderController{

     async handle(req:Request,res:Response){
           
       

        const statusFalseOrderService = new StatusFalseOrderService();

        const order = await statusFalseOrderService.execute()

        return res.json(order)
     }

}

export {StatusFalseOrderController}
