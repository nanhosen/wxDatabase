var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds213338.mlab.com:13338/wxdata';
	}
}