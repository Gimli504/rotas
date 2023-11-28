import prismaClient from "../../prisma";


class StatusFalseOrderService{

    async execute(){

             const order = await prismaClient.pedido.findMany({

                where:{
                    status:false
                }
             })

             return order;
    

    }

}


export {StatusFalseOrderService}