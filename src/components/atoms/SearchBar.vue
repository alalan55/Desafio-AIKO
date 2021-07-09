<template>
    <input type="text" :placeholder="text" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
    export default {
            props:{
                text:{type: String, required: true},
                modelValue: String
            }
    }
</script>

<style lang="scss" scoped>
input{
    width: 100%;
}

</style>