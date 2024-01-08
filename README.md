Step 1: Clone the repository

git clone https://github.com/Abhinav-3359/chat.git

Step 2: Create Your MongoDB Account and Database/Cluster
Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change <password> with your own password

add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)


Step 3: Edit the Environment File
Check a file named .env in the /backend directory.
This file will store environment variables for the project to run.


STREAM_APP_ID = 

STREAM_API_KEY =
STREAM_API_SECRET =

TWILIO_ACCOUNT_SID = 
TWILIO_AUTH_TOKEN = 
TWILIO_MESSAGING_SERVICE_SID =

Make an account on [streamchat.io](https://dashboard.getstream.io/) and [twilio](https://console.twilio.com/) and get the following credentials


Step 4: Install Backend Dependencies
In your terminal, navigate to the /backend directory

cd backend
the following command to install the backend dependencies:

npm install
This command will install all the required packages specified in the package.json file.

Step 5: Run Backend
While still in the /backend directory of the project, execute the following command to run the setup script:

npm start

It should start on localhost:5000

Step 6: Install Frontend Dependencies
Open a new terminal window , and run the following command to install the frontend dependencies:

cd frontend

npm install

Step 7: Run the Frontend Server
After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

npm start
This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web browser.
