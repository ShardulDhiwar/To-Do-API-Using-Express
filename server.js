const express = require('express');
const taskRouter = require('./routes/taskRouter')
const Port = 3000;

const app = express();
app.use(express.json());

app.use('/api', taskRouter)

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});


