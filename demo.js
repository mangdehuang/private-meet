Function.prototype.before = function(fn){
    var _self = this;
    return function(){
        if(fn.apply(this,arguments) === false){
            return false;
        }
        return _self.apply(_self,arguments);
    }
}

Function.prototype.after = function(fn){
    var _self = this;
    return function(){
        var result = _self.apply(_self,arguments);
        if(result === false ){
            return false;
        }
        fn.apply(this,arguments);
        return result;
    }
}

function test(val){
    console.log(val);
}

function tbefore(val){
    if(isNaN(val)){
        return false;
    }    
    console.log('方法执行前');
}
function tafter(val) {
    if(val <= 10){
        return false;
    }
    console.log('方法执行后');
}

test.before(tbefore).after(tafter)(8);
test.before(tbefore).after(tafter)(11);
test.before(tbefore).after(tafter)('dd');