<template>
<div class="container">
        <h2>{{scoreStatus}}</h2>
    <div class="row">
        <div class="col-lg-6">
            <div class="team-a">
                <span>Team A</span>
                <span>{{teamACount}} </span>
                <button class="btn btn-primary" @click="increaseA">+1 point</button>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="team-b">
                <span>Team B</span>
                <span>{{teamBCount}} </span>
                <button class="btn btn-primary" @click="increaseB">+1 point</button>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    methods:{
        ...mapMutations({
            increaseA: 'increaseA',
            increaseB: 'increaseB'
        })
    },
    computed: {
        ...mapGetters({
            scoreStatus: 'scoreStatus',
            teamACount: 'teamACount',
            teamBCount: 'teamBCount'
        }),
        
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    margin: 20px 0 20px 0;
}
    .team-a, .team-b{
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 2px solid whitesmoke;
        padding: 1em;
        font-size: 2em;
    }
</style>
