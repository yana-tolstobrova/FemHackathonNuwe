 Data Wave

# Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
	* [Step 1](#step-1)
	* [Step 2](#step-2)
	* [Step 3](#step-3)
	* [Step 4](#step-4)
	* [Step 5](#step-5)
	* [Step 6](#step-6)
3. [Usage](#usage)
4. [Tools and technologies used](#tools-and-technologies-used)
5. [Description](#description)
6. [Organization](#organization)
	* [Decisions and Considerations](#decisions-and-considerations)
	* [Decisions by task](#decisions-by-task)
	* [Figma wireframes](#figma-wireframes)
7. [Associated content](#associated-content)


## Introduction

Data Wave is a project carried out in the international FemHack Vol.II Hackaton.
The challenge is based on the creation of an application for the visualization of data on the use of the Internet by countries.


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
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a> 
<a href="https://www.tailwindcss.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" /></a>  

### Used bookstores: @nivo/geo, axios, d3-geo, recharts, react-circular-progressba

## Description
We have completed the three tasks, at this moment our application is a minimum viable product, so we met the proposed objectives and we are proud of the result, we still have a lot to learn, we got stuck in some parts and it was hard, but we supported each other and we continue on the path and today writing this readme we are proud to say that we have achieved it.
We believe that we still need some things to improve on styles and api timeout, maybe a spinner to give feedback, and in retrospect we realize mistakes and things we could have done if we had more time.

## Organization
For the organization of this project we began by understanding the expected website, for that we began with the configuration of the development environment and implementing the connection with the Backend, after seeing the data as we received it, we focused on seeing what we wanted to do for it. We brainstormed and then we made a wireframe to see how we would display the data and what libraries we would need for it.
We created a repository and we divided ourselves by components and we began to work, as a framework we did it with kanban to move forward and see at all times what each member was doing and thus we were completing the tasks.

### Decisions and Considerations
Here are some key considerations and decisions we have made:
- Choice of the main framework: We have decided to use React.js as the main framework for the development of the web page. We chose React.js because of its efficiency and flexibility for creating interactive user interfaces and reusable components.
- Integration of graphics libraries: To display the data graphically, we have chosen to use graphics libraries (@nivo/geo, d3-geo, recarts and react-circular-progressba.
- Graphics animation: We have decided to animate the implemented graphics to improve the user experience.
- Visualizing data on a world map: For the task of visualizing data on a world map, we have explored various options and ultimately settled on @nivo/geo.
- Color palette and design: We have carefully considered the choice of colors, both in the graphics and on the page for consistency.
- We have looked for innovative ways to present data and have considered unique ideas that can make the visualization more engaging and memorable for users.
### Decisions by task


### Figma wireframes
[Link to design wireframes](/assets/wireframe.png)

### Associated content
To carry out this project and obtain the data, they provided us with a repo for the backend.
To carry out this project and obtain the data, they provided us with a repo for the backend, which first of all we had to clone.
el repo utilizado es/; https://github.com/nuwe-reports/femhack-II-frontend 

