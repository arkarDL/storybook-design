
## Caution !
Please update the builds script based on your usage !


# Demo workspace for Storybook and React

A repo for building reuseable  components with React, TailwindCSS and Storybook.Including apps for testing and deployment.



## Tech Stack

**Component building :** React, TailwindCSS

**Production :** Rollup

**Test :** React Testing Library

## Run Locally

Clone the project

```bash
  git clone https://github.com/arkarDL/storybook-design-workflow
```

Go to the project directory

```bash
  cd storybook-design-workflow
```

Install dependencies

```bash
  yarn
```

Run yarn dev to start the development servers

```bash
    yarn dev
```

After running the command turbo will start 

- storybook server at port 6006
- rollup watcher for compiling the ui library
- all the apps scripted with *yarn dev or npm run dev* in your apps folder

There you can start your development workflow in a hot way.

## Running Tests

To run tests, run the following command in the root folder

```bash
  yarn test
```

## Building 

To build the UI library and testing apps run *yarn build* in the root folder

```bash
  yarn build
```
After running the command turbo will build 

- the ui library documentation in the *apps/docs* folder you can specify the output location in the *packages.json* of the ui package.
- the minified version of the library in the *dist* for publication on npm registry any where using rollup
- all the apps scripted with *yarn build or npm run build* in your apps folder

## Roadmap

- Design system base components
- Optimizations and compressions 
- Add more components 
- Add more tests

