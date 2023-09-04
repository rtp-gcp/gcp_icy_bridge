
# style notes



/* order of specificity
 0. !important 
 1. inline styles
 2. element id, #
 3. class name, .someclass
 4. element name, .h1

 styles can be combined, to
 increase specificy.

 element name, class1.class1
         body h1.header

 */












A <p> element with two classes "center" and "large"
<p class="center large"> some text </p>

Applies to all <p> elements
```
p {
  color: red;
}
```

Applies to HTML element with id="foo"
#foo {
  color: red;
}
Applies to specific classes: .center
.center {
  color: red;
}
Applies to elements of specific class: p.center
p.center {
  color: red;
}
Grouping multiple elements
h1, h2, p {
  color: red;
}
*/
