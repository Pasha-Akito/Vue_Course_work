<template>
  <section>
    <h2>My Friends</h2>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "julie",
          name: "Julie Jones",
          phone: "664 44422 90",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>