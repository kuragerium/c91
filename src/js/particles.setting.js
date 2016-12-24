export default {
  'particles': {
    'number': {
      'value': 30,
      'density': {
        'enable': true,
        'value_area': 800
      }
    },
    'color': {
      'value': '#00abde'
    },
    'shape': {
      'type': 'circle',
      'stroke': {
        'width': 0
      }
    },
    'opacity': {
      'value': 0.5,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 10,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 80,
        'size_min': 0.1,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false
    },
    'move': {
      'enable': true,
      'speed': 1,
      'direction': 'top',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false
      },
      'onclick': {
        'enable': false
      },
      'resize': true
    }
  },
  'retina_detect': true
};
