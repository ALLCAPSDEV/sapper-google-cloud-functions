let server;
const dev = process.env.NODE_ENV !== "production";
if (dev) {
  server = require("./__sapper__/dev/server/server");
} else {
  server = require("./__sapper__/build/server/server");
}
exports.sapper = (req, res) => {
  req.baseUrl = dev ? req.baseUrl : `/${process.env.FUNCTION_TARGET}`;
  server.app(req, res);
};
