const ftoc = function(temp) {
  c_temp = (temp - 32)*(5/9)
  c_final = Math.round(c_temp * 10) / 10
  return c_final;
};

const ctof = function(temp) {
  f_temp = (temp * (9/5))+32
  f_final = Math.round(f_temp * 10) / 10
  return f_final;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
