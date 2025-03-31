# React Gallery

## Description

_Duration: Weekend Sprint_

This project was undertaken to exercise this week's lessons on React components, conditional-rendering, and a few fun CSS tricks I've learned on the side. One goal was to create an image gallery which has "like" buttons that will track and update each individual photo's "like" count after every click. Another goal is to add capability to each image so that on it's click, a text description of the image should take it's place. My own personal goals for this project were to practice CSS grid, Conditional rendering, and different CSS filters.

To tackle the like counter, I used a PUT route function in App.js that was passed down as a prop to a child component. On click of the "like" button it would call the function and update data on a module on the server side. For the text/image conditional rendering, I created a container that held the photo as a background-image, and on click of the image container it would add a blur filter and a lighter color wash over the image, and append text overtop those layers. Based on the click status of the container, logic would change the class of the containers.

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app.

- [Node.js](https://nodejs.org/en/)
- [React] (https://www.npmjs.com/package/react)

## Installation

1. Open up your editor of choice and run an `npm install`
2. Run `npm run server` in your terminal
3. Run `npm run client` in your terminal
4. The `npm run client` command will open up a new browser tab for you!


## Built With

- React


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at joshuakralewski@gmail.com
