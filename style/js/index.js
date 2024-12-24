new Vue({
el: '#app',
data() {
return {
	logonpic:"style/image/logon.png",nevdata:null,topdata:null,username:null,
	somsg:null,searchResults:null,dialogVisible:true,drawer: false,
}
},methods: {
	main(){
		var that = this;
		axios.get("api/newmain.json").then(function(resp) {
			let data = resp.data;
			let static = data.static;
			if(static=='200') {
				if(data.username){
					that.logonpic = "http://q4.qlogo.cn/g?b=qq&nk="+data.qqnum+"&s=100";
					that.username = data.username;
				}
				that.nevdata = data.nevdata;
				that.topdata = data.topdata;
			}
			else if(static =='400') alert(data.msg);
			
		});
	},
	postso(){
		if (this.somsg == '' || this.somsg==null){
			this.searchResults=[];
			this.$message.error('请输入关键词再搜索哦！');
		}else{
		  const baiduSearchResult = {
		    name: '百度搜索“' + this.somsg + '”',
		    url: 'https://www.baidu.com/s?ie=UTF-8&wd=' + this.somsg,
		    des: '百度搜索'
		  };
		 
		  const bingSearchResult = {
		    name: '必应搜索“' + this.somsg + '”',
		    url: 'https://cn.bing.com/search?q=' + this.somsg,
		    des: '必应Bing'
		  };
		  if (!this.searchResults.some(result => result.name === baiduSearchResult.name)) {
		    this.searchResults.push(baiduSearchResult);
		  }
		  if (!this.searchResults.some(result => result.name === bingSearchResult.name)) {
		    this.searchResults.push(bingSearchResult);
		  }
		}
	},
	sosuper(){
		if (this.somsg !== '' && this.somsg !== null) {
			this.searchResults = [];
		  this.searchResults.push({name: '百度搜索“' + this.somsg + '”',
		    url: 'https://www.baidu.com/s?ie=UTF-8&wd=' + this.somsg,
		    des: '百度搜索' });
		  this.searchResults.push({
		    name: '必应搜索“' + this.somsg + '”',
		    url: 'https://cn.bing.com/search?q=' + this.somsg,
		    des: '必应Bing'});
		  this.searchResults.push({
		    name: 'TOP博客搜索“' + this.somsg + '”',
		    url: 'https://xn--kwrr8v.top/note/so.php?s=2&q=' + this.somsg,
		    des: 'TOP博客'
		  });this.searchResults.push({
		    name: '阿里矢量图搜索“' + this.somsg + '”',
		    url: 'https://www.iconfont.cn/search/index?searchType=icon&q=' + this.somsg,
		    des: '阿里矢量'
		  });this.searchResults.push({
		    name: '清华镜像搜索“' + this.somsg + '”',
		    url: 'https://mirrors.tuna.tsinghua.edu.cn/' + this.somsg,
		    des: '清华镜像'
		  });this.searchResults.push({
		    name: '百度翻译“' + this.somsg + '”',
		    url: 'https://fanyi.baidu.com/mtpe-individual/multimodal?query=' + this.somsg,
		    des: '百度翻译'
		  });this.searchResults.push({
		    name: '抖音搜索“' + this.somsg + '”',
		    url: 'https://www.douyin.com/search/' + this.somsg,
		    des: '抖音'
		  });this.searchResults.push({
		    name: '微信文章搜索“' + this.somsg + '”',
		    url: 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=' + this.somsg,
		    des: '微信'
		  });this.searchResults.push({
		    name: '今日头条搜索“' + this.somsg + '”',
		    url: 'https://so.toutiao.com/search?keyword=' + this.somsg,
		    des: '今日头条'
		  });this.searchResults.push({
		    name: '微博搜索“' + this.somsg + '”',
		    url: 'https://s.weibo.com/weibo?q=' + this.somsg,
		    des: '微博'
		  });this.searchResults.push({
		    name: '小红书搜索“' + this.somsg + '”',
		    url: 'https://www.xiaohongshu.com/search_result?keyword=' + this.somsg,
		    des: '小红书'
		  });this.searchResults.push({
		    name: 'CSDN博客搜索“' + this.somsg + '”',
		    url: 'https://so.csdn.net/so/search?t=blog&q=' + this.somsg,
		    des: 'CSDN博客'
		  });this.searchResults.push({
		    name: 'Gitee开源搜索“' + this.somsg + '”',
		    url: 'https://so.gitee.com/?q=' + this.somsg,
		    des: 'Gitee'
		  });this.searchResults.push({
		    name: '知乎文章搜索“' + this.somsg + '”',
		    url: 'https://www.zhihu.com/search?type=content&q=' + this.somsg,
		    des: '知乎'
		  });this.searchResults.push({
		    name: '闲鱼二手搜索“' + this.somsg + '”',
		    url: 'https://www.goofish.com/search?spm=a21ybx.home.searchInput.0&q=' + this.somsg,
		    des: '闲鱼'
		  });this.searchResults.push({
		    name: '快递查询“' + this.somsg + '”',
		    url: 'https://m.kuaidi100.com/result.jsp?nu=' + this.somsg,
		    des: '快递100'
		  });this.searchResults.push({
		    name: 'IP域名查询“' + this.somsg + '”',
		    url: 'https://zh-hans.ipshu.com/ip_c_list/' + this.somsg,
		    des: 'IP域名'
		  });this.searchResults.push({
		    name: '哔哩哔哩搜索“' + this.somsg + '”',
		    url: 'https://search.bilibili.com/all?keyword=' + this.somsg,
		    des: '哔哩哔哩'
		  });this.searchResults.push({
		    name: '阿里云盘资源搜索“' + this.somsg + '”',
		    url: 'https://www.alipansou.com/search?k=' + this.somsg,
		    des: '阿里云盘'
		  });this.searchResults.push({
		    name: '简域云盘文件搜索“' + this.somsg + '”',
		    url: 'https://xn--kwrr8v.top/wp/?kw=' + this.somsg,
		    des: '简域云盘'
		  });this.searchResults.push({
		    name: 'QQ音乐搜索“' + this.somsg + '”',
		    url: 'https://y.qq.com/n/ryqq/search?w=' + this.somsg,
		    des: 'QQ音乐'
		  });
		}
	},
	logon(){
		if(this.username){
			window.location.href="https://xn--kwrr8v.top/login/myinfo/";
		}else{
			this.logonpic="style/image/logon.png";
			window.location.href="https://xn--kwrr8v.top/login.php";
		}
	},
	viewso(){
		if(this.somsg){
			const query = this.somsg.toLowerCase();
			this.searchResults = [];
			
			for (const category in this.nevdata) {
			  for (const item in this.nevdata[category]) {
			    if (item === 'info') continue;
			    const [namePart, url,, des] = this.nevdata[category][item];
			    if (des.toLowerCase().includes(query)) {
			      this.searchResults.push({
			        name: item, 
			        url: url, 
			        des: des 
			      });
			    }else if(item.toLowerCase().includes(query)){
					this.searchResults.push({
					  name: item, 
					  url: url, 
					  des: des 
					});
				}
			  }
			}
			
			for (const get in this.topdata) {
			  for (const item in this.topdata[get]) {
			    if (item.toLowerCase().includes(query)) {
			      const url = this.topdata[get][item];
				  if(item!="info"){
						this.searchResults.push({
						name: item,
						url: typeof url === 'string' ? url : url[0], 
						des: "彪哥.TOP"
					  });  
				  }
			      
			    }
			  }
			}
			if(this.searchResults==null) this.postso();
		}
	},
	tip(){
	    const h = this.$createElement;
        this.$notify({
            title: '欢迎访问',
            message: '2025年新版TOP导航站点，速来进行体验吧！手机用户顶部导航可以滑动的哦:)，彪哥.TOP，科技成就未来！'
        });
	}

},mounted:function(){
	this.main();
	this.tip();
},created(){
	
}
})
