# Coffee Shop API

One of the reasons why having a website or application is positive for the coffee shop business is that anyone can order any available coffee or pastry from their office, home, or wherever they are

# Installation
Download [node.js](https://nodejs.org/en/download)
#
As database download [postgresql](https://www.postgresql.org/download/)
#
Use the package manager [npm](https://www.npmjs.com/) for install all dependencies

```bash
npm i express
```
```bash
npm i bcrypt
```

```bash
npm i nodemon
```

```bash
npm i cors
```

```bash
npm i jsonwebtoken
```

```bash
npm i sequelize
```

# Usage
```bash
import express from 'express'

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({info: 'Node.js is running here with node'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})
```
