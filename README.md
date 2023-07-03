Data Wave

# Table of Contents
1. [Description](#description)
2. [Organization](#organization)
3. [Usage](#usage)
4. [Tools and technologies used](#tools-and-technologies-used)
5. [Installation](#installation)
	* [Step 1](#step-1)
	* [Step 2](#step-2)
	* [Step 3](#step-3)
	* [Step 4](#step-4)
	* [Step 5](#step-5)
	* [Step 6](#step-6)
    * [Creating React App](#creating-react-app)
    * [Decisions and Considerations](#decisions-and-considerations)
	* [Decisions by task](#decisions-by-task)
    * [Associated tasks](#associated-tasks)
6. [Collaborators](#collaborators)

## Description
Data Wave is a project carried out in the international FemHack Vol.II.
The challenge is based on the creation of an application for the visualization of data on the use of the Internet by countries.

We have completed the three tasks, at this moment our application is a minimum viable product, so we met the proposed objectives and we are proud of the result, we still have a lot to learn, we got stuck in some parts and it was hard, but we supported each other and we continue on the path and today writing this readme we are proud to say that we have achieved it.
We believe that we still need some things to improve on styles and api timeout, maybe a spinner to give feedback, and in retrospect we realize mistakes and things we could have done if we had more time.

## Organization
For the organization of this project we began by understanding the expected website, for that we began with the configuration of the development environment and implementing the connection with the Backend, after seeing the data as we received it, we focused on seeing what we wanted to do for it. We brainstormed and then we made a wireframe to see how we would display the data and what libraries we would need for it.
We created a repository and we divided ourselves by components and began to work, according to the methodology Kunban. 

## Usage
 - `Functionality 1`: Welcome the user to the application and briefly explain the context and uses of the application
 - `Functionality 2`: Presentation of database information.
 - `Functionality 2a`: Presentation of the first graph with the number of Internet users per year.
 - `Functionality 2b`: Second graph presentation of how many people can access the internet by country and year.
 - `Functionality 2c`: Interactive world map presentation where when you move with the mouse it says the percentage of people with internet and you have the option to see this information by year.

The functionality and objective of this application was to build a website with a good user experience to visualize the data, customizing each of the graphs with different animations.

## Tools and technologies used
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50"/>
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" />
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" />
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" /> 

### Used bookstores:
 @nivo/geo, axios, d3-geo, recharts, react-circular-progressbar, react-intersection-observer, framer-motion

## Installation
### Description of Data Wave project/service

First of all, we need to set up the backend from the [source repo](https://github.com/nuwe-reports/femhack-II-frontend-challenge) that we use for our project.

All steps to set up locally are described [here](https://github.com/nuwe-reports/femhack-II-frontend-challenge#setup-backend).

In order to make it more accessible, we'll deploy our backend server on [render.com](https://render.com/)

### Step 1
Login with one of the three options available on [render.com](https://render.com/)
![Sign in to render.com](https://i.ibb.co/crJXznp/step1.png)
### Step 2
![New Service](https://i.ibb.co/kq4JLsZ/step2.png)
### Step 3
Copy the source repository link [https://github.com/nuwe-reports/femhack-II-frontend-challenge#setup-backend](https://github.com/nuwe-reports/femhack-II-frontend-challenge#setup-backend)

Paste it into Public Git repository.
![New Service](https://i.ibb.co/zxWqKdC/step3.png)
### Step 4
Since we have Docker for this backend, it is pretty easy:

Make sure to deploy from the main branch.

Choose Docker as the Runtime option.
![New Service](https://i.ibb.co/gSd1FHQ/step4.png)
### Step 5
![New Service](https://i.ibb.co/nnRNZvT/step5.png)
### Step 6
Building and deploying could take some time.
![New Service](https://i.ibb.co/VLrHCPK/step6.png)

Once you see the  ![Static Badge](https://img.shields.io/badge/Live-green) it means the backend was successfully deployed!

### Creating React App
To create a React app, you can follow these steps:
### Step 1: Set up the Development Environment
Before creating a React app, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install Node.js from the official website: https://nodejs.org

### Step 2: Create a New React App
Once you have Node.js and npm installed, you can create a new React app using the create-react-app command-line tool. Open your terminal or command prompt and run the following command:

```
$ npx create-react-app my-app
```
This command creates a new directory named my-app (you can replace my-app with the desired name for your app) and sets up a basic React project structure with the necessary dependencies.

### Step 3: Navigate to the Project Directory
After the app is created, navigate to the project directory by running the following command:

```
$ cd my-app
```
### Step 4: Start the Development Server
In the project directory, you can start the development server by running the following command:

```
$ npm start
```
This command starts the development server and opens the app in your default web browser. Any changes you make to your React components will automatically reload the app.

### Step 5: Edit the App
Open the project directory in your preferred code editor. The main file you'll be working with is src/App.js. You can edit this file or create new components in the src directory to build your app.


### Decisions and Considerations
Here are some key considerations and decisions we have made:
- Choice of the main framework: We have decided to use React.js as the main framework for the development of the web page. We chose React.js because of its efficiency and flexibility for creating interactive user interfaces and reusable components.
- Integration of graphics libraries: To display the data graphically, we have chosen to use graphics libraries (@nivo/geo, d3-geo, recarts and react-circular-progressba.
- Graphics animation: We have decided to animate the implemented graphics to improve the user experience.
- Visualizing data on a world map: For the task of visualizing data on a world map, we have explored various options and ultimately settled on @nivo/geo.
- Color palette and design: We have carefully considered the choice of colors, both in the graphics and on the page for consistency.
- We have looked for innovative ways to present data and have considered unique ideas that can make the visualization more engaging and memorable for users.
### Decisions by task

**Task 1: Displaying charts:**

+ Setup development environment and implement Backend connection.

Since Backend server had Docker we´ve decided to deploy our backend server on render.com in order to make it more accessible. For find more details go [here](https://github.com/yana-tolstobrova/FemHackathonNuwe#description-of-data-wave-projectservice).

+ Create and implement chart displaying Internet Users x Year. The chart displays how many Internet Users could access the Internet per Year. 

To create this chart we have used charting library built with React and D3 - 'recharts'. And to fetch data from backend server - axios. Here is how you can install it to your project:

```
$ npm i axios
```
```
$ npm i recharts
```

+ Create and implement chart displaying Internet Users x Year x Country. The chart displays how many Internet Users each specific Country could access the Internet per Year. The user should have the ability to change the Country or Year at any time. 

To create this chart we have used a React Circular Progressbar component, built with SVG and extensively customizable. And to fetch data from backend server - 'axios'. Here is how you can install it to your project:

```
$ npm i react-circular-progressbar
```
```
$ npm i axios
```

+ Create and implement last chart displaying Top 10 Countries with the largest number of internet user per Year.

To create this chart we have used charting library built with React and D3 - 'recharts'. And to fetch data from backend server - axios. Here is how you can install it to your project:

```
$ npm i axios
```
```
$ npm i recharts
```

**Task 2: Animating website:**

For website animation we were using pure CSS animation and for second chart two libraries: 'react-intersection-observer' and 'framer-motion'. Here is how you can install them to your project:

```
$ npm install react-intersection-observer
```
```
$ npm intall framer-motion
```

**Task 3: World Map data visualization:**
+ Create the data visualization of percentage of of internet user by country and year on the world map using the d3-geo and @nivo/geo libraries.

And to get data from backend server: fecth. For this task it was installed
```
$ npm i d3-geo
```
```
$ npm i @nivo/geo
```

**Associated tasks:**
+ Color palette both on the website as well as in each task.
+ How the content is displayed on the website. The User Experience (UX) should be a priority.

[Here is a link](https://www.figma.com/file/CoNsQK6K1zWxXIAMHVujLS/DataWave?type=design&node-id=0%3A1&mode=design&t=RrzqTpKQVwFehdHI-1) to our Figma document with wireframe and design system.

## Collaborators
<div style="display: flex">
  <div>
    <a href="https://www.linkedin.com/in/monicablancocalvi%C3%B1o/">
      <img src="https://avatars.githubusercontent.com/u/107352744?v=4" width="100" borderRadius="50">
      <br>
      <sub>Monica Blanco</sub>
    </a>
  </div>
  <div>
    <a href="https://www.linkedin.com/in/yana-tolstobrova/">
      <img src="https://avatars.githubusercontent.com/u/126439762?v=4" width="100" borderRadius="50">
      <br>
      <sub>Yana Tolstobrova</sub>
    </a>
  </div>
</div>
