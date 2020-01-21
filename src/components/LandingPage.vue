<template>
  <v-parallax
    dark
    src="./../assets/blue-red-and-yellow-abstract-painting-1566987.jpg"
    height="100%"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-card>
          <v-card-title class="headline">
            My Machine Learning Lab
          </v-card-title>
          <v-card-subtitle>
            Your what Now??
          </v-card-subtitle>
          <v-card-text class="headline font-weight-medium">
            This web-app will serve as a repository for all of my machine
            learning projects. I figure it's a bit more impressive than a
            showing someone a command line application.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" cols="12">
        <v-card>
          <v-card-title class="headline">
            About Me
          </v-card-title>
          <v-card-text class="headline font-weight-medium"
            >So, alittle about myself. My name is Harrison Billings. If you look
            hard enough you can see my name at the bottom of the screen in
            header. I'm a computer science student at ASU and will be graduating
            in December of 2020. Prior to my time in the Computer Science
            program, I was pursuing a degree in psychology with the intention of
            going to medical school. I switched to CS my sophmore year because
            my roommate at the time was in CS and I found myself incredibly
            interested in his homework and courses but didn't seem to care about
            mine. Since switching into the program I have found a passion for
            both web development and as of late, AI/Machine Learning. The
            potential for the technology has me both terrified and excited! I
            figure the best way to make sure we dont end up with our very own
            SkyNet is to influence the field from within.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" cols="12">
        <InfoPanel :title="infoTitle" :information="siteInfo" />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import InfoPanel from './bodyComps/InfoPanel'
export default {
  name: 'LandingPage',
  components: {
    InfoPanel
  },
  data: () => ({
    infoTitle: 'What in the App',
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
        title: `The Wine Picker`,
        content: `This application will tell if a given mystery wine is red or white
                based on some given data. This is the first neural network that I have ever made
                from scratch and serves mostly as a way for me to really hammer out the way in which
                these networks function`
      }
    ]
  })
}
</script>
