const { dbPool } = require('../config/database');

const getAllIdentification = () => {
  const SQLQuery = 'SELECT * FROM identification';
  return dbPool.execute(SQLQuery);
}

const getIdentification = (id) => {
  const SQLQuery = `SELECT * FROM identification WHERE id=${id}`
  return dbPool.execute(SQLQuery);
}

const createNewIdentification = (body) => {
  const SQLQuery = `INSERT INTO identification (name, date, time, 
                    age, sex, restingBP, 
                    cholesterol, fastingBS, maxHR, 
                    exerciseAngina, oldpeak, chestPainTypeASY, 
                    chestPainTypeATA, chestPainTypeNAP, chestPainTypeTA, 
                    restingEcgLVH, restingEcgNormal, restingEcgST, 
                    stSlopeDown, stSlopeFlat, stSlopeUp) 
                    VALUE ('${body.name}', '${body.date}', '${body.time}', 
                    '${body.age}', '${body.sex}', '${body.restingBP}', 
                    '${body.cholesterol}', '${body.fastingBS}', '${body.maxHR}',
                    '${body.exerciseAngina}', '${body.oldpeak}', '${body.chestPainTypeASY}', 
                    '${body.chestPainTypeATA}', '${body.chestPainTypeNAP}','${body.chestPainTypeTA}', 
                    '${body.restingEcgLVH}', '${body.restingEcgST}', '${body.restingEcgNormal}', 
                    '${body.stSlopeDown}', '${body.stSlopeFlat}', '${body.stSlopeUp}')`
  return dbPool.execute(SQLQuery);
}

const updateIdentification = (body, id) => {
  const SQLQuery = `UPDATE identification 
                    SET name='${body.name}', date='${body.date}', time='${body.time}', 
                    age='${body.age}', sex='${body.sex}', restingBP='${body.restingBP}', 
                    cholesterol='${body.cholesterol}', fastingBS='${body.fastingBS}', maxHR='${body.maxHR}',
                    exerciseAngina='${body.exerciseAngina}', oldpeak='${body.oldpeak}', chestPainTypeASY='${body.chestPainTypeASY}', 
                    chestPainTypeATA='${body.chestPainTypeATA}', chestPainTypeNAP='${body.chestPainTypeNAP}',chestPainTypeTA='${body.chestPainTypeTA}', 
                    restingEcgLVH='${body.restingEcgLVH}', restingEcgNormal='${body.restingEcgNormal}', restingEcgST='${body.restingEcgST}', 
                    stSlopeDown='${body.stSlopeDown}', stSlopeFlat='${body.stSlopeFlat}', stSlopeUp='${body.stSlopeUp}'
                    WHERE id=${id}`
  return dbPool.execute(SQLQuery);
}

const deleteIdentification = (id) => {
  const SQLQuery = `DELETE FROM identification WHERE id=${id}`
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllIdentification,
  getIdentification,
  createNewIdentification,
  updateIdentification,
  deleteIdentification,
}