# books

> Een SPA gemaakt met VueJS om de boeken die ik aan het lezen ben bij te houden. Op de eerste load wordt er data geladen uit een [JSON](src/initialData.json) file in de Local Storage, vanaf dan wordt de data bijgehouden per browser. Je kan een online demo bekijken op [https://books.proeftu.in](https://books.proeftu.in) .

## Setup

Om de code te draaien volstaat het om na de `git clone` de volgende commando's uit te voeren:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Gebruikte technologieën

- [VueJS](https://vuejs.org/) JS Framework
- [vue-router](https://router.vuejs.org/en/) Router (navlinks)
- [Vuex](https://vuex.vuejs.org/en/) Shared state
- [Vivus](https://maxwellito.github.io/vivus/) SVG Animation

## TODO

- [x] 'Currently reading'-knop toevoegen aan bookcard
- [ ] 'Delete Series'-knop toevoegen aan SeriesCard of SeriesPage
- [ ] Rating systeem toevoegen
- [ ] Export bibliotheek in JSON
- [ ] Import JSON bibliotheek