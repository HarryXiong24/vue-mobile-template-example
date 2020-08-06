<template>
  <div class="demo">Come design your page!</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class PageD extends Vue {

}
</script>

<style lang="scss">
  .demo {
    font-size: 100px;
    margin-top: 1200px;
    color: #2d3a4b;
  }
</style>