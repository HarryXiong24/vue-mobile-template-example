<template>
  <div class="movieComment">
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
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class MovieComment extends Vue {
  @Prop(Object) public list: any

}
</script>

<style lang="scss">
  .demo {
    font-size: 100px;
    margin-top: 1200px;
    color: #2d3a4b;
  }
</style>