 new Vue({
  el: '#app',
  data () {
    return {
      info: []
    }
  },
  mounted () {
    
    axios
      .get('https://swapi.co/api/people/?format=json&page=')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
	
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
});

