var api = {
  getRovers(){
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY`;
    return fetch(url).then((res) => res.json());
  }
};


var apijobs = {
  getJobs(){
    var url = `https://codepen.io/jobs.json`;
    return fetch(url).then((res) => res.json());
  }
};

var apibikes = {
  getBikes(){
    var url = `https://feeds.citibikenyc.com/stations/stations.json`;
    return fetch(url).then((res) => res.json());
  }
};

var apicountries = {
  getCountries(){
    var url = `http://services.groupkt.com/country/get/all`;
    return fetch(url).then((res) => res.json());
  }
};
