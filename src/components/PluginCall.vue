<template>
    <div></div>
</template>
<script>
export default {
    name: "PluginCall",
    async mounted() {
        const result = await this.$api.getCharacter(1);
        console.log(result)
    }
}
</script>
