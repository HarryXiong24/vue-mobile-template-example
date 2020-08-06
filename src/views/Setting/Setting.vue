<template>
  <mu-paper :z-depth="0">
    <NormalTop title="setting"></NormalTop>
    <mu-list textline="two-line">
      <mu-list-item>
        <mu-list-item-content>
          <mu-list-item-title>Notification and information settings</mu-list-item-title>
          <mu-list-item-sub-title>Always break</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <mu-divider></mu-divider>
    <mu-list>
        <mu-sub-header>Sound on setting</mu-sub-header>
        <mu-list-item button :ripple="false" @click="events = !events">
          <mu-list-item-title>
            Events and reminders
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-switch v-model="events" readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="calls = !calls">
          <mu-list-item-title>
            Phone
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-switch v-model="calls" readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="messages = !messages">
          <mu-list-item-title>
            Message
          </mu-list-item-title>
          <mu-list-item-action>
            <mu-switch v-model="messages" readonly></mu-switch>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    <mu-list>
      <mu-sub-header>Notification settings</mu-sub-header>
      <mu-list-item button :ripple="false" @click="notifications = !notifications">
        <mu-list-item-action>
          <mu-checkbox v-model="notifications" readonly></mu-checkbox>
        </mu-list-item-action>
        <mu-list-item-title>
          Notification
        </mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="sounds = !sounds">
        <mu-list-item-action>
          <mu-checkbox v-model="sounds" readonly></mu-checkbox>
        </mu-list-item-action>
        <mu-list-item-title>
          Sound
        </mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
        <mu-list-item-action>
          <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
        </mu-list-item-action>
        <mu-list-item-title>
          Video Sound
        </mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import NormalTop from '../../components/NormalTop/NormalTop.vue';


@Component({
  components: {
    NormalTop
  }
})
export default class Setting extends Vue {
  private events: boolean = false
  private calls: boolean = false
  private messages: boolean =  false
  private notifications: boolean =  false
  private sounds: boolean =  false
  private videoSounds: boolean =  false
}

</script>

<style>

</style>