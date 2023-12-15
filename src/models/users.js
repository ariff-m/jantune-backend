const { dbPool } = require('../config/database');

const getAllIdentification = (userId) => {
  const SQLQuery = 'SELECT * FROM identification WHERE userId=?';
  return dbPool.execute(SQLQuery, [userId]);
}

const getIdentification = (userId, id) => {
  const SQLQuery = 'SELECT * FROM identification WHERE userId=? AND id=?';
  return dbPool.execute(SQLQuery, [userId, id]);
}

const createNewIdentification = (body) => {
  const SQLQuery = `INSERT INTO identification 
    (userId, name, date, time, age, sex, restingBP, cholesterol, fastingBS, maxHR, 
    exerciseAngina, oldpeak, chestPainTypeASY, chestPainTypeATA, chestPainTypeNAP, 
    chestPainTypeTA, restingEcgLVH, restingEcgNormal, restingEcgST, stSlopeDown, 
    stSlopeFlat, stSlopeUp) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    body.userId, body.name, body.date, body.time, body.age, body.sex, body.restingBP,
    body.cholesterol, body.fastingBS, body.maxHR, body.exerciseAngina, body.oldpeak,
    body.chestPainTypeASY, body.chestPainTypeATA, body.chestPainTypeNAP, body.chestPainTypeTA,
    body.restingEcgLVH, body.restingEcgNormal, body.restingEcgST, body.stSlopeDown,
    body.stSlopeFlat, body.stSlopeUp
  ];

  return dbPool.execute(SQLQuery, values);
}


const updateIdentification = (body, userId, id) => {
  const SQLQuery = `UPDATE identification 
                    SET userId=?, name=?, date=?, time=?, 
                    age=?, sex=?, restingBP=?, 
                    cholesterol=?, fastingBS=?, maxHR=?,
                    exerciseAngina=?, oldpeak=?, chestPainTypeASY=?, 
                    chestPainTypeATA=?, chestPainTypeNAP=?, chestPainTypeTA=?, 
                    restingEcgLVH=?, restingEcgNormal=?, restingEcgST=?, 
                    stSlopeDown=?, stSlopeFlat=?, stSlopeUp=?
                    WHERE userId=? AND id=?`;

  const values = [
    body.userId, body.name, body.date, body.time,
    body.age, body.sex, body.restingBP,
    body.cholesterol, body.fastingBS, body.maxHR,
    body.exerciseAngina, body.oldpeak, body.chestPainTypeASY,
    body.chestPainTypeATA, body.chestPainTypeNAP, body.chestPainTypeTA,
    body.restingEcgLVH, body.restingEcgNormal, body.restingEcgST,
    body.stSlopeDown, body.stSlopeFlat, body.stSlopeUp,
    userId, id
  ];

  return dbPool.execute(SQLQuery, values);
}

const deleteIdentification = (userId, id) => {
  const SQLQuery = 'DELETE FROM identification WHERE userId=? AND id=?';
  return dbPool.execute(SQLQuery, [userId, id]);
}


module.exports = {
  getAllIdentification,
  getIdentification,
  createNewIdentification,
  updateIdentification,
  deleteIdentification,
}