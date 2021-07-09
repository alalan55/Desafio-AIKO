<template>
    <!-- <li v-for="dados in data" :key="dados.id">

    </li> -->
    <li>
        <div class="bairro">
            <span class="title">Bairro <i class="fas fa-arrow-up"></i></span>
            <span>Praça da Sé</span>
        </div>

        <div class="terminal">
            <span class="title"><i class="fas fa-arrow-down"></i> Terminal</span>
            <span>TERMINAL LAPA</span>
        </div>
        
    </li>
</template>

<script>
    export default {
        // props:{
        //     data:{type: Object}
        // }
    }
</script>

<style lang="scss" scoped>
.fa-arrow-up{
    color: rgb(46, 150, 46);
}
.fa-arrow-down{
    color: rgb(218, 64, 64);
}
li{
    display: flex;
    border: 1px solid;
    justify-content: space-between;
    list-style: none;
    margin: .5rem;
    border-radius: 5px;

    &>div{
        padding: .5rem;
        span{
            display: block;

        }
        .title{
            font-size: .8rem;
            font-weight: 700;
        }
    }
    .terminal{
        text-align: right;
    }
}

</style>