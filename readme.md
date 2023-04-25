Mentorshala react version

first clone this repo in ur desktop.
then install node in ur system.
move on to the desired folder where you have cloned the project then do "npm install" in both client and server folder.
after that in client folder run npm start and in server folder run nodemon server.
now on localhost port 3000 , you can find you application running.


1. Clone This project.
2. In Server directory, create an env file .
3. In that config.env file, write following lines:
        1. MENTORSHALA_DB_URI=mongodb+srv://        saurabhkumar1432001:Saurabh%40mongodb@mentorshala.3gffj.mongodb.net/mydb
        2. MENTORSHAL_NS=mydb
        3.PORT=5000

4. In Client directory, replace every statement 'https://mentorshala-backend.onrender.com' with ' http://localhost:5000'

5. Open terminal, in client directory run npm start
6. Open new terminal, in server directory run nodemon server

To run the project:
1. Go to Login by clicking login button.
2. Type Username: abhiofficial581@gmail.com  , Password: 234
3. Now You have the main page ijnterface. 
4. You can swipe left the cards if the you dislike the person.
5. You can swipe right the card if you like the the person.
6. When you swiperight then in the matches section of the person you liked willget updated and your name will be shown.
