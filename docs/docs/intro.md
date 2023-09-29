---
sidebar_position: 1
---

# What is BiXE?

BiXE is a fast and lightweight, framework agnostic, redux-like state management solution.

It allows you to write your business logic once, and reuse it in any JavaScript or TypeScript application, regardless of whether it is a front-end application or a back-end application. It was written and designed FOR the developer; DX is a first-class concept. 

BiXE eliminates cruft, and alleviates common pain points associated with other well-known redux-like solutions.

Some benefits:
1. Stores can be scoped/grouped easily, and actions can target a specific group/scope or all
2. Testing is as easy as mocking 2 arguments and testing individual functions
3. No side effects
4. Dispatched actions and store interactions may be diagrammed and understood at a glance
5. Asynchrony is a first-class concept; no need to jump through hoops or get creative

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
