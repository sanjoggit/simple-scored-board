<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <h3>Team names:</h3>
                <div class="team-name-container">
                    <label>Team A: </label>
                    <input type="text" v-model="teamA">
                    <label>Team B: </label>
                    <input type="text" v-model="teamB">
                </div>                
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <button class="btn btn-success" @click="updateScore({teamA: Number(teamA), teamB: Number(teamB)})">Update</button>
                <button class="btn btn-primary" @click="resetInputs">Reset</button>
            </div>
            <div class="col-lg-6">
                <button class="btn btn-danger reset-scores" @click="resetBoard">Reset Score Board</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            teamA: null,
            teamB: null
        }
    },
    methods: {
        ...mapMutations({
            updateScore: 'updateScore',
            resetBoard: 'resetBoard'
        }),
        resetInputs(){
            this.teamA = 0,
            this.teamB = 0
        }
    }
}
</script>

<style>
    .team-name-container{
        display: flex;
        flex-direction: column;
    }

    .btn{
        margin-top: 10px;
        margin-right: 10px;
    }
    .reset-scores{
        float: right;
    }
</style>
