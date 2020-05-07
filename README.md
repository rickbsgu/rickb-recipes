# RICKB-RECIPES

This project serves two purposes:

* It gets my recipes all together in a single, universally accessible place (the net)
* It serves as a platform for me to learn JAMSTACK technologies

## JAMSTACK

JAMSTACK is a technology to create static websites.  Of course, you can do this writing raw html files (and we all started out that way), but things get complicated when you want to share components like headers and footers, and you want to enforce consistency in how elements are created and used.

The prior way of doing this was, of course, setting up a server and running some kind of backend framework &ndash; _Wordpress_ being the most popular implementation.

Using something like _Wordpress_ requires setting up a machine, installing and configuring minimally an _apache_ or _nginx_ server, and _php_.

Maintenance is non-trivial.  Latency is determined by how many hops to your server, and the condition of the in-between servers as well as your own.  Someone accessing your site hosted in the US from someplace like Europe or China adds latency.

### Static Websites

There is nothing faster than serving static content.  The server doesn't have to figure out routes, image sizes, or do any processing to present the correct content.

But, we still want Single-Page applications with all the consistency and organization that comes with that.

Enter static-site generators.  The static site generator will pick up the source site, and then generate all the possible pages for that site.  When that is transferred to a public server (yes, something has to serve it, but you don't have to mess with it if you use a service like _netlify_)

## This Project - Details

It takes tying together a few technologies and services to implement an effective site.  At a minimum, you need a host for the site.  Using something like _netlify_, you can actually drag and drop a directory location and the site is served.

That works, but it's pretty, hands-on.  If you're providing a service to a number of clients and you don't want to be bogged down creating and updating content, you need to move to these:

* A client side framework
* A static site generator that can work with the framework to generate the output files

And, if you want to do it efficiently, you will want:

* A cloud storage image solution that can provide multiple resolution images from your base image on the fly
* A CMS to allow normal users to enter content

The following is what I consider to be the minimum frameworks/services necessary to implment a professional solution (all of the services listed here are either free or have a free tier for exploration):

### [Vue.js](https://vuejs.org)

Without a doubt, the most elegant client-side platform available.  It's amazing, and just gets better.

### [Gridsome](https://gridsome.org)

A static-site generator with a twist: it uses _graphql_ to provide and organize content sources.  It takes a bit to get your head around, but it's pretty powerful.

### [Cloudinary](https://cloudinary.com)

I don't want to generate and upload multiple-resolution images, if I can avoid it.  Cloudinary does image transforms on the fly, so I only have to upload a single image.  I can get all the resolutions I need by specifying them in the requesting url.

### [Netlify](https://www.netlify.com/)

A place to host the site.  When tied together with _git_, the site is generated with every commit.

### [Forestry CMS](https://forestry.io/)

You can't require your users to be coders, and they have to be able to create content.  Sure, they can send you snippets and you can paste them into _vscode_ and re-commit, but better they can do that themselves.

A CMS can provide the means for that to happen, with pretty editors, and structured input for front-matter (for .md files).

I played with _netlifycms_, and it was ok, but _forestry cms_ feels better.

## CI/CD

_Continuous integration/Continuous deploy_ is all the rage, and for good reason.  It reduces the steps from coding and submitting content from _n_ to 1 &ndash; you just do a `git commit` and it's already done.

From the _forestry cms_ side, even that step is removed: saving edits triggers a git commit from the source in _forestry_ to _github_, which then triggers a rebuild on _netlify_.

And that is pretty slick.


