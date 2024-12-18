
import mongoose from 'mongoose';
import app from './app';

const port:number = 5000

async function databaseConnectionFunction() {
    try{
        await mongoose.connect('mongodb+srv://poddershourav9:ktSJmk4a8ixkvA3t@cluster0.knnnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        app.listen(port, () => {
            console.log(`Legal Estate app is listening on port ${port}`)
          })
        console.log('database is connected successfully.')
    }catch(error){
        console.log('There is a problem connecting with database.', error);
    }
}

databaseConnectionFunction();