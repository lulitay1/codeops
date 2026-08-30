# Validated Persistent Signup Form

This project is a small signup form that validates a user's name and
Ethiopian phone number before saving the information.

Valid signup entries are stored in the browser's `localStorage` as JSON,
so they remain available after a full page reload.

## What the Form Does

The form asks the user for:

- Full name
- Ethiopian phone number

It validates:

- The name must contain at least two characters.
- The phone number must match the required Ethiopian phone format.

Accepted phone formats include:

```text
0912345678
+251912345678