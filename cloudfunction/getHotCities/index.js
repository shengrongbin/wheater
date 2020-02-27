const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  env: 'cloud-test',
})
exports.main = async (event, context) => {
  return db.collection('hotCities')
    .get()
}