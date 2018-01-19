<template>
<section class="hero is-light is-fullheight">
   <div class="hero-body">
       <div class="container">
           <div class="columns align-item-center">
               <div class="column is-7">
                   <h1 class="title">
                       注册账户
                   </h1>
                   <h2 class="subtitle">
                       注册Music账户, 分享每日最爱音乐!
                   </h2>
               </div>
               <div class="column is-5">
                   <div class="card">
                       <div class="card-content">
                           <form method="POST" action="">
                               <input type="hidden" name="_token" value="">

                               <div class="field">
                                   <label class="label" for="username">用户名</label>
                                   <div class="control has-icons-left">
                                       <input class="input "
                                              name="username"
                                              id="username"
                                              type="text"
                                              placeholder="用户名"
                                              v-model="user.username"
                                              value="" required>

                                       <span class="icon is-small is-left">
                                           <i class="fa fa-at"></i>
                                       </span>
                                   </div>
                              </div>

                              <div class="field">
                                  <label for="password">Password</label>
                                  <div class="control has-icons-left">
                                      <p class="control">
                                          <vue-password v-model="user.password"
                                                        classes="input"
                                                        placeholder="密码"
                                                        required
                                                        :user-inputs="[user.username]"
                                          >
                                          </vue-password>
                                     </p>
                                       <span class="icon is-small is-left">
                                           <i class="fa fa-lock"></i>
                                       </span>
                                  </div>
                               </div>

                               <div class="field is-grouped">
                                   <div class="control">
                                       <button type="submit" @click.prevent="register" class="button is-primary">
                                           注册
                                       </button>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
                   
                   <div class="column">
                       <p class="has-text-centered">
                           已经注册? <a href="/login" class="has-text-primary">登录</a>
                       </p>
                   </div>

                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
</template>

<script>
import VuePassword from 'vue-password'

export default {
  name: 'Register',
  components: {
    VuePassword
  },
  data () {
    return {
        user: {
          username: '',
          password: ''
        }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('registUser', {username: this.user.username, password: this.user.password})
    }
  }
}
</script>
