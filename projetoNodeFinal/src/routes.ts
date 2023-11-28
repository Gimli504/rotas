import {Router} from 'express';
import multer from 'multer';


import {CreateUserController} from '../src/controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductController } from './controllers/product/ListProductController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveitemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { TruePFalseOrderController } from './controllers/order/TruePFalseOrderController';
import { StatusFalseOrderController } from './controllers/order/StatusFalseOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { SomaOrderController } from './controllers/order/SomaOrderController';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-------------ROTAS PA USUARIO---------//

router.post('/user', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/userinfo', isAuthenticated, new DetailUserController().handle );

//--------Rotas para Categorias-----------//

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/listcategory',isAuthenticated,new ListCategoryController().handle);


//--------------Rotas para Produtos--------///

router.post('/product', isAuthenticated,upload.single('file'), new CreateProductController().handle);

router.get('/category/product',isAuthenticated,new ListProductController().handle);



///--------------ROTAS PARA PEDIDOS---------///


router.post('/order',isAuthenticated,new CreateOrderController().handle);

router.delete('/deleteorder',isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add',isAuthenticated,new AddItemController().handle);

router.delete('/order/remove',isAuthenticated,new RemoveItemController().handle);

router.put('/order/send',isAuthenticated,new SendOrderController().handle);

router.put('/order/modificado', isAuthenticated,new TruePFalseOrderController().handle);

router.get('/order/status', isAuthenticated, new StatusFalseOrderController().handle);

router.get('/order/listTudo', isAuthenticated, new DetailOrderController().handle );

router.get('/order/somaTudo',isAuthenticated, new SomaOrderController().handle);







export{router};