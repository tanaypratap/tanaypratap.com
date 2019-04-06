---
title: Responsive Web App Design; things I wish someone would have told me earlier!
date: '2017-07-06T23:46:37.121Z'
type: 'blog'
tags: ['css', 'mobile']
---


![Grid Layout using bricks!](./grid-layout-using-bricks.jpeg)

**tl;dr** If you're starting CSS today, don't use BootStrap, use flexbox, learn to use media-query and seriously do mobile-first!

I don't know CSS When I started web development three years back, I didn't know anything about it. I had never even made a webpage, somehow passed my college (manage D grade in web development), didn't even know what `<div>` tag was.

I remember a friend of mine (Vikram) working as Full Stack Dev was showing me his web app and I was blown away, when I asked him how can he make such amazing apps, his words were, "Dude! It's really easy, here, see the bootstrap website!". Bootstrap made making websites very easy for me. I even took 3-4 sessions for college grads to introduce them to web development through bootstrap and even they enjoyed it.

**Then why did I move from Bootstrap** So here, I am happy with Bootstrap making web apps and outsourcing all my styling needs to Bootstrap, taking care of responsiveness and everything. Then, in my current workplace, I got a task where in we have to inject some rendered code into client's website. I happily designed the component with Bootstrap and it worked all right while testing but it broke in production. You ask why? because Bootstrap as a framework was setting things on global level and was either overwriting client's CSS or was being overwritten.

**Bootstrap is not needed anymore** Clearly BS had failed me for the first time and since I had almost zero experience with CSS grids outside of it, I thought of asking someone to help me. We thought that we'll outsource the CSS thing to someone and get ourselves a grid system written only for us which will not set global styles but still provide the grid. I frantically asked for help on every media. You remember the dude Vikram? who introduced me to BS, he pinged and said, "Are you still using BS? Try this new shiny thing called FlexBox", I was hesitant, "I don't know anything about it. It will take a lot of time to write something equivalent to BS for a newbie like me", he was confident as hell, "It is very easy, give it an hour and you will get the basics". Since, I didn't find anyone, I had no choice but to try it. Looking back, that was the best decision. After 1-2 hours of reading and watching tutorials, I was sure that we don't need BS anymore.

**Flex is super easy** You cannot make grids easier than this. Plus it comes with things one always struggles with: vertical centring! Some of the the reading materials I would suggest for Flex are:

https://css-tricks.com/dont-overthink-flexbox-grids/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://egghead.io/courses/flexbox-fundamentals
https://egghead.io/courses/flexbox-fundamental
My own JSBin scribbling https://jsbin.com/ducewoqiku/1/edit?html,css,output

Another good part about flexbox is that it is supported across all major browsers. However, you would like to use autoprefixer just in case. I have tested the app on Chrome, Firefox, Safari and on mobile Safari.

#### Some advice

**Do Mobile First:** No, really! First thing we should do is we should finalize how things will look on mobile devices. Then move up the ladder.
Understand media queries and min and max width, it's very easy to control the look on different screen sizes. The terms are confusing but it's super useful.
Transform Translate is good tool for positioning. Earlier, I used either margin or absolute positioning but it would hurt the responsiveness of the site. Wish I would have known about it before.
My Mistakes

While it was very easy to get flexbox working on the JSBin, it almost broke my back integrating it into the existing code. As mentioned earlier, I have a bad habit of giving margin. It came back to bite me coz wrapping was not working properly. **Lesson learnt:** when doing CSS do a top down approach. *I need to be systematic while designing.*
I had also used wordwraps and things taken from stackoverflow answers, which was breaking a lot of responsiveness. I think I need to get into it and understand how things which I use actually work to save time in future.

#### What's next? PostCSS

Time has come that I take more and more CSS into my own hands. The best way I see is to start using PostCSS as it is more near to JS than anything else. Suggestions are welcome here!