<template>
<div class="lista">
    <slot name="search"/>
    <ul class="container__list">
        <slot/>
    </ul>
</div>
</template>

<style lang="scss" scoped>
// .container__list{
//     border: 1px solid red;
//     width: 100%;
    
//     //overflow: hidden;
//     max-height: 100%;
//     //over
// }

</style>