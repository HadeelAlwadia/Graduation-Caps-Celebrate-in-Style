const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', async (_, res) => res.send({ healthy: true }));

require('./routes/auth/auth')(app);
require(`./routes/user/requests`)(app);
require(`./routes/admin/users`)(app);
require(`./routes/admin/products`)(app);





const port = 5100;

app.listen(port, () => console.log(`Hello Hadeel :), I am listening on port ${port}...`))


