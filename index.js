const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
const start = async () => {
    try{
        await mongoose.connect(`mongodb+srv://mirfoziln:Bilmiman1@cluster0.jurcehs.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
    }catch(e) {
        console.log(e)
    }
}

start()