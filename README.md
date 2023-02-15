
# Purrfect

A catwiki site for Blowfish Studio's Coding Challenge 2023. 😎

## What does it do?
Purrfect is a React App with a Node Backend that allows users to browse cat breeds and find their perfect furry friend and asks some important questions people should ask themselves before buying a cat. 😻 Have a play here: https://catwiki-bnnu.onrender.com/

## What technologies?
Not sure how in detail I am supposed to go here but the big guys are:
- React
- Vite
- Node.js
- Express
- Typescript

### UI toolkits:
* Blueprint js
* Material UI
* Recharts

## Challenges faced
### Where do I start?
Building a React App from scratch is something I hadn't done before and I had never used Node but I wanted to give it a try because I knew it would be a great learning experience. I would say the biggest challenges were starting and finishing. Staring at a blank Visual Studio Code file was intimidating but once Vite helped me get the bare bones of my project set up things were looking up. Creating the components and using React based UI toolkits came relatively easy thanks to my current job and I was able to set the structure up without any huge issues.

### Node Backend
Node was a whole new world, everything here was a process of learn, try and repeat. Getting the concept of it all took a bit and then getting Typescript to compile was a headache in itself. 🥴

### Chunks!?
Just as I was starting to see the light at the end of the tunnel and it was all coming together. I realized my website was loading really really slow. It didn't take much googling to find an answer but it took a LOT more to find the correct one: chunking strategy. I realized I was importing a few components too high which was causing them to be loading when the website was hit for the first time. Adjusting these and finding a plugin for better chunk splitting (https://vitejs.dev/guide/build.html#chunking-strategy) saved the day.

### Deploying
The last step which I mistakingly believed would be the quickest and easiest. I used Render instead of Heroku because of the free aspect. 🤑😁 Deploying my app was the most difficult step because I didn't understand how fullstack applications were meant to be deployed and was trying to deploy the entire app as one instead of splitting up the client and server directories (huge shoutout to this video here: https://www.youtube.com/watch?v=8vkvsv1Mcg0).

## If I had more time?
For my first try at making a fullstack application, I'm proud of what I was able to create. There are a lot of things I would adjust, adding a spinner for the delay when you click a breed would be the first. The styling could also use some help (would change the favicon forsure) and I'm sure there are 100% different ways I could optimise it. 
