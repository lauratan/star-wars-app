## Questions

**1. Assuming the Star Wars API was slow, what are some optimizations that could be implemented to improve the user experience?**
* A loading state / spinner component so users know that it is loading
* Lazy loading - only loads the data that the user can see as soon as possible
* Staggered loading display - if there are multiple api calls happening, we could separate out the different api calls so it will load as soon as it is ready, opposed to waiting until all api calls finish to display the data
* Display a placeholder / dummy data where the actual data will be placed so users can expect the data even before it is ready

**2. Any improvements you would make to your application?**
* CSS / User interface design
* Create details page for all subdata
* Implement generic component that can display all subdata
* Implement some kind of state management so character details can be accessible throughout certain components (e.g Content API) instead of passing props through `<Link>` in react-router


