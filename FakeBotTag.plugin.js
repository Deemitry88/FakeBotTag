/**
 * @name Fake Bot Tag
 * @author Deemitry88
 * @description Tricks your client into thinking you are a bot
 * @source none
 * @version 0.0.1
*/

module.exports = meta => {
  return {
    start: () => {
	var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().bot = true;
    },
    stop: () => {
	var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().bot = false;
   }
  }
};