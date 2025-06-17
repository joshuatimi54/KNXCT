const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'KNXCT API',
      version: '1.0.0'
    },
    components: {
      schemas: {
        Job: {
          type: 'object',
          properties: {
            description: { type: 'string' },
            job_role: { type: 'string' },
            location: { type: 'string' },
            posted_by: { type: 'string' },
            source_url: { type: 'string' },
            phone: { type: 'string' },
            company_logo: { type: 'string' },
            company_name: { type: 'string' },
            email: { type: 'string' },
            duration: { type: 'string' },
            rate: { type: 'string' },
            status: { type: 'string' }
          }
        },
        Candidate: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            role: { type: 'string' },
            certifications: { type: 'array', items: { type: 'string' } },
            sentinel_card: { type: 'string' },
            location: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
