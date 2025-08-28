# FE-HomeWork

## Home_Work_47
## Tasks Overview

## Make an interactive to-do list with the following conditions:

There is an input field and an "Add" button on the page.

Each new list item is rendered in the DOM as a <li> with text and buttons:

"Done" — changes the state of the item (strikes through the text + adds the "completed" class).

"Delete" — removes the item from the list.

Add a counter that shows the number of completed and uncompleted tasks.

Implement task filtering:

"All" — shows all

"Active" — only uncompleted ones

"Completed" — only completed ones

Minimize rerenders: when changing the state of one task, the entire <ul> should not be rerendered, but only a specific <li>.
