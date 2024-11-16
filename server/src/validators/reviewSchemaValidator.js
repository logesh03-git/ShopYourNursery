const z = require("zod");

const reviewSchemaValidator = z.object({
  rating: z
    .number({
      required_error: "Rating is required.",
      invalid_type_error: "Rating must be a number.",
    })
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating cannot exceed 5."),
  comment: z
    .string({
      required_error: "Comment is required.",
      invalid_type_error: "Comment must be a string.",
    })
    .min(1, "Comment cannot be empty.")
    .max(1000, "Comment must be at most 1000 characters."),
});

module.exports = reviewSchemaValidator;
