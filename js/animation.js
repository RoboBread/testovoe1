document.querySelector('.country1').addEventListener('animationend', function(event) {
    if (event.animationName === 'small-ind1') {
      // this.style.left = "-117px";
      // this.style.bottom = "100px";
      this.style.animationName = 'small-ind1-round';
      this.style.animationDuration = '10s';
      this.style.animationIterationCount = 'infinite';
      this.style.animationTimingFunction = 'linear';
      this.style.offsetPath = 'circle(50% at center)';
      this.style.animationDelay = '1.8s';
    }
  });
document.querySelector('.country2').addEventListener('animationend', function(event) {
    if (event.animationName === 'brit') {
      // this.style.left = "-117px";
      // this.style.bottom = "100px";
      this.style.animationName = 'brit-round';
      this.style.animationDuration = '10s';
      this.style.animationIterationCount = 'infinite';
      this.style.animationTimingFunction = 'linear';
      this.style.offsetPath = 'circle(50% at center)';
      this.style.animationDelay = '1.4s';
    }
  });
  document.querySelector('.country3').addEventListener('animationend', function(event) {
    if (event.animationName === 'italy') {
      // this.style.left = "-117px";
      // this.style.bottom = "100px";
      this.style.animationName = 'italy-round';
      this.style.animationDuration = '10s';
      this.style.animationIterationCount = 'infinite';
      this.style.animationTimingFunction = 'linear';
      this.style.offsetPath = 'circle(50% at center)';
      this.style.animationDelay = '1.0s';
    }
  });
  document.querySelector('.country4').addEventListener('animationend', function(event) {
    if (event.animationName === 'big-ind') {
      // this.style.left = "-117px";
      // this.style.bottom = "100px";
      this.style.animationName = 'big-ind-round';
      this.style.animationDuration = '10s';
      this.style.animationIterationCount = 'infinite';
      this.style.animationTimingFunction = 'linear';
      this.style.offsetPath = 'circle(50% at center)';
      this.style.animationDelay = '0.6s';
    }
  });
  document.querySelector('.country5').addEventListener('animationend', function(event) {
    if (event.animationName === 'small-ind2') {
      // this.style.left = "-117px";
      // this.style.bottom = "100px";
      this.style.animationName = 'small-ind2-round';
      this.style.animationDuration = '10s';
      this.style.animationIterationCount = 'infinite';
      this.style.animationTimingFunction = 'linear';
      this.style.offsetPath = 'circle(50% at center)';
      this.style.animationDelay = '0.2s';
    }
  });