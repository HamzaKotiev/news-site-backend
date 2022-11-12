const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json())
app.use(require('./routes'))

mongoose.connect('mongodb+srv://HamzatKot:19082002@cluster0.0qerfhd.mongodb.net/News?retryWrites=true&w=majority',
    () => {
        console.log('Подключение к MongoDB успешно')
        app.listen(4000, () => {
            console.log('Сервер запущен  на этом порту http://localhost:4000 ')
        })
    }
)