const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Express API',
    description: 'Automatically generated Swagger docs',
  },
  host: 'localhost:9293',
  schemes: ['http'],  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js']; // your main app file (where routes are)

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
