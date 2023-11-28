import { Request, Response } from "express";

import { TruePFalseOrderService } from "../../services/order/TruePFalseOrderService";

class TruePFalseOrderController{

     async handle(req:Request,res:Response){
           
        const {id_pedido} = req.body;

        const truePFalseOrderService = new TruePFalseOrderService();

        const order = await truePFalseOrderService.execute({id_pedido})

        return res.json(order)
     }

}

export {TruePFalseOrderController}

