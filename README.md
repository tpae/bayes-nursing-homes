bayes-nursing-homes
===================
Bayes Impact 2014 Hackathon

Challenge
----
More information about this project can be found here: http://bayeshack.challengepost.com/forum_topics/3938-california-healthcare-foundation-preparing-california-for-elderly-health-needs

The Team
----

 - Grace Huang (Data Science)
 - Jean-Ezra Yeung (Data Science)
 - Katherina Nguyen (Design)
 - Terence Pae (Programming)

Getting Started
-----
The project is built with 2 things in mind: development speed and modularity. The backend uses Node.js to process CSV files, and frontend uses Backbone.js with Require.js, along with Google Maps API v3. The structure is organized in a way so that it's easy to pull in and get it started as soon as possible.

Requirements:
 
 - Node.js
 - NPM Package Manager

Installation:
```
npm install && bower install
npm start
```

Then visit http://localhost:3000/ to check it out.

API
---

In the `data/` folder, you should see a list of .csv files, ready to be implemented. Each .csv file represents different dataset that can be plotted on the map.

Currently, only 2 types of visualizations are supported. `Heatmaps` and `Markers`.

Here's how it's structured: `heatmap-variable_name.csv`

For Heatmap types, append `heatmap-*`, for cluster/marker types, append `marker-*` to the dataset.

For each csv file, make sure it contains the header with the following keys:

 - `latitude`
 - `longitude`
 - `norm_score`
 - `raw_score`
 - `image` *only for markers*

Move the .csv file to `data/` folder, then you can retrieve it like this:

`````
<a href="#" class="mapToggle" data-key="heatmap:variable_name">Click to visualize!</a>
`````
