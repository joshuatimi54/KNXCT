# KNXCT API

This Express based API exposes basic endpoints for managing jobs, candidates, bookings and rewards. MongoDB is used for persistence via Mongoose and Swagger documentation is available at `/api-docs` when running the server.

All API routes are served from the `/api` base path. For example, the jobs endpoint is available at `GET /api/jobs`.

## Available endpoints

### `POST /api/jobs/new`
Create a new job and forward data to the KNXCT CMS.

Example request body:

```json
{
  "description": "Shift at City Hospital",
  "job_role": "Nurse",
  "location": "London",
  "posted_by": "admin",
  "source_url": "https://example.com/job",
  "phone": "123456789",
  "company_logo": "https://example.com/logo.png",
  "company_name": "Hospital Co",
  "email": "hr@example.com",
  "duration": "3 months",
  "rate": "£20/hour",
  "status": "Active"
}
```

### `POST /api/candidates/register`
Register a new candidate.

```json
{
  "name": "Jane Doe",
  "role": "Nurse",
  "certifications": ["CPR", "First Aid"],
  "sentinel_card": "12345",
  "location": "London",
  "phone": "555-1234",
  "email": "jane@example.com"
}
```

### `PUT /api/candidates/update/:id`
Update candidate details by ID. Body accepts the same fields as registration.

### `POST /api/booking/confirm`
Confirm a booking for a candidate and job.

```json
{
  "candidate_id": "<candidateId>",
  "job_id": "<jobId>"
}
```

### `POST /api/rewards/update`
Update reward data for a candidate.

```json
{
  "candidate_id": "<candidateId>",
  "shifts_completed": 5,
  "bonus_amount": 50
}
```

### `GET /api/status/check`
Simple health check returning database status.

Run the server with `npm start` after creating a `.env` file based on `.env.example`.
