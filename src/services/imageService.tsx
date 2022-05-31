import http from "../http-common";
import { UploadImageUrlDTO } from "../stores/imageStore";

class ImageService {
    uploadImage(data: UploadImageUrlDTO) {
        return http.post("/Image/UploadImageUrl", data);
    }

}
export default new ImageService();
