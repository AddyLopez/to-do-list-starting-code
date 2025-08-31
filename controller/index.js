const formidable = require("formidable");
const { create, get, remove } = require("../model/todo");

exports.create = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    const { description } = fields;
    // Check to see if the description field exists in the form
    // If description doesn't exist, send error
    if (!fields.description) {
      return res.status(400).json({
        error: "Description is required.",
      });
    }
    // If description exists, add to database using create() function
    try {
      const newTask = await create(description);
      return res.status(201).send({ data: newTask.rows[0] });
    } catch (error) {
      // If description can't be added to database, send error
      return res.status(400).json({
        error,
      });
    }
  });
};
