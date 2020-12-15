<template>

  <div class="movieList">
    <mu-divider></mu-divider>

    <mu-list-item avatar :ripple="true">
      <mu-list-item-content @click="enterDetail(list.movieID)">
        <mu-list-item-title>{{list.movieName}}</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">{{list.movieActors}}</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          {{list.movieInfo}}
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action >
        <mu-list-item-after-text>{{list.moviePoint}}</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
  </div>

</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class MovieList extends Vue {
  @Prop(Object) public list!: any
  public selects: any = false

  enterDetail(movieID: number) {
    this.$router.push(`/MovieDetail?MovieId=${movieID}`)
  }

}

</script>

<style lang="scss">

</style>