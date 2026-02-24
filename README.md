## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**

`getElementById` selects one element by its unique ID.

`getElementsByClassName` selects all elements with the same class name.

`querySelector` selects the first element that matches a CSS selector.

`querySelectorAll` selects all elements that match a CSS selector.

### 2. How do you create and insert a new element into the DOM?

**Answer:**

To create a new element, first use `document.createElement()`. Then, you can add content using textContent or innerHTML. Finally, insert it into the page using appendChild().

### 3. What is Event Bubbling? And how does it work?

**Answer:**

Event Bubbling happens when we click on a child element and the event goes up to its parent, then grandparent, and so on. For example, if you click a button inside a div, the click event happens on the button first, then the div, then the body.

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer:**

Event Delegation is when we add one event listener to the parent instead of adding it to every child. The parent can catch events from all its children. This is useful because it reduces code, improves performance, and even works for elements that are added dynamically later.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

`preventDefault()` stops the browser from doing its default action, like submitting a form or opening a link.

`stopPropagation()` stops the event from bubbling up to parent elements, so only the target element reacts.
