# Coding-Ninjas-Placement-cell 🦖
Register students for an interview and download details in CSV format.

# Features of this projects are 🚱
## Authentication Part
1. Sign up with email (Validation- user have to verify email, a verification mail will sent to provided email)
![Screenshot 2023-05-13 213149](https://github.com/Ritikthakur01/Coding-Ninjas-Placement-Cell/assets/114640486/c1f63a7e-0713-436e-93d5-a95b24aa3b0c)



2. Sign in (redirect to a blank home page with a logout after sign in)
![Screenshot 2023-05-13 213337](https://github.com/Ritikthakur01/Coding-Ninjas-Placement-Cell/assets/114640486/25f1eb9b-a74c-4124-8104-339d999201da)


3. Sign out
4. Forgot password (send a reset password link which will expire in next 5 mintues)
5. The password store in the db will be encrypted
6. Google login/signup (by using username and app password(2fa)) (Social authentication)
7. Facebook login/signup (Social authentication)
8. Display all needed notifications in a beautified manner
9. Pages are well designed, try to copy designe little bit of coding ninja.

## Placement cell functionality
1. add students in placement cell.
2. add interview to company.(student must be present in list before adding interview)
3. Student will notified about its interview through email.
4. change status i.e placed in a company or not (all interviews will removed if student's status will be placed).
5. display of student's interviews.
6. display of all student registered for interview in a company.
7. Download all student details and all interviews in CSV format.


# How to setup the project on local system 🚱
lets understand steps of using this project in local system -

1. Do npm install to get node-module.
2. Do npm init to set project config accordingly.
3. Put values of all variables that are shown in enviroment.js,  You have to make your own config.env file and store all related varibles with its values init. or you can store values of varibles in enviroment varibles.(set value of production object if you run this in production mode).
4. To run project in developer mode type "npm run dev (through nodemon) or npm start".
5. To run project in production mode type "npm run prod_start". (make sure you put all value of production varibles that are in config.env file)

# Additional 🦖
- Well commented code
- Scaleable folder structure (separate models, controllers and routes)
- Pages look good! Refer to Google/facebook/other authentication systems
- Hides all data that is needed to be hidden while push on github (stores in .env file)
