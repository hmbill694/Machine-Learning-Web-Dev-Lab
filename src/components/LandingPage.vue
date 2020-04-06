<template>
  <v-container id="background" fluid>
    <v-row align="center" justify="center"
      ><v-col cols="3" v-for="i in appCardContent" :key="i">
        <AppCard
          :name="i.name"
          :description="i.description"
          :link="i.routerLink"
          :img="i.img"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="8">
        <h2>Lastest Projects</h2>
        <InfoPanel :title="infoTitle" :information="siteInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InfoPanel from './bodyComps/InfoPanel'
import AppCard from './bodyComps/AppCard'
export default {
  name: 'LandingPage',
  components: {
    InfoPanel,
    AppCard
  },
  data: () => ({
    infoTitle: `What's in the App`,
    appCardContent: [
      {
        name: 'Flower Predictor',
        description: `Using a neural network predict the kind of iris flower given 4 characteristics.`,
        routerLink: 'flower-predictor',
        img: '../assets/iris-2502898_640.jpg'
      },
      {
        name: 'Flower Predictor',
        description: `Using a neural network predict the kind of iris flower given 4 characteristics.`,
        routerLink: 'flower-predictor',
        img: '../assets/iris-2502898_640.jpg'
      },
      {
        name: 'Flower Predictor',
        description: `Using a neural network predict the kind of iris flower given 4 characteristics.`,
        routerLink: 'flower-predictor',
        img: '../assets/neural-network-3637503_640.png'
      }
    ],
    siteInfo: [
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
        title: `The Flower Predictior`,
        content: `This bit of functionality will use a toy nueral network built in another project. It will
                  given a set of inputs from it's test set will generate a guess about what kind of flower it is.
                  `
      }
    ]
  })
}
</script>

<style scoped>
#background {
  max-width: 100%;
  height: 100%;
  background-image: url('../assets/multicolored-abstract-painting-1570779.jpg');
}
</style>
