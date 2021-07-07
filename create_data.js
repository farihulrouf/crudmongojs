
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    nama: String,
    rating: Number,
    riview: String
});

const  Fruit = mongoose.model("Fruit", fruitSchema);

/* const apple = new Fruit({
    name: "Apple",
    rating: 8,
    riview: "Rasanya manis"
});

apple.save(function(error) {
    if(error) {
        console.log(error)
    }
    else {
        console.log("berhasil simpan buah apel ke dalam database")
    }
}) */

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    riview: "Rasanya manis"
});

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 6,
    riview: "Rasanya kecut"
});

const manggis = new Fruit({
    name: "Manggis",
    rating: 9,
    riview: "Rasanya Enak"
});


Fruit.insertMany([kiwi, jeruk, manggis], function(error){
    if(error) {
        console.log(error)
    } else {
        mongoose.connection.close();
        console.log("berhasil simpan ke database")
    }
})