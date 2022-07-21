<template>
    <div></div>
</template>
<script>
    export default {
        name: "NormalCall",
        async mounted() {
            const id = 1
            const result = await fetch(`https://swapi.dev/api/people/${id}`).then((response) =>
                response.json()
            );
            console.log(result)
        }
    }
</script>
