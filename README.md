Welcome to our developer assessment for front-end developer intern candidates!

To complete the assessment:

-   clone this repository
-   complete the tasks listed below
-   create your own git repo using the name format \[your-name\]-hububble-assessment
-   email your repository link to samsarastartup@gmail.com

We expect this assessment to take around 2-4 hours for a proficient front-end developer.

## Part 1: Coding

This part of the assessment will test your grasp of fundamental aspects of front-end development, and your competency with HTML, CSS, and Javascript. We will be looking at:

-   accuracy / completeness (did you meet all the requirements of the task?)
-   code quality / format (is your code easy to read, written with best practices?)
-   browser compatibility (how well does your code work on different devices and browsers?)

**Submitting Exercises**

Although we provide Submitting instructions for each exercise, we understand if you wish to create your own folder structure/build environment for the coding exercises. This is fine as long as they are well-organized and clearly documented.

**Preprocessors and Frameworks**

All of the exercises can be completed without build tools or environment setup.

All javascript should be written in plain vanilla javascript syntax (no jQuery).

CSS can be written as basic CSS, or using preprocessors like SASS, SCSS, or PostCSS

### Exercise 1: WeatherFetch

## Objective

The objective of this exercise is to create a frontend application that fetches weather data from a weather API and displays it to the user.

## Requirements

1. Utilize the OpenWeatherMap API (or any other weather API of your choice) to fetch weather data.
2. Display the following weather information:
    - Current temperature
    - Weather description (e.g., sunny, cloudy, rainy)
    - Wind speed
    - Humidity level
3. Implement a user interface where the user can input the location (city name or ZIP code) in a text field and fetch the weather data upon submitting the form.
4. Display the retrieved weather information in a clear and organized manner on the webpage.
5. Do not use jQuery or other external libraries. Use vanilla JavaScript only.
6. Ensure that your code can run on a local development server like [http-server](https://www.npmjs.com/package/http-server).

## Provided Files

-   `weatherfetch.html`: HTML boilerplate for the frontend application.
-   `style.css`: CSS file for styling (no need to style for this exercise).
-   `README.md`: This file containing instructions for the exercise.

## Instructions

1. Clone or download the repository to your local machine.
2. Open `weatherfetch.html` in your preferred code editor.
3. Write JavaScript code to fetch weather data from the chosen weather API.
4. Implement the user interface to input the location and display weather information.
5. Test your application by running it on a local development server.
6. Ensure that the weather information is displayed accurately and in the specified format.

## Additional Notes

-   Include any additional instructions or documentation in a `poke-readme.md` (or `.txt`) file within the `Coding/exercise-2` folder.
-   Focus on functionality and data presentation rather than styling. CSS styling is not required for this exercise.
-   Consider implementing error handling to manage cases where the API request fails or the user enters invalid input.

## Submission

Please ensure that all files related to this project, including HTML, CSS, JavaScript, and documentation, are placed in the `Coding/exercise-2` folder as specified.

---

### Exercise 2: Make a Slider

In this assignment you will be asked to create a bare-bones HTML/JS/CSS responsive slider. Given the HTML in `Coding/exercise-2/index.html`, use CSS and Javascript to create a functional interactive.

You may use 3rd-party libraries as long as they are ES6/ES5-based javascript libraries (no jQuery).

This assignment will be assessed on the following criteria:

-   does the slider work?
-   are the transitions smooth?
-   is it easy to use?

Feel free to get creative with how you style the slider, buttons, and pagination - but we are not assessing your design or creative abilities.

**Requirements**

-   You must not edit any HTML in `index.html` (the only exception is you can remove the text from the prev/next buttons and pagination list items for the purpose of adjusting the appearance).
-   The slider should loop (forwards and backwards)
-   The pagination buttons should be clickable
-   The prev/next buttons should work
-   The slider should be functional on any size screen (and work with touch inputs)

**Submitting**

Any files you create for this project should be placed into the `Coding/exercise-2` folder along with any readme or instructions you wish to provide.

---

### Exercise 3: Clone Google Homepage

In this exercise you will clone the layout of [Google's homepage](https://google.com) with **HTML and CSS Only** (no javascript!). Your code should copy the look and feel of the google homepage as closely as possible, and recreate the user interactions and user experience as closely as possible.

You do not need to make the links or search features work; focus instead on layout, interaction and design.

You can use any CSS preprocessor or build tools that you like for this exercise.

You will be evaluated on:

-   accuracy
-   quality of interactions
-   CSS code quality (class naming, structure, readability)
-   proper use of semantic HTML
-   responsiveness

**Requirements**

**Submitting**

Place all your files in the `Coding/exercise-3` folder along with any readme or instructions you wish to provide.
