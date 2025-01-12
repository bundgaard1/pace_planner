<script lang="ts">
  import Home from "./Home.svelte";
  import Topbar from "./components/Topbar.svelte";
</script>

<style>
  /* Global styles go here */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>

<body>
  <h1>APP</h1>
  <Topbar />
  <div class="container">
    <Home />
     Hello from App.svelte
  </div>
</body>