import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOderService";


class RemoveOrderController{
   
     async handle(req:Request,res:Response){

        const id_pedido = req.query.id_pedido as string; // as string para reconhecer o formato como string "necessario quando se esta passando as imformaçoes pelo query"
        const removeOrderService = new RemoveOrderService();
        const pedido = await removeOrderService.execute({id_pedido});

        return res.json(pedido);


     }
}

export {RemoveOrderController}