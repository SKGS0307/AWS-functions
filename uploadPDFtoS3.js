const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const bucketName = "your-s3-bucket-name";
  const fileName = event.fileName;
  const fileContent = event.fileContent; // Should be Base64 encoded

  if (!fileName || !fileContent) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "fileName and fileContent are required.",
      }),
    };
  }

  const buffer = Buffer.from(fileContent, "base64");
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: buffer,
    ContentType: "application/pdf",
  };

  try {
    await s3.putObject(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File uploaded successfully!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "File upload failed.",
        error: err.message,
      }),
    };
  }
};
