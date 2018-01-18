<template>
<section class="hero is-light is-fullheight">
   <div class="hero-body">
       <div class="container">
           <div class="columns align-item-center">
               <div class="column is-7">
                   <h1 class="title">
                       登录账户
                   </h1>
                   <h2 class="subtitle">
                       Music, 分享每日最爱音乐!
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
                                      <input v-model="user.password"
                                             name = "password"
                                             class="input"
                                             type = "password"
                                             placeholder="密码"
                                             required
                                             :user-inputs="[user.username]"
                                      >
                                      </input>
                                       <span class="icon is-small is-left">
                                           <i class="fa fa-lock"></i>
                                       </span>
                                  </div>
                               </div>

                               <div class="field is-grouped">
                                   <div class="control">
                                       <button type="submit" @click.prevent="login" class="button is-primary">
                                           登录
                                       </button>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
                   
                   <div class="column">
                       <p class="has-text-centered">
                           还没有账号? <a href="/register" class="has-text-primary">注册</a>
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
  name: 'Login',
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
    login () {
      // alert(this.user.username + this.user.password)
      this.$store.dispatch('loginUser', {username: this.user.username, password: this.user.password})
    }
  }
}
</script>
