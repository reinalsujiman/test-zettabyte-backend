module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      article_name: String,
      article_content: String
    }
  );

  schema.method("toJSON", function() {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Article = mongoose.model("article", schema);

  return Article;
};