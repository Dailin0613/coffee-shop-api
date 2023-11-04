import { Customers, addCustomer, deleteCustomer } from "../../controller/users/Customer.js";

import { Router } from "express";

const router = new Router();

router.get('/list-customers', Customers)
router.post('/add-new-customers', addCustomer)
router.delete('/delete-customers/:id', deleteCustomer)

export default router