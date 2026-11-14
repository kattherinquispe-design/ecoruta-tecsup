const path = require('path');
const fs = require('fs');

// Para entornos serverless (como Vercel), asegura que la base de datos persista en /tmp si el sistema de archivos raíz es de solo lectura
const TMP_DB = '/tmp/ecoruta_db.json';
const LOCAL_DB = path.join(__dirname, '..', 'data', 'db.json');

const { requestHandler } = require('../server');

module.exports = async (req, res) => {
  return requestHandler(req, res);
};
