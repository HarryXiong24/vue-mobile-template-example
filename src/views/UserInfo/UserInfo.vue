<template>
  <div class="userInfo">
    <NormalTop title="账户信息"></NormalTop>

    <mu-list>
      <mu-list-item button :ripple="true" class="item">
        <mu-list-item-action>
          <mu-icon value="account_circle"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>用户名</mu-list-item-title>
        <mu-list-item-title class="id">{{userInfo.username}}</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="info"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>

      <mu-list-item button :ripple="true" class="item">
        <mu-list-item-action>
          <mu-icon value="fingerprint"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>权限</mu-list-item-title>
        <mu-list-item-title class="id">{{userInfo.token}}</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="info"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>

      <mu-list-item button :ripple="true" class="item">
        <mu-list-item-action>
          <mu-icon value="fingerprint"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>手机</mu-list-item-title>
        <mu-list-item-title class="id">{{userInfo.phone}}</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="info"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>

    </mu-list>

  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { decrypt } from '../../util/crypto';
import NormalTop from '../../components/NormalTop/NormalTop.vue';

@Component({
  components: {
    NormalTop
  }
})
export default class UserInfo extends Vue {
  private userInfo: {} = {}

  back () {
    this.$router.back()
  }

  mounted() {
    this.userInfo = JSON.parse(decrypt(sessionStorage.getItem('userInfo')))
  }
}

</script>

<style lang="scss">
.userInfo{
  .item {
    .id {
      text-align: end;
    }
  }
}
</style>