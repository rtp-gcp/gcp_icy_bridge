# GitHub Codespaces ♥️ Express

Welcome to your shiny new Codespace running Express! We've got everything fired up and running for you to explore Express.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

To run this application:

```
npm start
```

# Notes from John

abc will be colored red.


## CSS Rules

Using this html as an example
```
<!-- 1.0.0.0.0  inline styles are most specific -->
<h1 id="h1-id" class"h1header" style="color: cyan"> 
    Header Text 
</h1>
```
Using this css as an example

```
/* element id */
/* Outside of !important, this is the most specific */
/* 0.1.0.0.0 */
#h1-id {
    color: blue;
}


/* class */
/* This is next specific */
/* 0.0.1.0.0 */
.h1header {
    color: red;
}

/* combining elements make for more specificiy */
/* this will override .header and h1, but not #header-id */
/* 0.0.1.1.0 */
h1.header1 {
    color: gray;
}


/* element name (aka type) */
/* This is next specific after class */
/* 0.0.0.1.0   */
h1 {
    color: green !important;
}


/* this will override .header, h1 and h1.header, but not #header-id */
/* 0,1,2,0 */
body h1.header {
    color: greenyellow;
}

```


* if two styles exist for the same element, the style read last, reading from top to bottom takes precidence.
>
```
h1 {
    color: blue;
}
h1 {
    color: red;
}
Resulting h1 is red.
```
* Specificity also comes into play.  In terms of specificity, most specific to least specific, the order is:
    1. inline styles, eg `<h1 style="color: cyan">`
    2. item ID, eg `<h1 id="h1-id">`
    3. class, eg `.h1header`
    4. html element name, eg. `h1`

    These specificty come into play via a numbering system where the larger the number, the more speciificty.

    `<inline style number>.<ID style number>.<class style number>.<html element name>.<element count>`

    The last number, element count is the number associated with instance count. ie if we have three `h1` elements, this number would vary 0-2 or 1-3 - not sure which at this point.


## Sample html

```
<body>
    <div class="hello">
        <p class="abc">test</p>
    </div>
</body>
```

## sample css

Given this style sheet, the color will be red.  Because 
.hello is the class, .abc is the subclass, p is the element type.

```
p.abc {
    color: purple;
}
.hello p {
    color: red;
}
.abc {
    color: blue;
}
p {
    color: green;
}
```

# URLS

* [css spec](https://www.w3.org/TR/2011/REC-CSS2-20110607/intro.html)
* [css basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [css getting started](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [izing the graphic. add height here and add the container img style](https://stackoverflow.com/questions/47309361/how-can-i-set-the-size-of-logos-the-same-via-css)
