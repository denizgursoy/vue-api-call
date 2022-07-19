<template>
    <div></div>
</template>
<script>
import  { getCharacter } from "../clients/people"

export default {
    name: "NormalCall",
    async mounted() {
        const result = await getCharacter(1);
        console.log(result)
    }
}
</script>
