module.exports = function (val) {
  
  // Eqeual comparisons
  if (val === true) return true;
  if (val === 'true') return true;
  
  if (val === 0 ) return false;
  if (val === false) return false;
  if (val === 'false') return false;
  
  // Not equal comparisons
  if (val !== 0) return true;
};