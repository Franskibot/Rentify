const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Franski:<Sbrinchio.632537.**>@cluster0.houfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Inserisci qui il tuo URI di connessione MongoDB

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connect();