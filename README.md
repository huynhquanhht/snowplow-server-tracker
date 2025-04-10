# Snowplow Tracker

## Overview
The Snowplow Tracker project is a demo application designed to showcase how to submit events from a backend server to a Snowplow collector and view them in Snowplow Micro. It provides a simple setup to demonstrate event tracking and analytics.

## Features
- Event submission from the backend to Snowplow Micro.
- Integration with Snowplow Micro for event collection and visualization.
- Dockerized setup for easy deployment.

## Prerequisites
- Node.js (v16 or later)
- Docker

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/huynhquanhht/snowplow-server-tracker
   cd snowplow-server-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the required environment variables.
   ```bash
   SNOWPLOW_ENABLE=true
   SNOWPLOW_NAMESPACE=snowplow-tracker
   SNOWPLOW_APP_ID=snowplow-server-tracker
   SNOWPLOW_ENCODE_BASE64=false
   SNOWPLOW_ENDPOINT=http://snowplow-micro:9090
   SNOWPLOW_BUFFER_SIZE=1
   ```

4. Start the application using Docker Compose:
   ```bash
   docker-compose up
   ```

5. Import Postman Collection

   To test the API endpoints, you can use the provided Postman collection:
   1. Open Postman.
   2. Click on "Import" in the top-left corner.
   3. Select the file `snowplow.postman_collection.json` from the project directory.
   4. Once imported, you can run the API requests directly from Postman.

## Event Submission
The backend server is configured to submit events to the Snowplow Micro collector. You can view the submitted events in the Snowplow Micro interface at `http://localhost:9090/micro/ui`. 


## Development
To run the application locally:
```bash
npm run start
```

## Contact
For any questions or support, please contact:

- **Name**: Quan Huynh Van
- **Email**: huynhquanhht@gmail.com

## License
This project is licensed under the MIT License.