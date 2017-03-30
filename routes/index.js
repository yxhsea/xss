var express = require('express');
var router = express.Router();

var comments = {};//设置缓存

//编码函数
function html_encode(str){
	var s = '';
	if(str.length == 0)return "";
	s = str.replace(/&/g,"&gt;");
	s = s.replace(/</g,"&lt");
	s = s.replace(/>/,"&gt");
	s = s.replace(/\s/g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	s = s.replace(/\n/g,"<br>");
	return s;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  //禁止浏览器拦截
  //res.set('X-XSS-Protection',0);	

  res.render('index', { title: 'Express'});
});

router.get('/comment',function(req,res,next){
	comments.v = req.query.comment;
});

//获取评论
router.get('/getComment',function(req,res,next){
	res.json({
		comment:comments.v
	})
});

module.exports = router;
