export default {
  language: 'zh',
  controls: [
    'undo', 'redo', 'separator',
    'font-size', 'line-height', 'letter-spacing', 'separator',
    'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
    'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'separator',
    'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
    'link', 'split', 'hr', 'separator',
    'media', 'separator',
    'clear'
  ],
  excludeControls: [],
  extendControls: [],
  extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    externals: {
      audio: true,
      video: true,
      image: true,
      embed: true
    },
  },
  imageControls: [
    'float-left', 'float-right',
    'align-left', 'align-center', 'align-right',
    'link', 'size', 'remove'
  ],
  colors: [
    '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
    '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
  ],
  tabIndents: 2,
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  textIndents: [0, 14, 21, 28],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
  fontSizes: [
    12, 14, 16, 18, 20, 24,
    28, 30, 32, 36, 40, 48,
    56, 64, 72, 96, 120, 144
  ],
  fontFamilies: [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
  }],
  emojis: [
    '🤣', '🙌', '💚', '💛', '👏', '😉', '💯',
    '💕', '💞', '💘', '💙', '💝', '🖤', '💜',
    '❤️', '😍', '😻', '💓', '💗', '😋', '😇',
    '😂', '😹', '😘', '💖', '😁', '😀', '🤞',
    '😲', '😄', '😊', '👍', '😌', '😃', '😅',
    '✌️', '🤗', '💋', '😗', '😽', '😚', '🤠',
    '😙', '😺', '👄', '😸', '😏', '😼', '👌',
    '😎', '😆', '😛', '🙏', '🤝', '🙂', '🤑',
    '😝', '😐', '😑', '🤤', '😤', '🙃', '🤡',
    '😶', '😪', '😴', '😵', '😓', '👊', '😦',
    '😷', '🤐', '😜', '🤓', '👻', '😥', '🙄',
    '🤔', '🤒', '🙁', '😔', '😯', '☹️', '☠️',
    '😰', '😩', '😖', '😕', '😒', '😣', '😢',
    '😮', '😿', '🤧', '😫', '🤥', '😞', '😬',
    '👎', '💀', '😳', '😨', '🤕', '🤢', '😱',
    '😭', '😠', '😈', '😧', '💔', '😟', '🙀',
    '💩', '👿', '😡', '😾', '🖕'
  ],
  stripPastedStyles: false,
  className: '',
  style: {},
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: {},
  draftProps: {},
  hooks: {},
  onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null
}