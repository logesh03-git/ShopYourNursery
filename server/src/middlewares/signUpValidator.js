const signUpSchemaValidator = require("../validators/signUpSchemaValidator");

const signUpValidator = (req, res, next) => {
  const parsed = signUpSchemaValidator.safeParse(req.body);
  if (parsed.success) {
    next();
    return;
  } else {
    res.status(422).json({ errors: parsed?.error?.issues });
    return;
  }
};
module.exports = signUpValidator;
