# React Gallery

## Description

_Duration: Weekend Sprint_

This project was undertaken to exercise this week's lessons on React components, conditional-rendering, and a few fun CSS tricks I've learned on the side. One goal was to create an image gallery which has "like" buttons that will track and update each individual photo's "like" count after every click. Another goal is to add capability to each image so that on it's click, a text description of the image should take it's place. My own personal goals for this project were to practice CSS grid, Conditional rendering, and different CSS filters.

To tackle the like counter, I used a PUT route function in App.js that was passed down as a prop to a child component. On click of the "like" button it would call the function and update

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

List technologies and frameworks here

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)