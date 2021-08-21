<template>
  <div class="px-3 px-sm-6 py-6 pb-10">
    <div class="flex d-inline-flex">
      <GoBack/>
      <p class="text-h5 mt-1 mb-0">Profile</p>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="10"
      >
        <v-tabs class="mt-10" background-color="transparent">
          <v-tab class="tab-class">Profile</v-tab>
          <v-tab class="tab-class">Security</v-tab>
          <v-tab-item>
            <v-card flat color="background" class="pt-4">
              <v-row>
                <v-col>
                  <v-card flat class="pa-8">
                    <p class="text-h6 mb-4">Update your profile</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="Firstname"
                          outlined
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="Lastname"
                          outlined
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          label="Phone no"
                          outlined
                          dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-btn
                          block
                          color="primary"
                        >Update</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat color="background" class="pt-4">
              <v-row>
                <v-col
                 cols="12"
                 md="10"
                >
                  <v-card class="pa-8 mb-6" flat>
                    <p class="text-h6 mb-4">Set Transaction Pin</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-text-field
                          label="Transaction Pin"
                          outlined
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-text-field
                          label="Confirm Transaction Pin"
                          outlined
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-btn
                          color="primary"
                          class="no-text-transform px-10"
                        >submit</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card class="pa-8" flat>
                    <p class="text-h6 mb-4">Update your password</p>
                    <v-row>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-text-field
                          label="Old Password"
                          outlined
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-text-field
                          label="New Password"
                          outlined
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-text-field
                          label="Confirm Password"
                          outlined
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                        <v-btn
                          color="primary"
                          class="no-text-transform px-10"
                        >Update</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'Profile',
  components: {
    GoBack
  }
}
</script>

<style scoped>
.text-h3 {
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 2rem;
}
.form-card {
  border-radius: 8px !important;
}
.no-text-transform {
  text-transform: none !important;
  letter-spacing: 0.1px !important;
}
.tab-class {
  padding: 0 80px !important;
}
</style>
