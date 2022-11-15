import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';


export const router = Router();

// List categories
router.get('/categories', (req, res) => {
    res.send('Ok');
});

// Create Category
router.post('/categories', (req, res) => {
    res.send('Ok');
});

// List products
router.get('/produtcs', (req, res) => {
    res.send('Ok');
});

// Create Product
router.post('/products', (req, res) => {
    res.send('Ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('Ok');
});


// List orders
router.get('/orders', (req, res) => {
    res.send('Ok');
});


// Create order
router.post('/orders', (req, res) => {
    res.send('Ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('Ok');
});

// Delete/Cancel orders
router.delete('/orders/:orderId', (req, res) => {
    res.send('Ok');
});
