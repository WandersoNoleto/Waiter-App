import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductByCategory } from './app/useCases/categories/listProductsByCategory';
import { createOrder } from './app/useCases/orders/createOrder';
import { listOrder } from './app/useCases/orders/listOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

// List categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List products
router.get('/produtcs', listProducts);

// Create Product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductByCategory);


// List orders
router.get('/orders', listOrder);


// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel orders
router.delete('/orders/:orderId', cancelOrder);
