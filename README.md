INSTRUCTION
1. Clone project on your disk
2. In forder of project, open cmd, run some comands:
3. 'npm install' : to install all module in package.json  
4. install mongodb on your disk follow links : https://www.mongodb.com/docs/guides/server/install/
5. 'npm run dev' : run server by nodemon or 'npm start'  run server by node
6. I haven't created api for create accout admin. So need access mongodb create user with role is 'admin' in database-name test-interview,
Runs the app in the development mode.
Open http://localhost:3300 to view it in your browser. Or use Postman

The page will reload when you make changes.
You may also see any lint errors in the console.

Noticed: Some APIs need authorication and authentication. So need assign for header of request a token which awarded after login with account which created on step 6.
Or you can test through https://be-app-mdthang.herokuapp.com/ use "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTA3OTY3MjJ9.oZewQ7nlz2zDtSnFiAxqaxyA-4-71TSeqm-aMvd4k1Q"
