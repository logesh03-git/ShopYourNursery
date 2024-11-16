const reviewSchemaValidator = require("../validators/reviewSchemaValidator");

const reviewValidator = (req, res, next) => {
  const parsed = reviewSchemaValidator.safeParse(req.body);
  if (parsed.success) {
    next();
    return;
  } else {
    res.status(411).json({ errors: parsed?.error?.issues });
    return;
  }
};
module.exports = reviewValidator;
