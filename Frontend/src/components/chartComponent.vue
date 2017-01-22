<script>
  import { Bar } from 'vue-chartjs'

  export default Bar.extend({
    mounted () {
      // Overwriting base render method with actual data.
      console.log(this.dataset)
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: this.typeOfData,
            backgroundColor: '#f87979',
            // data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            data: this.dataStuffs
          }
        ]
      })
    },
    props: [ 'typeOfData', 'dataStuffs' ]
  })
</script>
