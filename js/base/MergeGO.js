var MergeGO=function(){function t(t){this.ID=-1,this.BgImg=new Laya.Image,this.wpPng=new Laya.Image,this.BgImg.skin="wp/kuang.png",this.wpPng.skin="wp/wp0.png",this.ID=t,this.BgImg.addChild(this.wpPng),this.BgImg.on(Laya.Event.MOUSE_DOWN,this,this.OnStarDrag),this.BgImg.on(Laya.Event.MOUSE_UP,this,this.OnStarEnd)}return t.prototype.OnStarDrag=function(){console.log("拖动"),this.BgImg.startDrag(this.dragRegion,!1,100),this.BgImg.zOrder=999},t.prototype.OnStarEnd=function(){this.BgImg.zOrder=10},t}();