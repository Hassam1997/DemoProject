import RNFS from "react-native-fs";
import { S3 } from "aws-sdk";
import { decode } from "base64-arraybuffer";

async function UploadImageOnS3(file, succes, error) {
  try {
    const s3bucket = new S3({
      accessKeyId: "",
      secretAccessKey: "",
      Bucket: "tek-staging-kinekt-backend/images",
      signatureVersion: "v4",
    });
    let contentType = file.type ?? "image/jpeg";
    let contentDeposition = 'inline;filename="' + file.name + '"';
    const base64 = await RNFS.readFile(file.uri, "base64");
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(() => {
      const params = {
        Bucket: "tek-staging-kinekt-backend/media",
        Key: file.name,
        Body: arrayBuffer,
        ContentDisposition: contentDeposition,
        ContentType: contentType,
      };
      s3bucket.upload(params, (err, data) => {
        if (err) {
          error(err);
        }
        succes(data.Location);
      });
    });
  } catch (err) {
    error(err);
  }
}

export default { UploadImageOnS3 };
