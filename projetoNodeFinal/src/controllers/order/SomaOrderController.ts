import {Request,Response} from 'express';

import { SomaOrderService } from '../../services/order/SomaOrderService';

class SomaOrderController{

    async handle(req:Request,res:Response){
                
     const {id_pedido} = req.body;

     const somaOrderService = new SomaOrderService();

     const order = await somaOrderService.execute({id_pedido});

     return res.json(order);

    }
}

export{SomaOrderController}