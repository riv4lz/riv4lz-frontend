import http from "../http-common";
import {Caster} from "../Stores/casterStore";
import { UploadImageUrlDTO } from "../Stores/imageStore";

class ImageService {
    uploadImage(data: UploadImageUrlDTO) {
        return http.post("/Image/UploadImageUrl", data);
    }

}
export default new ImageService();
