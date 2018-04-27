var TYPES = {
  hexadecimal: {
    className: [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '$1'],
    value: [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1']
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
}

var CSS_RULES = {
  background: {
    property: 'background',
    cssClass: 'bg',
    typeForClass: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '$1']
    ],
    typeForValue: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1']
    ]
  },
  position: {
    property: 'position',
    cssClass: 'position',
    typeForClass: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '$1'],
    ],
    typeForValue: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1'],
    ]
  },
  width: {
    property: 'width',
    cssClass: 'w',
    typeForClass: [
      [/^(\d+)(pg)$/, '$1'],
      [/^(\d+)(px)$/, '$1'],
    ],
    typeForValue: [
      [/^(\d+)(pg)$/, '$1%'],
      [/^(\d+px)$/, '$&'],
    ]
  },
  height: {
    property: 'height',
    cssClass: 'h',
    typeForClass: [
      [/^(\d+)(pg)$/, '$1'],
      [/^(\d+)(px)$/, '$1'],
    ],
    typeForValue: [
      [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1']
    ]
  }
}
var TYPE_FOR_CLASS = [
    [/^(\d+)(pg)$/, '$1'],
    [/^(\d+)(px)$/, '$1'],
    [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '$1']
];
var TYPE_FOR_VALUE = [
    [/^(\d+)(pg)$/, '$1%'],
    [/^(\d+px)$/, '$&'],
    [/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(h)$/, '#$1']
];
var ATTRIBUTE_CLASS = 'yh-class';

var HeadTag = document.getElementsByTagName('head');
var Tags = document.body.getElementsByTagName('*');
var SelectedTags = [];
var Sheet = (function() {
  var style = document.createElement("style");

  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);

  return style.sheet;
})();

// GET ALL TAGS WITH ATTRIBUTE YH-CLASS
for (var i = 0; Tags[i]; i++) {
  if (Tags[i].getAttribute(ATTRIBUTE_CLASS) !== null &&
      Tags[i].getAttribute(ATTRIBUTE_CLASS) !== '')
    SelectedTags.push(Tags[i]);
}

var key = [];
var property = [];
for (var i = 0; SelectedTags[i]; i++) {
  key = SelectedTags[i].getAttribute(ATTRIBUTE_CLASS).split(' ');
  for (var j = 0; key[j]; j++) {
    property = key[j].split('-');
    if (CSS_RULES[property[0]]) {
      SelectedTags[i].className += insertCSSRule(property[0], property[1]) + ' ';
      SelectedTags[i].removeAttribute(ATTRIBUTE_CLASS);
    }
  }
}

function generateRule(property, value) {
  return CSS_RULES[property].cssClass + '{ ' + property + ': ' + value + ' }';
}

function insertCSSRule(property, val) {
  var className = generateClassName(CSS_RULES[property].cssClass, value);
  var value = parseValue(val);
  if (className === null) className = CSS_RULES[property].cssClass;
  if (value === null) value = val;
  console.log(className, value);
  if("insertRule" in Sheet) {
    Sheet.insertRule('.' + className + ' { ' + property + ': ' + value + '; }', 0);
  } else if("addRule" in Sheet) {
    Sheet.addRule('.' + className, ' { ' + property + ': ' + value + '; }', 1);
  }

  return className;
}

function generateClassName(className, value) {
  for (var i = 0; TYPE_FOR_CLASS[i]; i++) {
    if (value.match(TYPE_FOR_CLASS[i][0]) !== null) {
      return className + value.replace(TYPE_FOR_CLASS[i][0], TYPE_FOR_CLASS[i][1]);
    }
  }
  return null;
}

function parseValue(value) {
  for (var i = 0; TYPE_FOR_VALUE[i]; i++) {
    if (value.match(TYPE_FOR_VALUE[i][0]) !== null) {
      return value.replace(TYPE_FOR_VALUE[i][0], TYPE_FOR_VALUE[i][1]);
    }
  }
  return null;
}