# Colors

<p class="lead">Below you can find the different values used for the theme.</p>

---
<h3>Primary Colors</h3>
<div class="row up-1 medium-up-3 large-up-6">
  <div class="column">
    <div class="color-block">
      <div class="color-name">michigan blue</div>
      <span style="background: #00274c;"></span>
      #00274c
</div>
</div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">michigan maize</div>
      <span style="background: #ffcb05"></span>
      #ffcb05
    </div>
  </div>
</div>
<h3>Secondary Colors</h3>
  <div class="row up-1 medium-up-3 large-up-6">
  <div class="column">
    <div class="color-block">
      <div class="color-name">tappan red</div>
      <span style="background: #9a3324"></span>
      #9a3324
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">arboretum blue</div>
      <span style="background: #407ec9"></span>
      #407ec9
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">ross orange</div>
      <span style="background: #d86018"></span>
      #d86018
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">a2 amethyst</div>
      <span style="background: #702082"></span>
      #702082
    </div>
  </div>
  </div>
  <h3>Supporting Values</h3>
  <div class="row up-1 medium-up-3 large-up-6">
   <div class="column">
    <div class="color-block">
      <div class="color-name">black 100</div>
      <span style="background: #000"></span>
      #000000
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">gray 8</div>
      <span style="background: #202020"></span>
      #202020
    </div>
  </div>
   <div class="column">
    <div class="color-block">
      <div class="color-name">gray 24</div>
      <span style="background: #3d3d3d"></span>
      #3d3d3d
    </div>
  </div>
   <div class="column">
    <div class="color-block">
      <div class="color-name">gray 54</div>
      <span style="background: #8a8a8a"></span>
      #8a8a8a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">gray 77</div>
      <span style="background: #c4c4c4"></span>
      #c4c4c4
    </div>
  </div>
   <div class="column">
    <div class="color-block">
      <div class="color-name">gray 93</div>
      <span style="background: #ededed"></span>
      #ededed
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">gray 98</div>
      <span style="background: #fafafa"></span>
      #fafafa
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <div class="color-name">white 100</div>
      <span style="background: #fff"></span>
      #ffffff
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One) for super-headings, [Montserrat](https://fonts.google.com/specimen/Montserrat) for headings and subheadings, and [Cardo](https://fonts.google.com/specimen/Cardo) paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.

---

<h1 class="super-headings">Super Heading h1</h1>

<h2 class="super-headings">Super Heading h2</h2>

<h3 class="super-headings">Super Heading h3</h3>

<h4 class="super-headings">Super Heading h4</h4>

<h5 class="super-headings">Super Heading h5</h5>

<h6 class="super-headings">Super Heading h6</h6>

---

<h1>Heading h1</h1>
<h2>Heading h2</h2>
<h3>Heading h3</h3>
<h4>Heading h4</h4>
<h5>Heading h5</h5>
<h6>Heading h6</h6>



# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized columns, and don't know how to quick and easily get it all done. Solution: The awesome XY grid!</p>

---

## Overview

The grid is built around two key elements: row and columns. grid-container create a max-width and contain the grid, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed row inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 column">...</div>
  <div class="small-6 medium-8 large-9 column">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 column">4</div>
<div class="small-12 large-4 column">4</div>
<div class="small-12 large-4 column">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 column">3</div>
  <div class="small-12 large-6 column">6</div>
  <div class="small-12 large-3 column">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 column">2</div>
  <div class="small-12 large-8 column">8</div>
  <div class="small-12 large-2 column">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 column">3</div>
  <div class="small-12 large-9 column">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 column">4</div>
  <div class="small-12 large-8 column">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 column">5</div>
  <div class="small-12 large-7 column">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 column">6</div>
  <div class="small-12 large-6 column">6</div>
</div>

---

## Nesting row

In the Grid you can nest columns down as far as you'd like. Just embed row inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 column">8
    <div class="row">
      <div class="small-8 column">8 Nested
        <div class="row">
          <div class="small-8 column">8 Nested Again</div>
          <div class="small-4 column">4</div>
        </div>
      </div>
      <div class="small-4 column">4</div>
    </div>
  </div>
  <div class="small-4 column">4</div>
</div>
```

<div class="row display">
  <div class="small-8 column">8
    <div class="row display">
      <div class="small-8 column">8 Nested
        <div class="row display">
          <div class="small-8 column">8 Nested Again</div>
<div class="small-4 column">4</div>
</div>
      </div>
      <div class="small-4 column">4</div>
    </div>
  </div>
  <div class="small-4 columngi">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 column">2</div>
  <div class="small-10 column">10, last</div>
</div>
<div class="row">
  <div class="small-3 column">3</div>
  <div class="small-9 column">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 column">2</div>
  <div class="small-10 column">10, last</div>
</div>
<div class="row display">
  <div class="small-3 column">3</div>
  <div class="small-9 column">9, last</div>
</div>



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```



# New Section

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla.

```html_example
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
```
