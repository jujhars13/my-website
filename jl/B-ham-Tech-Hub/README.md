# B-ham-Tech-Hub

#Synopsis
This project is a single webpage showing the name, description, image and class of several bikes. The code is saved in index.html and there are 3 image files that are used for links. Key functionality includes getting a JSON object from a URL, looping through it to display each item, and providing a custom search on items.

#Requirements
I was given the following task:
As a user, assuming we have access to a modern web browser (chrome) with an internet connection and we are visiting the page:
- We would like to see a list/grid of bikes (taken from the bike data URL below)
- We would like to see the name, an image, a description and the class for each bike
- We would like to be able to sort the bikes into a custom order based on class
- We would like the custom order to be saved and not change when refreshing the page
- A JSON object with all the relevant bike data is available at: https://raw.githubusercontent.com/jujhars13/jujhars13/master/bikes.json

#Code
The index.html is set out in the following way:
- CSS - I have used Boostrap and Google font APIs
- Javascript
    I used jQuery to iterate over the object and perform the filter function.
    I have used comments to separate the functions my code performs:
      // open links
      //retrieve JSON
      //loop over items and append
      //bike class filter
- HTML

#Assumptions
I have assumed that more items can be added to the JSON, my code therefore caters for this and will still be fully functional.

#Problems
Unfortunately I have been unable to save the custom search state. Therefore when the page is refreshed all bikes are displayed. 

#Additional Comments
I really enjoyed the challenge this task presented and have improved my knowledge of JSON and jQuery.

Jon Wilkes

