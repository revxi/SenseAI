const analyze = (req, res, next) => {
  const hour = new Date().getHours();

  req.sense = {
    timeOfDay:
      hour < 6 ? "late night" :
      hour < 12 ? "morning" :
      hour < 18 ? "afternoon" :
      "evening"
  };

  next();
};

export default analyze;
