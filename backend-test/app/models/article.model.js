module.exports = (mongoose,mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      article_name: String,
      article_content: String
    }
  );

  schema.method("toJSON", function() {
    const { __v,_id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Article = mongoose.model("article", schema);
  return Article;
};