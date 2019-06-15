<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <button class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert.vue'
  export default {
    name: "edit",
    data() {
      return {
        customer: "",
        Alert:""
      }
    },
    methods: {
      fetchCustomer(id) {
        this.$http.get("http://localhost:3000/users/" + id)
          .then((response) => {
            this.customer = response.data
          })
      },
      updateCustomer(e) {
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
          this.alert = "请添加对应的信息!";
        }else{
          let updateCustomer = {
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
          };
          this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
            .then((response)=>{
              this.$router.push({path:"/",query:{alert:"用户信息更新成功!"}})
            });
        }
        e.preventDefault();
      }
    },
    created() {
      this.fetchCustomer(this.$route.params.id)
    },
    components:{
      Alert
    }

  }
</script>

<style scoped>

</style>
