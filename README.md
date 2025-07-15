# FE-HomeWork

## Home_Work_36
## Tasks Overview

Need to implement **3 separate pages** for managing products using HTML, bootstrap, and JavaScript with localStorage.

---

###  Pages Description

#### 1. `create.html` – Create Product Page
- A form with:
    - Product Name
    - Description
    - Price
- Input validation must be performed.
- On clicking the **Create** button:
    - If inputs are valid:
        - Save the product in `localStorage`
        - Redirect to the product list page `list.html`

#### 2. `list.html` – Product List Page
- Displays a table of all products:
    - Columns: ID, Name, Price
    - Buttons: **Edit** and **Delete**
- Products are shown with the **newest at the top**.
- On clicking the **Edit** button:
    - Save the product’s ID into `localStorage` under the key `selectedProductID`
    - Redirect to the `edit.html` page

#### 3. `edit.html` – Edit Product Page
- Same form as `create.html`
- On load:
    - Read `selectedProductID` from `localStorage`
    - Pre-fill the form fields with the selected product's data
- On clicking the **Save** button:
    - Update the existing product in the product array in `localStorage`
    - Redirect back to `list.html`
