<template>
  <div class="hello">
    <button @click="toggleFlag();">Toggle flag</button>
    <keep-alive>
      <component
        :is="'foo-'+flag">
      </component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag: true
    };
  },
  methods: {
    toggleFlag() {
      this.flag = !this.flag;
    }
  }
}
</script>
