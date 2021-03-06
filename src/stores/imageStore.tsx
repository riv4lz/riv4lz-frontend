import { makeAutoObservable, observable, action } from "mobx";
import imageService from "../services/imageService";

export interface UploadImageUrlDTO {
    userId: string
    imageUrl: string
    imageType: number
}


export class ImageStore {

    @action
    uploadImage = (data: UploadImageUrlDTO) => {
        imageService.uploadImage(data);
    }

    constructor() {
        makeAutoObservable(this);
    }
}
