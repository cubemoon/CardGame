var utils = {};
utils.invokeCallback = function(cb) {
    console.log(cb);
    if (cb && typeof cb === 'function') {
        console.log('----')
        console.log(cb);
        console.log('----')
        cb.apply(null, Array.prototype.slice.call(arguments, 1));
    } else console.log('---nonono����ѽ');
};

var cb = "";
utils.invokeCallback(cb);


var test = {
    data: {
        name: '11'
    }
};
var aaa = test.data.id || 111;
console.log(aaa);

var Class = require('./game-server/app/util/class')
var A = Class.extend({
    mem: {
        a: 11
    },
    c: function() {
        console.log('helloworld')
    },
    b: function(p) {
        console.log(this.mem)
    }
});

var B = A.extend({
    c: function() {
        console.log('hello111')
        this._super();
    },
    b: function() {
        this.mem.b = 22;
        this._super(this._super);
        this.c();
        console.log(this._super)
    }
});

var b = new B;
b.b();
console.log(b.mem);
var aaa = "haha:wwww"
console.log(aaa.split(':')[-1])



console.log(new Date().getTime())


var admin = JSON.parse("{\"admin\":{\"host\":\"localhost\",\"port\":3005,\"username\":\"monitor\",\"password\":\"monitor\"},\"�˵�\":{}}"
)

var aaa = {
	admin:admin,
        root: {
            expanded: true,
            children: [{
                    id: 'systemInfo',
                    text: 'ϵͳ��Ϣ',
                    leaf: true
                }, {
                    id: 'nodeInfo',
                    text: '������Ϣ',
                    leaf: true
                },
                // {id:'romote',text:'romote',leaf:true},
                {
                    id: 'design',
                    text: '���',
                    expanded: false,
                    children: [{
                        id: 'jsoneditor_protocol',
                        text: 'Э��',
                        leaf: true
                    }, {
                        id: 'jsoneditor_cehua',
                        text: '�߻�',
                        leaf: true
                    }, {
                        id: 'jsoneditor_ui',
                        text: '����',
                        leaf: true
                    }]
                }, {
                    id: 'qq',
                    text: '����',
                    expanded: true,
                    children: [{
                        id: 'conRequest',
                        text: '��������',
                        leaf: true
                    }, {
                        id: 'rpcRequest',
                        text: 'Rpc����',
                        leaf: true
                    }, {
                        id: 'forRequest',
                        text: 'ǰ̨����',
                        leaf: true
                    }]
                }, {
                    id: 'onlineUser',
                    text: '�����û�',
                    leaf: true
                }, {
                    id: 'sceneInfo',
                    text: '������Ϣ',
                    leaf: true
                }, {
                    id: 'scripts',
                    text: '�ű�',
                    leaf: true
                }, {
                    id: 'rpcDebug',
                    text: 'RPC����',
                    leaf: true
                }
                /*, {
				id: 'profiler',
				text: 'Profiler',
				leaf: true
			}*/
            ]
        }
		}
var fs = require('fs')
fs.writeFileSync('./test.json', JSON.stringify(aaa));		
