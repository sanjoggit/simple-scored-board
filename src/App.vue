<template>
  <div>
    <app-score-board></app-score-board>
    <app-team-name></app-team-name>
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard.vue'
import TeamName from './components/TeamName.vue'
export default {
    components: {
      appScoreBoard: ScoreBoard,
      appTeamName: TeamName
    }
}
</script>

