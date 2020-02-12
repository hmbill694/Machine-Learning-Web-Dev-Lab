export default {
  namespaced: true,
  state: {
    // = data
    cancerMarkers: [
      {
        label: 'Radius'
      },
      {
        label: 'Texture'
      },
      {
        label: 'Perimeter'
      },
      {
        label: 'Area'
      },
      {
        label: 'Smoothness'
      },
      {
        label: 'Compactness'
      },
      {
        label: 'ConcavityPoints'
      },
      {
        label: 'Symmetry'
      },
      {
        label: 'FractalDimension'
      }
    ],
    cancerPatients: [
      {
        name: 'P123',
        radius: '2.0',
        texture: 'rough',
        perimeter: '1.2',
        area: '2.2',
        smoothness: '7',
        compactness: '1',
        concavitypoints: '3',
        symmetry: '10',
        fractaldimension: '43'
      },
      {
        name: 'P123',
        radius: '2.0',
        texture: 'rough',
        perimeter: '1.2',
        area: '2.2',
        smoothness: '7',
        compactness: '1',
        concavitypoints: '3',
        symmetry: '10',
        fractaldimension: '43'
      },
      {
        name: 'P123',
        radius: '2.0',
        texture: 'rough',
        perimeter: '1.2',
        area: '2.2',
        smoothness: '7',
        compactness: '1',
        concavitypoints: '3',
        symmetry: '10',
        fractaldimension: '43'
      }
    ],
    title: 'About the App',
    aboutInfo: [
      {
        title: `Goal of the Site`,
        content: `My intention with createing this site is to give myself a chance to
                  document my progress as I attempt to improve my skills as both a web 
                  and machine learning/ai developer. It is my intention to use this site to
                  also document my progress as I build it. I will be recording any problems I have
                  as well as any useful resources that helped me accomplish this should anyone ever 
                  feel the desire to do something similar.`
      },
      {
        title: `About the Frontend`,
        content: `This apps frontend was made using vue, vue router to make it a single page web application,
                  and vuex to handle application state. A more indepth explaination of how the frontend of the 
                  app was created can be found by navigating to the page titled 'About the Frontend' 
                  in the navigation menu.`
      },
      {
        title: `About the Backend`,
        content: `This apps backend will map to several python3 projects
                  where the models for each mini app have been trained. As for how that works
                  I'm not quite sure yet.`
      },
      {
        title: `Cancer Predictor`,
        content: `This application will predict if a occurance of an abnormality in breasts has the potential to be cancerous
                  based on some provided data. This is the first neural network that I have ever made
                  from scratch and serves mostly as a way for me to really hammer out the way in which
                  these networks function`
      }
    ],
    pageName: 'Cancer Classifier'
  }
}
