const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
// Importar los esquemas y resolvers
const RoomTypeDefs = require('./schemas/RoomSchema');
const RoomResolvers = require('./resolvers/RoomResolver');
const CustomerTypeDefs = require('./schemas/CustomerSchema');
const CustomerResolvers = require('./resolvers/CustomerResolver');
const BookingTypeDefs = require('./schemas/BookingSchema');
const BookingResolvers = require('./resolvers/BookingResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://rofriasbo:20400737@carrito.wob3g.mongodb.net/?retryWrites=true&w=majority&appName=CARRITO');

  const server = new ApolloServer({
    typeDefs: [RoomTypeDefs, CustomerTypeDefs, BookingTypeDefs],
    resolvers: [RoomResolvers, CustomerResolvers, BookingResolvers],});
  
     // Iniciar el servidor Apollo
  const { url } = await server.listen({ port });
  console.log(`🚀 Server running at: ${url}`);
    
};

startServer();
