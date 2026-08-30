# Habesha Recipes — Manual Test Plan

## Recipe Browsing

- [ ] Open the application and confirm recipes load successfully.
- [ ] Confirm the loading message appears while recipes are loading.
- [ ] Search for "Doro" and confirm Doro Wat appears.
- [ ] Search for a recipe that does not exist and confirm "No recipes found."
- [ ] Clear the search and confirm all recipes appear again.

## Cookbook

- [ ] Click "Save to Cookbook" on a recipe.
- [ ] Confirm the recipe appears in My Cookbook.
- [ ] Try saving the same recipe again.
- [ ] Confirm the recipe is not duplicated.
- [ ] Remove a recipe from the cookbook.
- [ ] Confirm it disappears.
- [ ] Remove all recipes.
- [ ] Confirm "Your cookbook is empty." appears.
- [ ] Save a recipe and reload the page.
- [ ] Confirm the saved recipe is still in the cookbook.

## Contact Admin Form

- [ ] Submit the form with every field empty.
- [ ] Confirm "Please enter your name." appears.
- [ ] Enter a one-character name.
- [ ] Confirm the name validation message appears.
- [ ] Enter an invalid Ethiopian phone number.
- [ ] Confirm the phone validation message appears.
- [ ] Test a phone beginning with 09.
- [ ] Test a phone beginning with +2519.
- [ ] Leave the message empty.
- [ ] Confirm the message validation appears.
- [ ] Enter valid name, phone and message.
- [ ] Confirm the success message appears.
- [ ] Confirm the form is cleared after successful submission.

## Error Handling

- [ ] Temporarily change the recipe data URL in app.js.
- [ ] Reload the page.
- [ ] Confirm a calm error message appears.
- [ ] Restore the correct URL.
- [ ] Confirm recipes load normally again.

## Keyboard

- [ ] Use Tab to move through the page.
- [ ] Confirm the search field can receive focus.
- [ ] Confirm recipe buttons can receive focus.
- [ ] Confirm the contact form can be completed using the keyboard.
- [ ] Confirm buttons show a visible focus state.

## Responsive Layout

- [ ] Test the page on a mobile-sized screen.
- [ ] Confirm content fits without horizontal scrolling.
- [ ] Test on a desktop-sized screen.
- [ ] Confirm recipes and cookbook use the two-column layout.