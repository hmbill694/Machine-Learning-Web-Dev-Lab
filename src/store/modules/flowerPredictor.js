const fetch = require('node-fetch')
export default {
  namespaced: true,
  state: {
    // = data
    flowerMarkers: [
      {
        label: 'Sepal Width'
      },
      {
        label: 'Sepal Length'
      },
      {
        label: 'Pedal Length'
      },
      {
        label: 'Pedal Width'
      }
    ],
    flowerGuesses: [],
    title: 'About the App',
    aboutInfo: [
      {
        title: 'Goal of the Site',
        content: `My intention with createing this site is to give myself a chance to
                  document my progress as I attempt to improve my skills as both a web 
                  and machine learning/ai developer. It is my intention to use this site to
                  also document my progress as I build it. I will be recording any problems I have
                  as well as any useful resources that helped me accomplish this should anyone ever 
                  feel the desire to do something similar.`
      },
      {
        title: 'About the Frontend',
        content: `This apps frontend was made using vue, vue router to make it a single page web application,
                  and vuex to handle application state. A more indepth explaination of how the frontend of the 
                  app was created can be found by navigating to the page titled 'About the Frontend' 
                  in the navigation menu.`
      },
      {
        title: 'About the Backend',
        content: `This apps backend will map to several python3 projects
                  where the models for each mini app have been trained. As for how that works
                  I'm not quite sure yet.`
      },
      {
        title: 'Cancer Predictor',
        content: `This application will predict if a occurance of an abnormality in breasts has the potential to be cancerous
                  based on some provided data. This is the first neural network that I have ever made
                  from scratch and serves mostly as a way for me to really hammer out the way in which
                  these networks function`
      }
    ],
    pageName: 'Flower Classifier'
  },
  mutations: {
    addToGuess(state, payload) {
      state.flowerGuesses.push(payload)
      console.log(...state.flowerGuesses)
    },
    clear(state, payload) {
      console.log('all guesses cleared')
      state.flowerGuesses = payload
    }
  },
  actions: {
    async addGuess({ commit }) {
      const response = await fetch(
        'http://localhost:8000/iris_predictor/'
      ).catch(e => console.error(e))
      const data = await response.json().catch(e => console.error(e))
      commit('addToGuess', data)
    },
    clearGuesses({ commit }) {
      commit('clear', [])
    }
  }
}
