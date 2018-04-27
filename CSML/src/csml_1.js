var ATTRIBUTE_CLASS = 'yh-class';

var TYPE = {
  hexadecimal: {
    className: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '$1']
    ],
    value: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1']
    ]
  },
  size: {
    className: [
      [/^(\d+)(pg)$/, '$1'],
      [/^(\d+)(px)$/, '$1'],
    ],
    value: [
      [/^(\d+)(pg)$/, '$1%'],
      [/^(\d+px)$/, '$&'],
    ]
  }
  string: {
    className: [
      [/^(\w+)$/, '$1'],
    ],
    value: [
      [/^(\w+)$/, '$1'],
    ]
  }
  number: {
    className: [
      [/^(\d+)$/, '$1'],
    ],
    value: [
      [/^(\d+)$/, '$1'],
    ]
  }
}

var CSS_RULES = {
  background: {
    classPrefix: 'bg',
    property: 'background',
    valueType: TYPE.hexadecimal,
  },
  position: {
    classPrefix: 'position',
    property: 'position',
    valueType: TYPE.string,
  },
  width: {
    classPrefix: 'w',
    property: 'width',
    valueType: TYPE.size,
  },
  height: {
    classPrefix: 'h',
    property: 'height',
    valueType: TYPE.size, 
  }
}

