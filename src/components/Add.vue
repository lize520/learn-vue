<template>
  <div class="add">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1>添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" placeholder="name" class="form-control" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" placeholder="phone" class="form-control" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" placeholder="email" class="form-control" v-model="customer.email">
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>

    </form>
  </div>
</template>

<script>
  import Alert from './Alert.vue'

  export default {
    name: "add",
    data() {
      return {
        customer: {},
        alert: ""
      }
    },
    methods: {
      addCustomer(e) {
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          this.alert = "请添加对应的信息";
        } else {
          let newCustomer = {
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email
          };

          this.$http.post("http://localhost:3000/users", newCustomer)
            .then((response) => {
              this.$router.push({path: '/', query: {alert: "用户信息添加成功!"}})
            });
        }
        e.preventDefault()
      }
    },
    components: {
      Alert
    }


  }
</script>

<style scoped>

</style>
