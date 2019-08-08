$("#gesturepwd").GesturePasswd({
	backgroundColor: "#252736",
	color: "#FFFFFF",
	roundRadii: 25,
	pointRadii: 6,
	space: 30,
	width: 240,
	height: 240,
	lineColor: "#00aec7",
	zindex: 100
});
$("#gesturepwd").on("hasPasswd", function(e, passwd) {
	var result;
	if (passwd == "98") {
		result = true;
	} else {
		result = false;
	}
	if (result == true) {
		$("#gesturepwd").trigger("passwdRight");
		setTimeout(function() {
			$(".main").show();
			$("#gesturepwd").hide();
		}, 500);
	} else {
		$("#gesturepwd").trigger("passwdWrong");
	}
});

$(function() {
	var dqwj = [
		'.dqwj',
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563645412044&di=090cd37464ea9d891cf7e7272a78cef4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190108%2F7717eb23360b4766992bec7b7a232d10.jpeg",
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563646553423&di=247c730a4b194509da5751ba5b1ed053&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160330%2F8926cf2c90694dcb81b3a2d88e0cecab.jpg",
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563646553422&di=8ae02b2b5b3971e84c47a9d3a303afda&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike180%252C5%252C5%252C180%252C60%2Fsign%3D84912770213fb80e18dc698557b8444b%2F48540923dd54564e1720cf78b3de9c82d1584f2d.jpg",
		"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4256503242,2511557739&fm=26&gp=0.jpg",
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563646553422&di=d9b263f1833853b8daaa05ce02929536&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FF%2FFB%2FFB20C551586A55B03BDBFA7BE815BD08.jpg",
		'http://p0.qhimg.com/t01af8c88d60ce7de20.jpg?size=800x1200',
		'http://p7.qhimg.com/t0143190465a6461d21.jpg?size=800x1200',
		'http://p9.qhimg.com/t011130f69b5aa8e943.jpg?size=800x1200',
		'http://p9.qhimg.com/t01e16b88a1ce13f0df.jpg?size=800x1200',
		'http://p9.qhimg.com/t017b2bfe660f0819df.jpg?size=800x533',
		'http://p2.qhimg.com/t01c1c2daa36bd57ed8.jpg?size=800x533',
		'http://p6.qhimg.com/t012fa22f243c8d1594.jpg?size=800x1200',
		'http://p6.qhimg.com/t01eb6871d3583f1deb.jpg?size=800x533',
		'http://p0.qhimg.com/t0148266ed72dcb24d9.jpg?size=800x1200',
		'http://p9.qhimg.com/t01512c6026f54a5a74.jpg?size=800x533',
		'http://p5.qhimg.com/t01027b964635dbe128.jpg?size=800x1200',
		'http://p7.qhimg.com/t01c5e3761eac3ccdd7.jpg?size=800x533'
		
	];
	pic(dqwj);
	var mcy = [
		".mcy",
		"http://www.ttpaihang.com/image/album/2014071713373495653.jpg",
		"http://img-w1.xiazaizj.com/w1/d/file/article/toutiao/2016-12-08/40782cc9ff540dd988a1e1ad7864ffb5.jpg",
		"http://i0.hdslb.com/bfs/article/fa3387f6a2d229c00ff731a61fc40a1d4ac52347.jpg",
		"http://hbimg.b0.upaiyun.com/dd3757973326d340fd6771bce1ad2c560124380548486-5tt3bQ_fw658",
		"http://img2.imgtn.bdimg.com/it/u=3476253663,2456540763&fm=26&gp=0.jpg",
		"http://s14.sinaimg.cn/mw690/7d45ea2cge15b997f315d&690",
		"http://ww1.sinaimg.cn/large/005XmN4Xly1fnckjavxogj30xc0m8aeh.jpg",
		"http://img1.imgtn.bdimg.com/it/u=2880655291,1231704378&fm=26&gp=0.jpg",
		"http://www.zhiyinlady.com/d/file/20170513/059d5899757362043bc80fc5fd7ab192.jpg",
		'http://imgsrc.baidu.com/forum/pic/item/37a7154c510fd9f904ecf1b9252dd42a2a34a4c3.jpg',
		'http://p0.qhimg.com/t0156b94c2480edec99.jpg?size=800x1200',
		'http://p4.qhimg.com/t0181e0f73b0358d7e1.jpg?size=800x1200',
		'http://p8.qhimg.com/t01bdafba88824807d8.jpg?size=800x1200',
		'http://p1.qhimg.com/t014252d638908de9cf.jpg?size=800x533',
		'http://p7.qhimg.com/t010de42d50acac0509.jpg?size=800x1067',
		'http://p3.qhimg.com/t01ce8188c0a7e7ab75.jpg?size=800x1200',
		'http://p5.qhimg.com/t01b92dbc0a35ca230f.jpg?size=800x1200',
		'http://p8.qhimg.com/t01740937a6cafabda0.jpg?size=800x533',
		'http://p9.qhimg.com/t01e27491ab312ce6eb.jpg?size=800x1200'
	];
	pic(mcy);
	var qtxz = [
		'.qtxz',
		'http://img01.jszdgyyq.com/20170804/b240b44c2c6138d09871649e4e9c704e.jpg',
		'http://img01.jszdgyyq.com/20170804/e72f6e544776f01bca3160799ada2bca.jpg',
		'http://image002.aijiarenhe.com/20180713/302fb042a158841c2517c3bfaf564158.jpg',
		'http://img01.jszdgyyq.com/20170804/281c76cbe7dab80686f8fcb4553b6959.jpg',
		'http://hbimg.b0.upaiyun.com/49818269a5653cf2cc58e300228c495d9ac5ae3020158-Fo2fF4_fw658',
		'http://img001.yygexing.com/20170607/ee7b2658f67b432b0feed00bf1e9186c.jpg',
		'http://img01.jszdgyyq.com/20170804/23f9a64c19be3c96120d9744732f4b82.jpg'
	];
	pic(qtxz);
	var lhli = [
		'.lhli',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456257&di=24c758feb2a05e4d65ed89a326f8b2cd&imgtype=0&src=http%3A%2F%2Fsaisinav.com%2Fwp-content%2Fuploads%2F201708%2Ftatibana%2Fruri02.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456257&di=3c80dc74995bbeaefb006dcbb0bcb62e&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006SphmGgy1fizw4iby7hj30xc0m977e.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456257&di=a25f7dfd6b417f520117bbbcfc0a1601&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2540422302.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456257&di=7bc5fe3c096c469066f70e529692d360&imgtype=0&src=http%3A%2F%2Fup2.central-sky.com%2F20180724%2F6aa17fc064051dedda02e5a31073e361.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456256&di=e02eb393312bf61cc3850151fc75652d&imgtype=0&src=http%3A%2F%2Fwx3.sinaimg.cn%2Flarge%2F006SphmGgy1fizw4qvzvnj30m90xcdk6.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456255&di=d10ff33767793eb6a13b14059920b473&imgtype=0&src=http%3A%2F%2Fimage002.tlzhao.com%2F20180731%2Fbb13d066ec497fe62513655da9edbab2.jpg',
		'src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555456254&di=db1471da9fc87c572804e5a7e0858d48&imgtype=0&src=http%3A%2F%2Fimgs.fun1shot.com%2F631a052b62130d5a5d0d09dded7a9210.jpg"'
	]
	pic(lhli);
	fdjnz = [
		'.fdjnz',
		'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2368733433,3002343677&fm=26&gp=0.jpg',
		'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564555765078&di=dc11823a268c453bcaeedde9d31042c3&imgtype=0&src=http%3A%2F%2Fwww.mrenbaike.com%2Fuploadfile%2F2017%2F0312%2F20170312052948842.jpg',
		'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0e2442a7d933c895b8b3d796d61373f083020009.jpg',
		'http://img2.ph.126.net/w9TZclAcWu9TzUlFa7aB8Q==/2072781728597410379.jpg'
	];
	pic(fdjnz)
	function pic(name) {
		var htmls = "";
		for (i = 1; i < name.length; i++) {
			htmls += '<li>'
			htmls += '<img src="' + name[i] + '"  width="100%">'
			htmls += '</li>'
		}
		$(name[0]).append(htmls);
	};






});
