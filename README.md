# Bounteous JavaScript Coding Challenge
Use this provided [Vue CLI](https://cli.vuejs.org/) generated starter app to complete the two-part challenge below. Once you complete your work, push your updates to this repo.

We've intentionally kept this challenge light on requirements in order to ensure it does not become burdensome to complete. Going above and beyond the requirements is appreciated but not required to qualify.


## Part 1: Query TV Shows

First part of the challenge is to write an HTTP GET method to retrieve information from a TV database. Add a function `getTVShows` to this Vue starter app that takes a required string argument for searching shows by name. 

**Requirements**:

- Query http://api.tvmaze.com/search/shows?q={substr} (replace substr with your search criterion).
- Store each show meeting the search criterion.
- Sort the shows in ascending order by name.
- Log to the console the sorted TV show names.

The query response from the tvmaze.com website is a JSON response containing an array of search results that includes a `score` and a `show` object.  The `show` object contains various data about the show, including a `name`.

## Part 2: Display Show Results

The second part of the challenge is to create a page that outputs all TV shows returned from the function you created in part 1.  Organize this page with at least the two following Vue components.

### One for the list of TV shows

**Requirements**:

- This is where you'll run the `getTVShows` function.
- The search string must be based on user input, for example as search form results, from a query parameter, or route parameter.
- If no search is defined or if there are no results, this component must display that information.
- Results should be displayed as a responsive grid of "cards" up to 3 columns wide.

### One for each TV show "card"

**Requirements**:

- Each TV show listing must include at least the show's name and its associated medium-sized image
- If no image is available or it cannot be loaded, then a placeholder from [placeholder.com](https://placeholder.com/#How_To_Use_Our_Placeholders) should be utilized.

---

## Available Scripts

### Installs all dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```