import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//import cookieParser from 'cookie-parser'

import { sequelize } from './server/database/db.js';

//import routes
import routeProduct from "./server/routes/Product.js"
import routeAuth from './server/routes/auth/AuthRouter.js'
import routeMenu from './server/routes/Menu.js'
import routeCustomer from './server/routes/commerce/Customer.js'
import routeOrders from './server/routes/commerce/Orders.js'

const app = express()

//middleware
app.use(express.json());
app.use(express.static('src/images'))

//routes
app.use('/users', routeAuth)
app.use('/users', routeCustomer)
app.use(routeProduct)
app.use(routeMenu)
app.use('/product/order', routeOrders)

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors())
//app.use(cookieParser())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({ info: 'Node.js is running here with node' })
})

async function main() {
    try {
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        });
    } catch (err) {
        console.error(`Get error ${err.message}`)
    }
}

main()
