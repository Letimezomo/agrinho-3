particlesJS('particles-js', 
{
  "particles": {
    "number": {"value": 50},
    "color": {"value": "#2ecc71"},
    "shape": {"type": "circle"},
    "opacity": {"value":0.5,"random":true},
    "size": {"value":4,"random":true},
    "line_linked": {"enable":true,"distance":150,"color":"#2ecc71","opacity":0.4,"width":1},
    "move": {"enable":true,"speed":2}
  },
  "interactivity": {
    "detect_on":"canvas",
    "events":{
      "onhover":{"enable":true,"mode":"repulse"},
      "onclick":{"enable":true,"mode":"push"}
    },
    "modes":{
      "repulse":{"distance":100},
      "push":{"particles_nb":4}
    }
  },
  "retina_detect": true
});