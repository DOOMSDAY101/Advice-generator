# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/DOOMSDAY101/Advice-generator.git)
- Live Site URL: [Add live site URL here](https://ifeoluwa-advice-generator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

During the development of this project, I learnt and practice on how to use API. Although am **not** very good at it, but I believe practice makes perfect.

```html
<picture>
          <source media="(min-width: 800px)" srcset="images/pattern-divider-desktop.svg">
          <img src="images/pattern-divider-mobile.svg" alt="pattern divider">
</picture>
I used this HTML to display the image based on the minimum width of the user's screen.
      
```
```css
div.inner-box {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 25px;
    background-color: hsl(217, 19%, 24%);
    border-radius: 8px;
    
}
```
```js
etch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      quote.innerHTML = data.slip.advice;
      
    
    })
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development
I would be looking forward to learning more on flexbox,
also some animations is CSS and obiously Javascript.


### Useful resources

- [Example resource 1](https://www.w3school.com) - This helped me for understand JS though I still need to practice well.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/DOOMSDAY101)
- Twitter - [@yourusername](https://www.twitter.com/Sulaiman_ife)

