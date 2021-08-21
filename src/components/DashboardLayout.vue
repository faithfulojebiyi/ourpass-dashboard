<template>
  <v-main class="background">
    <v-navigation-drawer
      v-model="drawer"
      app
      mobile-breakpoint="1024"
      class="elevation-0 border-none"
      floating
      clipped
      width="200"
    >
      <v-list class="mt-11">
        <v-list-item
          class="pl-10 pr-9 list-class"
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          active-class="primary--text"
        >
          <v-list-item-icon class="mr-2 my-auto">
            <v-icon size="20">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="py-auto">
            <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!--///////-->
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item
            class="px-10 list-class"
          >
            <v-list-item-icon class="mr-2 my-auto">
              <v-icon size="20">mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="py-auto">
              <v-list-item-title class="text-body-2">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!--///////-->
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer
      right
      app
      clipped
      mobile-breakpoint="1024"
      class="elevation-0 border-none"
      floating
      width="250"
    >
      <div class="pa-4">
        <p class="my-font text-bold" style="font-size: 18px;">Recommended Actions</p>
        <v-card flat color="background">
          <div class="text-subtitle font-weight-medium pa-4"> For Support </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="primary"
              class="no-text-transform px-4"
            >
              Chat with Us
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      flat
      color="third"
      clipped-left
      clipped-right
      dense
    >
      <img src="../assets/ourpasslogo.svg" class="cursor-pointer" style="max-width: 80px;">
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="primary"
        small
        class="mr-2 no-text-transform"
      >
        Go to website
      </v-btn>
      <v-badge
        :content=6
        :value=6
        overlap
        v-if="isXs"
      >
        <v-icon
          size="25"
          color="black"
        >
          mdi-bell-outline
        </v-icon>
      </v-badge>
      <v-app-bar-nav-icon v-if="isXs" class="primary--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-container fluid class="pa-0">
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      isXs: false,
      drawer: null,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          route: '/'
        },
        {
          icon: 'mdi-credit-card-outline',
          title: 'Cards',
          route: '/cards'
        },
        {
          icon: 'mdi-history',
          title: 'Wallet History',
          route: '/transactions'
        },
        {
          icon: 'mdi-account-outline',
          title: 'Profile',
          route: '/profile'
        },
        {
          icon: 'mdi-lifebuoy',
          title: 'Support',
          route: '/support'
        }
      ],
      navi: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          route: '/'
        }
      ]
    }
  },
  methods: {
    onResize () {
      this.isXs = window.innerWidth < 1024
    }
  },
  watch: {
    isXs (value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  }
}
</script>

<style lang="scss" scoped>
  .v-list-item--active {
    border-right: 2px solid rgb(29, 188, 134);
  }
  .greetings-desktop{
  font-family:inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  color: #1BBC86;
}
.container {
  padding: 24px;
}
.list-class {
  height: 52px;
}
.text-bold {
  font-weight: 700;
}
.no-text-transform {
  text-transform: none !important;
  letter-spacing: 0.1px !important;
}
</style>
