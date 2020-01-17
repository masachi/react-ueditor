"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _UploadModal = _interopRequireDefault(require("./UploadModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var simpleInsertCodeIcon = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9klEQVRYR+2Wy' + '23CQBCGZxwUASdKgA7IIdIukhF0QCoI6YAS6CB0EDpIOgjCEbs3nApCB+EEKFI80ToYgR/7IEhIEb4hvPN/8/jHi3DmB8+sDxeA/1GBdosNi' + 'TAMhHhxnamTVMDnfAEAo0CI0ckBOs1mbRKGy6LArdZtswSl+VdEDSmlAtk9prPqRW0FfMb66OGjt1o3iiB8zgcAMAiEqKfFo0p5QQSDQMpxU' + 'QKFAFvxJ4roQRfA52yCgOFUCAVy8NjEyAWwOaiUVImjauWTCO6KBtAUKwNgOrCfos95DxGepzNh08rcah4cdBFXID5nY0CsBTPRM01/Uewdg' + 'Ku4EmxztiTAoa398jRigGPEdfbTVSOthUkfTdOeDrrdfv20/UytSCeMKhAQ3HvrzY1u4WQs1mIhEk7y7GeCiN1TKc8J8R3Vj+9qWXmZvNW6a' + 'wOR2C+KqPsm5cQkmFlQ1corAeHVatOJZ8AVIu4jwmgqZO0v4irZnQtcIFzslwBuq7bLPKn0wR6whYjtZ9jxurLvtzmzwUwQrvYryjwBzF2hO' + 'ojYfgC9YCabpv6bxLWf4yII39J+NuLG+8BvkPJgOpND9TJjrH7t4Yet/VS1vNVmpLO205XsWPvpWuUGoD6/AJ1jtp/zjcg0YKf636kCpxLdj' + '3MBOHsFfgBLLaBN8r49lAAAAABJRU5ErkJggg==';
var uploadAudio = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACBUlEQVRYR+1VwXHbMBC8' + 'qyBxBXI6cCqwUkEOFUSuIHYFliuwUoGVCrAdWOlA6UCuIOpgPashNRQIOtJkHH2ID2eIA25vD7vndublZ85vI4CRgZGBkxmIiI9mdm9mMzNb' + 'AHgYknJEzM3sA4C7oZiTAEREmNmTuwvEi5lNSH4GsK4liIiFu38nuQRwU4s5CkBTtRILwAvJWzPbuvszyS8AVhFxZWbXAH50E0XE0t2/kbwB' + 'sCxBVAFExKW7TxRMUhfPVTVJXT4HsI2IaQHg1t0fFQNAAPcrpbQhqVZc/BWAaHb3XASq6pkqbf+XAPQ/pQQz+9qy0omdufsTyQRAMfvVYyCl' + 'pCSXLc1N5FpVF9QeMKA9tcrd/5D8CUCPdLc6/3vsDAGwnPP0rUFVY6BhYUVyAuBT0QYVsC7vfQ8AuzbknA/ubpjtFfYeANTCq5yzpNp9iJLq' + '9n8wIKpXOWdJtguA5dvQZpUB9dDdd1pXEMnfRz5CyfW+1HyrrJoX9ADUZEhyY2YykkEZds79KmnuyPOiLGTIiNQ/GZCWTGkhTyep78OAEck/' + 'Zo1f7CXbUUtPgtUW1KTX6Fg2KpPR5fL1AyseONfODhnZtKz+aAAdQ1GVYkFDaOPuMqzBYdRITxZeTX4ygNbVmtkgujWONXKrqxliVqu8PXDU' + 'NHzLEf91bwQwMjAycHYGXgGLbI8w70amwwAAAABJRU5ErkJggg==';

var ReactUeditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactUeditor, _React$Component);

  function ReactUeditor() {
    var _this2;

    _classCallCheck(this, ReactUeditor);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ReactUeditor).call(this));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      videoModalVisible: false,
      audioModalVisible: false,
      videoSource: '',
      audioSource: ''
    });

    _defineProperty(_assertThisInitialized(_this2), "createScript", function (url) {
      var scriptTags = window.document.querySelectorAll('script');
      var len = scriptTags.length;
      var i = 0;

      var _url = location.origin + url;

      return new Promise(function (resolve, reject) {
        for (i = 0; i < len; i++) {
          var src = scriptTags[i].src;

          if (src && src === _url) {
            scriptTags[i].parentElement.removeChild(scriptTags[i]);
          }
        }

        var node = document.createElement('script');
        node.src = url;
        node.onload = resolve;
        document.body.appendChild(node);
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "registerImageUpload", function () {
      window.UE.registerUI('imageUpload', function (editor, uiName) {
        var btn = new window.UE.ui.Button({
          name: uiName,
          title: '文件上传',
          cssRules: 'background-position: -726px -77px;',
          onclick: function onclick() {
            _this2.tempfileInput.click();
          }
        });
        return btn;
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "registerSimpleInsertCode", function () {
      window.UE.registerUI('simpleInsertCode', function (editor, uiName) {
        var btn = new window.UE.ui.Button({
          name: uiName,
          title: '插入代码',
          cssRules: 'background: url(' + simpleInsertCodeIcon + ') !important; background-size: 20px 20px !important;',
          onclick: function onclick() {
            if (_this2.ueditor) {
              _this2.ueditor.focus();

              _this2.ueditor.execCommand('insertcode');
            }
          }
        });
        return btn;
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "registerUploadVideo", function () {
      var _this = _assertThisInitialized(_this2);

      window.UE.registerUI('videoUpload', function (editor, uiName) {
        var btn = new window.UE.ui.Button({
          name: uiName,
          title: '上传视频',
          cssRules: 'background-position: -320px -20px;',
          onclick: function onclick() {
            _this.setState({
              videoModalVisible: true
            });
          }
        });
        return btn;
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "registerUploadAudio", function () {
      var _this = _assertThisInitialized(_this2);

      window.UE.registerUI('audioUpload', function (editor, uiName) {
        var btn = new window.UE.ui.Button({
          name: uiName,
          title: '上传音频',
          cssRules: 'background: url(' + uploadAudio + ') !important; background-size: 20px 20px !important;',
          onclick: function onclick() {
            _this.setState({
              audioModalVisible: true
            });
          }
        });
        return btn;
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "uploadImage", function (e) {
      var uploadImage = _this2.props.uploadImage;

      if (uploadImage) {
        var promise = uploadImage(e);

        if (!!promise && typeof promise.then == 'function') {
          promise.then(function (imageUrl) {
            _this2.insertImage2(imageUrl);
          });
        }
      }

      _this2.tempfileInput.value = '';
    });

    _defineProperty(_assertThisInitialized(_this2), "insertImage2", function (imageUrl) {
      if (_this2.ueditor) {
        _this2.ueditor.focus();

        _this2.ueditor.execCommand('inserthtml', '<img src="' + imageUrl + '" />');
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "insert", function (html) {
      if (_this2.ueditor) {
        _this2.ueditor.execCommand('insertparagraph');

        _this2.ueditor.execCommand('inserthtml', html, true);

        _this2.ueditor.execCommand('insertparagraph');

        _this2.ueditor.execCommand('insertparagraph');
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "closeModal", function (type) {
      switch (type) {
        case 'video':
          _this2.setState({
            videoModalVisible: false
          });

          break;

        case 'audio':
          _this2.setState({
            audioModalVisible: false
          });

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "initEditor", function () {
      var _this2$props = _this2.props,
          config = _this2$props.config,
          plugins = _this2$props.plugins,
          onChange = _this2$props.onChange,
          value = _this2$props.value;
      _this2.ueditor = config ? window.UE.getEditor(_this2.containerID, config) : window.UE.getEditor(_this2.containerID);

      if (plugins && plugins instanceof Array && plugins.length > 0) {
        if (plugins.indexOf('uploadImage') !== -1) _this2.registerImageUpload();
        if (plugins.indexOf('insertCode') !== -1) _this2.registerSimpleInsertCode();
        if (plugins.indexOf('uploadVideo') !== -1) _this2.registerUploadVideo();
        if (plugins.indexOf('uploadAudio') !== -1) _this2.registerUploadAudio();
      }

      _this2.ueditor.ready(function () {
        _this2.ueditor.addListener('contentChange', function () {
          // 由 componentWillReceiveProps 导致的 contentChange 不需要通知父组件
          if (_this2.isContentChangedByWillReceiveProps) {
            _this2.isContentChangedByWillReceiveProps = false;
          } else {
            _this2.content = _this2.ueditor.getContent();

            if (onChange) {
              onChange(_this2.ueditor.getContent());
            }
          }
        });

        if (_this2.isContentChangedByWillReceiveProps) {
          _this2.isContentChangedByWillReceiveProps = false;

          _this2.ueditor.setContent(_this2.content);
        } else {
          _this2.ueditor.setContent(value);
        }
      });
    });

    _this2.content = ''; // 存储编辑器的实时数据，用于传递给父组件

    _this2.ueditor = null;
    _this2.isContentChangedByWillReceiveProps = false;
    _this2.tempfileInput = null;
    _this2.containerID = 'reactueditor' + new Date().getTime();
    _this2.fileInputID = 'fileinput' + new Date().getTime();
    return _this2;
  }

  _createClass(ReactUeditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var ueditorPath = this.props.ueditorPath;
      this.createScript(ueditorPath + '/ueditor.config.js').then(function () {
        _this3.createScript(ueditorPath + '/ueditor.all.min.js').then(function () {
          _this3.tempfileInput = document.getElementById(_this3.fileInputID);

          _this3.initEditor();
        });
      });
    }
    /**
     * 这里存在两种情况会改变编辑器的内容：
     * 1. 父组件初始化传递的 value。父组件 value 的获取是异步的，因此会触发一次 componentWillReceiveProps，这种情况不需要将更新再通知父组件
     * 2. 用户对编辑器进行编辑
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('value' in nextProps && this.props.value !== nextProps.value) {
        this.isContentChangedByWillReceiveProps = true;
        this.content = nextProps.value;

        if (this.ueditor) {
          this.ueditor.ready(function () {
            _this4.ueditor.setContent(nextProps.value);
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ueditor) {
        this.ueditor.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          videoModalVisible = _this$state.videoModalVisible,
          audioModalVisible = _this$state.audioModalVisible;
      var _this$props = this.props,
          uploadVideo = _this$props.uploadVideo,
          uploadAudio = _this$props.uploadAudio,
          progress = _this$props.progress;
      return _react["default"].createElement("div", null, _react["default"].createElement("script", {
        id: this.containerID,
        name: this.containerID,
        type: "text/plain"
      }), _react["default"].createElement("input", {
        type: "file",
        id: this.fileInputID,
        onChange: this.uploadImage,
        style: {
          visibility: 'hidden'
        },
        accept: "image/*"
      }), _react["default"].createElement(_UploadModal["default"], {
        type: "video",
        title: "\u4E0A\u4F20\u89C6\u9891",
        visible: videoModalVisible,
        closeModal: function closeModal() {
          _this5.closeModal('video');
        },
        insert: this.insert,
        upload: uploadVideo,
        progress: progress
      }), _react["default"].createElement(_UploadModal["default"], {
        type: "audio",
        title: "\u4E0A\u4F20\u97F3\u9891",
        visible: audioModalVisible,
        closeModal: function closeModal() {
          _this5.closeModal('audio');
        },
        insert: this.insert,
        upload: uploadAudio,
        progress: progress
      }));
    }
  }], [{
    key: "insertImage",
    value: function insertImage(imageUrl) {
      if (this.ueditor) {
        this.ueditor.focus();
        this.ueditor.execCommand('inserthtml', '<img src="' + imageUrl + '" />');
      }

      console.warn('该接口即将废弃，请使用返回 promise 方式');
    }
  }]);

  return ReactUeditor;
}(_react["default"].Component);

_defineProperty(ReactUeditor, "propTypes", {
  value: _propTypes["default"].string,
  ueditorPath: _propTypes["default"].string.isRequired,
  plugins: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  uploadImage: _propTypes["default"].func
});

var _default = ReactUeditor;
exports["default"] = _default;