# Table of content

- [Overview](#overview)
  - [Introduction](#introduction)
- [What I learnt](#what-i-learnt)
  - [Structural Directive](#structural-directive)
  - [Property Binding](#property-binding)
  - [Event Binding](#event-binding)
  - [Decorator](#decorator)
- [Discovery](#discovery)
- [Future Expectation](#future-expectation)

# Overview

## Introduction

A practical project developed with Angular. A simple yet visually attractive landing page
with elementary functions eg: navbar toggle, tab, accordion and form input validation.

The above functionalities built for better user experience were programmatically
put together with the available native functions of the Angular framework.

## What I Learnt

These are the Angular built-in function I utilised in developing this web application

1. [Structural Directives](#structural-directive)
2. [Property/Data Binding](#property-binding)
3. [Event Binding](#event-binding)
4. [Decorators](#decorator)

### Structural Directive

- \***ngIf**: The `*ngIf` structural directive of the Angular framework was employed in the **navbar component**,
  **faq component** and **form component**. It is used to show and remove content on and from
  the page.

- \***ngFor**: The `*ngFor` structural directive was used to render to the UI the data within an object storing
  information for the **faq component**.

- \***ngSwitchCase**: The `*ngSwitchCase` which is used together with`[ngSwitch]` attribute directive, was used
  in the feature section of the page for tabing between different features.

### Property Binding

- **\[class\]**: The `[class]` property binding was employed to adjust the style and appearance of the **button component**.

### Event Binding

- **\(click\)**: The `(click)` event binding was used to attach click event to element. For instance, on the arrow button
  of the **faq component** and the navbar close and open button.

- **\(keyup\)**: The `(keyup)` event binding was used for form input validation.

### Decorator

- **\@Input**: The `@Input` decorator was employed to pass in values for the button class component inputs.

## Discovery

I discovered that applying a css class within a parent component to a child component won't be recognised by the child component except the css class applied to the child component is declared in
the global css file in the root directory of the application. I understood that the global css file can be used to declare css classes that can
be used anywhere in the application.

## Future Expectation

I realised that my codes in the css files for all my components were poorly written. I failed to
understand the appropriate way of containing/scoping component specific styles which, as a result, bloated the application size. On future projects,
I hope to improve particularly that.
