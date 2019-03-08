---
title: Rewriting Wiki in Teams with Apollo+GraphQL at Microsoft's scale
date: '2019-04-12T23:46:37.121Z'
type: 'talk'
venue: 'The Chancery Pavillion, Residency Rd, Bengaluru, '
---

Teams is the fastest growing product of Microsoft. The talk is about how we rewrote the existing Angular+REST based Wiki App into React+Apollo+GraphQL.

This is a **full stack rewrite** of an app at Microsoft’s scale and we have a story to tell. The story which starts from stack selection, goes through deep diving into it while writing the app and figuring out tonnes of stuff along the way which someone would’t find in docs, blogs, tutorials, courses or anywhere.

Think about creating the **first ever GraphQL backend in Teams**, even getting the leadership to agree was a big task. At Microsoft, we don’t run behind anything shiny, we have to prove that this is the best possible solution. Once, we were done with that we had to figure out the entire stack, how would a C#( also, why not NodeJS?) based GraphQL server interact with Apollo based frontend. You don’t get all the benefits which Apollo provides. Even simple things like schema sharing, type generation (yes! the entire frontend is in typescript), error code sharing are things which you have to figure out yourself.

There are the challenges of writing any app in any stack which you have to figure out for this one as well, like, schema finalization, iterative growth, code flow, best practices, unit testing at both ends, integration testing, performance measurement and tuning and a lot of other things. Like for performance tuning, **we ran internal experiments**, went through the entire source code of Apollo. How to use Apollo Client middle-wares to extract common logic out? Query as component or client.query? Multiple questions ensured a lot of us was left on us to figure out.

Also, this app is **a co-authoring app**, so how do you do locking/unlocking without doing subscription? How do you listen to GraphQL at one end and also respond to some of the old REST endpoints. As if that was not enough, there are services dependency on long poll. I am telling you things mount over each other so quick! **These are recipes**, one will encounter only when one solves such hard problems. This is a story, which I wished someone had told me before I got into leading this effort.

To know more, or if you after reading the talk walkthrough decided to join, for tickets visit [graphql-asia](https://www.graphql-asia.org/)
