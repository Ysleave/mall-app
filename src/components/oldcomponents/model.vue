<template>        
    <div class="modal" id="modal">
        <div class="mask" @click="setShowModel(false)"></div>
        <div class="modal-content">
            <h2>编辑信息</h2>
            <form action="#" id="edit-student-form" class="add-student-form">
                <div>
                    <label for="name">姓名</label>
                    <input type="text" name="name" ref="name" autocomplete="off" :value="editUser.name" @input="updateUser('name',$event.target.value)">
                </div>
                <div class="sex">
                    <label for="sex">性别</label>
                    <input type="radio" name="sex" value="0" ref="sex" :checked="editUser.sex == 0" @change="updateUser('sex',0)">
                    <span>男</span>
                    <input type="radio" name="sex" value="1" :checked="editUser.sex == 1"  @change="updateUser('sex',1)">
                    <span>女</span>
                </div>
                <div>
                    <label for="sNo">学号</label>
                    <input type="text" name="sNo" :value="editUser.sNo" ref="sNo" @input="updateUser('sNo',$event.target.value)">
                </div>
                <div>
                    <label for="email">邮箱</label>
                    <input type="text" name="email" :value="editUser.email" ref="email" @input="updateUser('email',$event.target.value)">
                </div>
                <div>
                    <label for="birth">出生年</label>
                    <input type="text" name="birth" :value="editUser.birth" ref="birth" @input="updateUser('birth',$event.target.value)">
                </div>
                <div>
                    <label for="phone">手机号</label>
                    <input type="text" name="phone" :value="editUser.phone" ref="phone" @input="updateUser('phone',$event.target.value)">
                </div>
                <div>
                    <label for="address">住址</label>
                    <input type="text" name="address" :value="editUser.address" ref="address" @input="updateUser('address',$event.target.value)">
                </div>
                <div>
                    <label for=""></label>
                    <input type="button" value="提交" class="btn" id="edit-submit" @click="submit">
                    <input type="button" value="重置" class="btn" @click="reset">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations,mapState,mapActions } from 'vuex'
export default {
  name: '',

  data () {
    return {
        user:{}
    }
  },

  methods: {
      updateUser (key,value) {
          this.user[key] = value
      },
      submit(){
          let user = Object.assign({},this.editUser,this.user)
          this.updateStu(user)
               .then(msg => {
                   alert(msg)
                })
                .catch(err => {
                    alert(err)
                })
      },
      reset() {
          for(let prop in this.$refs){
              if(prop != 'sex'){
                  this.user[prop] = this.$refs[prop].value = ''
              }
          }
          this.$refs.sex.checked = true;
          this.user.sex = 0;
      },
      ...mapMutations(['setShowModel']),
      ...mapActions(['updateStu'])
  },
  computed:{
      ...mapState(['editUser'])
      
  }
}
</script>

<style>

</style>
