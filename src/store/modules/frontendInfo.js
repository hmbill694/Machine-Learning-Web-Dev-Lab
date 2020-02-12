export default {
  namespaced: true,
  state: {
    info: [
      {
        title: 'Phase 1: The Start',
        content: `Using the vue cli I created project using the command
        " vue create _project-name_" from within my terminal. 
        During the setup process I used vuex and vueRouter. I 
        am also using eslint and babel. I will also be using 
        vuetify for the material design components. To do this
        I ran the command "vue add vuetify" from within the project
        folder. Now I have vuetify.`
      },
      {
        title: 'Phase 2: Bye Bye Boilerplate',
        content: `After I removed all the boiler plate from the created project I 
        started to work on the App bar which will be present throughtout 
        the app. This app bar will contain the button which when pressed will
        display a nav menu which will allow sitewide navigation. Each one of these
        will be seperate components, with the appbar component containing the 
        nav list. The appbar will then be placed in the app.vue file of the 
        application.`
      },
      {
        title: 'Phase 3: Vue Router is hard',
        content: `Next I set up the vue router. This will allow the app to be a single page 
        application. I struggled with this a little as I did not fully understand 
        how the routing worked. The resources I used to help me further understanding are 
        https://router.vuejs.org/ and to help me implement vue router I used this
        video https://www.youtube.com/watch?v=mY2MiaYiSdw. I then implemented the router
        by placing the "router-view" component into the app page. Next, using the "v-navigation-drawer",
        which side bar is already preconfigured to work with Vue Router, set the ":to" property to each 
        of my router links which exist in the NavList component data.`
      },
      {
        title: 'Phase 4: The Attack of the Bug',
        content: `Okay, first bug/mistake. The "v-app-bar-nav-icon" found within my AppBar component needed to
        be clicked twice to open. Why? Well, I was mishandling how I was passing to and emitting from
        the AppBar compoennt. To review when passing a prop to a component it looks like :foo="bar" where
        bar is either a member of data, a computed value, or is itself a prop. If you intend to modify
        bar and send it back to the parent, it should look like @changeBar="change" where change is a 
        function in the parent component and changeBar is a function within the child. Look here is
        a poor illustration.
        
            
            |   parent    |
            ---:foo="bar"----> Child\n

            |   parent    |
            <---@changeBar="Change"---- Child`
      },
      {
        title: 'Phase 5: Building my Base',
        content: `So the main goal of this phase is to build the general flavor of what all the model components
        will look like. This is done by creating a "Generic Component" that will host all things I want on every 
        model component I want a list of prior guesses`
      }
    ]
  }
}
