# Breadcrumbs

```html_example
<nav aria-label="You are here:" role="navigation">
  <ul class="breadcrumbs">
    <li><a class="home" href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><span class="show-for-sr">Current: </span> Cloning</li>
  </ul>
</nav>
```



# Buttons

<p class="lead">Buttons are tied to an action of some kind.</p>

---

### Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

### Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



# Callouts

```html_example
<div class="callout">
    <h5>This is a default callout.</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout primary">
    <h5>This is a primary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout secondary">
    <h5>This is a secondary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout success">
    <h5>This is a success callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout warning">
    <h5>This is a warning callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout alert">
    <h5>This is an alert callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
```



# Cards

```html_example
<div class="row large-up-3">
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-01.jpg">
            <div class="card-section">
                <h4>Dreams feel real</h4>
                <p>I'm going to improvise. Listen, there's something you should know about me... about inception.</p>
                <small>Last updated 1 minute ago</small>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-02.jpg">
            <div class="card-section">
                <h4>Menus</h4>
                <p>Cards play nicely with menus too! Give them a try.</p>
                <ul class="menu simple">
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <div class="card-divider">
                <p>Featured</p>
            </div>
            <div class="card-section">
                <h4>Your title here!</h4>
                <p>An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-03.jpg">
            <div class="card-section">
                <h4>Buttons!</h4>
                <p>Who doesn't love a good button? Buttons work in all of their forms too.</p>
                <a class="button" href="#">I'm a button</a>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-04.jpg">
            <div class="card-section">
                <h4>And button groups...</h4>
                <p>Button groups also work great!</p>
                <div class="button-group">
                    <a class="button">One</a>
                    <a class="button">Two</a>
                    <a class="button">Three</a>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card text-center">
            <div class="card-divider">
                <p>Centered</p>
            </div>
            <img src="assets/img/aud-01.jpg">
            <div class="card-section">
                <p>The utility classes like .text-center work great too.</p>
                <a class="button" href="#">Click me</a>
            </div>
        </div>
    </div>
</div>
```



# Colors

<p class="lead">Below you can find the different values used for the theme.</p>

---
<h3>Primary Colors</h3>
<div class="row up-1 medium-up-3 large-up-6">
  <div class="columns">
    <div class="color-block">
      <div class="color-name">michigan blue</div>
      <span style="background: #00274c;"></span>
      #00274c
</div>
</div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">michigan maize</div>
      <span style="background: #ffcb05"></span>
      #ffcb05
    </div>
  </div>
</div>
<h3>Secondary Colors</h3>
  <div class="row up-1 medium-up-3 large-up-6">
  <div class="columns">
    <div class="color-block">
      <div class="color-name">tappan red</div>
      <span style="background: #9a3324"></span>
      #9a3324
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">arboretum blue</div>
      <span style="background: #407ec9"></span>
      #407ec9
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">ross orange</div>
      <span style="background: #d86018"></span>
      #d86018
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">a2 amethyst</div>
      <span style="background: #702082"></span>
      #702082
    </div>
  </div>
  </div>
  <h3>Supporting Values</h3>
  <div class="row up-1 medium-up-3 large-up-6">
   <div class="columns">
    <div class="color-block">
      <div class="color-name">black 100</div>
      <span style="background: #000"></span>
      #000000
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 8</div>
      <span style="background: #202020"></span>
      #202020
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 24</div>
      <span style="background: #3d3d3d"></span>
      #3d3d3d
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 54</div>
      <span style="background: #8a8a8a"></span>
      #8a8a8a
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 77</div>
      <span style="background: #c4c4c4"></span>
      #c4c4c4
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 93</div>
      <span style="background: #ededed"></span>
      #ededed
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 98</div>
      <span style="background: #fafafa"></span>
      #fafafa
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">white 100</div>
      <span style="background: #fff"></span>
      #ffffff
    </div>
  </div>
</div>



# The Grid

<p class="lead">This is just an explanation of the grid we're using. Most likely you won't need to add it to any page templates.</p>

---

### Overview

The grid is built around two key elements: row and columns. `.row` creates a max-width and contain the grid, and `.columns` create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or columns.

---

### Nesting

In the Grid you can nest columnss down as far as you'd like. Just embed row inside columnss and go from there. Each embedded row can contain up to 12 columnss.

---

### How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create columnss.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
<div class="small-12 large-4 columns">4</div>
<div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

### Nesting row

In the Grid you can nest columnss down as far as you'd like. Just embed row inside columnss and go from there. Each embedded row can contain up to 12 columnss.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row align-center display">
      <div class="small-8 columns">8 Nested
        <div class="row align-center display">
          <div class="small-8 columns">8 Nested Again</div>
<div class="small-4 columns">4</div>
</div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

### Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Images

<p class="lead">Images appear on the site in four different aspect ratios: 20:9, 3:2, 3:4, and 1:1.</p>


### Large featured image (for sliders or pages)
<div class="image">
  <img src="assets/img/orbit-bg-2.jpg" alt="">
  <span class="secondary label overlay">16:9 ratio, 2830 × 1274 pixels upload size</span>
</div>

---

### Card images
<div class="image">
  <img src="assets/img/aud-01.jpg" alt="">
  <span class="secondary label overlay">3:2 ratio, 1200 × 800 pixels upload size</span>
</div>

---

### Stat and promo images
<div class="image">
  <img src="assets/img/stats.jpg" alt="">
  <span class="secondary label overlay">1:1 ratio, 600 × 600 pixels upload size</span>
</div>

---

### Research row images
<div class="image">
  <img src="assets/img/research-img-02.jpg" alt="">
  <span class="secondary label overlay">3:4 ratio, 1278 × 1500 pixels upload size</span>
</div>

---

## Image treatments

<p class="lead">The theme will take care of the duotones. Within certain fields in the backend, you will have a selection of duotones you can use over uploaded images. Please note that not every image will work. Use your best judgement on what works and does not. However, desaturated images tend to work best with duotones.</p>

<div class="row collapse large-up-3">
    <div class="image duotones columns">
        <div class="blue-duotone" style="background-image: url('assets/img/duotone-src.jpg');"></div>
        <span class="secondary label overlay">Blue Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="dark-blue-duotone" style="background-image: url('assets/img/duotone-src.jpg');"></div>
        <span class="secondary label overlay">Dark Blue Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="red-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Red Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="yellow-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Yellow Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="purple-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Purple Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="green-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Green Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="orange-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Orange Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="blend-red-blue-dark" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Blue Red Blend Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="blend-blue-yellow-light" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Yellow Blue Blend Duotone</span>
    </div>
</div>



# Labels

```html_example
<span class="secondary label">Secondary Label</span>
<span class="success label">Success Label</span>
<span class="alert label">Alert Label</span>
<span class="warning label">Warning Label</span>
```



# Links

<p class="lead"><a href="#">Internal links</a> and <a href="#" target="_blank">external links</a> get their own treatments. Adding the `target="_blank"` attribute will trigger the theme to place an indicator at the end of the link.</p>
```
<a href="#">Internal links</a>
<a href="#" target="_blank">External links</a>
```



# Tooltips

<p class="lead">Tooltips are for displaying extended information for a term or action on a page.</p>

The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.

By default, clicking on a tooltip will leave it open until you click somewhere else. However, you can disable that by adding `data-click-open="false"`

```html_example
<p>
this
<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="2" title="You see?  I'm open!">tooltip will stay open</span>

while
<span data-tooltip aria-haspopup="true" class="has-tip top" data-click-open="false" data-disable-hover="false" tabindex="2" title="I don't stay open">this one will only be open when hovered</span>
</p>
```

You can also position the tooltips to the right and left of the word by adding the classes `.right` or `.left` to the `<span>` element.

```html_example
<p>
Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.
<span data-tooltip aria-haspopup="true" class="has-tip right" data-disable-hover="false" tabindex="3" title="Yes.">Do androids dream of electric sheep?</span> Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
<span data-tooltip aria-haspopup="true" class="has-tip left" data-disable-hover="false" tabindex="4" title="Star">Wars</span> onec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
```



# Tables

<p class="lead">To stack a table on small screens, add the class `.stack`. Add the class `.hover` to lightly darken the table rows on hover.</p>

```html_example
<table class="hover stack">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
      </tr>
  </tbody>
</table>
```



# Typography

<p class="lead">This design uses [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One) for super-headings, [Montserrat](https://fonts.google.com/specimen/Montserrat) for headings and subheadings, and [Cardo](https://fonts.google.com/specimen/Cardo) paragraph text.</p>

---

### Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

### Paragraphs

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

---

### Eyebrows
<p class="lead">Eyebrows appear atop headlines in certain cases. They usually denote a category the item appears in.</p>

<div class="hed">
  <div class="eyebrow">Eyebrow</div>
  <h3>This is a headline</h3>
</div>