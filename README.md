<h1 align="center">This repository corresponds to the work developed during weeks 3, 4, 5 & 6 of the BaSD-2021 course</h1>

# RADIUM ROCKET - BECOME A SOFTWARE DEVELOPER

---

## WEEK N° 3

**(Week N° 4 & 5 below)**

---

#### OBJECTIVES

* Create a cover of a newspaper (main page) trying not to copy any particular newspaper, but instead configure a cover design using FlexBox.
* Creating a Responsive Design following the Mobile First concept.
* The layout of the journal must comply with the following [Layout Design][df1] format. 
* The result must be uploaded to a new repository on Github.

#### RESOLUTION

> **Mobile First**

The concept of mobile first was used, therefore, the html and css file was written taking into account the screen of a cell phone.

> **Media query**

The site was designed starting with a screen of 480 pixels wide, and then scaling the resolution with the use of media queries up to reach resolutions of tablet (768x585px), laptop (1024x780px) and from there until reaching a maximum resolution of 1200 pixels wide.

> **Responsive**

Flexbox was used to get the site to respond as the size of the screen where the content was displayed changed.

#### REPOSITORY 

In the repository you will find the main file, the index.html file, along with a css folder, where the style files, fonts and media queries are. Also, there is a folder called "images" where the images used in the project are located.

**Link:**
```sh
https://github.com/andrespienizzio/shelbyville-times.git
```

#### GITHUB PAGES 

The github pages tool was used to view the page without needing to download the content of the repository.

**Link:**
```sh
https://andrespienizzio.github.io/shelbyville-times/
```
---

## WEEK N° 4

---

#### UPDATE -FIXES-
After the feedback from the tutors, certain changes were made to improve the content of the page and the repository in general:

* Updated README format. [✔]
* Fixed indentations problems in CSS stylesheets. [✔]
* Changed some class for id selectors. [✔]
* Changed CSS properties order. [✔]
* Fixed html errors related with the icons. [✔]
* Fixed left align in big screens. [✔] 

---

## WEEK N° 5

---

#### OBJECTIVES

The challenge of Week N° 5 consists of adding a subscription page to the online newspaper developed in 
Week N° 3, keeping the original repository and adding a new html file that maintains the aesthetics of 
the newspaper and a subscription form for readers.

The form must contain the following fields: 

* Full name
* Email 
* Password and repeat password
* Age
* Telephone 
* Address 
* City 
* Postal code 
* ID number
 
 The form also must have a "Send" button and the design must be responsive. Finally, the content of all the fields must be validated using Javascript.

#### GITHUB PAGES - SUBSCRIPTION FORM

The github pages tool was used to view the page without needing to download the content of the repository.

**Link:**
```sh
https://andrespienizzio.github.io/shelbyville-times/subscription.html

```
---

## WEEK N° 6

---

#### OBJECTIVES

The challenge of Week N° 6 consists of expanding the online diary of week 05 so that by pressing the "send" button the data loaded in the form will be sent to a web server through an HTTP call from JavaScript.

The conditions that must be accomplished are:

* In case the data validation is correct: all the form data must be sent to the URL: http://curso-dev-2021.herokuapp.com/newsletter.  
* Upon receiving the answer it must display a poster (modal) with a message indicating whether the newsletter subscription was successful or not.
* If successful, the modal should also display the data received as a response from the HTTP call and the received data must be saved to LocalStorage.
* In case the response code indicates an error, the modal should show details of the error and nothing should be saved in LocalStorage.

#### GITHUB PAGES - SUBSCRIPTION FORM

The github pages tool was used to view the page without needing to download the content of the repository.

**Link:**
```sh
https://andrespienizzio.github.io/shelbyville-times/subscription.html

```




















---

[df1]: <https://www.w3schools.com/css/css_website_layout.asp>
