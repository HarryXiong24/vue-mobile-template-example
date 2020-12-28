<template>
  <div class="movieComment" v-show="showComment">
    <mu-divider></mu-divider>
      
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{list.name}}</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .80)">{{list.comment}}</span><br/>
          {{list.point}}分-{{list.date}}
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>

    <mu-button flat class="delete" @click="deleteComment" v-show="adminShow">
      <mu-icon right value="delete"></mu-icon>
    </mu-button>


  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { decrypt } from '../../util/crypto';

@Component
export default class MovieComment extends Vue {
  @Prop(Object) public list: any
  private alert = false
  private alertText = ''
  
  private adminShow = false;
  private showComment = true;

  judgeAdmin() {
    
    if ( JSON.parse(decrypt(sessionStorage.getItem("userInfo"))).token === 'admin') {
      this.adminShow = true;
    } else {
      this.adminShow = false
    }
  }

  mounted() {
    this.judgeAdmin()
  }

  deleteComment() {
    let ID = {
      
    }

    this.showComment = false
  }

}
</script>

<style lang="scss">
  .movieComment {
    position: relative;
    .delete {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>