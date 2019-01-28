---
title: 3 Simple tricks to make your webapp 3X faster!
date: '2017-10-31T23:46:37.121Z'
type: 'blog'
---


![Flash: The Fastest Man Alive, Our web apps should be faster!](./flash.jpg)

The easiest way I could have written this blog was to put some code and explain what each line does. I personally feel though, that understanding the mechanics behind these things is very important. Only then one will be able to fine tune it for individual needs. So the clickbait title got you here, now keep reading and ask questions in comments if you have any.

**Why Chunking?**

With the advent of JS frameworks and Single Page Apps(SPAs), more and more code, logic and libraries have moved towards user instead of being rendered on the server. This, on one side has improved user experience but on the other side has increased the total KBs/MBs getting downloaded in the browser and thus slowing the first paint. Webpack (or whichever build tool you use) bundles all the JS/CSS files needed by your app to run in one big file. This was done with the belief that small files waste precious HTTP requests (as the browser can only do so many at parallel) and thus has its heart at the right place. However, as explained, with time the bundle just gets bigger and bigger.

Solution is simple, when the build file is too big, it outweighs the performance gain of saving an additional HTTP request. At that time one needs to start breaking that file into pieces or CHUNKS, hence, the name chunking. 

**Why Versioning?**

When a build is broken into chunks, change in one chunk doesn't affect other. For example, change in login page will change the user-control chunk but not the app, or the libraries. However, without versioning user will have no idea where the changes are and thus, the browser will download everything on every download. We don't want that. We want parts/chunks which are not changed to be taken from browser's cache and only the changed parts to be downloaded. 

Simple solution is to do a hash of your chunk, i.e. the VERSION and append it on the file name. I will show you how to do that in a minute, and it's very easy with the webpack plugins, but even if you want to do it without these tools, the idea is simple. Take a hash of the file > Append it to file name > Make sure that every time there's a file change this process is repeated. 

**Why Caching?**

Caching is the most important tool in the performance toolbox. The less data browser downloads the faster the page loads. Browsers are very smart, if it sees that file name hasn't changed and the cache setting for the file permits then it will use the cache copy.

That's where versioning and caching goes hand in hand. We don't want our users to download an unchanged file every time he visits the website (thus, caching) and we don't want the user to miss out a change we pushed because of a stale cache (thus, versioning)

**How Chunking?**

Ha! now when we have cleared the theory, let's see how we do it. For understanding purposes, I am doing only two chunks, i.e. main and vendor. Vendor code is your React, React Router, Redux, Lodash/Ramda and other libraries, which is more or less constant and is also the biggest in terms of size. With these steps we will make sure that user's subsequent page render speed is improved. Coz after the first visit to our web app the user will not have to download this big file of vendor code even if the app logic has changed.

Webpack 2 and above supports chunking, I have been working with Webpack 3.6 and this snippet works beautifully. Put this in your plugins array.

```javascript
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks(module) {
    return module.context && module.context.indexOf('node_modules') !== -1;
  },
}),
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  minChunks: Infinity,
}),
```
This will put all our code which is coming from node_modules (in short: libraries) into a vendor chunk. Manifest chunk is required by webpack to put all the configuration required to run.

For this to work properly, we need to make sure that the manifest is downloaded first, then vendor and main at last. We can do it with a plugin for webpack named html-webpack-plugin. This plugin can be used to insert your build file as a script tag in your final html file. See the documentation for more details on it. The chunks name and chunkSortMode takes care of it.

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
  xhtml: true,
  chunks: ['manifest', 'vendor', 'main'],
  chunksSortMode: 'manual',
})
```

**How Versioning?**

Versioning is very easy to set up with Webpack and is supported in all its versions. Irrespective of whether we configure chunking, we can setup versioning and even if we don't configure caching, the default settings of browser will make your app faster. Key takeaway of this blog should be to setup versioning no matter what (If you want to do it without chunking, you can use the html-webpack-plugin discussed above).

```javascript
output: {
 path: `${__dirname}/dist`,
 publicPath: '/',
 filename: '[name].[chunkhash].js',
 },
 ```
As you might have guessed, [chunkhash] takes care of the versioning part.

**How Caching?**

Configuring Caching in itself could be a topic of a blog series. To keep it precise, I will share what I have done. We need to set up caching on the server side. I use Express ( a micro web framework built on top of NodeJS) to serve my build. The setting can be done on any such framework. Idea is to set cache to expire on 30 days (just a long time, you can set it for a year and it wouldn't matter). As discussed above, since we have versioning set up, new changes will have new file names and hence new requests. For old files, this setting will ensure that browsers use the file from cache. Now, the default cache setting with versioning would have still made a request to the server to check if the file has changed, a would have returned a 304 NOT MODIFIED it is not changed. The max age property will even save that one roundtrip request each file!

See the one line code which you need to add your express server:

```javascript
const express = require('express')
const server = express()

server.use('/', express.static('/dist', { maxAge: '30d' }))
```

**Bonus Points**

Now when everything is set up you can see that there are gains in subsequent downloads and page render making the overall user experience much smoother. However, I will close this one more trick, which is very easy to setup and will speed up the entire thing by another 3-4X. See, the clickbait title was actually an understatement. If we start from the big bundle and follow all the steps the gain would be somewhere between 6-10X. I have tried it, you are welcome to try as well. The idea is to gzip your chunks. Good thing is it can be done directly from the Webpack and Express, the tools we have been using all along.

Add this to your plugins array in webpack:

```javascript
new CompressionPlugin({
 asset: '[path].gz[query]',
 algorithm: 'gzip',
 test: /\.js$|\.css$|\.html$/,
 threshold: 10240,
 minRatio: 0.8,
}))
```

This will create your chunks as vendor.js.gz. However, the html-webpack-plugin is writing your builds as vendor.js in the final index.html file. We thus, need to configure Express to serve the gz version when asked for the .js file. This can be done by the below code:

```
const expressStaticGzip = require('express-static-gzip')

// use it instead of the default express.static
server.use('/', expressStaticGzip('/dist', { maxAge: '30d' }))
```
We are done!

**Parting words!**

This entire thing is setup (though not in webpack 3) and tested in my starter kit on Github. Here's the [link](https://github.com/tanaypratap/react-webpack2-starter). Performance is like an ongoing mission, so one has to keep thriving for better performance. There are many more things I have done to increase my apps' performance. If you liked this article, show some appreciation, it will motivate me to share some more experiences. 
