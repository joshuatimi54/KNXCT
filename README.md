# KNXCT API

This Express based API exposes basic endpoints for managing jobs, candidates, bookings and rewards. MongoDB is used for persistence via Mongoose and Swagger documentation is available at `/api-docs` when running the server.

## Available endpoints
- `POST /api/jobs/new` – create a job entry and forward data to the KNXCT CMS.
- `POST /api/candidates/register` – register a new candidate.
- `PUT /api/candidates/update/:id` – update candidate details.
- `POST /api/booking/confirm` – confirm a booking for a candidate and job.
- `POST /api/rewards/update` – update reward data for a candidate.
- `GET /api/status/check` – simple health check returning database status.

Run the server with `npm start` after creating a `.env` file based on `.env.example`.
