<template>
    <div id="app">
        <NormalCall/>
        <PluginCall/>
    </div>
</template>

<script>
  import NormalCall from "./components/FunctionCall";
  import PluginCall from "./components/PluginCall";

  export default {
        name: 'App',
        components: {
            PluginCall,
            NormalCall,
        }
    }
</script>