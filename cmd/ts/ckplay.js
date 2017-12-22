 /*
	软件名称：ckplayer
	软件版本：X
	软件作者：http://www.ckplayer.com
	---------------------------------------------------------------------------------------------
	开发说明：
	使用的主要程序语言：javascript(js)及actionscript3.0(as3.0)(as3.0主要用于flashplayer部分的开发，不在该页面呈现)
	功能：播放视频
	特点：兼容HTML5-VIDEO(优先)以及FlashPlayer
	=====================================================================================================================
*/
function ckplayerConfig() {
	return {
		flashvars: {}, //用来补充flashvars里的对象
		languagePath: '', //语言包文件地址
		stylePath: '', //风格包文件地址
		config: {
			fullInteractive: true, //是否开启交互功能
			schedule: 1, //是否启用进度调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
			delay: 30, //延迟加载视频，单位：毫秒
			timeFrequency: 100, //计算当前播放时间和加载量的时间频率，单位：毫秒
			autoLoad: true, //视频是否自动加载
			loadNext: 0, //多段视频预加载的段数，设置成0则全部加载
			definition: true, //是否使用清晰度组件
			smartRemove: true, //是否使用智能清理，使用该功能则在多段时当前播放段之前的段都会被清除出内存，减少对内存的使用
			bufferTime: 200, //缓存区的长度，单位：毫秒,不要小于100
			click: true, //是否支持屏幕单击暂停
			doubleClick: true, //是否支持屏幕双击全屏
			doubleClickInterval: 200, //判断双击的标准，即二次单击间隔的时间差之内判断为是双击，单位：毫秒
			keyDown: {
				space: true, //是否启用空格键切换播放/暂停
				left: true, //是否启用左方向键快退
				right: true, //是否启用右方向键快进
				up: true, //是否支持上方向键增加音量
				down: true //是否支持下方向键减少音量
			},
			timeJump: 10, //快进快退时的秒数
			volumeJump: 0.1, //音量调整的数量，大于0小于1的小数
			timeScheduleAdjust: 1, //是否可调节调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
			previewDefaultLoad: true, //预览图片是否默认加载，优点是鼠标第一次经过进度条即可显示预览图片
			promptSpotTime: false, //提示点文字是否在前面加上对应时间
			buttonMode: {
				player: false, //鼠标在播放器上是否显示可点击形态
				controlBar: false, //鼠标在控制栏上是否显示可点击形态
				timeSchedule: true, //鼠标在时间进度条上是否显示可点击形态
				volumeSchedule: true //鼠标在音量调节栏上是否显示可点击形态
			},
			liveAndVod: { //直播+点播=回播功能
				open: false, //是否开启，开启该功能需要设置flashvars里live=true
				vodTime: 2, //可以回看的整点数
				start: 'start' //回看请求参数
			},
			errorNum: 3, //错误重连次数
			playCorrect: false, //是否需要错误修正，这是针对rtmp的
			timeCorrect: true, //http视频播放时间错误纠正，有些因为视频格式的问题导致视频没有实际播放结束视频文件就返回了stop命令
			m3u8Definition: { //m3u8自动清晰度时按关键字来进行判断
				//tags:['200k','110k','400k','600k','1000k']
			},
			m3u8MaxBufferLength: 30, //m3u8每次缓冲时间，单位：秒数
			timeStamp: '', //一个地址，用来请求当前时间戳，用于播放器内部时间效准
			addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,animate,animateResume,animatePause,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom'
			//需要支持的事件
		},
		menu: { //版权名称支持
			ckkey: '',
			name: '',
			link: '',
			version: '',
			domain: '',
			more: []
		},
		style: { //风格部分内容配置，这里主要配置loading和logo以及广告的部分内容
			loading: {
				file: 'data:image/swf;base64,Q1dTCKUEAAB4nMtgEFJgYOlgYJBgZHARZAACZ6b////bczQAmYwMKW831Fw2+sEotPNL+cF1HnYP2wR4yxiYGP5DAQODgGhTo8kvyfVzV1Zkmqo3f1hXVc/1/NizdXNyslbrv1m2qe6Ma8eKwwbn1G48uilvtKHs4VG1kFMrA5Z6TeVSPR4cFGNqwLyopEFKddHWvyKh9eY/ix/YLHyTc0iI794Dhv+cAkBXMAHd0cbGxgikGByA/P+cfswMDMwMIgz7BaWBfDZGRqAaiUtvnjAyMZwBuUmWAYTFmRQdgEqUgRxWoJKjj499fHxoW6zn0l69cw74lU76d7L+2LF7cyYmextPwK9UXK178rHgbddUk70341e69/3n+28SWc/XqpkctmLAqlQJqnTX6lvrCxsW7l8fcVnnGV5DDyVfSr4sscl42UugrxLwKj22LD/Y/FjHtd1Tk32MF+BXaqcoL3BIeuKTwl4DAmF1jJ2VuWnflkvT0kx2W2L3FYrSvd6mmcsIK7X9Lvf74NM4KcKRdWzp46CPRyvUnd8SjIFD6d/Sv4sH1IQfBXoLe2DBY2BP1seN9fkHPCIuvcEfA3u//37/J+7bhJZjJocJ+OqouEh319HVP7VYgE7tIJwEj1rKJxcS9NXRJ3yf2A963tumijMJSEKV4sgkoDxVAyRZgFlsMhsfIzBzCcpeeAEWYTDmOcAwl42PGSh4jOEjQ8XWq4Wh2ZoSbRDp/zzHEhjmsfGxAqWP1sklbzwasni5YnTKJwWI/Ez7AwwgeXaQfMiigIJjjY+irPPvCvFA9RszQHJ1HyiHszAcNV83+7rerccGIDEA9NRV1Q==',
				align: 'center',
				vAlign: 'middle',
				offsetX: 5,
				offsetY: -40
			},
			logo: {
				file:'data:image/png;base64,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',
				align: 'right',
				vAlign: 'top',
				offsetX: -125,
				offsetY: 10
			},
			advertisement: { //广告相关的配置
				time: 5, //广告默认播放时长以及多个广告时每个广告默认播放时间，单位：秒
				method: 'get', //广告监测地址默认请求方式，get/post
				videoForce: false, //频广告是否强制播放结束
				videoVolume: 0.8, //视频音量
				skipButtonShow: true, //是否显示跳过广告按钮
				linkButtonShow: true, //是否显示广告链接按钮，如果选择显示，只有在提供了广告链接地址时才会显示
				muteButtonShow: true, //是否显示跳过广告按钮
				closeButtonShow: true, //暂停时是否显示关闭广告按钮
				closeOtherButtonShow: true, //其它广告是否需要关闭广告按钮
				frontSkipButtonDelay: 0, //前置广告跳过广告按钮延时显示的时间，单位：秒
				insertSkipButtonDelay: 0, //插入广告跳过广告按钮延时显示的时间，单位：秒
				endSkipButtonDelay: 0, //后置广告跳过广告按钮延时显示的时间，单位：秒
				frontStretched: 2, //前置广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				insertStretched: 2, //插入广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				pauseStretched: 2, //暂停广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				endStretched: 2 //结束广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
			},
			video: { //视频的默认比例
				defaultWidth: 4, //宽度
				defaultHeight: 3 //高度
			}
		}
	};
}!(function() {
	var javascriptPath = '';
	! function() {
		var scriptList = document.scripts,
			thisPath = scriptList[scriptList.length - 1].src;
		javascriptPath = thisPath.substring(0, thisPath.lastIndexOf('/') + 1);
	}();
	var ckplayer = function(obj) {
		if(obj) {
			this.embed(obj);
		}
	};
	ckplayer.prototype = {
		/*
			javascript部分开发所用的注释说明：
			1：初始化-程序调用时即运行的代码部分
			2：定义样式-定义容器（div,p,canvas等）的样式表，即css
			3：监听动作-监听元素节点（单击-click，鼠标进入-mouseover，鼠标离开-mouseout，鼠标移动-mousemove等）事件
			4：监听事件-监听视频的状态（播放，暂停，全屏，音量调节等）事件
			5：共用函数-这类函数在外部也可以使用
			6：全局变量-定义成全局使用的变量
			7：其它相关注释
			全局变量说明：
			在本软件中所使用到的全局变量（变量（类型）包括Boolean，String，Int，Object（包含元素对象和变量对象），Array，Function等）
			下面列出重要的全局变量：
				V:Object：视频对象
				VA:Array：视频列表（包括视频地址，类型，清晰度说明）
				ID:String：视频ID
				CB:Object：控制栏各元素的集合对象
				PD:Object：内部视频容器对象
			---------------------------------------------------------------------------------------------
			程序开始
			下面为需要初始化配置的全局变量
			初始化配置
			config：全局变量/变量类型：Object/功能：定义一些基本配置
		*/
		config: {
			videoClick: true, //是否支持单击播放/暂停动作
			videoDbClick: true, //是否支持双击全屏/退出全屏动作
			errorTime: 100, //延迟判断失败的时间，单位：毫秒
			videoDrawImage: false //是否使用视频drawImage功能，注意，该功能在移动端表现不了
		},
		//全局变量/变量类型：Object/功能：播放器默认配置，在外部传递过来相应配置后，则进行相关替换
		varsConfig: {
			container: '', //视频容器的ID
			variable: 'ckplayer', //播放函数(变量)名称
			volume: 0.8, //默认音量，范围0-1
			poster: '', //封面图片地址
			autoplay: false, //是否自动播放
			loop: false, //是否需要循环播放
			live: false, //是否是直播
			duration: 0, //指定总时间
			seek: 0, //默认需要跳转的秒数
			drag: '', //拖动时支持的前置参数
			front: '', //前一集按钮动作
			next: '', //下一集按钮动作
			loaded: '', //加载播放器后调用的函数
			flashplayer: false, //设置成true则强制使用flashplayer
			html5m3u8: false, //PC平台上是否使用h5播放器播放m3u8
			track: null, //字幕轨道
			cktrack: null, //ck字幕
			preview: null, //预览图片对象
			prompt: null, //提示点功能
			video: null, //视频地址
			config: '', //调用配置函数名称
			type: '', //视频格式
			crossorigin: '', //设置html5视频的crossOrigin属性
			crossdomain: '', //安全策略文件地址
			unescape: false, //默认flashplayer里需要解码
			debug: false //是否开启调试模式
		},
		vars: {},
		//全局变量/变量类型：Object/功能：语言配置
		language: {
			volume: '音量：',
			play: '点击播放',
			pause: '点击暂停',
			full: '点击全屏',
			escFull: '退出全屏',
			mute: '点击静音',
			escMute: '取消静音',
			front: '上一集',
			next: '下一集',
			definition: '点击选择清晰度',
			error: '加载出错'
		},
		//全局变量/变量类型：Array/功能：右键菜单：[菜单标题,类型(link:链接，default:灰色，function：调用函数，javascript:调用js函数),执行内容(包含链接地址，函数名称),[line(间隔线)]]
		contextMenu: [
			['ckplayer', 'link', 'http://www.ckplayer.com'],
			['version:X', 'default'],
			['播放视频', 'function', 'videoPlay', 'line'],
			['暂停视频', 'function', 'videoPause'],
			['播放/暂停', 'function', 'playOrPause']
		],
		//全局变量/变量类型：Array/功能：错误列表
		errorList: [
			['000', 'Object does not exist'],
			['001', 'Variables type is not a object'],
			['002', 'Video object does not exist'],
			['003', 'Video object format error'],
			['004', 'Video object format error'],
			['005', 'Video object format error'],
			['006', '[error] does not exist '],
			['007', 'Ajax error'],
			['008', 'Ajax error'],
			['009', 'Ajax object format error'],
			['010', 'Ajax.status:[error]']
		],
		//全局变量/变量类型：String/功能：定义logo
		logo: '',
		//全局变量/变量类型：Boolean/功能：是否加载了播放器
		loaded: false,
		//全局变量/变量类型：计时器/功能：监听视频加载出错的状态
		timerError: null,
		//全局变量/变量类型：Boolean/功能：是否出错
		error: false,
		//全局变量/变量类型：Array/功能：出错地址的数组
		errorUrl: [],
		//全局变量/变量类型：计时器/功能：监听全屏与非全屏状态
		timerFull: null,
		//全局变量/变量类型：Boolean/功能：是否全屏状态
		full: false,
		//全局变量/变量类型：计时器/功能：监听当前的月/日 时:分:秒
		timerTime: null,
		//全局变量/变量类型：计时器/功能：监听视频加载
		timerBuffer: null,
		//全局变量/变量类型：Boolean/功能：设置进度按钮及进度条是否跟着时间变化，该属性主要用来在按下进度按钮时暂停进度按钮移动和进度条的长度变化
		isTimeButtonMove: true,
		//全局变量/变量类型：Boolean/功能：进度栏是否有效，如果是直播，则不需要监听时间让进度按钮和进度条变化
		isTimeButtonDown: false,
		//全局变量/变量类型：Boolean/功能：用来模拟双击功能的判断
		isClick: false,
		//全局变量/变量类型：计时器/功能：用来模拟双击功能的计时器
		timerClick: null,
		//全局变量/变量类型：计时器/功能：旋转loading
		timerLoading: null,
		//全局变量/变量类型：计时器/功能：监听鼠标在视频上移动显示控制栏
		timerCBar: null,
		//全局变量/变量类型：Int/功能：播放视频时如果该变量的值大于0，则进行跳转后设置该值为0
		needSeek: 0,
		//全局变量/变量类型：Int/功能：当前音量
		volume: 0,
		//全局变量/变量类型：Int/功能：静音时保存临时音量
		volumeTemp: 0,
		//全局变量/变量类型：Number/功能：当前播放时间
		time: 0,
		//全局变量/变量类型：Boolean/功能：定义首次调用
		isFirst: true,
		//全局变量/变量类型：Boolean/功能：是否使用HTML5-VIDEO播放
		html5Video: true,
		//全局变量/变量类型：Object/功能：记录视频容器节点的x,y
		pdCoor: {
			x: 0,
			y: 0
		},
		//全局变量/变量类型：String/功能：判断当前使用的播放器类型，html5video或flashplayer
		playerType: '',
		//全局变量/变量类型：Int/功能：加载进度条的长度
		loadTime: 0,
		//全局变量/body对象
		body: document.body || document.documentElement,
		//全局变量/V/播放器
		V: null,
		//全局变量/保存外部js监听事件数组
		listenerJsArr: [],
		//全局变量/保存控制栏显示元素的总宽度
		buttonLen: 0,
		//全局变量/保存控制栏显示元素的数组
		buttonArr: [],
		//全局变量/保存按钮元素的宽
		buttonWidth: {},
		//全局变量/保存播放器上新增元件的数组
		elementArr: [],
		//全局变量/字幕内容
		track: [],
		//全局变量/字幕索引
		trackIndex: 0,
		//全局变量/当前显示的字幕内容
		nowTrackShow: {
			sn: ''
		},
		//全局变量/保存字幕元件数组
		trackElement: [],
		//全局变量/将视频转换为图片
		timerVCanvas: null,
		//全局变量/animate
		animateArray: [],
		//全局变量/保存animate的元件
		animateElementArray: [],
		//全局变量/保存需要在暂停时停止缓动的数组
		animatePauseArray: [],
		//全局变量/预览图片加载状态/0=没有加载，1=正在加载，2=加载完成
		previewStart: 0,
		//全局变量/预览图片容器
		previewDiv: null,
		//全局变量/预览框
		previewTop: null,
		//全局变量/预览框的宽
		previewWidth: 120,
		//全局变量/预览图片容器缓动函数
		previewTween: null,
		//全局变量/是否是m3u8格式，是的话则可以加载hls.js
		isM3u8: false,
		//全局变量/保存提示点数组
		promptArr: [],
		//全局变量/显示提示点文件的容器
		promptElement: null,
		//配置文件函数
		ckplayerConfig: {},
		//字体
		fontFamily: '"Microsoft YaHei", YaHei, "\5FAE\8F6F\96C5\9ED1", SimHei, "\9ED1\4F53",Arial',
		/*
			主要函数部分开始
			主接口函数：
			调用播放器需初始化该函数
		*/
		embed: function(c) {
			//c:Object：是调用接口传递的属性对象
			if(c == undefined || !c) {
				this.eject(this.errorList[0]);
				return;
			}
			if(typeof(c) != 'object') {
				this.eject(this.errorList[1]);
			}

			this.vars = this.standardization(this.varsConfig, c);
			if(this.vars['config']) {
				this.ckplayerConfig = eval(this.vars['config'] + '()');
			} else {
				this.ckplayerConfig = ckplayerConfig();
			}
			if((!this.supportVideo() && this.vars['flashplayer'] != '') || (this.vars['flashplayer'] && this.uploadFlash()) || !this.isMsie()) {
				this.html5Video = false;
				this.getVideo();
			} else if(this.vars['video']) {
				//判断视频数据类型
				this.analysedVideoUrl(this.vars['video']);
				return this;
			} else {
				this.eject(this.errorList[2]);
			}
		},
		/*
			内部函数
			根据外部传递过来的video开始分析视频地址
		*/
		analysedVideoUrl: function(video) {
			var i = 0,
				y = 0;
			var thisTemp = this;
			//定义全局变量VA:Array：视频列表（包括视频地址，类型，清晰度说明）
			this.VA = [];
			if(typeof(video) == 'string') { //如果是字符形式的则判断后缀进行填充
				if(video.substr(0, 8) != 'website:') {
					this.VA = [
						[video, '', '', 0]
					];
					var fileExt = this.getFileExt(video);
					switch(fileExt) {
						case '.mp4':
							this.VA[0][1] = 'video/mp4';
							break;
						case '.ogg':
							this.VA[0][1] = 'video/ogg';
							break;
						case '.webm':
							this.VA[0][1] = 'video/webm';
							break;
						default:
							break;
					}
					this.getVideo();
				} else {
					if(this.html5Video) {
						var ajaxObj = {
							url: video.substr(8),
							success: function(data) {
								if(data) {
									thisTemp.analysedUrl(data);
								} else {
									thisTemp.eject(thisTemp.errorList[5]);
									this.VA = video;
									thisTemp.getVideo();
								}
							}
						};
						this.ajax(ajaxObj);
					} else {
						this.VA = video;
						this.getVideo();
					}

				}
			} else if(typeof(video) == 'object') { //对象或数组
				if(!this.isUndefined(typeof(video.length))) { //说明是数组
					if(!this.isUndefined(typeof(video[0].length))) { //说明是数组形式的数组
						this.VA = video;
					}
					this.getVideo();
				} else {
					/*
						如果video格式是对象形式，则分二种
						如果video对象里包含type，则直接播放
					*/
					if(!this.isUndefined(video['type'])) {
						this.VA.push([video['file'], video['type'], '', 0]);
						this.getVideo();
					} else {
						this.eject(this.errorList[5]);
					}
				}
			} else {
				this.eject(this.errorList[4]);
			}
		},
		/*
			对请求到的视频地址进行重新分析
		*/
		analysedUrl: function(data) {

			this.vars = this.standardization(this.vars, data);
			if(!this.isUndefined(data['video'])) {
				this.vars['video'] = data['video'];
			}
			this.analysedVideoUrl(this.vars['video']);
		},
		/*
			内部函数
			检查浏览器支持的视频格式，如果是则将支持的视频格式重新分组给播放列表
		*/
		getHtml5Video: function() {

			var va = this.VA;
			var nva = [];
			var mobile = false;
			var video = document.createElement('video');
			var codecs = function(type) {
				var cod = '';
				switch(type) {
					case 'video/mp4':
						cod = 'avc1.4D401E, mp4a.40.2';
						break;
					case 'video/ogg':
						cod = 'theora, vorbis';
						break;
					case 'video/webm':
						cod = 'vp8.0, vorbis';
						break;
					default:
						break;
				}
				return cod;
			};
			var supportType = function(vidType, codType) {
				if(!video.canPlayType) {
					this.html5Video = false;
					return;
				}
				var isSupp = video.canPlayType(vidType + ';codecs="' + codType + '"');
				if(isSupp == '') {
					return false
				}
				return true;

			};

			if(this.vars['flashplayer'] || !this.isMsie()) {
				this.html5Video = false;

				return;
			}
			if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
				mobile = true;
			}
			for(var i = 0; i < va.length; i++) {
				var v = va[i];
				if(v) {
					if(v[1] != '' && !mobile && supportType(v[1], codecs(v[1])) && v[0].substr(0, 4) != 'rtmp') {
						nva.push(v);
					}
					if(this.getFileExt(v[0]) == '.m3u8' && this.vars['html5m3u8']) {
						this.isM3u8 = true;
						nva.push(v);
					}
				}
			}
			if(nva.length > 0) {
				this.VA = nva;
			} else {
				if(!mobile) {
					this.html5Video = false;
				}
			}
		},
		/*
			内部函数
			根据视频地址开始构建播放器
		*/
		getVideo: function() {
			//如果存在字幕则加载
			if(this.V) { //如果播放器已存在，则认为是从newVideo函数发送过来的请求
				this.changeVideo();
				return;
			}
			if(this.vars['cktrack']) {
				this.loadTrack();
			}
			if(this.supportVideo() && !this.vars['flashplayer']) {
				this.getHtml5Video(); //判断浏览器支持的视频格式
			}
			var thisTemp = this;
			var v = this.vars;
			var src = '',
				source = '',
				poster = '',
				loop = '',
				autoplay = '',
				track = '';
			var video = v['video'];
			var i = 0;
			this.CD = this.getByElement(v['container']);
			volume = v['volume'];
			if(!this.CD) {
				this.eject(this.errorList[6], v['container']);
				return false;
			}
			//开始构建播放容器
			var playerID = 'ckplayer' + this.randomString();
			var playerDiv = document.createElement('div');

			playerDiv.className = playerID;
			this.V = undefined;
			this.CD.innerHTML = '';
			this.CD.appendChild(playerDiv);
			this.PD = this.getByElement(playerID); //PD:定义播放器容器对象全局变量
			this.css(this.CD, {
				backgroundColor: '#000000',
				overflow: 'hidden',
				position: 'relative'
			});
			this.css(this.PD, {
				backgroundColor: '#000000',
				width: '100%',
				height: '100%',
				fontFamily: '"Microsoft YaHei", YaHei, "\5FAE\8F6F\96C5\9ED1", SimHei, "\9ED1\4F53",Arial'
			});

			if(this.html5Video) { //如果支持HTML5-VIDEO则默认使用HTML5-VIDEO播放器
				//禁止播放器容器上鼠标选择文本
				this.PD.onselectstart = this.PD.ondrag = function() {
					return false;
				};
				//播放容器构建完成并且设置好样式
				//构建播放器
				if(this.VA.length == 1) {
					src = ' src="' + decodeURIComponent(this.VA[0][0]) + '"';
				} else {
					var videoArr = this.VA.slice(0);
					videoArr = this.arrSort(videoArr);
					for(i = 0; i < videoArr.length; i++) {
						var type = '';
						var va = videoArr[i];
						if(va[1]) {
							type = ' type="' + va[1] + '"';
							if(type == 'video/m3u8') {
								type = '';
							}
						}
						source += '<source src="' + decodeURIComponent(va[0]) + '"' + type + '>';
					}
				}
				//分析视频地址结束
				if(v['autoplay']) {
					autoplay = ' autoplay="autoplay"';
				}
				if(v['poster']) {
					poster = ' poster="' + v['poster'] + '"';
				}
				if(v['loop']) {
					loop = ' loop="loop"';
				}
				if(v['seek'] > 0) {
					this.needSeek = v['seek'];
				}
				if(v['track'] != null && v['cktrack'] == null) {
					var trackArr = v['track'];
					var trackDefault = '';
					var defaultHave = false;
					for(i = 0; i < trackArr.length; i++) {
						var trackObj = trackArr[i];
						if(trackObj['default'] && !defaultHave) {
							trackDefault = ' default';
							defaultHave = true;
						} else {
							trackDefault = '';
						}
						track += '<track kind="' + trackObj['kind'] + '" src="' + trackObj['src'] + '" srclang="' + trackObj['srclang'] + '" label="' + trackObj['label'] + '"' + trackDefault + '>';
					}
				}
				var autoLoad = this.ckplayerConfig['config']['autoLoad'];
				var preload = '';
				if(!autoLoad) {
					preload = ' preload="meta"';
				}
				var vid = this.randomString();
				var html = '';
				if(!this.isM3u8) {
					html = '<video id="' + vid + '"' + src + ' width="100%" height="100%"' + autoplay + poster + loop + preload + ' webkit-playsinline="true">' + source + track + '</video>';
				} else {
					html = '<video id="' + vid + '" width="100%" height="100%"' + poster + loop + preload + ' webkit-playsinline="true">' + track + '</video>';
				}
				this.PD.innerHTML = html;
				this.V = this.getByElement('#' + vid); //V：定义播放器对象全局变量
				if(this.vars['crossorigin']) {
					this.V.crossOrigin = this.vars['crossorigin'];
				}
				try {
					this.V.volume = volume; //定义音量
				} catch(error) {}
				this.css(this.V, {
					'width': '100%',
					height: '100%'
				});
				if(this.isM3u8) {
					var loadJsHandler = function() {
						thisTemp.embedHls(thisTemp.VA[0][0], v['autoplay']);
					};
					this.loadJs(javascriptPath + 'hls/hls.min.js', loadJsHandler);
				}
				this.css(this.V, 'backgroundColor', '#000000');
				//创建一个画布容器
				if(this.config['videoDrawImage']) {
					var canvasID = 'vcanvas' + this.randomString();
					var canvasDiv = document.createElement('div');
					canvasDiv.className = canvasID;
					this.PD.appendChild(canvasDiv);
					this.MD = this.getByElement(canvasID); //定义画布存储容器
					this.css(this.MD, {
						backgroundColor: '#000000',
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'none',
						cursor: 'pointer',
						left: '0px',
						top: '0px',
						zIndex: '10'
					});
					var cvid = 'ccanvas' + this.randomString();
					this.MD.innerHTML = this.newCanvas(cvid, this.PD.offsetWidth, this.PD.offsetHeight);
					this.MDC = this.getByElement(cvid + '-canvas');
					this.MDCX = this.MDC.getContext('2d');
				}
				this.playerType = 'html5video';
				//播放器构建完成并且设置好样式
				//建立播放器的监听函数，包含操作监听及事件监听
				this.addVEvent();
				//根据清晰度的值构建清晰度切换按钮
				this.definition();
				this.playerLoad();
			} else { //如果不支持HTML5-VIDEO则调用flashplayer
				this.embedSWF();
			}
		},
		/*
			内部函数
			发送播放器加载成功的消息
		*/
		playerLoad: function() {
			var thisTemp = this;
			if(this.isFirst) {
				this.isFirst = false;
				window.setTimeout(function() {
					thisTemp.loadedHandler();
				}, 1);
			}
		},
		/*
			内部函数
			建立播放器的监听函数，包含操作监听及事件监听
		*/
		addVEvent: function() {
			var thisTemp = this;
			//监听视频单击事件
			var eventVideoClick = function(event) {
				thisTemp.videoClick();
			};
			this.addListenerInside('click', eventVideoClick);
			this.addListenerInside('click', eventVideoClick, this.MDC);
			//延迟计算加载失败事件
			this.timerErrorFun();
			//监听视频加载到元数据事件
			var eventJudgeIsLive = function(event) {
				thisTemp.sendJS('loadedmetadata');
				thisTemp.sendJS('duration', thisTemp.V.duration);
				thisTemp.judgeIsLive();
			};
			this.addListenerInside('loadedmetadata', eventJudgeIsLive);
			//监听视频播放事件
			var eventPlaying = function(event) {
				thisTemp.playingHandler();
				thisTemp.sendJS('play');
				thisTemp.sendJS('paused', false);
			};
			this.addListenerInside('playing', eventPlaying);
			//监听视频暂停事件
			var eventPause = function(event) {
				thisTemp.pauseHandler();
				thisTemp.sendJS('pause');
				thisTemp.sendJS('paused', true);
			};
			this.addListenerInside('pause', eventPause);
			//监听视频播放时间事件
			var eventTimeupdate = function(event) {
				if(thisTemp.timerLoading != null) {
					thisTemp.loadingStart(false);
				}
				if(thisTemp.time) {
					thisTemp.sendJS('time', thisTemp.time);
				}
			};
			this.addListenerInside('timeupdate', eventTimeupdate);
			//监听视频缓冲事件
			var eventWaiting = function(event) {
				thisTemp.loadingStart(true);
			};
			this.addListenerInside('waiting', eventWaiting);
			//监听视频seek开始事件
			var eventSeeking = function(event) {
				thisTemp.sendJS('seek', 'start');
			};
			this.addListenerInside('seeking', eventSeeking);
			//监听视频seek结束事件
			var eventSeeked = function(event) {
				thisTemp.seekedHandler();
				thisTemp.sendJS('seek', 'ended');
			};
			this.addListenerInside('seeked', eventSeeked);
			//监听视频播放结束事件
			var eventEnded = function(event) {
				thisTemp.endedHandler();
				thisTemp.sendJS('ended');
			};
			this.addListenerInside('ended', eventEnded);
			//监听视频音量
			var eventVolumeChange = function(event) {
				try {
					thisTemp.volumechangeHandler();
					thisTemp.sendJS('volume', thisTemp.volume);
				} catch(event) {}
			};
			this.addListenerInside('volumechange', eventVolumeChange);
			//建立界面
			this.interFace();
		},
		/*
			内部函数
			重置界面元素
		*/
		resetPlayer: function() {
			this.timeTextHandler();
			this.timeProgress(0, 1); //改变时间进度条宽
			this.changeLoad(0);
			this.initPlayPause(); //判断显示播放或暂停按钮
			this.definition(); //构建清晰度按钮
			this.showFrontNext(); //构建上一集下一集按钮
			this.deletePrompt(); //删除提示点
			this.deletePreview(); //删除预览图
			this.trackHide(); //重置字幕
			this.resetTrack();
			this.trackElement = [];
			this.track = [];
		},
		/*
			内部函数
			构建界面元素
		 */
		interFace: function() {
			var thisTemp = this;
			var html = ''; //控制栏内容
			var i = 0;
			var bWidth = 38, //按钮的宽
				bHeight = 38; //按钮的高
			var bBgColor = '#FFFFFF', //按钮元素默认颜色
				bOverColor = '#0782F5'; //按钮元素鼠标经过时的颜色
			var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']); //时间显示框默认显示内容
			var randomS = this.randomString(10); //获取一个随机字符串
			/*
				以下定义界面各元素的ID，统一以ID结束
			*/
			var controlBarBgID = 'controlbgbar' + randomS, //控制栏背景
				controlBarID = 'controlbar' + randomS, //控制栏容器
				timeProgressBgID = 'timeprogressbg' + randomS, //播放进度条背景
				loadProgressID = 'loadprogress' + randomS, //加载进度条
				timeProgressID = 'timeprogress' + randomS, //播放进度条
				timeBOBGID = 'timebobg' + randomS, //播放进度按钮容器，该元素为一个透明覆盖在播放进度条上
				timeBOID = 'timebo' + randomS, //播放进度可拖动按钮外框
				timeBWID = 'timebw' + randomS, //播放进度可拖动按钮内框
				timeTextID = 'timetext' + randomS, //时间文本框
				playID = 'play' + randomS, //播放按钮
				pauseID = 'pause' + randomS, //暂停按钮
				frontID = 'front' + randomS, //前一集按钮
				nextID = 'next' + randomS, //下一集按钮
				fullID = 'full' + randomS, //全屏按钮
				escFullID = 'escfull' + randomS, //退出全屏按钮
				muteID = 'mute' + randomS, //静音按钮
				escMuteID = 'escmute' + randomS, //取消静音按钮				
				volumeID = 'volume' + randomS, //音量调节框容器
				volumeDbgID = 'volumedbg' + randomS, //音量调节框容器背景
				volumeBgID = 'volumebg' + randomS, //音量调节框背景层
				volumeUpID = 'volumeup' + randomS, //音量调节框可变宽度层
				volumeBOID = 'volumebo' + randomS, //音量调节按钮外框
				volumeBWID = 'volumebw' + randomS, //音量调节按钮内框
				definitionID = 'definition' + randomS, //清晰度容器
				definitionPID = 'definitionp' + randomS, //清晰度列表容器
				promptBgID = 'promptbg' + randomS, //提示框背景
				promptID = 'prompt' + randomS, //提示框
				dlineID = 'dline' + randomS, //分隔线共用前缀
				menuID = 'menu' + randomS, //右键容器
				pauseCenterID = 'pausecenter' + randomS, //中间暂停按钮
				loadingID = 'loading' + randomS, //缓冲
				errorTextID = 'errortext' + randomS, //错误文本框
				logoID = 'logo' + randomS; //logo
			//构建一些PD（播放器容器）里使用的元素
			var controlBarBg = document.createElement('div'),
				controlBar = document.createElement('div'),
				timeProgressBg = document.createElement('div'),
				timeBoBg = document.createElement('div'),
				pauseCenter = document.createElement('div'),
				errorText = document.createElement('div'),
				promptBg = document.createElement('div'),
				prompt = document.createElement('div'),
				menuDiv = document.createElement('div'),
				definitionP = document.createElement('div'),
				loading = document.createElement('div'),
				logo = document.createElement('div');

			controlBarBg.className = controlBarBgID;
			controlBar.className = controlBarID;
			timeProgressBg.className = timeProgressBgID;
			timeBoBg.className = timeBOBGID;
			promptBg.className = promptBgID;
			prompt.className = promptID;
			menuDiv.className = menuID;
			definitionP.className = definitionPID;
			pauseCenter.className = pauseCenterID;
			loading.className = loadingID;
			logo.className = logoID;
			errorText.className = errorTextID;

			this.PD.appendChild(controlBarBg);
			this.PD.appendChild(controlBar);
			this.PD.appendChild(timeProgressBg);
			this.PD.appendChild(timeBoBg);
			this.PD.appendChild(promptBg);
			this.PD.appendChild(prompt);
			this.PD.appendChild(definitionP);
			this.PD.appendChild(pauseCenter);

			this.PD.appendChild(loading);
			this.PD.appendChild(errorText);
			this.PD.appendChild(logo);
			this.body.appendChild(menuDiv);
			//构建一些PD（播放器容器）里使用的元素结束

			if(this.vars['live']) { //如果是直播，时间显示文本框里显示当前系统时间
				timeInto = this.getNowDate();
			}
			//构建控制栏的内容
			html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>'; //播放按钮
			html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>'; //暂停按钮
			html += '<div class="' + dlineID + '-la"></div>'; //分隔线
			html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>'; //前一集按钮
			html += '<div class="' + dlineID + '-lb"></div>'; //分隔线
			html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>'; //下一集按钮
			html += '<div class="' + dlineID + '-lc"></div>'; //分隔线

			html += '<div class="' + timeTextID + '">' + timeInto + '</div>'; //时间文本
			html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>'; //全屏按钮
			html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>'; //退出全屏按钮
			html += '<div class="' + dlineID + '-ra"></div>'; //分隔线
			html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>'; //清晰度容器
			html += '<div class="' + dlineID + '-rb"></div>'; //分隔线
			html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>'; //音量调节框,音量调节按钮
			html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>'; //静音按钮
			html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>'; //退出静音按钮
			html += '<div class="' + dlineID + '-rc"></div>'; //分隔线
			this.getByElement(controlBarID).innerHTML = html;
			//构建控制栏内容结束
			//构建进度条内容
			this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
			this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
			//构建进度条内容结束
			this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80); //构建中间暂停按钮
			this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60); //构建中间缓冲时显示的图标
			this.getByElement(errorTextID).innerHTML = this.language['error']; //构建错误时显示的文本框
			if(this.ckplayerConfig['style']['logo']['file']) {
				var logoFile = this.ckplayerConfig['style']['logo']['file'];
				if(logoFile.substr(0, 15) == 'data:image/png;' || logoFile.substr(0, 15) == 'data:image/jpg;' || logoFile.substr(0, 15) == 'data:image/jpeg;') {
					this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'; //构建logo
				}
			} else {
				this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''; //构建logo
			}
			//CB:Object：全局变量，将一些全局需要用到的元素统一放在CB对象里
			var pd = this.PD;
			this.CB = {
				controlBarBg: this.getByElement(controlBarBgID, pd),
				controlBar: this.getByElement(controlBarID, pd),
				promptBg: this.getByElement(promptBgID, pd),
				prompt: this.getByElement(promptID, pd),
				timeProgressBg: this.getByElement(timeProgressBgID, pd),
				loadProgress: this.getByElement(loadProgressID, pd),
				timeProgress: this.getByElement(timeProgressID, pd),
				timeBoBg: this.getByElement(timeBOBGID, pd),
				timeButton: this.getByElement(timeBOID, pd),
				timeText: this.getByElement(timeTextID, pd),
				play: this.getByElement(playID, pd),
				front: this.getByElement(frontID, pd),
				next: this.getByElement(nextID, pd),
				pause: this.getByElement(pauseID, pd),
				definition: this.getByElement(definitionID, pd),
				definitionP: this.getByElement(definitionPID, pd),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				full: this.getByElement(fullID, pd),
				escFull: this.getByElement(escFullID, pd),
				mute: this.getByElement(muteID, pd),
				escMute: this.getByElement(escMuteID, pd),
				volume: this.getByElement(volumeID, pd),
				volumeBg: this.getByElement(volumeBgID, pd),
				volumeUp: this.getByElement(volumeUpID, pd),
				volumeBO: this.getByElement(volumeBOID, pd),
				pauseCenter: this.getByElement(pauseCenterID, pd),
				menu: this.getByElement(menuID),
				loading: this.getByElement(loadingID, pd),
				loadingCanvas: this.getByElement(loadingID + '-canvas', pd),
				errorText: this.getByElement(errorTextID, pd),
				logo: this.getByElement(logoID, pd),
				playLine: this.getByElement(dlineID + '-la', pd),
				frontLine: this.getByElement(dlineID + '-lb', pd),
				nextLine: this.getByElement(dlineID + '-lc', pd),
				fullLine: this.getByElement(dlineID + '-ra'),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				muteLine: this.getByElement(dlineID + '-rc', pd)
			};
			this.buttonWidth = {
				play: bWidth,
				full: bWidth,
				front: bWidth,
				next: bWidth,
				mute: bWidth
			};
			//定义界面元素的样式
			//控制栏背景
			this.css(controlBarBgID, {
				width: '100%',
				height: bHeight + 'px',
				backgroundColor: '#000000',
				position: 'absolute',
				bottom: '0px',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				zIndex: '90'
			});
			//控制栏容器
			this.css(controlBarID, {
				width: '100%',
				height: bHeight + 'px',
				position: 'absolute',
				bottom: '0px',
				zIndex: '90'
			});
			//中间暂停按钮
			this.css(pauseCenterID, {
				width: '80px',
				height: '80px',
				borderRadius: '50%',
				position: 'absolute',
				display: 'none',
				cursor: 'pointer',
				zIndex: '100'
			});
			//loading
			this.css(loadingID, {
				width: '60px',
				height: '60px',
				position: 'absolute',
				display: 'none',
				zIndex: '100'
			});
			//出错文本框
			this.css(errorTextID, {
				width: '120px',
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				display: 'none',
				zIndex: '101',
				cursor: 'default',
				zIndex: '100'
			});
			//定义logo文字的样式
			this.css(logoID, {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontFamily: 'Arial',
				fontSize: '28px',
				textAlign: 'center',
				position: 'absolute',
				float: 'left',
				left: '-1000px',
				top: '20px',
				zIndex: '100',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				cursor: 'default'
			});

			this.css(this.CB['loadingCanvas'], {
				transform: 'rotate(0deg)',
				msTransform: 'rotate(0deg)',
				mozTransform: 'rotate(0deg)',
				webkitTransform: 'rotate(0deg)',
				oTransform: 'rotate(0deg)'
			});
			//定义提示语的样式
			this.css([promptBgID, promptID], {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				borderRadius: '5px',
				paddingLeft: '5px',
				paddingRight: '5px',
				bottom: '0px',
				display: 'none',
				zIndex: '95'
			});
			this.css(promptBgID, {
				backgroundColor: '#000000',
				filter: 'alpha(opacity:0.5)',
				opacity: '0.5'
			});
			//时间进度条背景容器
			this.css(timeProgressBgID, {
				width: '100%',
				height: '6px',
				backgroundColor: '#3F3F3F',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '38px',
				zIndex: '88'
			});
			//加载进度和时间进度
			this.css([loadProgressID, timeProgressID], {
				width: '1px',
				height: '6px',
				position: 'absolute',
				bottom: '38px',
				top: '0px',
				zIndex: '91'
			});
			this.css(loadProgressID, 'backgroundColor', '#6F6F6F');
			this.css(timeProgressID, 'backgroundColor', bOverColor);
			//时间进度按钮
			this.css(timeBOBGID, {
				width: '100%',
				height: '14px',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '34px',
				cursor: 'pointer',
				zIndex: '92'
			});
			this.css(timeBOID, {
				width: '14px',
				height: '14px',
				overflow: 'hidden',
				borderRadius: '50%',
				backgroundColor: bBgColor,
				cursor: 'pointer',
				position: 'absolute',
				top: '0px',
				zIndex: '20'
			});
			this.css(timeBWID, {
				width: '8px',
				height: '8px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			this.css(timeTextID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				fontFamily: 'arial',
				fontSize: '16px',
				paddingLeft: '10px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'default'
			});

			//分隔线
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc', dlineID + '-ra', dlineID + '-rb', dlineID + '-rc'], {
				width: '0px',
				height: bHeight + 'px',
				overflow: 'hidden',
				borderLeft: '1px solid #303030',
				borderRight: '1px solid #151515',
				filter: 'alpha(opacity:0.9)',
				opacity: '0.9'
			});
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc'], 'float', 'left');
			this.css([dlineID + '-ra', dlineID + '-rb', dlineID + '-rc'], 'float', 'right');
			this.css([dlineID + '-lb', dlineID + '-lc', dlineID + '-rb'], 'display', 'none');
			//播放/暂停/上一集/下一集按钮
			this.css([playID, pauseID, frontID, nextID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css([frontID, nextID], 'display', 'none');
			//初始化判断播放/暂停按钮隐藏项
			this.initPlayPause();

			//设置静音/取消静音的按钮样式
			this.css([muteID, escMuteID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			if(this.vars['volume'] > 0) {
				this.css(escMuteID, 'display', 'none');
			} else {
				this.css(muteID, 'display', 'none');
			}
			//音量调节框
			this.css([volumeID, volumeDbgID], {
				width: '110px',
				height: bHeight + 'px',
				overflow: 'hidden',
				float: 'right'
			});
			this.css(volumeDbgID, {
				position: 'absolute'
			});
			this.css([volumeBgID, volumeUpID], {
				width: '100px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '5px',
				cursor: 'pointer'
			});
			this.css(volumeBgID, {
				position: 'absolute',
				top: '16px'
			});
			this.css(volumeBgID, 'backgroundColor', '#666666');
			this.css(volumeUpID, 'backgroundColor', bOverColor);
			this.buttonWidth['volume'] = 100;
			//音量调节按钮
			this.css(volumeBOID, {
				width: '12px',
				height: '12px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bBgColor,
				top: '13px',
				left: '0px',
				cursor: 'pointer'
			});
			this.css(volumeBWID, {
				width: '6px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			//清晰度容器
			this.css(definitionID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(definitionPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '95',
				cursor: 'pointer',
				display: 'none'
			});
			//设置全屏/退出全屏按钮样式
			this.css([fullID, escFullID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css(escFullID, 'display', 'none');
			//构建各按钮的形状
			//播放按钮
			var cPlay = this.getByElement(playID + '-canvas').getContext('2d');
			var cPlayFillRect = function() {
				thisTemp.canvasFill(cPlay, [
					[12, 10],
					[29, 19],
					[12, 28]
				]);
			};
			cPlay.fillStyle = bBgColor;
			cPlayFillRect();
			var cPlayOver = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bOverColor;
				cPlayFillRect();
			};
			var cPlayOut = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bBgColor;
				cPlayFillRect();
			};

			this.addListenerInside('mouseover', cPlayOver, this.getByElement(playID + '-canvas'));
			this.addListenerInside('mouseout', cPlayOut, this.getByElement(playID + '-canvas'));
			//暂停按钮
			var cPause = this.getByElement(pauseID + '-canvas').getContext('2d');
			var cPauseFillRect = function() {
				thisTemp.canvasFillRect(cPause, [
					[10, 10, 5, 18],
					[22, 10, 5, 18]
				]);
			};
			cPause.fillStyle = bBgColor;
			cPauseFillRect();
			var cPauseOver = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bOverColor;
				cPauseFillRect();
			};
			var cPauseOut = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bBgColor;
				cPauseFillRect();
			};
			this.addListenerInside('mouseover', cPauseOver, this.getByElement(pauseID + '-canvas'));
			this.addListenerInside('mouseout', cPauseOut, this.getByElement(pauseID + '-canvas'));
			//前一集按钮
			var cFront = this.getByElement(frontID + '-canvas').getContext('2d');
			var cFrontFillRect = function() {
				thisTemp.canvasFill(cFront, [
					[16, 19],
					[30, 10],
					[30, 28]
				]);
				thisTemp.canvasFillRect(cFront, [
					[8, 10, 5, 18]
				]);
			};
			cFront.fillStyle = bBgColor;
			cFrontFillRect();
			var cFrontOver = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bOverColor;
				cFrontFillRect();
			};
			var cFrontOut = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bBgColor;
				cFrontFillRect();
			};

			this.addListenerInside('mouseover', cFrontOver, this.getByElement(frontID + '-canvas'));
			this.addListenerInside('mouseout', cFrontOut, this.getByElement(frontID + '-canvas'));
			//下一集按钮
			var cNext = this.getByElement(nextID + '-canvas').getContext('2d');
			var cNextFillRect = function() {
				thisTemp.canvasFill(cNext, [
					[8, 10],
					[22, 19],
					[8, 28]
				]);
				thisTemp.canvasFillRect(cNext, [
					[25, 10, 5, 18]
				]);
			};
			cNext.fillStyle = bBgColor;
			cNextFillRect();
			var cNextOver = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bOverColor;
				cNextFillRect();
			};
			var cNextOut = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bBgColor;
				cNextFillRect();
			};
			this.addListenerInside('mouseover', cNextOver, this.getByElement(nextID + '-canvas'));
			this.addListenerInside('mouseout', cNextOut, this.getByElement(nextID + '-canvas'));
			//全屏按钮
			var cFull = this.getByElement(fullID + '-canvas').getContext('2d');
			var cFullFillRect = function() {
				thisTemp.canvasFillRect(cFull, [
					[19, 10, 9, 3],
					[25, 13, 3, 6],
					[10, 19, 3, 9],
					[13, 25, 6, 3]
				]);
			};
			cFull.fillStyle = bBgColor;
			cFullFillRect();
			var cFullOver = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bOverColor;
				cFullFillRect();
			};
			var cFullOut = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bBgColor;
				cFullFillRect();
			};
			this.addListenerInside('mouseover', cFullOver, this.getByElement(fullID + '-canvas'));
			this.addListenerInside('mouseout', cFullOut, this.getByElement(fullID + '-canvas'));
			//定义退出全屏按钮样式
			var cEscFull = this.getByElement(escFullID + '-canvas').getContext('2d');
			var cEscFullFillRect = function() {
				thisTemp.canvasFillRect(cEscFull, [
					[20, 9, 3, 9],
					[23, 15, 6, 3],
					[9, 20, 9, 3],
					[15, 23, 3, 6]
				]);
			};
			cEscFull.fillStyle = bBgColor;
			cEscFullFillRect();

			var cEscFullOver = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bOverColor;
				cEscFullFillRect();
			};
			var cEscFullOut = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bBgColor;
				cEscFullFillRect();
			};
			this.addListenerInside('mouseover', cEscFullOver, this.getByElement(escFullID + '-canvas'));
			this.addListenerInside('mouseout', cEscFullOut, this.getByElement(escFullID + '-canvas'));
			//定义全屏按钮的样式
			var cMute = this.getByElement(muteID + '-canvas').getContext('2d');
			var cMuteFillRect = function() {
				thisTemp.canvasFill(cMute, [
					[10, 15],
					[15, 15],
					[21, 10],
					[21, 28],
					[15, 23],
					[10, 23]
				]);
				thisTemp.canvasFillRect(cMute, [
					[23, 15, 2, 8],
					[27, 10, 2, 18]
				]);
			};
			cMute.fillStyle = bBgColor;
			cMuteFillRect();
			var cMuteOver = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bOverColor;
				cMuteFillRect();
			};
			var cMuteOut = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bBgColor;
				cMuteFillRect();
			};
			this.addListenerInside('mouseover', cMuteOver, this.getByElement(muteID + '-canvas'));
			this.addListenerInside('mouseout', cMuteOut, this.getByElement(muteID + '-canvas'));
			//定义退出全屏按钮样式
			var cEscMute = this.getByElement(escMuteID + '-canvas').getContext('2d');
			var cEscMuteFillRect = function() {
				thisTemp.canvasFill(cEscMute, [
					[10, 15],
					[15, 15],
					[21, 10],
					[21, 28],
					[15, 23],
					[10, 23]
				]);
				thisTemp.canvasFill(cEscMute, [
					[23, 13],
					[24, 13],
					[33, 25],
					[32, 25]
				]);
				thisTemp.canvasFill(cEscMute, [
					[32, 13],
					[33, 13],
					[24, 25],
					[23, 25]
				]);
			};
			cEscMute.fillStyle = bBgColor;
			cEscMuteFillRect();
			var cEscMuteOver = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bOverColor;
				cEscMuteFillRect();
			};
			var cEscMuteOut = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bBgColor;
				cEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cEscMuteOver, this.getByElement(escMuteID + '-canvas'));
			this.addListenerInside('mouseout', cEscMuteOut, this.getByElement(escMuteID + '-canvas'));
			//定义loading样式
			var cLoading = this.getByElement(loadingID + '-canvas').getContext('2d');
			var cLoadingFillRect = function() {
				cLoading.save();
				var grad = cLoading.createLinearGradient(0, 0, 60, 60);
				grad.addColorStop(0, bBgColor);
				var grad2 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad2.addColorStop(1, bOverColor);
				cLoading.strokeStyle = grad; //设置描边样式
				cLoading.lineWidth = 8; //设置线宽
				cLoading.beginPath(); //路径开始
				cLoading.arc(30, 30, 25, 0.25 * Math.PI, 2 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad2; //设置描边样式
				cLoading.arc(30, 30, 25, 0, 0.25 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.restore();
			};
			cLoading.fillStyle = bBgColor;
			cLoadingFillRect();
			//定义中间暂停按钮的样式
			var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
			var cPauseCenterFillRect = function() {
				thisTemp.canvasFill(cPauseCenter, [
					[28, 22],
					[59, 38],
					[28, 58]
				]);
				/* 指定几个颜色 */
				cPauseCenter.save();
				cPauseCenter.lineWidth = 5; //设置线宽
				cPauseCenter.beginPath(); //路径开始
				cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cPauseCenter.stroke(); //绘制
				cPauseCenter.closePath(); //路径结束
				cPauseCenter.restore();
			};
			cPauseCenter.fillStyle = bBgColor;
			cPauseCenter.strokeStyle = bBgColor;
			cPauseCenterFillRect();
			var cPauseCenterOver = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bOverColor;
				cPauseCenter.strokeStyle = bOverColor;
				cPauseCenterFillRect();
			};
			var cPauseCenterOut = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bBgColor;
				cPauseCenter.strokeStyle = bBgColor;
				cPauseCenterFillRect();
			};
			this.addListenerInside('mouseover', cPauseCenterOver, this.getByElement(pauseCenterID + '-canvas'));
			this.addListenerInside('mouseout', cPauseCenterOut, this.getByElement(pauseCenterID + '-canvas'));

			//鼠标经过/离开音量调节按钮
			var volumeBOOver = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bBgColor);
			};
			var volumeBOOut = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', volumeBOOver, this.getByElement(volumeBOID));
			this.addListenerInside('mouseout', volumeBOOut, this.getByElement(volumeBOID));
			//鼠标经过/离开进度按钮
			var timeBOOver = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(timeBWID, 'backgroundColor', bBgColor);
			};
			var timeBOOut = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(timeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', timeBOOver, this.getByElement(timeBOID));
			this.addListenerInside('mouseout', timeBOOut, this.getByElement(timeBOID));

			this.addButtonEvent(); //注册按钮及音量调节，进度操作事件
			this.newMenu(); //单独设置右键的样式和事件
			this.controlBarHide(); //单独注册控制栏隐藏事件
			this.keypress(); //单独注册键盘事件
			//初始化音量调节框
			this.changeVolume(this.vars['volume']);
			//初始化判断是否需要显示上一集和下一集按钮
			this.showFrontNext();
			window.setTimeout(function() {
				thisTemp.elementCoordinate(); //调整中间暂停按钮/loading的位置/error的位置
			}, 100);
			this.checkBarWidth();
			var resize = function() {
				thisTemp.elementCoordinate();
				thisTemp.timeUpdateHandler();
				thisTemp.changeLoad();
				thisTemp.checkBarWidth();
				thisTemp.changeElementCoor(); //修改新加元件的坐标
				thisTemp.changePrompt();
			};
			this.addListenerInside('resize', resize, window);
		},
		/*
			内部函数
			创建按钮，使用canvas画布
		*/
		newCanvas: function(id, width, height) {
			return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>';
		},
		/*
			内部函数
			注册按钮，音量调节框，进度操作框事件
		*/
		addButtonEvent: function() {
			var thisTemp = this;
			//定义按钮的单击事件
			var playClick = function(event) {
				thisTemp.videoPlay();
			};
			this.addListenerInside('click', playClick, this.CB['play']);
			this.addListenerInside('click', playClick, this.CB['pauseCenter']);
			var pauseClick = function(event) {
				thisTemp.videoPause();
			};
			this.addListenerInside('click', pauseClick, this.CB['pause']);
			var frontClick = function(event) {
				if(thisTemp.vars['front']) {
					eval(thisTemp.vars['front'] + '()');
				}
			};
			this.addListenerInside('click', frontClick, this.CB['front']);
			var nextClick = function(event) {
				if(thisTemp.vars['next']) {
					eval(thisTemp.vars['next'] + '()');
				}
			};
			this.addListenerInside('click', nextClick, this.CB['next']);
			var muteClick = function(event) {
				thisTemp.videoMute();
			};
			this.addListenerInside('click', muteClick, this.CB['mute']);
			var escMuteClick = function(event) {
				thisTemp.videoEscMute();
			};
			this.addListenerInside('click', escMuteClick, this.CB['escMute']);
			var fullClick = function(event) {
				thisTemp.fullScreen();
			};
			this.addListenerInside('click', fullClick, this.CB['full']);
			var escFullClick = function(event) {
				thisTemp.quitFullScreen();
			};
			this.addListenerInside('click', escFullClick, this.CB['escFull']);
			//定义各个按钮的鼠标经过/离开事件
			var promptHide = function(event) {
				thisTemp.promptShow(false);
			};
			var playOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['play']);
			};
			this.addListenerInside('mouseover', playOver, this.CB['play']);
			this.addListenerInside('mouseout', promptHide, this.CB['play']);
			var pauseOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['pause']);
			};
			this.addListenerInside('mouseover', pauseOver, this.CB['pause']);
			this.addListenerInside('mouseout', promptHide, this.CB['pause']);
			var frontOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['front']);
			};
			this.addListenerInside('mouseover', frontOver, this.CB['front']);
			this.addListenerInside('mouseout', promptHide, this.CB['front']);
			var nextOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['next']);
			};
			this.addListenerInside('mouseover', nextOver, this.CB['next']);
			this.addListenerInside('mouseout', promptHide, this.CB['next']);
			var muteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['mute']);
			};
			this.addListenerInside('mouseover', muteOver, this.CB['mute']);
			this.addListenerInside('mouseout', promptHide, this.CB['mute']);
			var escMuteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escMute']);
			};
			this.addListenerInside('mouseover', escMuteOver, this.CB['escMute']);
			this.addListenerInside('mouseout', promptHide, this.CB['escMute']);
			var fullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['full']);
			};
			this.addListenerInside('mouseover', fullOver, this.CB['full']);
			this.addListenerInside('mouseout', promptHide, this.CB['full']);
			var escFullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escFull']);
			};
			this.addListenerInside('mouseover', escFullOver, this.CB['escFull']);
			this.addListenerInside('mouseout', promptHide, this.CB['escFull']);
			var definitionOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['definition']);
			};
			this.addListenerInside('mouseover', definitionOver, this.CB['definition']);
			this.addListenerInside('mouseout', promptHide, this.CB['definition']);
			//定义音量和进度按钮的滑块事件

			var volumePrompt = function(vol) {
				var volumeBOXY = thisTemp.getCoor(thisTemp.CB['volumeBO']);
				var promptObj = {
					title: thisTemp.language['volume'] + vol + '%',
					x: volumeBOXY['x'] + thisTemp.CB['volumeBO'].offsetWidth * 0.5,
					y: volumeBOXY['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var volumeObj = {
				slider: this.CB['volumeBO'],
				follow: this.CB['volumeUp'],
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				pd: true,
				startFun: function(vol) {},
				monitorFun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, false, false);
					volumePrompt(vol);
				},
				endFun: function(vol) {},
				overFun: function(vol) {
					volumePrompt(vol);
				}
			};
			this.slider(volumeObj);
			var volumeClickObj = {
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				fun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, true, true);
				}
			};
			this.progressClick(volumeClickObj);
			this.timeButtonMouseDown(); //用单击的函数来判断是否需要建立控制栏监听
			//鼠标经过/离开音量调节框时的
			var volumeBgMove = function(event) {
				var volumeBgXY = thisTemp.getCoor(thisTemp.CB['volumeBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventVolume = parseInt((eventX - volumeBgXY['x']) * 100 / thisTemp.CB['volumeBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.language['volume'] + eventVolume + '%',
					x: eventX,
					y: volumeBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
			};
			this.addListenerInside('mousemove', volumeBgMove, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBO']);
			//注册清晰度相关事件
			this.addDefListener();
		},
		/*
			内部函数
			注册单击视频动作
		*/
		videoClick: function() {
			var thisTemp = this;
			var clearTimerClick = function() {
				if(thisTemp.timerClick != null) {
					if(thisTemp.timerClick.runing) {
						thisTemp.timerClick.stop();
					}
					thisTemp.timerClick = null;
				}
			};
			var timerClickFun = function() {
				clearTimerClick();
				thisTemp.isClick = false;
				thisTemp.playOrPause();

			};
			clearTimerClick();
			if(this.isClick) {
				this.isClick = false;
				if(thisTemp.config['videoDbClick']) {
					if(!this.full) {
						thisTemp.fullScreen();
					} else {
						thisTemp.quitFullScreen();
					}
				}

			} else {
				this.isClick = true;
				this.timerClick = new this.timer(300, timerClickFun, 1)
				//this.timerClick.start();
			}

		},
		/*
			内部函数
			注册鼠标经过进度滑块的事件
		*/
		timeButtonMouseDown: function() {
			var thisTemp = this;
			var timePrompt = function(time) {
				if(isNaN(time)) {
					time = 0;
				}
				var timeButtonXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
				var promptObj = {
					title: thisTemp.formatTime(time),
					x: timeButtonXY['x'] - thisTemp.pdCoor['x'] + thisTemp.CB['timeButton'].offsetWidth * 0.5,
					y: timeButtonXY['y'] - thisTemp.pdCoor['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var timeObj = {
				slider: this.CB['timeButton'],
				follow: this.CB['timeProgress'],
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				pd: false,
				startFun: function(time) {
					thisTemp.isTimeButtonMove = false;
				},
				monitorFun: function(time) {},
				endFun: function(time) {
					if(thisTemp.V) {
						if(thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				},
				overFun: function(time) {
					timePrompt(time);
				}
			};
			var timeClickObj = {
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				fun: function(time) {
					if(thisTemp.V) {
						if(thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				}
			};
			var timeBoBgmousemove = function(event) {
				var timeBoBgXY = thisTemp.getCoor(thisTemp.CB['timeBoBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventTime = parseInt((eventX - timeBoBgXY['x']) * thisTemp.V.duration / thisTemp.CB['timeBoBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.formatTime(eventTime),
					x: eventX,
					y: timeBoBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
				var def = false;
				if(!thisTemp.isUndefined(thisTemp.CB['definitionP'])) {
					if(thisTemp.css(thisTemp.CB['definitionP'], 'display') != 'block') {
						def = true;
					}
				}
				if(thisTemp.vars['preview'] != null && def) {
					buttonPromptObj['time'] = eventTime;
					thisTemp.preview(buttonPromptObj);
				}
			};
			var promptHide = function(event) {
				thisTemp.promptShow(false);
				if(thisTemp.previewDiv != null) {
					thisTemp.css([thisTemp.previewDiv, thisTemp.previewTop], 'display', 'none');
				}
			};
			if(!this.vars['live']) { //如果不是直播
				this.isTimeButtonDown = true;
				this.addListenerInside('mousemove', timeBoBgmousemove, this.CB['timeBoBg']);
				this.addListenerInside('mouseout', promptHide, this.CB['timeBoBg']);
			} else {
				this.isTimeButtonDown = false;
				timeObj['removeListenerInside'] = true;
				timeClickObj['removeListenerInside'] = true;
			}
			this.slider(timeObj);
			this.progressClick(timeClickObj);
		},
		/*
			内部函数
			注册调节框上单击事件，包含音量调节框和播放时度调节框
		*/
		progressClick: function(obj) {
			/*
				refer:参考对象
				fun:返回函数
				refer:参考元素，即背景
				grossValue:调用的参考值类型
				pd:
			*/
			//建立参考元素的mouseClick事件，用来做为鼠标在其上按下时触发的状态
			var thisTemp = this;
			var referMouseClick = function(event) {
				var referX = thisTemp.client(event)['x'] - thisTemp.getCoor(obj['refer'])['x'];
				var rWidth = obj['refer'].offsetWidth;
				var grossValue = 0;
				if(obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if(thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				var nowZ = parseInt(referX * grossValue / rWidth);
				if(obj['fun']) {
					obj['fun'](nowZ);
				}
			};
			if(this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('click', referMouseClick, obj['refer']);
			} else {
				this.removeListenerInside('click', referMouseClick, obj['refer']);
			}

		},

		/*
			内部函数
			共用的注册滑块事件
		*/
		slider: function(obj) {
			/*
				obj={
					slider:滑块元素
					follow:跟随滑块的元素
					refer:参考元素，即背景
					grossValue:调用的参考值类型
					startFun:开始调用的元素
					monitorFun:监听函数
					endFun:结束调用的函数
					overFun:鼠标放上去后调用的函数
					pd:是否需要修正
				}
			*/
			var thisTemp = this;
			var clientX = 0,
				criterionWidth = 0,
				sliderLeft = 0,
				referLeft = 0;
			var value = 0;
			var calculation = function() { //根据滑块的left计算百分比
				var sLeft = parseInt(thisTemp.css(obj['slider'], 'left'));
				var rWidth = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				var grossValue = 0;
				if(thisTemp.isUndefined(sLeft) || isNaN(sLeft)) {
					sLeft = 0;
				}
				if(obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if(thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				return parseInt(sLeft * grossValue / rWidth);
			};
			var mDown = function(event) {
				thisTemp.addListenerInside('mousemove', mMove, document);
				thisTemp.addListenerInside('mouseup', mUp, document);
				var referXY = thisTemp.getCoor(obj['refer']);
				var sliderXY = thisTemp.getCoor(obj['slider']);
				clientX = thisTemp.client(event)['x'];
				referLeft = referXY['x'];
				sliderLeft = sliderXY['x'];
				criterionWidth = clientX - sliderLeft;
				if(obj['startFun']) {
					obj['startFun'](calculation());
				}
			};
			var mMove = function(event) {
				clientX = thisTemp.client(event)['x'];
				var newX = clientX - criterionWidth - referLeft;
				if(newX < 0) {
					newX = 0;
				}
				if(newX > obj['refer'].offsetWidth - obj['slider'].offsetWidth) {
					newX = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				}
				thisTemp.css(obj['slider'], 'left', newX + 'px');
				thisTemp.css(obj['follow'], 'width', (newX + obj['slider'].offsetWidth * 0.5) + 'px');
				var nowZ = calculation();
				if(obj['monitorFun']) {
					obj['monitorFun'](nowZ);
				}
			};
			var mUp = function(event) {
				thisTemp.removeListenerInside('mousemove', mMove, document);
				thisTemp.removeListenerInside('mouseup', mUp, document);
				if(obj['endFun']) {
					obj['endFun'](calculation());
				}
			};
			var mOver = function(event) {
				if(obj['overFun']) {
					obj['overFun'](calculation());
				}

			};
			if(this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('mousedown', mDown, obj['slider']);
				this.addListenerInside('mouseover', mOver, obj['slider']);
			} else {
				this.removeListenerInside('mousedown', mDown, obj['slider']);
				this.removeListenerInside('mouseover', mOver, obj['slider']);
			}
		},
		/*
			内部函数
			显示loading
		*/
		loadingStart: function(rot) {
			var thisTemp = this;
			if(this.isUndefined(rot)) {
				rot = true;
			}
			this.css(thisTemp.CB['loading'], 'display', 'none');
			if(this.timerLoading != null) {
				if(this.timerLoading.runing) {
					this.timerLoading.stop();
				}
				this.timerLoading = null;
			}
			var buffer = 0;
			var loadingFun = function() {
				var nowRotate = '0';
				try {
					nowRotate = thisTemp.css(thisTemp.CB['loadingCanvas'], 'transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-ms-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-moz-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-webkit-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-o-transform') || '0';
				} catch(event) {}
				nowRotate = parseInt(nowRotate.replace('rotate(', '').replace('deg);', ''));
				nowRotate += 4;
				if(nowRotate > 360) {
					nowRotate = 0;
				}
				thisTemp.css(thisTemp.CB['loadingCanvas'], {
					transform: 'rotate(' + nowRotate + 'deg)',
					msTransform: 'rotate(' + nowRotate + 'deg)',
					mozTransform: 'rotate(' + nowRotate + 'deg)',
					webkitTransform: 'rotate(' + nowRotate + 'deg)',
					oTransform: 'rotate(' + nowRotate + 'deg)'
				});
				buffer++;
				if(buffer >= 99) {
					buffer = 99;
				}
				thisTemp.sendJS('buffer', buffer);
			};
			if(rot) {
				this.timerLoading = new this.timer(10, loadingFun);
				//this.timerLoading.start();
				this.css(thisTemp.CB['loading'], 'display', 'block');
			} else {
				thisTemp.sendJS('buffer', 100);
			}
		},
		/*
			内部函数
			判断是否需要显示上一集和下一集
		*/
		showFrontNext: function() {
			if(this.vars['front']) {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'block');
			} else {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'none');
			}
			if(this.vars['next']) {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'block');
			} else {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			显示提示语
		*/
		promptShow: function(ele, data) {
			var obj = {};
			if(ele || data) {
				if(!this.isUndefined(data)) {
					obj = data;
				} else {
					var offsetCoor = this.getCoor(ele);
					obj = {
						title: this.getDataset(ele, 'title'),
						x: offsetCoor['x'] + ele.offsetWidth * 0.5,
						y: offsetCoor['y']
					};
				}
				this.CB['prompt'].innerHTML = obj['title'];
				this.css(this.CB['prompt'], 'display', 'block');
				var promoptWidth = this.getStringLen(obj['title']) * 10;
				this.css(this.CB['promptBg'], 'width', promoptWidth + 'px');
				this.css(this.CB['prompt'], 'width', promoptWidth + 'px');
				promoptWidth += 10;
				var x = obj['x'] - (promoptWidth * 0.5);
				var y = this.PD.offsetHeight - obj['y'] + 8;
				if(x < 0) {
					x = 0;
				}
				if(x > this.PD.offsetWidth - promoptWidth) {
					x = this.PD.offsetWidth - promoptWidth;
				}
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'block',
					left: x + 'px',
					bottom: y + 'px'
				});
			} else {
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'none'
				});
			}
		},
		/*
			内部函数
			监听错误
		*/
		timerErrorFun: function() {
			var thisTemp = this;
			var clearIntervalError = function(event) {
				if(thisTemp.timerError != null) {
					if(thisTemp.timerError.runing) {
						thisTemp.timerError.stop();
					}
					thisTemp.timerError = null;
				}
			};
			var errorFun = function(event) {
				clearIntervalError();
				thisTemp.error = true;
				//提取错误播放地址
				thisTemp.errorUrl = thisTemp.getVideoUrl();
				//提取错误播放地址结束
				thisTemp.sendJS('error');
				thisTemp.css(thisTemp.CB['errorText'], 'display', 'block');
				thisTemp.css(thisTemp.CB['pauseCenter'], 'display', 'none');
				thisTemp.css(thisTemp.CB['loading'], 'display', 'none');
				thisTemp.V.removeAttribute('poster');
				thisTemp.resetPlayer();
			};
			var errorListenerFun = function(event) {
				window.setTimeout(function() {
					if(isNaN(thisTemp.V.duration)) {
						errorFun(event);
					}
				}, 500);

			};
			this.addListenerInside('error', errorListenerFun, this.V);
			clearIntervalError();
			var timerErrorFun = function() {
				if(thisTemp.V && parseInt(thisTemp.V.networkState) == 3) {
					errorFun();
				}
			};
			this.timerError = new this.timer(this.config['errorTime'], timerErrorFun);
			//this.timerError.start();
		},
		/*
			内部函数
			构建判断全屏还是非全屏的判断
		*/
		judgeFullScreen: function() {
			var thisTemp = this;
			if(this.timerFull != null) {
				if(this.timerFull.runing) {
					this.timerFull.stop();
				}
				this.timerFull = null;
			}
			var fullFun = function() {
				thisTemp.isFullScreen();
			};
			this.timerFull = new this.timer(20, fullFun);
			//this.timerFull.start();
		},
		/*
			内部函数
			判断是否是全屏
		*/
		isFullScreen: function() {
			var controlbarbgW = this.CB['controlBarBg'].offsetWidth;
			var containerW = this.CD.offsetWidth;
			if(controlbarbgW != containerW && !this.full) {
				this.full = true;
				this.sendJS('full', true);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'none');
				this.css(this.CB['escFull'], 'display', 'block');
				if(this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.PD.appendChild(this.CB['menu']);
			}
			if(controlbarbgW == containerW && this.full) {
				this.full = false;
				this.sendJS('full', false);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'block');
				this.css(this.CB['escFull'], 'display', 'none');
				if(this.timerFull != null) {
					if(this.timerFull.runing) {
						this.timerFull.stop();
					}
					this.timerFull = null;
				}
				if(this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.body.appendChild(this.CB['menu']);
			}
		},
		/*
			内部函数
			构建右键内容及注册相关动作事件
		*/
		newMenu: function() {
			var thisTemp = this;
			var i = 0;
			this.css(this.CB['menu'], {
				backgroundColor: '#FFFFFF',
				padding: '5px',
				position: 'absolute',
				left: '10px',
				top: '20px',
				display: 'none',
				zIndex: '999',
				color: '#A1A9BE',
				boxShadow: '2px 2px 3px #AAAAAA'
			});
			var mArr = this.contextMenu;
			var html = '';
			for(i = 0; i < mArr.length; i++) {
				var me = mArr[i];
				switch(me[1]) {
					case 'default':
						html += '<p>' + me[0] + '</p>';
						break;
					case 'link':
						html += '<p><a href="' + me[2] + '" target="_blank">' + me[0] + '</a></p>';
						break;
					case 'javascript':
						html += '<p><a href="javascript:' + me[2] + '()">' + me[0] + '</a></p>';
						break;
					case 'function':
						html += '<p><a href="javascript:' + this.vars['variable'] + '.' + me[2] + '()">' + me[0] + '</a></p>';
						break;
					default:
						break;
				}
			}
			this.CB['menu'].innerHTML = html;
			var pArr = this.CB['menu'].childNodes;
			for(i = 0; i < pArr.length; i++) {
				this.css(pArr[i], {
					height: '30px',
					lineHeight: '30px',
					margin: '0px',
					fontFamily: this.fontFamily,
					fontSize: '12px',
					paddingLeft: '10px',
					paddingRight: '30px'
				});
				if(mArr[i].length >= 4) {
					if(mArr[i][3] == 'line') {
						this.css(pArr[i], 'borderTop', '1px solid #e9e9e9');
					}
				}
				var aArr = pArr[i].childNodes;
				for(var n = 0; n < aArr.length; n++) {
					if(aArr[n].localName == 'a') {
						this.css(aArr[n], {
							color: '#000000',
							textDecoration: 'none'
						});
					}
				}
			}
			this.PD.oncontextmenu = function(event) {
				var eve = event || window.event;
				var client = thisTemp.client(event);
				if(eve.button == 2) {
					eve.returnvalue = false;
					var x = client['x'] + thisTemp.pdCoor['x'] - 2;
					var y = client['y'] + thisTemp.pdCoor['y'] - 2;
					thisTemp.css(thisTemp.CB['menu'], {
						display: 'block',
						left: x + 'px',
						top: y + 'px'
					});
					return false;
				}
				return true;
			};
			var setTimeOutPClose = function() {
				if(setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			var setTimeOutP = null;
			var mouseOut = function(event) {
				setTimeOutPClose();
				setTimeOutP = window.setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['menu'], 'display', 'none');
				}, 500);
			};
			this.addListenerInside('mouseout', mouseOut, thisTemp.CB['menu']);
			var mouseOver = function(event) {
				setTimeOutPClose();
			};
			this.addListenerInside('mouseover', mouseOver, thisTemp.CB['menu']);

		},
		/*
			内部函数
			构建控制栏隐藏事件
		*/
		controlBarHide: function() {
			var thisTemp = this;
			var client = {
					x: 0,
					y: 0
				},
				oldClient = {
					x: 0,
					y: 0
				};
			var cShow = true;
			var oldCoor = [0, 0];
			var controlBarShow = function(show) {
				if(show && !cShow) {
					cShow = true;
					thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['controlBar'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['time